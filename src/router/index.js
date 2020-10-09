import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import centerRouter from './routers/center'
import cinemaRouter from './routers/cinema'
import filmRouter from './routers/film'

const routes = [{
        path: '/',
        redirect: '/film'
    },
    centerRouter,
    cinemaRouter,
    filmRouter
]

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

export default router