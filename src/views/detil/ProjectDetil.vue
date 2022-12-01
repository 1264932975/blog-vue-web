<template>

</template>

<script>
const loadingData = () => {
  let parames = {
    id: rowid.value,
    pageNum: blogData.value.pageNum,
    pageSize: blogData.value.pageSize,
  }
  blogApi.indexProjectPage(parames).then((res) => {
    if (res) {
      blogData.value = JSON.parse(JSON.stringify(res.data))
    }
  })
}
</script>

<style scoped>

</style>