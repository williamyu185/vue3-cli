import { createApp } from 'vue'
import Index from './index.vue'
import router from './router'
import store from './store'

createApp(Index).use(store).use(router).mount('#app')
