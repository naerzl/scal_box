import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/utils/rem'
import '@/style/common.less'
import router from '@/router'
import '@/utils/addroute'
createApp(App).use(router).mount('#app')
