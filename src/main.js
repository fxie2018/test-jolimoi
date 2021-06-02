import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import Axios from 'axios'
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.prototype.$axios = Axios

new Vue({
  render: h => h(App)
}).$mount('#app')
