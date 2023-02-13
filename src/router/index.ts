import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: 'login',
            component: () => import("@/views/login/index.vue")
        },
        {
            path: "/404",
            component: () => import("@/views/ErrorPage.vue")
        },
        {
            path: "/:catchAll(.*)", // 不识别的path自动匹配404
            redirect: '/404',
        }
    ]
})



export default router