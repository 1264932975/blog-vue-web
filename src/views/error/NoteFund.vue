<template>
  <el-empty description="404!!哦豁！走错地方了呦，没这个页面！" class="empty"/>
</template>

<script>
export default {
  name: "NoteFund"
}
</script>

<style lang="less" scoped>
.empty {
  :deep(.el-empty__description) p {
    color: red;
    font-size: 50px;
    font-weight: bold;
  }
}
</style>