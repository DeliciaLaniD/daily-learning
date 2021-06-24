function check_location(l) {
  if (l == null) {
      return false;
  }
  var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\:(\/([^\/]+)){1,}$/;
  if (reg.test(l))
      return true;
  else
      return false;
}

function check_IP(p) {
  if (p == null) {
      return false;
  }
  var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  if (reg.test(p))
      return true;
  else
      return false;

}

function check_IP6(p) {
  if (p == null) {
      return false;
  }
  var reg = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  if (reg.test(p))
      return true;
  else
      return false;
}

function hasInvalidChat(a) {
  if (a == null) {
      return false;
  }
  var reg = /^[^@\/\'\\\<\>"#$%&\^\*;]+$/;
  if (reg.test(a))
      return false;
  else
      return true;
}

function hasInvalidCwbChar(a) {
  if (a == null || a.length > 64) {
      return false;
  }
  var reg = /^[^\\/:]+$/;
  if (reg.test(a))
      return true;
  else
      return false;
}

function isInt(a) {
  if (/^-?\d+$/.test(a))
      return true;
  else
      return false;
}

function isCheckPositiveInt(a) {
  var reg = /^\+?[1-9][0-9]*$/;
  if (reg.test(a)) {
      return true;
  } else {
      return false;
  }
}

function hasInvalidMd5Char(a) {
  if (a == null || a.length > 32) {
      return false;
  }
  var reg = /^[0-9A-Za-z]{32}$/;
  if (reg.test(a))
      return false;
  else
      return true;
}

function checkChar(a) {
  if (a == null) {
      return false;
  }
  var reg = /^[^ @\/\'\\\<\>\s"#$%&\^\*;]+$/; //不允许空格

  if (reg.test(a))
      return false;
  else
      return true;
}

/**
* 校验端口
* @param {string} port 端口
*/
function testPortFlowcollect(port) {
  var numberPort = Number(port);
  if (/^\d+$/.test(port) && numberPort >= 100 && numberPort <= 65535) {
    return true;
  } else {
    return false;
  }
}

/**
* 
* @param {*} data 多行端口 或端口段
* @returns 
*/
function testPortPart(data) {
  const ipArr = data.split('\n');
  for (let item of ipArr) {
    if (!testPort(item) && !testPortSection(item)) {
      return false;
    }
  }
  return true;
}
/**
 * 
 * @param {*} value 
 * @returns 校验端口段
 */
function testPortSection(value) {
  let flag = true;
  if (value.length > 0) {
    let items = value.split('-');
    items.forEach(function(item) {
      if (!testPort(item)) {
        flag = false;
      }
    });
  } else {
    flag = false;
  }
  return flag;
}
/**
 * 
 * @param {*} value 
 * @returns 校验ipv4地址段
 */
function testIPv4Section(value) {
  let flag = true;
  if (value.length > 0) {
    let items = value.split('-');
    items.forEach(function(item) {
      if (!Ipv4Test(item)) {
        flag = false;
      }
    });
  } else {
    flag = false;
  }
  return flag;
}

function Ipv4AndCIDR(str) {
  var reg = /^(?:(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/([1-9]|[1-2]\d|3[0-2])$/;
  return reg.test(str)
}
/**
* 校验ipv4
* @param {string} path 
*/
function Ipv4Test(path) {
  var ipv4Reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return ipv4Reg.test(path);
}

/**
* 校验ipv6
* @param {string} path 
*/
function Ipv6Test(path) {
  var ipv6Reg = /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i;
  return ipv6Reg.test(path);
}



/**
* 校验ipv4或者ipv6
* @param {string} path 
*/
function Ipv4OrIpv6Test(path) {
  return Ipv4Test(path) || Ipv6Test(path);
}


/**
* 校验ipv4子网掩码地址
* @param {string} path 
*/
function Ipv4SubnetMas(path) {
  var ipv4SubnetMaskReg = /([1-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])(\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3}\/\d+/;
  return ipv4SubnetMaskReg.test(path);
}

/**
* 校验ipv6子网掩码地址
* @param {string} path 
*/
function Ipv6SubnetMas(path) {
  var ipv6SubnetMaskReg = /^([\da-fA-F]{1,4}:){6}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)(\/([1-9]?\d|(1([0-1]\d|2[0-8]))))?$|^::([\da-fA-F]{1,4}:){0,4}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)(\/([1-9]?\d|(1([0-1]\d|2[0-8]))))?$|^([\da-fA-F]{1,4}:):([\da-fA-F]{1,4}:){0,3}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)(\/([1-9]?\d|(1([0-1]\d|2[0-8]))))?$|^([\da-fA-F]{1,4}:){2}:([\da-fA-F]{1,4}:){0,2}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)(\/([1-9]?\d|(1([0-1]\d|2[0-8]))))?$|^([\da-fA-F]{1,4}:){3}:([\da-fA-F]{1,4}:){0,1}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)(\/([1-9]?\d|(1([0-1]\d|2[0-8]))))?$|^([\da-fA-F]{1,4}:){4}:((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)(\/([1-9]?\d|(1([0-1]\d|2[0-8]))))?$|^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}(\/([1-9]?\d|(1([0-1]\d|2[0-8]))))?$|^:((:[\da-fA-F]{1,4}){1,6}|:)(\/([1-9]?\d|(1([0-1]\d|2[0-8]))))?$|^[\da-fA-F]{1,4}:((:[\da-fA-F]{1,4}){1,5}|:)(\/([1-9]?\d|(1([0-1]\d|2[0-8]))))?$|^([\da-fA-F]{1,4}:){2}((:[\da-fA-F]{1,4}){1,4}|:)(\/([1-9]?\d|(1([0-1]\d|2[0-8]))))?$|^([\da-fA-F]{1,4}:){3}((:[\da-fA-F]{1,4}){1,3}|:)(\/([1-9]?\d|(1([0-1]\d|2[0-8]))))?$|^([\da-fA-F]{1,4}:){4}((:[\da-fA-F]{1,4}){1,2}|:)(\/([1-9]?\d|(1([0-1]\d|2[0-8]))))?$|^([\da-fA-F]{1,4}:){5}:([\da-fA-F]{1,4})?(\/([1-9]?\d|(1([0-1]\d|2[0-8]))))?$|^([\da-fA-F]{1,4}:){6}:(\/([1-9]?\d|(1([0-1]\d|2[0-8]))))?$/;
  return ipv6SubnetMaskReg.test(path);
}

