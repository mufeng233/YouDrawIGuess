/*
 * @Author: Mufeng
 * @Date: 2021-08-16 09:40:07
 * @FilePath: /你画我猜/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('../views/Home/Index.vue'),
        meta: {

        }
    },
    {
        name: 'Game',
        path: '/game',
        component: () => import('../views/Game/Index.vue'),
        meta: {

        }
    },
    {
        name: 'Login',
        path: '/login',
        component: () => import('../views/Login.vue'),
        meta: {

        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const nickname = localStorage.getItem('nickname')

    // 缓存中有昵称
    if (nickname) {
        // 当前是登录页
        if (to.path === '/login') {
            next({ path: '/game' })
        } else {
            next()
        }
    } else {
        // 当前是登录页
        if (to.path === '/login') {
            next()
        } else {
            next({ path: '/login' })
        }
    }
})

router.afterEach((to, from) => {

})

export default router