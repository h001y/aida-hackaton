import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './views/App'
import Play from './views/Play'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'App',
            component: App,
        },
        {
            path: '/play',
            name: 'Play',
            component: Play
        }
    ]
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
