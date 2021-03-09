import moment from 'moment';
import { SYS_MANAGER, ACC_MANAGER } from '@routes/users/const';
import { cloneDeep, mergeWith } from 'lodash';
declare var PROCESS_ENV_PRODUCTION: boolean;
export function shadowClone(obj) {
    if (Array.isArray(obj)) {
        return obj.slice(0);
    }
    if (typeof obj === 'object') {
        return Object.assign({}, obj);
    }
    return obj;
}

// 转发速率单位处理
export const formatTraffic = bytes => {
    if (bytes === 0) return 0;
    const CARRY = 1024;
    const UNIT = ['', 'K', 'M', 'G', 'T'];
    let magnitudeOrder = Math.floor(Math.log(bytes) / Math.log(CARRY));
    magnitudeOrder = magnitudeOrder > UNIT.length - 1 ? 4 : magnitudeOrder;
    return (bytes / Math.pow(CARRY, magnitudeOrder)).toFixed(2) + UNIT[magnitudeOrder] + 'bps';
};

// 流量相关单位处理
const NEXT_UNIT_MORE_THAN_VALUE = 1024 / 2;
export function formatFlowUnit(size, suffix = '') {
    const unit = ['', 'K', 'M', 'G', 'T'];
    let index = 0;
    while (size >= NEXT_UNIT_MORE_THAN_VALUE) {
        size = size / 1024;
        index++;
    }

    // 保留两位小数
    size = Math.round(size * 100) / 100;

    return `${size} ${unit[index]}${suffix}`;
}

/**
 * 将返回的端口处理为可渲染的数据结构，端口数量大于10的时候换行，每行十个
 * @param data 返回的端口信息
 */
export function updatePortData(data: string[]) {
    let dport = '';
    for (let i = 0; i < data.length; i++) {
        dport += `${data[i]}，`;
        if (i + 1 !== data.length && (i + 1) % 10 === 0) {
            dport += '</br>';
        }
    }
    return dport;
}

export function transNumberUnit(number, unit = 1000) {
    number = Number(number);
    if (typeof number !== 'number' || number < unit) return number;
    if (number >= unit * unit * unit * unit) {
        return (Math.round((number / (unit * unit * unit * unit)) * 100) / 100).toFixed(2) + 'T';
    }
    if (number >= unit * unit * unit) {
        return (Math.round((number / (unit * unit * unit)) * 100) / 100).toFixed(2) + 'G';
    }
    if (number >= unit * unit) {
        return (Math.round((number / (unit * unit)) * 100) / 100).toFixed(2) + 'M';
    }
    if (number >= unit) {
        return (Math.round((number / unit) * 100) / 100).toFixed(2) + 'K';
    }
}

// 时间范围如果满足(结果 小于1分钟, option: {index: [0]} 的话) 返回false
// 时间范围如果满足(结果 大于6个月, option: {index: [2]} 的话) 返回false
// 时间范围如果满足(结果 或者小于1分钟或者大于6个月, option: {index: [0, 2]} 的话) 返回false

// 这个方法调用的时候一定要注意，如果要在该数组中新添加一个元素，一定要加在末尾，因为调用的时候是按照该数组的索引来调用的，如果直接插在了中间，则会弄乱部分页面的限制条件
export const computeTimeRange = (min = null, max = null, option: {}) => {
    const assertConfig = [
        // 如果小于1分钟为true
        {
            assert: (minA, maxA) => {
                return maxA - minA < 60000;
            },
        },
        // 如果小于1个小时为true
        {
            assert: (minB, maxB) => {
                return maxB - minB < 60 * 60000;
            },
        },
        // 如果大于6个月为true
        {
            assert: (minC, maxC) => {
                const computeMax = moment(new Date(minC || null))
                    .add(6, 'months')
                    .toDate()
                    .getTime();
                return maxC > computeMax;
            },
        },
        // 如果大于三个月为true
        {
            assert: (minC, maxC) => {
                const computeMax = moment(new Date(minC || null))
                    .add(3, 'months')
                    .toDate()
                    .getTime();
                return maxC > computeMax;
            },
        },
        // 如果小于10分钟为true
        {
            assert: (minA, maxA) => {
                return maxA - minA < 60000 * 10;
            },
        },
        // 不能小于1天
        {
            assert: (minA, maxA) => {
                return maxA - minA < 60000 * 60 * 24;
            },
        },
        // 不能小于1天
        {
            assert: (minA, maxA) => {
                return maxA - minA > 60000 * 60 * 24;
            },
        },
        // 如果大于7为true
        {
            assert: (minC, maxC) => {
                const computeMax = moment(new Date(minC || null))
                    .add(7, 'days')
                    .toDate()
                    .getTime();
                return maxC > computeMax;
            },
        },
        // v2.0.3版本最新非法外连访问的模态中添加近一个月
        {
            assert: (minC, maxC) => {
                const computeMax = moment(new Date(minC || null))
                    .add(1, 'months')
                    .toDate()
                    .getTime();
                return maxC > computeMax;
            },
        },
    ];
    const config: { index: number[]; compute: string } = {
        index: [0, 2],
        compute: 'day', // 如果type === 'hour' 那么只取时分秒进行对比
    };
    Object.assign(config, option);
    let minTime = new Date(min).getTime();
    let maxTime = new Date(max).getTime();
    if (config.compute === 'hour') {
        const minTem = moment(minTime);
        minTime =
            (moment(minTem).hours() * 3600 + moment(minTem).minutes() * 60 + moment(minTem).seconds()) *
            1000;
        maxTime =
            (moment(maxTime).hours() * 3600 +
                moment(maxTime).minutes() * 60 +
                moment(maxTime).seconds()) *
            1000;
    }
    for (let i = 0; i < config.index.length; i++) {
        const item = assertConfig[config.index[i]];
        if (item.assert(minTime, maxTime)) {
            return false;
        }
    }
    return true;
};

