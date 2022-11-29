<template>
  <div class="home">
    <el-container>
      <el-header class="header">

        <div>{{ webData.webName }}</div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            text-color="#000"
            mode="horizontal"
            :ellipsis="false"
            background-color="transparent"
            active-text-color="#7d28da"
            @select="handleSelect"
            default-active="1"
        >
          <div class="flex-grow"/>
          <el-input v-model="search" :prefix-icon="Search" clearable placeholder="请输入博客标题"/>
          <el-menu-item index="1">
            <el-icon class="ico-homeFilled">
              <HomeFilled/>
            </el-icon>
            首页
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon class="ico-management">
              <Management/>
            </el-icon>
            分类
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon class="ico-flag">
              <Flag/>
            </el-icon>
            专题
          </el-menu-item>
          <el-menu-item>
            <el-icon class="ico-promotion">
              <Promotion/>
            </el-icon>
            联系站长
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main class="main">

        <el-carousel pause-on-hover="false" arrow="never" indicator-position="none" height="50vh">
          <el-carousel-item v-for="itme in carouseData" :key="index">
            <img :src="itme.url" style="width: 70%;height: 100%;opacity: 0.8">
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
import {reactive, ref} from "vue";
import {Search, HomeFilled, Management, Flag, Promotion} from "@element-plus/icons-vue"

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
@import "@/assets/css/Home.less";

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
  color: #00ced1;
}
</style>
