<template>
  <button
    class="lzh-button"
    :class="[
      type ? 'lzh-button--' + type : '',
      buttonSize ? 'lzh-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
import iconVue from "../../icon/src/icon.vue";
export default {
  name: "LzhButton",
  components: {
    iconVue,
  },
  props: {
    // 按钮类型 primary success warning danger info
    type: {
      type: String,
      default: "default",
    },
    size: String,
    plain: Boolean,
    disabled: Boolean,
    round: Boolean,
    circle: Boolean,
  },
  computed: {
    buttonDisabled() {
      /*
      先判断 props 中有没有传 disable 没有的话就去看看 this。elForm 存在不 因为也有可能在 elForm上设置disable
      this.elForm是父组件（或者祖父组件）实例。如果el-button没有搭配el-form使用，则在el-button组件内访问不到this.elForm。
      */
      return this.$options.propsData.hasOwnProperty("disabled")
        ? this.disabled
        : (this.LzhForm || {}).disabled;
    },
    buttonSize() {
      return this.size || this._elFormItemSize || "small";
    },
  },
  methods: {
    handleClick(evt) {
      console.log(111);
      this.$emit("click", evt);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style/button.scss";
</style>
