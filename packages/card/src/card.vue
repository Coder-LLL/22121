<template>
  <div
    class="lzh-card"
    :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'"
  >
    <div class="lzh-card__header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="lzh-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LzhCard",
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: String,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./style/card.scss";
</style>
