import {createRouter, createWebHistory} from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue'
import App from './App.vue'
import Home from "../src/components/Home.vue";
import Counter from "../src/components/Counter.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/counter', component: Counter },
        ],
})

const app = createApp(App)

app.use(router)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js';




