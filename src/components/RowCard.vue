<template>
  <el-row :gutter="12">
    <el-col :span="8" v-for="item in tableData">
      <el-card shadow="always" class="card" :title="item.name">
        <img class="img" :src="proxy.globalUrl.imgUrl+item.cover" v-if="item.cover">
        <img class="img" src="../../public/logo.svg" v-else>
        <div style="padding: 14px">
          <span>名称:{{ item.name }}</span>
          <div class="bottom">
            <div :title="item.about">介绍：{{ item.about }}</div>
            <div>文章数量:{{ item.count }}</div>
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
  tableData: Object
})
console.log(props.tableData)
</script>

<style lang="less" scoped>
.card {
  margin: 20px;
  background-color: transparent;
  width: 25rem;
  height: 20rem;
  border: none;
  cursor: pointer;

  .img {
    width: 100%;
    height: 100%;
  }
}
</style>