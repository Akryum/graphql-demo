<template>
  <div class="search-result">
    <img :src="result.item.image"/>
    <div class="info">
      {{ result.item.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['result'],
}
</script>

<style lang="less" scoped>
.search-result {
  padding: 12px;
  background: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  &:not(:last-child) {
    margin-bottom: 6px;
  }
}

img {
  max-width: 100px;
  max-height: 100px;
  flex: auto 0 0;
}

.info {
  flex: auto 1 1;
  margin-left: 24px;
}
</style>
