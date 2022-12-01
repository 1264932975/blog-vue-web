<template>
  <div class="main">
    <div class="left">
      <ItemList :table-data="tableData" :loadingdata="loadingdata"/>

    </div>
    <div class="right">
      <el-card style="margin: 20px;background-color: transparent;border: none">
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
import {changeTitle} from "@/util/ChangeTitle";
import router from "@/router";


changeTitle("首页", "首页", "博客首页")





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
  display: flex;
}

.main .right {
  width: 400px;
}

.main .left {
  flex: 1;


}
</style>