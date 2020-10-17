import Vue from 'vue'
import Router from 'vue-router'
import Threads from "@/components/Threads";
import store from "@/store";

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
            path: '/thread/:title',
            name: 'ThreadDetail',
            props: true,
            component: () =>
                import(/* webpackChunkName: "DestinationDetails"*/ "@/components/ThreadDetail"),
            beforeEnter: (to, from, next) => {
                const exists = store.threads.find(
                    thread => thread.title === to.params.title
                );
                if (exists) {
                    next();
                } else {
                    next({ name: "notFound" });
                }
            }
        }
    ],


})
