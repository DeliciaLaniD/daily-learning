//  [nzGutter]="[16, 24]" 表示使用数组形式同时设置 [水平间距, 垂直间距]
// 使用 nzOffset 可以将列向右侧偏。例如，nzOffset="4" 将元素向右侧偏移了 4 个列（column）的宽度。

// 1.代理到后端服务器
// 你可以使用 webpack 开发服务器中的代理支持来把特定的 URL 转发给后端服务器，
// 只要传入 --proxy-config 选项就可以了。 比如，要把所有到 http://localhost:4200/api 
// 的调用都转给运行在 http://localhost:3000/api 上的服务器，可采取如下步骤。
https://angular.cn/guide/build

// 2.权限配置:通过指令来实现的，permission
// 3.架构
// 4.类生成实例（angular）
// 5.init与constructor的区别
// ngOnInit用于在Angular第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。
// ngOnInit属于Angular生命周期的一部分，其在第一轮ngOnChanges完成之后调用，并且只调用一次：
// 即使Angular定义了ngOnInit，constructor也有其用武之地，其主要作用是注入依赖，特别是在TypeScript开发Angular工程时，经常会遇到类似下面的代码：

// 生成三个子应用：
// 当时要分开交付租户-运营-系统；是angular的脚手架生成的三个子应用。


<template>
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      background-color="#1d2939"
      text-color="#aaafb4"
      active-text-color="#e0f0ff"
      :collapse="isCollapse"
      unique-opened
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      >
      <div class="menu" v-for="item of menuData" :key="item.path">
        <template v-if="item.children && item.children.length">
          <el-submenu :index="item.path" v-if='!item.children.children'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span v-if="!isCollapse">{{item.title}}</span>
            </template>
            <el-menu-item v-for="val of item.children" @click="handleClick(val.path)" :key="val.path" :index="val.path">{{val.title}}</el-menu-item>
          </el-submenu>
          <el-submenu :index="item.path" v-if='item.children.children && item.children.children.length'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span v-if="!isCollapse">{{item.title}}</span>
            </template>
            <el-menu-item v-for="val of item.children.children" @click="handleClick(val.path)" :key="val.path" :index="val.path">{{val.title}}</el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item @click="handleClick(item.path)" :index="item.path">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </div>
    </el-menu>
</template>

<script>
import { routes } from '@/router'
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menuData: routes,
      defaultAction: '/dashboard'
    }
  },
  computed: {
    activeMenu() {
      return this.$route.meta.path || this.$route.path;
    },
  },
  methods: {
    created() {
    },
    handleOpen(key, keyPath) {
      this.$router.push({
        path: key
      })
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(index) {
      this.defaultAction = index
    },
    // 判断是否是同一个路由，，是的话， 不能重复跳
    handleClick(path) {
      if(path !== this.$route.path) {
        this.$router.push({
          path,
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
/deep/.el-submenu.is-active {
        .el-submenu__title,.el-menu-item{
          background-color: #152130 !important;
        }
        .el-menu-item.is-active {
          background-color: #008cff !important;
          border-radius: 4px;
        }
}
/deep/.el-menu-item.is-active {

        background-color: #008cff !important;
        border-radius: 4px;
        
}
.el-menu .el-menu-item {

  font-size: 12px;
  text-indent: 12px;
  height: 42px;
  line-height: 42px

}
.menu{
  padding: 8px;
  &>.el-menu-item{
    text-indent: 0;
    height: 42px;
    line-height: 42px;
  }
}
.menu /deep/ .el-submenu__icon-arrow {
  display: none;
}



</style>
