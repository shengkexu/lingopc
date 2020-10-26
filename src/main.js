// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './style/reset.css'
import './style/main.css'
import './style/contact.css'
import './style/about.css'
import './style/elementChange.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store/index.js'


Vue.use(VueLazyload)
// Vue.use(VueLazyload, {
//   preload: 5,
//   error: './assets/loading.gif',
//   loading: './assets/loading.gif',
//   attempt: 3
// })

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