/**
 * 判断是否是有效值
 * 比如 null,undefined,空数组[] 空对象{}  一些带有引号的伪值 'null' 'undefined' 这些都是无效值,返回false
 * 第二个参数为true的话，那么0 和 "0"也是无效的
 * return true表示有效, false表示无效
 */
export function isUse(data, isZero) {
    const type = typeof data;
    isZero = isZero || false;
    switch (type) {
        case 'undefined':
            return false;
        case 'object':
            // 如果是null 空数组[] 空{} 返回false
            const objType = Object.prototype.toString.call(data);
            // 更具发生的频次,先判断null 然后判断数组,最后判断是空对象
            if (objType === '[object Null]') {
                return false;
            } else if (objType === '[object Array]' && data.length === 0) {
                return false;
            } else if (objType === '[object Object]' && Object.keys(data).length === 0) {
                return false;
            }
            break;
        case 'string':
            data = data.trim();
            if (
                data === '' ||
                data === 'null' ||
                data === 'undefined' ||
                data === 'NaN' ||
                data === 'Infinity' ||
                data === '-Infinity'
            ) {
                return false;
            }
            if (isZero && data === '0') {
                return false;
            }
            break;
        case 'number':
            if (isNaN(data) || data === Infinity || data === -Infinity) {
                return false;
            }
            if (isZero && data === 0) {
                return false;
            }
            break;
        case 'boolean':
            return data;
            break;
    }
    return true;
}

// 树遍历的时候
export function treeTraverse(arr, callback) {
    arr.forEach(item => {
        if (item.children) {
            treeTraverse(item.children, callback);
        }
        callback(item);
    });
    return arr;
}

// 解决轮训的等待的问题
export class Poll {
    baseOption: {
        maxTime: number; // 表示的是最多等待多长时间,一定销毁
        time: number; // 多久轮训一次
    } = {
        maxTime: 60 * 1000,
        time: 100,
    };
    callback: Function = null;
    flag: any;
    maxFlag: any;
    constructor(callback, option = {}) {
        Object.assign(this.baseOption, option);
        this.callback = callback;
        this.flag = setInterval(() => {
            if (this.callback()) {
                this.flag && clearInterval(this.flag);
                this.maxFlag && clearInterval(this.maxFlag);
            }
        }, this.baseOption.time);
        this.maxFlag = setTimeout(() => {
            this.flag && clearInterval(this.flag);
        }, this.baseOption.maxTime);
    }
    destroy() {
        this.flag && clearInterval(this.flag);
        this.maxFlag && clearInterval(this.maxFlag);
    }
}

function newELementLink(option: { href: string; id?: string; onload?: () => void }) {
    // 为了onload生效,所以重新create一个element
    if (document.querySelector('#' + option.id)) {
        document.querySelector('#' + option.id).id = 'theme-remove';
    }
    const html = document.createElement('link');
    html.id = option.id;
    html.type = 'text/css';
    html.href = option.href;
    html.rel = 'stylesheet';
    html.onload = option.onload;
    if (document.querySelector('#theme-remove')) {
        document
            .querySelector('#theme-remove')
            .parentNode.insertBefore(html, document.querySelector('#theme-remove'));
        document.querySelector('#theme-remove').remove();
    }
}

