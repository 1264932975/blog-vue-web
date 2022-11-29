<template>
  <div class="main">
    <div class="left">
      <ItemList :key="index" v-for="(item,index) in tableData.list" :cover="item.cover" :title="item.bolgTitle"
                :time="item.updateTime" :abstract="item.bolgAbstract" :classify="item.bolgClassifyName"></ItemList>
      <el-pagination
          background="false"
          v-model:current-page="tableData.pageNum"
          v-model:page-size="tableData.pageSize"
          :page-sizes="[10, 15, 30, 50]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>
    <div class="right">
      <el-card  style="margin: 20px;background-color: transparent;border: none">
        <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            style="width: 50%;height: 50%"
        />
        <div style="padding: 14px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>

    </div>

  </div>
</template>


<script setup>
import blogApi from "@/api/blogApi";
import {reactive, ref} from "vue";

//分页
const handleSizeChange = () => {
  loadingdata({pageSize: tableData.pageSize, pageNum: tableData.pageNum})
}
const handleCurrentChange = () => {
  loadingdata({pageSize: tableData.pageSize, pageNum: tableData.pageNum})
}


//取数
const tableData = reactive({})
const loadingdata = (parames) => {
  blogApi.indexPage(parames).then((res) => {
    if (res) {
      Object.assign(tableData, res.data)
    }
  })

}
loadingdata({});

</script>

<style lang="less" scoped>
.main {
  margin-top: 10px;
  display: flex;
}

.main .right {
  width: 400px;
}

.main .left {
  flex: 1;

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