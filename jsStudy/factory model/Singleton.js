/**
 * 单例模式又称为当体模式，是只允许实例化一次的对象类。有时也是用一个对象来规划一个命名空间，井井有条地
 * 管理对象上的属性与方法。
 * eq:需求是做一个宣传页面，其中有一个滑动特效实现鼠标滑动特效，最初实现是在页面中添加了很多变量。
 * 存在的问题是：
 *      定义的绑定事件，日后其他人要为该页面添加新的需求，增加代码而定义一个on变量或者重写了on方法，就会和
 * 这些代码起冲突。
 * 
 * 单例模式提供了一个命名空间，jQuery库就是如此，单例模式为他提供了一个命名空间jQuery，当使用jQuery定义animate方法
 * 的时候，用jQuery.animate()来访问。
 * 另外单例模式可以管理代码库的各个模块。
 * 比如tangram中定义命名空间为百度，当添加设置元素class方法，插入一个元素方法时，会放到dom；
 * 当添加事件中阻止事件得冒泡方法，阻止事件的默认行为的时候，会放到event模块；
 * 当添加去除字符串首尾空白字符串方法，将字符串进行html编码时，会放到string模块中……
 * baidu.dom.addClass;baidu.dom.append;baidu.event.stopPropagation;baidu.event.preventDefault
 * 
 * 比如有一个A库，包含公用模块、工具模块、Ajax模块和其他模块，就可以自己定制一个小型代码库
 */

var A = {
  Util: {
    util_method1: function(){},
    util_method2: function(){}
  },
  Tool: {
    tool_method1: function(){},
    tool_method2: function(){},
  }
  // ……
}

// 惰性单例
var LazySingle = (function(){
  // 单例实例引用
  var instance = null;
  // 单例
  function Single() {
    // 这里定义私有属性和方法
    return {
      publicMethod: function() {},
      publicProperty: '1.0'
    }
  }
  // 获取单例对象接口
  return function() {
    // 如果为不是单例将创建单例
    if(!_instance) {
      _instance = Single();
    }
    // 返回单例
    return _instance;
  }
})();
console.log(LazySingle().publicProperty); // 1.0