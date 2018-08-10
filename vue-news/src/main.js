// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'//插件需要Vue.use
import store from './store'

Vue.config.productionTip = false

// Vue.use(VueLazyLoad,{
//   loading:require('common/image/default.png')
// })

import "common/stylus/index.styl"


fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