/**
* 校验ipv4或ipv6子网掩码地址
* @param {string} path 
*/
function Ipv4OrIpv6SubnetMas(path) {
  return Ipv4SubnetMas(path) || Ipv6SubnetMas(path);
}
/**
* 校验支持ipv4或ipv6的单个地址，地址段，子网掩码格式
* @param {string} ip 
*/
function ipOrIpSubnetMasOrIpSection(ip) {
  var result = true;
  // 先确定是不是地址段
  if (ip.indexOf('-') > -1) {
      var ipStart =  ip.split('-')[0];
      var ipEnd =  ip.split('-')[1];
      if ( Ipv4Test(ipStart) && Ipv4Test(ipEnd) ) {
          if (!compareIpv4(ipStart, ipEnd)) {
              result = false;
          }
      }else if (Ipv6Test(ipStart) && Ipv6Test(ipEnd)) {
          ipStart = compressIPV6(ipStart);
          ipEnd = compressIPV6(ipEnd);
          if (!compareIpv6(ipStart, ipEnd)) {
              result = false;
          }
      }else {
          result = false;
      }
  } else {
      // 不是ip段则校验ipv4、ipv6、ipv4子网掩码、ipv6子网掩码
      if ( !Ipv4OrIpv6SubnetMas(ip) && !Ipv4OrIpv6Test(ip) ) {
          result = false;
      }
  }
  return result;
}

