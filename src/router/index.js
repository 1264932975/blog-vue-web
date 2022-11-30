import {createRouter, createWebHistory} from 'vue-router'
import index from "@/views/Index.vue";
import classify from "@/views/Classify.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path:"/classify",
            component:classify
        }
    ]
})

export default router
