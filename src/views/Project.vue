<template>
  <RowCard :table-data="tableData.list" :to-detil="toDetil"></RowCard>
  <div class="pagination">
    <el-pagination
        background="false"
        v-model:current-page="tableData.pageNum"
        v-model:page-size="tableData.pageSize"
        :page-sizes="[9, 15, 30, 90]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>

</template>

<script setup>
import blogApi from "@/api/blogApi";
import {reactive} from "vue";
import {changeTitle} from "@/util/ChangeTitle";
import router from "@/router";

changeTitle("专题", "博客专题", "博客专题")

//点击方法
const toDetil = (data) => {
  router.push(`/projectDetil/${data.id}`)
}


//分页
const handleSizeChange = () => {
  loadingData({pageSize: tableData.pageSize, pageNum: tableData.pageNum})
}
const handleCurrentChange = () => {
  loadingData({pageSize: tableData.pageSize, pageNum: tableData.pageNum})
}

//取数
const tableData = reactive({})
const loadingData = (parames) => {
  blogApi.getProject(parames).then((res) => {
    if (res) {
      Object.assign(tableData, res.data)
    }
  })
}
loadingData({pageSize: 9, pageNum: 1});

</script>

<style lang="less" scoped>
.pagination {
  :deep(.el-pagination) {
    margin-top: 20px;
    font-size: 18px;
    color: black;
    font-weight: bold;

    .el-input__wrapper {
      background-color: transparent !important;
    }

    .el-select-dropdown {
      background-color: transparent !important;
    }

    .el-pager li {
      background-color: transparent !important;
    }

    .btn-prev {
      background-color: transparent !important;
    }

    .btn-next {
      background-color: transparent !important;
    }
  }

}
</style>