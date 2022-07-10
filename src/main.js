import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router';
import Home from './pages/Home.vue';
import Vacancies from './pages/Vacancies'



const routes = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/vacancies',
        component: Vacancies
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');
