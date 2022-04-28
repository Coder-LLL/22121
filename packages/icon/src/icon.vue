<template>
  <i :class="'lzh-icon-' + name" @click="iconClick"></i>
</template>

<script>
export default {
  name: "LzhIcon",
  props: {
    // 图标名称
    name: String,
  },
  methods: {
    iconClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style/icon.scss";
</style>
