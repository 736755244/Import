// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import WebSql from './WebSql/WebSql'
//import Blob from './vendor/Blob'
//import Export2Excel from './vendor/Export2Excel.js'
//每次打开连接本地数据库
Vue.use(WebSql);

//使用EUI组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//
//import XLSX from 'xlsx'
//Vue.use(XLSX)

//引入导出excel组件
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)



//引入发送请求
import VueResource from 'vue-resource'
Vue.use(VueResource);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