export function themeChange() {
    if (window.location.hash.indexOf('maintain') > -1) {
        document.querySelector('body').classList.remove('t-dark');
        document.querySelector('body').classList.remove('t-blue');
        document.querySelector('body').classList.add('t-white');
        if (PROCESS_ENV_PRODUCTION) {
            (document.querySelector('#theme') as any).href = window.__ThemeMap['white-theme'];
            newELementLink({
                href: window.__ThemeMap['white-theme'],
                id: 'theme',
                onload: function() {
                    setTimeout(() => {
                        preloaderChangeClose();
                    }, 50);
                },
            });
        } else {
            Array.from(document.querySelectorAll('style'))
                .reverse()
                .forEach(item => {
                    if (
                        item &&
                        item.innerText &&
                        (item.innerText.indexOf('dark-theme-flag') > -1 ||
                            item.innerText.indexOf('blue-theme-flag') > -1)
                    ) {
                        item.innerHTML = window['white-theme-flag'];
                    }
                });
            setTimeout(() => {
                preloaderChangeClose();
            }, 10);
        }
    } else {
        // document.querySelector('body').classList.remove('t-white');
        // document.querySelector('body').classList.add('t-dark');
        // if (PROCESS_ENV_PRODUCTION) {
        //   (document.querySelector('#theme') as any).href =
        //     window.__ThemeMap['dark-theme'];
        // } else {
        //   Array.from(document.querySelectorAll('style'))
        //     .reverse()
        //     .forEach(item => {
        //       if (
        //         item &&
        //         item.innerText &&
        //         item.innerText.indexOf('white-theme-flag') > -1
        //       ) {
        //         item.innerHTML = window['dark-theme-flag'];
        //       }
        //     });
        // }
        document.querySelector('body').classList.remove('t-dark');
        document.querySelector('body').classList.remove('t-white');
        document.querySelector('body').classList.add('t-blue');
        if (PROCESS_ENV_PRODUCTION) {
            // (document.querySelector('#theme') as any).href =
            //   window.__ThemeMap['blue-theme'];
            newELementLink({
                href: window.__ThemeMap['blue-theme'],
                id: 'theme',
                onload: () => {
                    setTimeout(() => {
                        preloaderChangeClose();
                    }, 50);
                },
            });
        } else {
            Array.from(document.querySelectorAll('style'))
                .reverse()
                .forEach(item => {
                    if (item && item.innerText && item.innerText.indexOf('white-theme-flag') > -1) {
                        item.innerHTML = window['blue-theme-flag'];
                    }
                });
            setTimeout(() => {
                preloaderChangeClose();
            }, 10);
        }
    }
}

export function preloaderChangeOpen() {
    if (document.querySelector('.preloader-hidden')) {
        document.querySelector('.preloader-hidden').classList.add('preloader');
        document.querySelector('.preloader-hidden').classList.remove('preloader-hidden');
    }
}
export function preloaderChangeClose() {
    if (document.querySelector('.preloader')) {
        document.querySelector('.preloader').classList.add('preloader-hidden');
        document.querySelector('.preloader').classList.remove('preloader');
    }
}

/**
 * 将数组项拼接成字符串并用逗号隔开，且为了让数组项之间间隔明显，在逗号后插入一些空格
 * 例如一直输入ip地址数组为
 * ips: [ '192.168.0.214','192.168.1.214','192.168.2.214','192.168.3.214' ]
 * 在页面中将其全部显示出来：192.168.0.214,  192.168.1.214,  192.168.2.214,  192.168.3.214
 *
 */
export function strGap(arr) {
    if (!Array.isArray(arr)) {
        return arr;
    }
    return arr.join('，\xa0\xa0\xa0');
}

// 解决local域下边判断的的一些逻辑
export function isLocal() {
    return localStorage.getItem('user_domain_id') === 'local';
}

// 这个判断平台是不是多租户的状态
// export function storageService.isTenant() {
//   return sessionStorage.getItem('storageService.isTenant') === '2';
// }
// // 这个判断,多租户并且是sysadmin
// export function storageService.storageService.isTenantSysadmin() {
//   return storageService.isTenant() && storageService.getCurrentInfo().role === 'sysadmin';
// }
// // 这个判断,多租户并且是非sysadmin
// export function storageService.storageService.isTenantNoSysadmin() {
//   return storageService.isTenant() && storageService.getCurrentInfo().role !== 'sysadmin';
// }
// // 这个判断是不是sysadmin的时候。
// export function storageService.isSysadmin() {
//   return storageService.getCurrentInfo().role === 'sysadmin';
// }

