import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import {store,key} from '@/store'
import './style.css'
import SvgIcon  from '@/components/SvgIcon/SvgIcon.vue';
import './assets/iconfont/iconfont.js';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
app.component('SvgIcon', SvgIcon);
app.use(router).use(store,key).mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}