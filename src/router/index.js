import { createRouter,createWebHashHistory } from 'vue-router'

import { useUserStore } from '@/stores/userStore'
// import Home from '@/pages/Home.vue';

const routers = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/Home.vue'),
        meta:{
            requiresAuth: true,
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/pages/Register.vue')
    },
    {
        path: "/404",
        name: "NotFound",
        component: () => import("@/pages/NotFound.vue"),
        hidden: true,
        meta: { title: "404" },
    },
    { path: "/:pathMatch(.*)", redirect: "/404", name: "notMatch", hidden: true },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routers,
})


router.beforeEach(async (to,from) => {
    const userStore = useUserStore();
    if(to.meta.requiresAuth){
        if(!userStore.getToken && to.path !== '/login'){
            return {path: '/login'}
        }
    }
})

export default router