// // 获取当前用户的信息
// export function storageService.getCurrentInfo() {
//   return JSON.parse(sessionStorage.getItem('user'));
// }

// 拥有账户操作权限的
// export function storageService.getAccoutPermision() {
//   const tem = storageService.getCurrentInfo();
//   if (tem) {
//     return (
//       tem.role === SYS_MANAGER ||
//       tem.role === ACC_MANAGER ||
//       tem.role === 'accadmin'
//     );
//   } else {
//     return false;
//   }
// }

// kA映射
export function keyAttr(data, option = { key: 'value' }) {
    const tem = Object.entries(option);
    tem.forEach(item => {
        data.forEach(itemA => {
            itemA[item[0]] = itemA[item[1]];
        });
    });
    return data;
}

export function keyAttrReversal(data, option = { key: 'value' }) {
    const result = Object.entries(data);
    return result.reduce((total, item) => {
        const tem = {
            ...item[1],
            [option.key]: item[0],
        };
        total.push(tem);
        return total;
    }, []);
}

// kV映射
export function keyValue(data, key = 'key') {
    const tem = {};
    data.forEach(itemA => {
        tem[itemA[key]] = itemA;
    });
    return tem;
}

export function nullHandle(value) {
    if (
        value === undefined ||
        value === null ||
        value === '' ||
        (Array.isArray(value) && value.length === 0) ||
        (typeof value === 'object' && Object.keys(value).length === 0)
    ) {
        return '--';
    }
    return value;
}

export function strTranslateArray(str) {
    if (Array.isArray(str)) {
        return str;
    }
    if (typeof str === 'string') {
        return str !== '' ? [str] : [];
    }
    return str;
}
export function isNullUndefined(value) {
    return value === null || value === undefined;
}

// 如果是null或者undefined的时候删除该object的这个key
export function deleteNullUndefined(data) {
    if (typeof data !== 'object' || Array.isArray(data)) {
        console.log(new Error('不是Object类型'));
        return data;
    }
    Object.keys(data).forEach(item => {
        if (isNullUndefined(data[item])) {
            delete data[item];
        }
    });
    return data;
}

export function keySort<T>(obj: T): T {
    if (!(obj instanceof Object)) return obj;

    const keys = Object.keys(obj).sort();
    const sortedObj: T = Object();

    for (const key of keys) {
        if (obj[key] instanceof Object) {
            sortedObj[key] = keySort(obj[key]);
        } else {
            sortedObj[key] = obj[key];
        }
    }

    return sortedObj;
}

export function deepCompare(val1: any, val2: any): boolean {
    if (!(val1 instanceof Object) || !(val1 instanceof Object)) return val1 === val2;

    return JSON.stringify(keySort(val1)) === JSON.stringify(keySort(val2));
}

export function deepIndexof<T>(array: T[], value: T) {
    let flag = -1;
    array.every((e, i) => {
        if (deepCompare(e, value)) {
            flag = i;
            return false;
        }
        return true;
    });
    return flag;
}

/**
 * 向数组中插入不重复的项（深复制）
 * @param array
 * @param values
 */
export function noRepeatPush<T>(array: T[], ...values: T[]): void {
    values.forEach(item => {
        if (deepIndexof(array, item) < 0) {
            array.push(cloneDeep(item));
        }
    });
}

export const HOUR_MS = 60 * 60 * 1000;
export const DAY_MS = 24 * HOUR_MS;
export const THREE_DAY_MS = 3 * DAY_MS;
export const WEEK_MS = 7 * DAY_MS;
export const THIRTY_DAY_MS = 30 * DAY_MS;
export const NINTY_DAY_MS = 90 * DAY_MS;
export function duration(time: {
    start: Date;
    end: Date;
}): { time: { start: Date; end: Date }; d: string } {
    const t: { start: Date; end: Date } = cloneDeep(time);
    const range = t.end.getTime() - t.start.getTime();
    t.start.setHours(0, 0, 0, 0);
    if (range <= DAY_MS) {
        t.end = new Date(t.start.getTime() + DAY_MS);
        return { time: t, d: '1h' };
    }
    if (range < THREE_DAY_MS) {
        t.end = new Date(t.start.getTime() + THREE_DAY_MS);
        return { time: t, d: '1h' };
    }
    if (range < WEEK_MS) {
        t.end = new Date(t.start.getTime() + WEEK_MS);
        return { time: t, d: '1h' };
    }
    if (range < THIRTY_DAY_MS) {
        t.end = new Date(t.start.getTime() + THIRTY_DAY_MS);
        return { time: t, d: '8h' };
    }
    if (range <= NINTY_DAY_MS) {
        t.end = new Date(t.start.getTime() + NINTY_DAY_MS);
        return { time: t, d: '1d' };
    }
    t.end.setHours(0, 0, 0, 0);
    return { time: t, d: '1d' };
}

