// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../static/style/animate.css';
import '../static/icon/iconfont.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/style/style.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import moment from 'moment'

Vue.use(ElementUI)
Vue.use(MintUI)
Vue.filter('dataFilter',function (dataStr,patten = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(patten)
  });
Vue.config.productionTip = false
import '../src/assets/animate.css';
import store from './store'
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})