// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
// 使用new调用，this会指向vue的这个实例对象
// Vue就是一个底层的构造函数，源码里面会有一个function Vue(){}
new Vue({
  el: '#app', // 表示当前vue实例为哪个容器服务，值是选择器字符串，选择的写法类似于jQuery
  router,
  components: { App },
  template: '<App/>'
})
