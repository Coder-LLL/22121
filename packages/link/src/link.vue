<template>
  <a
    class="lzh-link"
    :href="disabled ? null : href"
    :class="[
      'lzh-link',
      type ? `lzh-link--${type}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline',
    ]"
    @click="handleClick"
  >
    <Lzh-icon :class="icon" v-if="icon">1212</Lzh-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>

    <template v-if="$slots.icon">
      <slot name="icon"></slot>
    </template>
  </a>
</template>

<script>
import LzhIcon from "../../icon/src/icon.vue";
export default {
  name: "LzhLink",
  components: {
    LzhIcon,
  },
  props: {
    href: String,
    icon: String,
    type: {
      type: String,
      default: "default",
    },
    underline: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        if (!this.href) {
          this.$emit("click", event);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style/link.scss";
</style>
