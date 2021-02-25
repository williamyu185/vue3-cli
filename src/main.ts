import Vue, { createApp } from 'vue'
import Index from './index.vue'
import router from './router'
import store from './store'
import axios from './config/http';

let app = createApp(Index);
app.mixin({
    beforeCreate() {
        this.$http = axios;
    }
});
app.use(store).use(router).mount('#app');
