<template>
  <div class="lzh-badge">
    <slot></slot>

    <sup
      v-show="!hidden"
      class="lzh-badge__content"
      :class="[
        type ? 'lzh-badge__content--' + type : null,
        {
          'is-fixed': $slots.default,
          'is-dot': isDot,
        },
      ]"
      v-text="content"
    ></sup>
  </div>
</template>

<script>
export default {
  name: "LzhBadge",
  props: {
    value: {
      type: [String, Number],
    },
    hidden: Boolean,
    max: Number,
    isDot: Boolean,
    type: {
      type: String,
      validator(val) {
        return (
          ["primary", "success", "warning", "info", "danger"].indexOf(val) > -1
        );
      },
    },
  },
  methods: {},
  computed: {
    content() {
      if (this.isDot) return;
      const value = this.value;
      const max = this.max;
      // 当 value 和 max 都是 number 的时候 并且value大于num 则返回 max+
      if (typeof value === "number" && typeof max === "number") {
        return max < value ? `${max}+` : value;
      }
      return value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style/badge.scss";
</style>
