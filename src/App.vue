<template>
  <div class="home">
    <el-container>
      <el-header class="header">
        <router-link to="/"> {{ webData.webName }}</router-link>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            text-color="#000"
            mode="horizontal"
            :ellipsis="false"
            background-color="transparent"
            active-text-color="#7d28da"
            @select="handleSelect"
            router
        >
          <div class="flex-grow"/>
          <el-input v-model="search" :prefix-icon="Search" clearable placeholder="请输入博客标题"/>
          <el-menu-item v-for="item in menuList" :index="item.path">
            <el-icon>
              <HomeFilled class="ico-homeFilled" v-if="item.title=='首页'"/>
              <Management class="ico-management" v-if="item.title=='分类'"/>
              <Flag class="ico-flag" v-if="item.title=='专题'"/>
            </el-icon>
            {{ item.title }}
          </el-menu-item>
          <el-menu-item>
            <div @click="callAdmin">
              <el-icon>
                <Promotion class="ico-promotion"/>
              </el-icon>
              联系站长
            </div>
          </el-menu-item>

        </el-menu>
      </el-header>
      <el-main class="main">

        <el-carousel pause-on-hover="false" arrow="never" indicator-position="none" height="76vh">
          <el-carousel-item v-for="itme in carouseData" :key="index">
            <img :src="itme.url" style="width: 100%;height: 100%;">
          </el-carousel-item>
        </el-carousel>
        <router-view/>

      </el-main>
      <el-footer class="footer">
        <template v-if="webData.recordState" class="footer">
          <el-col>
            <a href="https://beian.miit.gov.cn/" target="_blank">{{ webData.icpNo }}</a>
          </el-col>
          <el-col>
            <a target="_blank"
               href="http://www.beian.gov.cn/portal/registerSystemInfo"
               style="display:inline-block;text-decoration:none;"><img
                src="https://www.beian.gov.cn/img/new/gongan.png" style="float:left;"/>
              <p style="float:left;margin: 0px 0px 0px 5px; color:#939393;">
                {{ webData.policeNo }}</p></a>
          </el-col>
        </template>
      </el-footer>
    </el-container>
  </div>
</template>


<script setup>
import blogApi from "@/api/blogApi";
import {h, reactive, ref} from "vue";
import {Search, HomeFilled, Management, Flag, Promotion} from "@element-plus/icons-vue"
import {ElNotification} from 'element-plus'

const callAdmin = () => {
  ElNotification({
    title: '站长联系方式',
    message: h('i', 'zhiqishen.126@foxmail.com'),
  })
}


const menuList = ref([{
  title: "首页",
  path: "/"
}, {
  title: "分类",
  path: "/classify"
}, {
  title: "专题",
  path: "/project"
}
])


//图片
const carouseData = [
  {url: new URL("@/assets/jpg/1.jpg", import.meta.url).href},
  {url: new URL("@/assets/jpg/2.jpg", import.meta.url).href},
  {url: new URL("@/assets/jpg/3.jpg", import.meta.url).href},
  {url: new URL("@/assets/jpg/4.jpg", import.meta.url).href},
  {url: new URL("@/assets/jpg/5.jpg", import.meta.url).href},
  {url: new URL("@/assets/jpg/6.jpg", import.meta.url).href},
  {url: new URL("@/assets/jpg/7.jpg", import.meta.url).href},
  {url: new URL("@/assets/jpg/8.jpg", import.meta.url).href},
  {url: new URL("@/assets/jpg/9.jpg", import.meta.url).href},
]
const search = ref()
//获取网站信息
const webData = reactive({})
const loadingData = () => {
  blogApi.shoWebSetting().then((res) => {
    if (res) {
      Object.assign(webData, res.data)
    }
  })
}
loadingData();
</script>

<style scoped>
@import "@/assets/css/Home.css";

.ico-homeFilled {
  color: #dc143c;
}

.ico-management {
  color: #d2691e;
}

.ico-flag {
  color: #9370db;
}

.ico-promotion {
  color: #0b6567;
}
</style>