/**
* 格式化ipv6的地址方便比较大小
* @param {string} path 
*/
function getIPv6Format(address) {
  var ipv6To16 = '';
  var ipv6Part1 = [];
  var numberPart1 = 0;
  var numbers = 0;
  var flag = true;
  if (address.indexOf('::') > -1) {
    var ipv6 = address.split('::');
    for (var i = 0; i < ipv6.length; i++) {
      var value = ipv6[i];
      if (value.indexOf(':') > 0) {
        var t = value.split(':');
        if (flag) {
          numberPart1 = t.length;
        }
        numbers = numbers + t.length;
        for (var ti = 0; ti < t.length; t++) {
            var tvalue = t[ti];
          if (tvalue.length !== 4) {
            var a = '0000';
            var s = a.substring(0, 4 - tvalue.length);
            var b = s.concat(tvalue);
            ipv6Part1.push(b);
          } else {
            ipv6Part1.push(tvalue);
          }
        }
        flag = false;
      } else {
        if (value.length !== 4) {
          var a = '0000';
          var s = a.substring(0, 4 - value.length);
          var b = s.concat(value);
          ipv6Part1.push(b);
        } else {
          ipv6Part1.push(value);
        }
        if (flag) {
          numberPart1 = numberPart1 + 1;
        }
        numbers = numbers + 1;
        flag = false;
      }
    }

    var v = '0000';
    var ipv6Part3 = '';
    for (var h = 0; h < 8 - numbers; h++) {
      ipv6Part3 = ipv6Part3.concat(v);
    }
    for (var y = 0; y < ipv6Part1.length; y++) {
      if (y === numberPart1) {
        ipv6To16 = ipv6To16.concat(ipv6Part3);
        ipv6To16 = ipv6To16.concat(ipv6Part1[y]);
      } else {
        ipv6To16 = ipv6To16.concat(ipv6Part1[y]);
      }
    }
  } else {
    var ipv6 = address.split(':');
    for (var ipv6i = 0 ; i < ipv6.length; i++) {
        var ipv6value = ipv6[ipv6i];
      if (ipv6value.length !== 4) {
        var a = '0000';
        var s = a.substring(0, 4 - ipv6value.length);
        var b = s.concat(ipv6value);
        ipv6To16 = ipv6To16.concat(b);
      } else {
        ipv6To16 = ipv6To16.concat(ipv6value);
      }
    }
  }

  var hexArray = [];
  for (var index = 0; index < ipv6To16.length / 4; index++) {
    hexArray.push(ipv6To16.substr(index * 4, 4));
  }

  return hexArray.join(':').toUpperCase();
}

/**
* 校验ipv4地址段,例如2.2.2.2-2.2.2.9
* @param {string} ipSection
*/
function ipv4Section(ipSection) {
  // 先判断一下是不是ip段
  if(ipSection.indexOf('-') > -1) {
      // 继续校验，比较前后两个ip的大小
      var ipStart = ipSection.split('-')[0];
      var ipEnd = ipSection.split('-')[1];
      if (Ipv4Test(ipStart) && Ipv4Test(ipEnd)) {
          if (compareIpv4(ipStart, ipEnd)) {
              // 是符合条件的ip段
              return true;
          }
      }
  }
  return false;
}

/**
* 比较ipv4的大小
* @param {string} ipStart 
* @param {string} ipEnd 
*/
function compareIpv4(ipStart, ipEnd) {
  if (ipStart === ipEnd) {
      return false;
    }
    var ipStartArr = ipStart.split('.');
    var ipEndArr = ipEnd.split('.');
    for (var i = 0; i < 4; i++) {
      var start = Number(ipStartArr[i]);
      var end = Number(ipEndArr[i]);
      if (start === end) { continue; }
      return start < end;
    }
    return true;
}

/**
* 比较ipv6的大小
* @param {string} ipStart 
* @param {string} ipEnd 
*/
function compareIpv6(ipStart, ipEnd) {
  var preFormat = getIPv6Format(ipStart);
  var nextFormat = getIPv6Format(ipEnd);
  return preFormat < nextFormat;
}


/**
* 校验端口
* @param {string} port 端口
*/
function testPort(port) {
  var numberPort = Number(port);
  if (/^\d+$/.test(port) && numberPort >= 1 && numberPort <= 65535) {
    return true;
  } else {
    return false;
  }
}


function convertIptoInt(ip) {
  var ips = ip.split(".")
  var ipint = (parseInt(ips[0]) << 24) |
      (parseInt(ips[1]) << 16) |
      (parseInt(ips[2]) << 8) |
      parseInt(ips[3])
  return ipint
}

function isIpAddressMatch(ipSection, checkip) {
  if (Ipv4Test(ipSection)) {
      if (checkip == ipSection)
          return true;
      else
          return false;
  }

  if (Ipv4SubnetMas(ipSection)) {
      var ipSections = ipSection.split("/")
      var mask = 0xFFFFFFFF << (32 - parseInt(ipSections[1]))
      var ipSectionIp = convertIptoInt(ipSections[0])
      var ip = convertIptoInt(checkip)
      return ((ipSectionIp & mask) == (ip & mask))
  }

  if (ipv4Section(ipSection)) {
      var ipStart = ipSection.split('-')[0];
      var ipEnd = ipSection.split('-')[1];
      if(ipStart == checkip || ipEnd == checkip || (compareIpv4(ipStart, checkip) && compareIpv4(checkip, ipEnd))) {
          return true;
      }
  }

  return false
}


