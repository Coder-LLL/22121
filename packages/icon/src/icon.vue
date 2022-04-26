<template>
  <i :class="'lzh-icon-' + name"></i>
</template>

<script>
export default {
  name: "LzhIcon",
  props: {
    // 图标名称
    name: String,
  },
};
</script>

<style lang="scss" scoped>
@import "./style/icon.scss";
</style>
