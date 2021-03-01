import Vue, { createApp } from 'vue';
import Index from './index.vue';
import router from './router';
import store from './store';
import axios from './config/http';
// import 'element-plus/lib/theme-chalk/index.css';
// import ElementPlus from 'element-plus';

const app = createApp(Index);
app.config.globalProperties.$http = axios;
app
.use(store)
.use(router);
// app.use(ElementPlus)
app.mount('#app');