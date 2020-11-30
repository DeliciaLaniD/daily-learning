// 简单工厂模式又叫静态工厂方法，由一个工厂对象决定创建某一种产品对象类的实例。主要用来创建同一类对象。
// 比如需要写一个登录模块，需要有校验、按钮、确认等。那可以写三个方法如下所示：
var loginConfirm = function(text) {
  this.content = text;
}

var LoginAlert = function(text) {
  this.content = text;
}

var LoginPrompt = function(text) {
  this.content = text;
}

// 这时一个新的需求出现了，需要做一个注册模块，可以复用上述三个方法，这时可以将上述方法封装为一个简单工厂
// 不直接复用的原因？
// 直接服用上述三个类，在每次创建的时候需要找到对应的类，太麻烦；注册模块用login前缀是不合适的；
// 因此封装在一个函数中后，只需要记住这个函数，然后通过这个函数可以创建需要的对象；如此其他人也不用再关注创建这些对象
// 到底依赖于哪个类，只知道这个函数就可以了。这个函数通常称为工厂函数，这种模式成为简单工厂模式。

// 通过类实例化对象创建的
var PopFactory = function(name) {
  switch(name) {
    case 'alert':
      return new LoginAlert();
    case 'confirm':
      return new loginConfirm();
    case 'prompt':
      return new LoginPrompt();
  }
}

/**
 * 简单工厂模式的理念是创建对象，上面这种方式是对不同的类实例化，不过除此之外简单工厂模式还可以用来创建相似对象。
 * eq:如果需要创建一些书，这些书有类似的地方，都有目录、页码等。也有一些不相似的地方如书名、出版时间、书的类型等；
 */

//  工厂模式
// 通过创建一个新对象然后包装增强其属性和功能来实现的。
 function createPop(type, text) {
  // 创建一个对象，并对对象拓展属性和方法
  var o = new Object();
  o.content = text;
  o.content = text;
  o.show = function() {
    // 显示方法
  }
  if (type === 'alert') {
    // 警示框差异部分
  }
  if (type === 'prompt') {
    // 提示框差异部分
  }
  if (type === 'confirm') {
    // 确认框差异部分
  }
  // 将对象返回
  return o;
 }
//  创建警示框
var userNameAlert = createPop('alert', '用户名……')

// 上述两种方式的差异也造成前面通过类创建的对象，如果这些类继承同一父类，那么他们的父类原型上的方法是可以共用的。
// 第二种创建的对象都是一个新的个体，所以他们的方法不能共用。