<template>
  <ItemList :table-data="tableData" :loadingdata="loadingData"/>
</template>

<script setup>
import {useRoute} from "vue-router"
import {reactive} from "vue";
import blogApi from "@/api/blogApi";
import ItemList from "@/components/ItemList.vue";

const route = useRoute()


const tableData = reactive({})
const loadingData = (parames) => {
  parames.bolgClassifyId = route.params.id
  console.log(parames)
  blogApi.indexPage(parames).then((res) => {
    if (res) {
      Object.assign(tableData, res.data)
    }
  })
  console.log(tableData)
}
loadingData({})

</script>

<style scoped>

</style>