// 输入转obj, 默认的key|value 转 label,text
export function arr2text<T>(
    arr: Array<T>,
    key = 'key',
    func = (i: T) => {
        return i['text'] || i['label'];
    },
): object {
    const obj: any = {};
    arr.forEach(item => {
        const tem = item[key] || item['value'];
        obj[tem] = func(item);
    });
    return obj;
}
export function arr2obj<T>(
    arr: Array<T>,
    key = 'key',
    func = (i: T) => {
        return i;
    },
): object {
    const obj: any = {};
    arr.forEach(item => {
        const tem = item[key] || item['value'];
        obj[tem] = func(item);
    });
    return obj;
}

// 检测用户活跃情况
export function isActive(time, callback) {
    // result 表示当前页面可能是index或者注册页面
    // const result = ['login'].some(function(item) {
    //   return window.location.hash.indexOf(item) > 0;
    // });
    const result = false;
    // 不是注册页面才会去检测用户的活跃状态（鼠标移动状态）
    if (!result) {
        let lastTime = new Date().getTime();
        let currentTime = new Date().getTime();
        //设置超时时间： 10分
        const timeOut = time * 60 * 1000;
        document.addEventListener('mousemove', function() {
            // 更新最后的操作时间
            lastTime = new Date().getTime();
        });

        let quitTime;
        // 超时函数
        const testTime = () => {
            //更新当前时间
            currentTime = new Date().getTime();
            //判断是否超时
            if (currentTime - lastTime > timeOut) {
                // 清除掉定时器
                clearInterval(quitTime);
                callback();
            }
        };

        /* 定时器  间隔1分钟，检测是否长时间未操作页面  */
        if (quitTime) {
            clearInterval(quitTime);
        }
        quitTime = setInterval(testTime, 30000);
    }
}

export function timeTranslate(data) {
    return moment(data).format('YYYY-MM-DD HH:mm:ss');
}
export function timeSendTranslate(data) {
    return moment(data).toISOString();
}

export function initOption(baseOption, _optionA = {}) {
    const tem = cloneDeep(baseOption);
    if (_optionA) {
        mergeWith(tem, _optionA);
    }
    return tem;
}

/*判断是否是内网IP*/

export function isInnerIp(ipadd) {
    // 获取当前页面url
    let curPageUrl = ipadd;

    const reg1 = /(http|ftp|https|www):\/\//g; //去掉前缀
    curPageUrl = curPageUrl.replace(reg1, '');

    const reg2 = /\:+/g; //替换冒号为一点
    curPageUrl = curPageUrl.replace(reg2, '.');

    curPageUrl = curPageUrl.split('.'); //通过一点来划分数组

    const ipAddress = curPageUrl[0] + '.' + curPageUrl[1] + '.' + curPageUrl[2] + '.' + curPageUrl[3];

    let result = false; //默认给定IP不是内网IP
    const ipNum = getIpNum(ipAddress);
    /**
     * 私有IP：A类  10.0.0.0    -10.255.255.255
     *       B类  172.16.0.0  -172.31.255.255
     *       C类  192.168.0.0 -192.168.255.255
     *       D类   127.0.0.0   -127.255.255.255(环回地址)
     **/

    const aBegin = getIpNum('10.0.0.0');
    const aEnd = getIpNum('10.255.255.255');
    const bBegin = getIpNum('172.16.0.0');
    const bEnd = getIpNum('172.31.255.255');
    const cBegin = getIpNum('192.168.0.0');
    const cEnd = getIpNum('192.168.255.255');
    const dBegin = getIpNum('127.0.0.0');
    const dEnd = getIpNum('127.255.255.255');
    result =
        isInner(ipNum, aBegin, aEnd) ||
        isInner(ipNum, bBegin, bEnd) ||
        isInner(ipNum, cBegin, cEnd) ||
        isInner(ipNum, dBegin, dEnd);
    return result;
}
function getIpNum(ipAddress) {
    /*获取IP数*/

    const ip = ipAddress.split('.');
    const a = parseInt(ip[0], 0);
    const b = parseInt(ip[1], 0);
    const c = parseInt(ip[2], 0);
    const d = parseInt(ip[3], 0);
    const ipNum = a * 256 * 256 * 256 + b * 256 * 256 + c * 256 + d;
    return ipNum;
}

