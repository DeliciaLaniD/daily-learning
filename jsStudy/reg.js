// 正则校验
// 数据库存储告警值:50-90数字
var checkAlertrate = (rule, value, callback) => {
  const reg = /^([5-8][0-9]|[9][0])$/
  if (!reg.test(value)) {
    return callback(new Error('请输入50-90的数字'))
  }
}

// 端口范围0-65535
const reg = /^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/;
const reg = /^[\u4e00-\u9fa5_a-zA-Z0-9]{6,32}$/; // 6-32位数字、字母、下划线或中文

// 监听只能输入数字
// watch: {
//   content: function(val){
//     this.content = val.replace(/\D/g, '')
//   }
// }

let reg = {
  id: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/,
  email: /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
  /* anotheremail:/^([a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+;)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,*/
  mobile: /^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/g,
  tel: /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/,
  phone: /^\d{11}$/g,
  ipv4: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,
  _domain: /^[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,255})+\.?$/,
  domain_port: /^[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,255}(|:([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])))+\.?$/,
  // ipv6: /^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$/g,
  ipv6: /^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$|^:((:[\da-fA-F]{1,4}){1,6}|:)$|^[\da-fA-F]{1,4}:((:[\da-fA-F]{1,4}){1,5}|:)$|^([\da-fA-F]{1,4}:){2}((:[\da-fA-F]{1,4}){1,4}|:)$|^([\da-fA-F]{1,4}:){3}((:[\da-fA-F]{1,4}){1,3}|:)$|^([\da-fA-F]{1,4}:){4}((:[\da-fA-F]{1,4}){1,2}|:)$|^([\da-fA-F]{1,4}:){5}:([\da-fA-F]{1,4})?$|^([\da-fA-F]{1,4}:){6}:$/,
  md5: /^[a-z0-9]{32}$/,
  destination: /^(?:\d{1,3}\.){3}\d{1,3}\/\d{1,2}$/,
  url: /^((https|http):\/\/)?(((([0-9]|1[0-9]{2}|[1-9][0-9]|2[0-4][0-9]|25[0-5])[.]{1}){3}([0-9]|1[0-9]{2}|[1-9][0-9]|2[0-4][0-9]|25[0-5]))|([0-9a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D-]+[.]{1})+[a-zA-Z-]+)(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?){1}/,
  mac: (/^(([0-9A-Fa-f]{2}-){5}|([0-9A-Fa-f]{2}:){5})[0-9A-Fa-f]{2}$/),
  host: /^[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?$/,
  normalword: /^[^-#\$%\^\*'"\\]*$/,
  datatime: /(\d{4}-\d{2}-\d{2}\d{2}:\d{2}:\d{2})|(\d{2}-\d{2}\d{2}:\d{2}:\d{2})|(\d{2}:\d{2}:\d{2})/,
  time: /^\d{2}:\d{2}$/,
  ipv6Content: /\[(.+)\]/,
  hostSpecialword: /^([^~#^$%￥&!*=()+——！@#%……&*`；‘“：《》？/?’<>:。;'"{}【】\$%\^\*'"\\])+$/, // hosts特殊字符
  noSpecialword: /^([^-~#^$@%￥&!*=()+——！@#%……&*`；‘“：《》？/?’<>:.。;'"{}【】 \$%\^\*'"\\])+$/, // 特殊字符
  isIpv4 (input) {
    return !input || this.ipv4.test(input)
  },
  isIpv6 (input) {
    return !input || this.ipv6.test(input)
  },
  isIp (input) {
    return !input || this.ipv4.test(input) || this.ipv6.test(input)
  },
  isDestination (val) {
    return this.destination.test(val)
  },
  detectFileRange (val) {
    return val >= 10 && val <= 500 && val.match(/^[0-9_]{0,3}$/g)
  },
  ipOrDestination (val) {
    return this.isDestination(val) || this.ipv46(val)
  },
  ipv4OrDestination (val) {
    return this.isDestination(val) || this.ipv4.test(val)
  },
  isIpv4NoEmpty (input) {
    return this.ipv4.test(input)
  },
  isIpv6NoEmpty (input) {
    var x = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
    return x.test(input)
  },
  isIpv6BracketNoEmpty (input) {
    const regBracket = input[0] === '[' && input[input.length - 1] === ']'
    const isV6 = this.isIpv6NoEmpty(input.slice(1, -1))
    return regBracket && isV6
  },
  ipv46 (a) {
    var x = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    var y = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
    return x.test(a) || y.test(a) || (a === '')
  },
  ipv46noEmpty (a) {
    var x = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    var y = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
    // var y = /^\s*((([0-9A-Fa-f]{1,4}:){7}(([0-9A-Fa-f]{1,4})|:))|(([0-9A-Fa-f]{1,4}:){6}(:|((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})|(:[0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){4}(:[0-9A-Fa-f]{1,4}){0,1}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){3}(:[0-9A-Fa-f]{1,4}){0,2}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){2}(:[0-9A-Fa-f]{1,4}){0,3}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:)(:[0-9A-Fa-f]{1,4}){0,4}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(:(:[0-9A-Fa-f]{1,4}){0,5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})))(%.+)?\s*$/
    return x.test(a) || y.test(a)
  },
  ipv46BracketNoEmpty (a) {
    return this.isIpv4NoEmpty(a) || this.isIpv6BracketNoEmpty(a)
  },
  isIpV6BracketAndPort (input) {
    const arr = input.split(']:')
    const ip = arr[0].concat(']')
    const port = arr[1]
    return this.isIpv6BracketNoEmpty(ip) && this.port(port)
  },
  isIpV4AndPort (input) {
    const arr = input.split(':')
    return this.isIpv4NoEmpty(arr[0]) && this.port(arr[1]) && arr.length === 2
  },
  ipv46AndPortNoEmpty (input) {
    return input.includes(']:') ? this.isIpV6BracketAndPort(input) : (input.includes(':') ? (this.isIpV4AndPort(input) || this.isIpv6NoEmpty(input)) : this.isIpv4NoEmpty(input))
  },
  name (v) {
    if (!v) return false
    return v.match(/^[a-zA-Z0-9_\u4e00-\u9fa5]{0,32}$/g)
  },
  name2 (v) {
    if (!v) return false
    return v.match(/^[a-zA-Z0-9_]{0,32}$/g)
  },
  dport (v) {
    if (!v) return false
    return v.match(/^\d{0,65535}$/g)
  },
  goalPort (v) {
    if (!v) return false
    return v > 0 && v <= 65535 // v.match(/^[^0]\d{0,65535}$/g)
  },
  priority (v) {
    if (!v) return false
    return v.match(/^\+?[1-9]\d*$/)
  },
  name3 (v) {
    if (!v) return false
    return v.match(/^[a-zA-Z_\u4e00-\u9fa5]{0,127}$/g)
  },
  name32 (v) {
    return v.match(/^[a-zA-Z0-9_\u4e00-\u9fa5]{0,32}$/g)
  },
  name64 (v) {
    if (!v) return false
    return v.match(/^[a-zA-Z0-9_]{0,64}$/g)
  },
  name128 (v) {
    if (!v) return false
    return v.match(/^[a-zA-Z0-9_]{0,128}$/g)
  },
  name2048 (v) {
    return v.match(/^.{0,2048}$/g)
  },
  name632 (v) {
    if (!v) return false
    return v.match(/^[a-zA-Z0-9_-]{6,32}$/g)
  },
  name824 (v) {
    if (!v) return false
    return v.match(/^[a-zA-Z0-9_-]{8,24}$/g)
  },
  name832 (v) {
    if (!v) return false
    return v.match(/^[a-zA-Z0-9_]{8,32}$/g)
  },
  contact (v) {
    if (!v) return false
    let flag = v.match(this.tel) || v.match(this.email)
    return flag
  },
  contact1 (v) {
    if (!v) return true
    let flag = v.match(this.tel) || v.match(this.email)
    return flag
  },
  /*  ipv46 (v) {
   if (!v) return false
   let flag = v.match(this.ipv4) || v.match(this.ipv6)
   return flag
   },*/
  domain (v) {
    return !v || v.match(this._domain)
  },
  blockdoamin (v) {
    if (v === 'localhost') {
      return true
    }
    if (v.length > 255) return false
    return !v || v.match(this.domain_port)
  },
  autopolicydoamin (val) {
    const domain = val.split(',')
    return domain.every(v => {
      if (v === 'localhost') {
        return true
      }
      if (v.length > 255) return false
      return !v || v.match(this.domain_port)
    })
  },
  domainNoEmpty (v) {
    if (!v) return false
    return v.match(this._domain)
  },
  pwd (v) {
    if (!v) return true
    // return v.match(/^[^\u4e00-\u9fa5]{6,32}$/g)
    // return v.match(/^((?=[\x21-\x7e]+)[^\u4e00-\u9fa5]){8,64}$/g)
    return v.match(/^[A-Za-z0-9]{6,32}$/g)
  },
  adminPwdLength (v) {
    let n = v - 0
    if (n >= 8 && n <= 20) {
      return !(n - Math.floor(n) > 0)
    } else {
      return false
    }
  },
  adminTimeout (v) {
    let n = v - 0
    return n >= 5 && n <= 30
  },
  loginCount (v) {
    let n = v - 0
    return n >= 3 && n <= 5
  },
  lockTime (v) {
    let n = v - 0
    return n >= 1 && n <= 30
  },
  passwordChange (v) {
    let n = v - 0
    return n >= 30 && n <= 365
  },
  storeTime (v) {
    let n = v - 0
    const zero = /^0+\d+$/
    return !zero.test(v) && n >= 180 && n <= 5 * 365
  },
  rateRange (v) {
    let n = v - 0
    let zero = /^0+\d+$/
    return !zero.test(v) && n >= 50 && n <= 90
  },
  numRange (v, min, max, allowZero) {
    let n = v - 0
    let testZero = allowZero && v === '0'
    let reg = v.match(/^\+?[1-9][0-9]*$/)
    return n >= min && n <= max && reg || testZero
  },
  num1010000 (v) {
    return this.numRange(v, 10, 10000, true)
  },
  num10200 (v) {
    return this.numRange(v, 10, 200, true)
  },
  num165535 (vs) {
    let allItemMatch = vs.split(',').every((v) => {
      return this.numRange(v, 1, 65535)
    })
    return allItemMatch
  },
  num1100000 (v) {
    return this.numRange(v, 1, 100000, true)
  },
  num13600 (v) {
    return this.numRange(v, 1, 3600, true)
  },
  num50010000 (v) {
    return this.numRange(v, 500, 10000)
  },
  port (v) {
    let port = parseFloat(v)
    let num = /^[0-9]+$/
    let zero = /^0+\d+$/
    return !zero.test(v) && num.test(v) && port >= 0 && port <= 65535
  },
  port2 (v) {
    if (!v) return false
    let vv = v + ''
    let vArr = vv.split(/,|-/g)
    let flag = false
    if (vv.indexOf('-') > -1 && vArr.length > 2) {
      return false
    }
    for (let s = 0; s < vArr.length; s++) {
      let d = vArr[s] - 0
      if (d > 0 && d <= 65535) {
        flag = true
      } else {
        flag = false
        break
      }
    }
    if (vArr[0] > vArr[1]) {
      flag = false
    }
    return flag
  },
  portNoEmpty (v) {
    return !!v && this.port(v)
  },
  portAndEmpty (v) {
    return !v || this.port(v)
  },
  anotheremail (v) {
    let regone = /^([a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+;)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (v) {
      return regone.test(v)
    } else {
      return true
    }
  },
  anothermac (v) {
    let regone = (/^(([0-9A-Fa-f]{2}-){5}|([0-9A-Fa-f]{2}:){5})[0-9A-Fa-f]{2}$/)
    if (v) {
      return regone.test(v)
    } else {
      return true
    }
  },
  isMobile (v) {
    let regone = (/^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/)
    if (v) {
      return regone.test(v)
    } else {
      return true
    }
  },
  numWordLineCh (v) {
    let regone = (/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/)
    if (v) {
      return regone.test(v)
    } else {
      return false
    }
  },
  noBlank (v) {
    let regone = (/^[^ ]+$/)
    if (v) {
      return regone.test(v)
    } else {
      return true
    }
  },
  numWordBiasAddMinus (v) {
    let regone = (/^[a-zA-Z0-9\+/\.\-]+$/)
    if (v) {
      return regone.test(v)
    } else {
      return false
    }
  },
  subnet (v) {
    if (+v >= 0 && +v <= 31) {
      return true
    } else {
      return false
    }
  },
  iocUrl (v) {
    let url = v.slice(1)
    return this.url.test(url) && v[0] === '/'
  },
  siteValidate (v) {
    return this.url.test(v) || v.length === 0
  },
  isIPSegment (v) {
    let ips = v.split('/')
    let ip = ips[0]
    let segment = +ips[1]
    return this.isIpv4NoEmpty(ip) && Number.isInteger(segment) && segment > 0 && segment <= 32
  },
  isIPv6Segment (v) {
    let ips = v.split('/')
    let ip = ips[0]
    let segment = +ips[1]
    return this.isIpv6NoEmpty(ip) && Number.isInteger(segment) && segment > 0 && segment <= 128
  },
  whiteList (v) {
    let ips = v.split('\n')
    return !v || ips.every(ip => this.isIPSegment(ip) || this.isIpv4NoEmpty(ip) || this.isIpv6NoEmpty(ip) || this.isIPv6Segment(ip))
  },
  blockName (val) {
    if (!val) {
      return true
    } else {
      return !this.isSpecialWord(val)
    }
  },
  linkName (val) {
    if (!val) {
      return true
    } else {
      return !this.isSpecialWord(val) && /[^0-9]/.test(val)
    }
  },
  spaceName (val) {
    return this.spaceSpecialword.test(val) || /^[a-zA-Z0-9\u00A0\u0020\u3000]{0,32}$/.test(val)
  },
  isIPv4SegmentAll (v) {
    return String(v).trim() === '0.0.0.0/0'
  },
  isIPv6SegmentAll (v) {
    return String(v).trim() === '::/0'
  },
  blockIp (val) {
    return this.isIpv4NoEmpty(val) || this.isIPSegment(val) || this.isIpv6NoEmpty(val) || this.isIPv6Segment(val) || this.isIPv4SegmentAll(val) || this.isIPv6SegmentAll(val)
    // let ips = val.replace(/；/g, ';').split(';')
    // return ips.every(ip => this.isIpv4NoEmpty(ip) || this.isIPSegment(ip))
  },
  blockTarget (val) {
    if (this.blockIp(val)) {
      return true
    }
    if (this.domainNoEmpty(val)) {
      return true
    }
    const strArr = val.split(':')
    const port = strArr.pop()
    let domain = strArr.join(':')
    console.log(domain)
    let domainIsValid
    if (domain.startsWith('[') && domain.endsWith(']')) { // ipv6
      domain = domain.slice(1, domain.length - 1)
      domainIsValid = this.isIpv6NoEmpty(domain) || this.isIPv6Segment(domain)
    } else {
      domainIsValid = this.isIpv4NoEmpty(domain) || this.isIPSegment(domain)
    }
    let portIsValid = this.port(port)
    return domainIsValid && portIsValid
    // let targets = val.replace(/；/g, ';').split(';')
    // return targets.every(target => this.isIpv4NoEmpty(target) || this.domainNoEmpty(target) || this.isIPSegment(target))
  },
  analysisIP (val) {
    if (!val) return false
    let address = val.split('\n')
    return address.every((item) => {
      return this.ipv46AndPortNoEmpty(item)
    })
  },
  autopolicyIP (val) {
    if (!val) return false
    let address = val.split(',')
    return address.every((item) => {
      return this.ipv46AndPortNoEmpty(item)
    })
  },
  address (val) {
    if (!val) return false
    let address = val.replace(/，/g, ',').replace(/：/g, ':').split(',')
    address = address.map(item => {
      let ipAndPort = item.split(':')
      return {
        ip: ipAndPort[0],
        port: ipAndPort[1]
      }
    })
    let ips = address.map(item => item.ip)
    let ports = address.map(item => item.port)
    return ips.every(this.ipv46noEmpty) && ports.every(this.port)
  },
  addressIpv46 (val) {
    if (!val) return false
    let address = val.replace(/，/g, ',').replace(/：/g, ':').split(',')
    address = address.map(item => {
      if (this.isIpV6BracketAndPort(item)) {
        return {
          ip: item.match(/\[(.+)\]/)[1],
          port: item.slice(item.indexOf(']') + 2)
        }
      } else {
        let ipAndPort = item.split(':')
        return {
          ip: ipAndPort[0],
          port: ipAndPort[1]
        }
      }
    })
    let ips = address.map(item => item.ip)
    let ports = address.map(item => item.port)
    return ips.every(this.ipv46noEmpty) && ports.every(this.port)
  },
  isSpecialWord (val) {
    return !this.noSpecialword.test(val)
  },
  isSpecialPassword (val) {
    if (val.length > 32 || val.length < 6) return false
    return this.noSpecialword.test(val)
  },
  snmpPsw (v) {
    return v.match(/^[a-zA-Z0-9_]*$/g)
  },
  /**
   * 将超过千的数字转换成 千 和 万， 例如 2千， 10万
   * param num 数字
   * param unitNumArr 是分割单位的位数，默认是千位 和 万位
   * param unitArr 是分割单位的单位， 默认是 千 和 万
   * return 转换到K W 保留两位小数 的数值
  **/
  revertThousands: function (num, unitNumArr = [4, 5], unitArr = ['千', '万']) {
    num = +num
    if (!Number(num)) return num
    let result = num
    let numLength = String(num).length
    for (let i = 0; i < unitNumArr.length; i++) {
      let moreThanCurUnit = (unitNumArr[i] <= numLength)
      let lessThanNextUnit = unitNumArr[i + 1] > numLength || i === (unitNumArr.length - 1)
      if (moreThanCurUnit && lessThanNextUnit) {
        let fullNum = num / Math.pow(10, unitNumArr[i] - 1)
        result = fullNum.toFixed(2) + unitArr[i]
        break
      }
    }
    return result
  },
  deviceIP (v) {
    var x = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    var y = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
    return x.test(v) || y.test(v) || v === ''
  }
}

export default reg
