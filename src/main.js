import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import './style.css'
import ItemList from './components/ItemList.vue'
import RowCard from './components/RowCard.vue'
import {changeTitle} from "@/util/ChangeTitle";

const app = createApp(App)

app.use(changeTitle)
app.use(router)
app.use(ElementPlus, {
    locale: zhCn,
});
app.config.globalProperties.globalUrl = {
    imgUrl: "/api/img/"
}
app.component("ItemList", ItemList)
app.component("RowCard", RowCard)
app.mount('#app')
