<template>
  <transition name="lzh-alert-fade" appear>
    <!--  role 是增强语义性，当现有的HTML标签不能充分表达语义性的时候，就可以借助role来说明。-->
    <div
      class="lzh-alert"
      :class="[typeClass, 'is-' + effect, center ? 'is-center' : '']"
      v-show="visible"
      role="alert"
    >
      <lzh-icon
        class="lzh-alert__icon"
        :class="[iconClass, isBigIcon]"
        v-if="showicon"
      ></lzh-icon>
      <div class="lzh-alert__content">
        <!--  name 插槽存放 title   -->
        <span
          class="lzh-alert__title"
          :class="[isBoldTitle]"
          v-if="title || $slots.title"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <!-- desciption 和 默认插槽是一个效果 但是同时存在的话两个都不显示 -->
        <p class="lzh-alert__description" v-if="$slots.default && !description">
          <slot></slot>
        </p>
        <p class="lzh-alert__description" v-if="description && !$slots.default">
          {{ description }}
        </p>

        <lzh-icon
          class="lzh-alert__closebtn"
          :class="{
            'is-customed': closeText !== '',
            'lzh-icon-close': closeText === '',
          }"
          v-show="closable"
          @click="close"
          >{{ closeText }}
        </lzh-icon>
      </div>
    </div>
  </transition>
</template>

<script>
import lzhIcon from "../../icon/src/icon.vue";
// 不同类型的 alert 对应的图标
const TYPE_CLASSES_MAP = {
  success: "lzh-icon-success",
  warning: "lzh-icon-warning",
  error: "lzh-icon-error",
};
export default {
  name: "LzhAlert",
  components: {
    lzhIcon,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "info",
    },
    description: {
      type: String,
      default: "",
    },
    closable: {
      type: Boolean,
      default: true,
    },
    closeText: {
      type: String,
      default: "",
    },
    showicon: {
      type: Boolean,
      default: false,
    },
    center: Boolean,
    // 在传值时候进行强校验 只能是 light 或者 dark
    effect: {
      type: String,
      default: "light",
      validator: function (value) {
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      // 用于设置当前这个 alert 是否显示
      visible: true,
    };
  },
  computed: {
    typeClass() {
      return `lzh-alert--${this.type}`;
    },
    isBoldTitle() {
      // 默认插槽也是放到 description 那个位置。所以跟 description 效果一样
      return this.description || this.$slots.default ? "is-bold" : "";
    },
    iconClass() {
      return TYPE_CLASSES_MAP[this.type] || "lzh-icon-info";
    },
    isBigIcon() {
      return this.description || this.$slots.default ? "is-big" : "";
    },
  },
  mounted() {
    // console.log(this);
  },
  methods: {
    // 设置为不可见
    close() {
      this.visible = false;
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style/alert.scss";
</style>
