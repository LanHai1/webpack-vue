// 导入Vue
import Vue from "vue";
// 导入App组件
import App from "./App.vue";

// 设置上线模式 在控制台不会输出那些Vue...的代码
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
})
  // 和页面中id为app的区域关联
  .$mount("#app");
