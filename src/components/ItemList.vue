<template>
  <div class="main" :key="index" v-for="(item,index) in tableData.list" @click="toDetil(item.id)"
       v-if="tableData.total>0">
    <div class="cover" :title="item.title">
      <img class="img" :src="proxy.globalUrl.imgUrl+item.cover" v-if="item.cover">
      <img class="img" src="../../public/logo.svg" v-else>
    </div>
    <div class="content">
      <div class="title" :title="item.bolgTitle">
        {{ item.bolgTitle }}
      </div>
      <div class="abstract">
        <time>
          <el-icon class="calendar">
            <Calendar/>
          </el-icon>
          {{ item.updateTime }}
        </time>
        <div v-if="item.bolgClassifyName">
          <span>|</span>
          <el-icon class="management">
            <Management/>
          </el-icon>
          <a :title="item.bolgClassifyName">{{ item.bolgClassifyName }}</a>
        </div>
        <div v-if="item.username">
          <span>|</span>
          <el-icon>
            <UserFilled class="userFilled"/>
          </el-icon>
          <a :title="item.username">{{ item.username }}</a>
        </div>

      </div>
      <div>
        {{ item.bolgAbstract }}
      </div>
    </div>
  </div>
  <el-empty description="哦豁！这个地方是空的！" v-else/>
  <div class="page">
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


</template>

<script setup>

import {Calendar, Management, UserFilled} from "@element-plus/icons-vue"
import {getCurrentInstance} from "vue";
import router from "@/router";

const {proxy} = getCurrentInstance();
const props = defineProps({
  tableData: Object,
  loadingdata: Function,
})
const toDetil = (id) => {
  router.push(`/blogDetil/${id}`)
}

//分页
const handleSizeChange = () => {
  props.loadingdata({pageSize: props.tableData.pageSize, pageNum: props.tableData.pageNum})
}
const handleCurrentChange = () => {
  props.loadingdata({pageSize: props.tableData.pageSize, pageNum: props.tableData.pageNum})
}


</script>

<style lang="less" scoped>
.main {
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.5);
}

.main .cover {
  width: 180px;
  height: 180px;
}

.main .cover .img {
  margin: 10px;
  width: 90%;
  height: 90%;
}

.main .content {
  margin-left: 1rem;
  flex: 1;
  text-align: left;

  .title {
    font-size: 30px;
    font-weight: bold;
  }
}

.main .content .abstract {
  display: flex;
  align-items: center;

  .calendar {
    color: #2424e8;
  }

  .management {
    color: #d2691e;
  }

  .userFilled {
    color: white;
  }
}

.main .content .abstract span {
  margin-left: 5px;
  margin-right: 5px;
}

.page {
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