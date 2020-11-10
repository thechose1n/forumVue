import Vue from 'vue'
import Router from 'vue-router'
import Threads from "@/components/Threads";
import ThreadDetail from "@/components/ThreadDetail";

Vue.use(Router)

export default new Router({
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Threads',
            component: Threads
        },
        {
            path: '/thread/:id',
            name: 'ThreadDetail',
            component: ThreadDetail
        }
    ],


})
