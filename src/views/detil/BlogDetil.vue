<template>
  <h1 :title="blogData.bolgTitle">{{ blogData.bolgTitle }}</h1>
  <div class="header">
    <div :title="blogData.username" class="username">
      <el-icon>
        <UserFilled class="userFilled"/>
      </el-icon>
      作者：{{ blogData.username }}
    </div>
    <div class="tag">
      <el-icon>
        <PriceTag class="priceTag"/>
      </el-icon>
      标签：
      <el-tag v-for="item in blogData.bolgTag" :title="item">{{ item }}</el-tag>
    </div>
    <div :title="blogData.bolgClassifyName" class="classify">
      <el-icon class="management">
        <Management/>
      </el-icon>
      分类:{{ blogData.bolgClassifyName }}
    </div>
    <div class="updataTime">
      <el-icon class="calendar">
        <Calendar/>
      </el-icon>
      创作时间:
      <time>
        {{ blogData.updateTime }}
      </time>
    </div>
  </div>
  <div class="main">
    <div class="markDown">
      <v-md-preview ref="preview" :text="blogData.bolgText" @copy-code-success="handleCopyCodeSuccess"></v-md-preview>
    </div>

    <div class="menu">
      <h1>目录</h1>
      <div
          v-for="(item,index) in titleList"
          :style="{paddingLeft:  item.indent*15+'px' }"
          @click="handleAnchorClick(item,index)"
          :class="index==heightTitle?'title-active':''"
      >
        <a style="cursor: pointer">{{ item.title }}</a>
      </div>
    </div>

  </div>
</template>

<script setup>
import {useRoute} from "vue-router"
import blogApi from "@/api/blogApi";
import {h, nextTick, reactive, ref} from "vue";
import {changeTitle} from "@/util/ChangeTitle";
import {Calendar, Management, UserFilled, PriceTag} from "@element-plus/icons-vue"
import {ElNotification} from "element-plus";


changeTitle("博客详情", "博客详情", "博客详情")
const route = useRoute()


import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
// highlightjs
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import java from 'highlight.js/lib/languages/java';
import xml from 'highlight.js/lib/languages/xml';
import sql from 'highlight.js/lib/languages/sql';
import javascript from 'highlight.js/lib/languages/javascript';
import shell from 'highlight.js/lib/languages/shell';
import nginx from 'highlight.js/lib/languages/nginx';
import css from 'highlight.js/lib/languages/css';

hljs.registerLanguage('json', json);
hljs.registerLanguage('java', java);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('sh', shell);
hljs.registerLanguage('nginx', nginx);
hljs.registerLanguage('css', css);
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
VMdPreview.use(createEmojiPlugin());
VMdPreview.use(createLineNumbertPlugin());
VMdPreview.use(createCopyCodePlugin());
const handleCopyCodeSuccess = () => {
  ElNotification({
    title: '复制成功',
    message: h('i', '代码已复制到剪切板'),
  })
}


//导航
const preview = ref([])
const titleList = ref([])
//获取目录
const createTop = () => {
  const anchors = preview.value.$el.querySelectorAll('h1,h2,h3,h4,h5,h6');
  const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());

  if (!titles.length) {
    titleList.value = [];
    return;
  }

  const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort();

  titleList.value = titles.map((el) => ({
    title: el.innerText,
    lineIndex: el.getAttribute('data-v-md-line'),
    indent: hTags.indexOf(el.tagName),
  }));
}
//跳转目录//锚点
const heightTitle = ref(0)
const handleAnchorClick = (item, index) => {
  const heading = preview.value.$el.querySelector(`[data-v-md-line="${item.lineIndex}"]`);
  if (heading) {
    heading.scrollIntoView({behavior: "smooth", block: "start"})
  }
  // 修改当前高亮的标题
  heightTitle.value = index
}


//获取数据
const blogData = reactive({})
const loadingData = () => {
  blogApi.showBlog({id: route.params.id}).then((res) => {
    if (res) {
      Object.assign(blogData, res.data)
      changeTitle(blogData.bolgTitle, blogData.bolgTag, blogData.bolgAbstract)
      try {
        blogData.bolgTag = blogData.bolgTag.split(',')
      } catch (e) {
      }
      nextTick(() => {
        createTop()
      })
    }
  })
}
loadingData();

</script>

<style lang="less" scoped>
.main {
  padding-left: 5rem;
  display: flex;


  .menu {
    width: 19rem;
    text-align: left;
    position: fixed;
    right: 0.1rem;
    top: 20vh;

    .title-active {
      background-color: rgba(255, 255, 255, 0.4);
      color: rgba(0, 0, 0, 1);
      border-left: 0.3rem solid #55038a;
    }
  }

  .markDown {
    text-align: left;
    flex: 0.83;
    border-left: black solid;
  }
}


.header {
  padding-lef: 5rem;
  display: flex;
  align-items: center;

  .tag {
    margin-left: 1rem;

    span {
      margin-left: 0.1rem;
    }

    .priceTag {
      color: #d97dd9;
    }

  }

  .updataTime {
    margin-left: 1rem;

    .calendar {
      color: #2424e8;
    }
  }

  .classify {
    margin-left: 1rem;

    .management {
      color: #d2691e;
    }
  }

  .username {
    .userFilled {
      color: white;
    }
  }
}


</style>