function isInner(userIp, begin, end) {
    return userIp >= begin && userIp <= end;
}

// 专门为showItemInterface服务
export function showItemHandle(config, data) {
    config = cloneDeep(config);
    config.forEach(item => {
        item.children.forEach(i => {
            i.labelTranslate = i.labelTranslate || i.label;
            i.valueTranslate = i.valueTranslate || data[i.value];
            if (i.labelTranslateHandle) {
                try {
                    i.labelTranslate = i.labelTranslateHandle(
                        i.value,
                        data[i.value],
                        data,
                        item.children,
                        config,
                    );
                } catch (e) {
                    i.labelTranslate = null;
                }
            }
            if (i.valueTranslateHandle) {
                try {
                    i.valueTranslate = i.valueTranslateHandle(
                        i.value,
                        data[i.value],
                        data,
                        item.children,
                        config,
                    );
                } catch (e) {
                    i.valueTranslate = null;
                }
            }
            if (i.valueTranslate === undefined) {
                i.delete = true;
            }
        });
    });
    config = config.filter(i => !i.delete);
    config.forEach(item => {
        item.children = item.children.filter(i => !i.delete);
    });
    console.log('%c 🍊 config: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', config);
    return config;
}

export function customPercent(value, postfix = '') {
    if (!value) {
        return value;
    } else if (value === 100) {
        return value + postfix;
    } else if (value < 0.01) {
        return '< 0.01' + postfix;
    } else if (value > 99.99) {
        return '> 99.99' + postfix;
    } else {
        return value.toFixed(5).slice(0, -3) + postfix;
    }
}

// 切换时间范围：近一小时，近一天，近一周，近一个月
export function transferTime(val: string) {
    const end = moment().toISOString();
    let start;
    if (val === '1h') {
        start = moment()
            .subtract(1, 'hours')
            .toISOString();
    } else if (val === '1d') {
        start = moment()
            .subtract(1, 'days')
            .toISOString();
    } else if (val === '7d') {
        start = moment()
            .subtract(7, 'days')
            .toISOString();
    } else if (val === '30d') {
        start = moment()
            .subtract(30, 'days')
            .toISOString();
    }
    return { start, end };
}

export function getUnit(number, unit = 1000) {
    number = Number(number);
    if (number >= unit * unit) {
        return 'Gbps';
    }
    if (number >= unit) {
        return 'Mbps';
    }
    return 'Kbps';
}

export function getNumber(number, unit = 1000) {
    number = Number(number);
    if (typeof number !== 'number' || number < unit) return number;
    // if (number >= unit * unit * unit) {
    //   return Math.round((number / (unit * unit * unit)) * 100) / 100;
    // }
    if (number >= unit * unit) {
        return Math.round((number / (unit * unit)) * 100) / 100;
    }
    if (number >= unit) {
        return Math.round((number / unit) * 100) / 100;
    }
}

export function getTraffic(number, unit) {
    number = Number(number);
    switch (unit) {
        case 'Kbps':
            return number;
            break;
        case 'Mbps':
            return number * 1000;
            break;
        case 'Gbps':
            return number * 1000 * 1000;
            break;
        default:
            break;
    }
}

// proxy // 好像对面ngModel没起作用
export function ProxyUpdate(obj, updateHandler) {
    // 为了解决数组好像直接进来不行
    const handler = {
        get(target, key) {
            if (
                Array.isArray(target) &&
                Array.prototype[key] &&
                typeof Array.prototype[key] === 'function'
            ) {
                return Array.prototype[key].bind(target);
            }
            if (typeof target[key] === 'object') {
                return new Proxy(target[key], handler); // 如果是对象 就返回这个对象的代理
            }
            return target[key];
        },
        set(target, key, value) {
            if (key === 'length') return true;
            target[key] = value;
            updateHandler(key, value, target);
            return true;
        },
    };
    return new Proxy(obj, handler);
}

//判断字符 数字是否为空
export function isEmpty(str: string | number) {
    return typeof str === undefined || str === null || str === '';
}
