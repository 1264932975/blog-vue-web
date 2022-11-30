import {createRouter, createWebHistory} from 'vue-router'
import index from "@/views/Index.vue";
import classify from "@/views/Classify.vue";
import project from "@/views/Project.vue";
import classifyDetil from "@/views/detil/ClassifyDetil.vue";
import blogDetil from "@/views/detil/BlogDetil.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: "/classify",
            component: classify
        },
        {
            path: "/project",
            component: project
        },
        {
            path: "/classifyDetil/:id",
            component: classifyDetil
        },
        {
            path: "/blogDetil/:id",
            component: blogDetil
        }
    ]
})

export default router
