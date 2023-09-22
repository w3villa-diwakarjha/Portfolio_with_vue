import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';


// Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home,
        name: 'HomePage'
    },
    {
        path: '/user/about',
        component: About,
        name: 'AboutPage'
    },
    {
        path: '/user/login',
        component: Login,
        name: 'Login'
    },
    {
        path: '/user/signup',
        component: Signup,
        name: 'Signup'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
