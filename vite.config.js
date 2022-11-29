import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    //配置跨域
    server: {
        open: false,  //启动项目后打开浏览器
        port: 3000,   //端口
        proxy: {
            '/api': {
                target: 'http://localhost:7000',  //API服务地址
                changeOrigin: true,             //开启跨域
                rewrite: (path) => path.replace(/^\/api/, '/')
            }
        }
    }
})
