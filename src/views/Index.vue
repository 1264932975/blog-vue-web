<template>
  <div class="main">
    <div class="left">
      <ItemList :table-data="tableData" :loadingdata="loadingdata"/>

    </div>
    <div class="right" >
      <el-card style="margin: 20px;background-color: transparent;border: none" v-for="item in userList">
        <div class="u-img">
          <img
              :src="proxy.globalUrl.imgUrl+item.cover"
              style="width: 100%;height: 100%"
          />
        </div>
        <div style="padding: 14px">
          <span>{{ item.name }}</span>
          <br/>
          <span>{{ item.username }}</span>
          <div class="bottom">
            <span>文章数量：{{ item.count }}</span>
          </div>
        </div>
      </el-card>
    </div>

  </div>
</template>


<script setup>
import blogApi from "@/api/blogApi";
import {getCurrentInstance, reactive, ref} from "vue";
import {changeTitle} from "@/util/ChangeTitle";
import userApi from "@/api/userApi";

const {proxy} = getCurrentInstance();

changeTitle("首页", "首页", "博客首页")

//获取用户列表
const userList = reactive([])
const loadingUserList = () => {
  userApi.showUserList().then((res) => {
    if (res) {
      Object.assign(userList, res.data)
    }
  })
}
loadingUserList();


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
  width: 350px;
}

.main .left {
  flex: 1;


}
</style>