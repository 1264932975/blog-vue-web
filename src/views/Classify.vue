<template>
<RowCard :table-data="tableData"></RowCard>
</template>

<script setup>
import {reactive} from "vue";
import blogApi from "@/api/blogApi";
import RowCard from "@/components/RowCard.vue";
import {changeTitle} from "@/util/ChangeTitle";
changeTitle("分类", "博客分类", "博客分类")

//获取数据
const tableData = reactive({})
const loadingData = () => {
  blogApi.getClassify().then((res)=>{
    if (res){
      Object.assign(tableData,res.data)
    }
  })
}
loadingData();
</script>

<style  scoped>

</style>