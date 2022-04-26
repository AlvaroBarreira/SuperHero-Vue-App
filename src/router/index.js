import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

const routes = [
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            autentificado: true
        }
    },
    {
        path: '/',
        component: Login  
    }
];



const router = createRouter({
    
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    let user = localStorage.getItem('isLogged')

    let autorization = to.matched.some(record => record.meta.autentificado)

    if (autorization && !user) {
        next('/')
    } else if (!autorization && user) {
        next('/home')
    } else {
        next()
    }

  })

export default router;

