import Vue, { createApp } from 'vue'
import Index from './index.vue'
import router from './router'
import store from './store'
import axios from './config/http';
import vueAxios from 'vue-axios';
Vue.use(axios, vueAxios);
createApp(Index).use(store).use(router).mount('#app')
