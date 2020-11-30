// 通过工厂方法模式我们可以轻松创建多个类的实例对象，这样工厂方法对象在创建对象的方式
// 也避免了使用者与对象类之间的耦合。用户不必关心创建该对象的具体类，只需要调用工厂方法即可。
/**
 * 工厂方法模式通过对产品类的抽象使其创建业务主要负责用于创建多类产品的实例。
 * 本意是说将实际创建对象工作推迟到子类当中，这样核心类就成了抽象类。
 * 安全起见，采用安全模式类，而我们将创建对象的基类放在工程方法类的原型中即可。
 */

 /**
  * eq:有这样一个需求，有一批广告资源，关于计算机培训，一批是JAVA，用绿色字体；一批是
  * PHP，用红色字体，黄色背景；然后又一天来了一个新的需求，JavaScript，蓝色字体；
  * 如上需求可以用简单工厂模式实现，如下代码
  */

// 学科工厂类
function JobFactory(type, content) {
  switch(type) {
    case 'java':
      return new Java(content);
    case 'php':
      return new Php(content);
    case 'java':
      return new JavaScript(content);
  }
}

/**
 * 有一天新需求又来了，添加UI学科，红色边框，如此一来，不仅需要添加类，还需要修改工厂函数。
 * 先提一个安全模式类：
 *    是可以屏蔽使用这对类的错误使用造成的错误。比如对一个Demo类，我们知道类的前面需要有new关键字，
 * 不过有人可能不知道这个对象是一个类，那么在使用时可能忽略new关键字直接执行类。
 *    因此可以在构造函数开始时先判断当前对象this指代的是不是类（Demo)，如果是，则通过new关键字创建对象，
 * 如果不是，说明类在全局作用域中执行，既然在全局作用域中执行，this就会指向window，这样就要重新返回新创建
 * 的对象了。
 */

//  安全模式创建的工厂类
var Factory = function(type, content) {
  if (this instanceof Factory) {
    var s = new this[type](content);
    return s;
  } else {
    return new Factory(type, content);
  }
}
// 工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
  Java: function(content) {

  },
  JavaScript: function(content) {

  },
  php: function(content) {

  },
  UI: function(content) {
    this.content = content;
    (function(content) {
      var div = document.createElement('div');
      div.innerHTML = content;
      div.style.border = '1px solid red';
      document.getElementById('container').appendChild(div);
    })(content)
  }
}