function isValidPortList(a) {
  if (a == null || a == "") {
      return false;
  }
  if (a.indexOf(",") == -1 && a.indexOf("-") == -1) {
      return testPort(a);
  } else {
      if (a.indexOf(",") == -1) {
          portParts = a.split("-");
          if (!testPort(portParts[0]) || !testPort(portParts[1])) {
              return false;
          }
      } else {
          portItems = a.split(",");
          for (i = 0; i < portItems.length; i++) {
              if (!(portItems[i].indexOf("-") == -1)) {
                  portParts = portItems[i].split("-");
                  if (!testPort(portParts[0]) || !testPort(portParts[1])) {
                      return false;
                  }
              } else {
                  if (!testPort(portItems[i])) {
                      return false;
                  }
              }
          }
      }
  }
  return true;
}

function isValidMAC(c) {
  if (c == null || c == "") {
      return false;
  }
  var b = c.split(":");
  if (b.length == 1) {
      b = c.split("-");
  }
  if (b.length != 6) {
      return false;
  }
  for (var a = 0; a < b.length; a++) {
      if (!isHex(b[a])) {
          return false;
      }
      if (b[a].length != 2) {
          return false;
      }
  }
  return true;
}

function isHex(b) {
  for (var a = 0; a < b.length; a++) {
      if (!isHexChar(b.charAt(a))) {
          return false;
      }
  }
  return true;
}

function isHexChar(a) {
  return (("0123456789abcdefABCDEF".indexOf(a)) >= 0)
}

function isValidEmailAddress(a) {
  var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if(reg.test(a)) {
      return true
  }else {
      return false

  }
}

function isValidPath(path) {
  if (isValidLinuxPath(path) || isValidWinPath(path) || isValidFtpPath(path))
      return true;
  else
      return false;
}

function isValidFtpPath(path) {
  if (path == null || path == "") {
      return false;
  }
  var ftp_reg = /^(\\\\)([^\/:\*\?"<>\|]+\\)*$/;
  if (ftp_reg.test(path))
      return true;
  else
      return false;
}

function isValidLinuxPath(path) {
  if (path == null || path == "") {
      return false;
  }
  var linux_reg = /^\/([^\/]+\/)*$/;
  if (linux_reg.test(path))
      return true;
  else
      return false;
}

function isValidWinPath(path) {
  if (path == null || path == "") {
      return false;
  }
  var win_reg = /^([A-Za-z]:\\)([^\\\/:\*\?"<>\|]+\\)*$/;
  if (win_reg.test(path))
      return true;
  else
      return false;
}

function isValidFile(file) {
  if (file == null || file == "") {
      return false;
  }
  var win_reg = /^([A-Za-z]:\\)([^\\\/:\*\?"<>\|]+\\)*([^\\\/:\*\?"<>\|]+)$/;
  var linux_reg = /^\/([^\/]+\/)*([^\/]+)$/;
  var ftp_reg = /^(\\\\)([^\/:\*\?"<>\|]+\\)*([^\/:\*\?"<>\|]+)$/;
  if (win_reg.test(file) || linux_reg.test(file) || ftp_reg.test(file))
      return true;
  else
      return false;
}

/**
* 目前主要用于防恶意软件的白名单设置里，目录文件白名单的设置
* 增加支持特殊路径，以%开头。示例如下
* %APPDATA%
* %APPDATA%test
* %APPDATA%test\1.txt
* @param {*} path 路径
*/
function isValidSpecPath(path) {
  var win_spec_reg = /^(\%[^\\\/:\*\?"<>\|]+\%)([^\\\/:\*\?"<>\|]+\\*)*$/;
  if(win_spec_reg.test(path)) {
    return true;
  } else {
    return false;
  }
}

function isInteger(n) {
  var result = false;
  if (n < 2147483647 && n > -2147483646 && n % 1 === 0) {
      result = true;
  }
  return result;
}

function isValidPassword(pw) {
  var result = false;
  if (pw === null || pw === '') {
      return false;
  }
  var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?#&])[A-Za-z\d$@$!%*?#&]{8,}$/;
  if (reg.test(pw)) {
      result = true;
  }
  return result;
}

function check_secretid(id) {
  if (id == null) {
      return false;
  }
  var reg = /^[0-9a-zA-Z]+$/;
  if (reg.test(id))
      return true;
  else
      return false;
}

function checkCharPrefix(a) {
  if (a == null) {
      return false;
  }
  var reg = /^[^ @\/\'\\\<\>"”#$%&?\^\*|;]+$/; //不允许空格 特殊字符

  if (reg.test(a))
      return false;
  else
      return true;
}

/**
* 资产清点标签名称的校验
* 支持中文，大小写英文，数字，字符"-","·"
*/
function checkTagName(name) {
  var tagNameReg = /^[\u4e00-\u9fa5a-zA-Z0-9-·]+$/;
  if (tagNameReg.test(name)) {
      return true;
  } else {
      return false;
  }
}