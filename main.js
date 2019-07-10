import Vue from 'vue'
import App from './App.vue'
//  引入 mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
// 引入 mui css 样式
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'

// 给 App 页面引入 css
import './scss/App.css'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
