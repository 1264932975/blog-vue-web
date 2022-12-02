<template>
  <el-row :gutter="12">
    <el-col :span="8" v-for="item in tableData">
      <el-card shadow="always" class="card" :title="item.name" @click="toDetil(item)">
        <img class="img" :src="proxy.globalUrl.imgUrl+item.cover" v-if="item.cover">
        <img class="img" src="../../public/logo.svg" v-else>
        <div style="padding: 14px">
          <span style="font-weight: bold">专题名称:</span>
          <span>{{ item.name }}</span>
          <div class="bottom">
            <div :title="item.about">
              <span style="font-weight: bold">介绍：</span>
              {{ item.about }}
            </div>
            <div><span style="font-weight: bold">文章数量:</span>
              {{ item.count }}
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>

import {getCurrentInstance} from "vue";

const {proxy} = getCurrentInstance();

const props = defineProps({
  tableData: Object,
  toDetil: Function
})
</script>

<style lang="less" scoped>
.card {
  margin: 20px;
  background-color: transparent;
  width: 23rem;
  height: 23rem;
  border: none;
  cursor: pointer;

  .img {
    width: 13rem;
    height: 13rem;
  }
}
</style>