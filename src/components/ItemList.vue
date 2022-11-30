<template>
  <div class="main">
    <div class="cover" :title="title">
      <img class="img" :src="proxy.globalUrl.imgUrl+cover" v-if="cover">
      <img class="img" src="../../public/logo.svg" v-else>
    </div>
    <div class="content">
      <div class="title" :title="title">
        {{ title }}
      </div>
      <div class="abstract">
        <time>
          <el-icon class="calendar">
            <Calendar/>
          </el-icon>
          {{ time }}
        </time>
        <div v-if="classify">
          <span>|</span>
          <el-icon class="management">
            <Management/>
          </el-icon>
          <a :title="classify">{{ classify }}</a>
        </div>
      </div>
      <div>
        {{ abstract }}
      </div>
    </div>
  </div>
</template>

<script setup>

import {Calendar, Management} from "@element-plus/icons-vue"
import {getCurrentInstance} from "vue";

const {proxy} = getCurrentInstance();
const props = defineProps({
  cover: {
    type: String,
  },
  title: {
    type: String
  },
  time: {
    type: Date
  },
  abstract: {
    type: String
  },
  classify: {
    type: String
  }
})
</script>

<style lang="less" scoped>
.main {
  display: flex;
  cursor: pointer;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.15);
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
}

.main .content .abstract span {
  margin-left: 5px;
  margin-right: 5px;
}


</style>