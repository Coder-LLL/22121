<template>
  <div
    class="lzh-switch"
    role="switch"
    :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }"
    :aria-checked="checked"
    :aria-disabled="switchDisabled"
    @click.prevent="switchValue"
  >
    <input
      class="lzh-switch__input"
      type="checkbox"
      @change="handleChange"
      ref="input"
      :id="id"
      :name="name"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="switchDisabled"
      @keydown.enter="switchValue"
    />
    <span
      :class="[
        'lzh-switch__label',
        'lzh-switch__label--left',
        !checked ? 'is-active' : '',
      ]"
      v-if="inactiveText || inactiveIconClass"
    >
      <lzh-icon :class="inactiveIconClass" v-if="inactiveIconClass"></lzh-icon>
      <span v-if="!inactiveIconClass && activeText" aria-hidden="checked">
        {{ inactiveText }}
      </span>
    </span>

    <span
      class="lzh-switch__core"
      ref="core"
      :style="{ width: coreWidth + 'px' }"
    >
    </span>
    <span
      :class="[
        'lzh-switch__label',
        'lzh-switch__label--right',
        checked ? 'is-active' : '',
      ]"
      v-if="activeIconClass || activeText"
    >
      <lzh-icon :class="[activeIconClass]" v-if="activeIconClass"></lzh-icon>
      <span v-if="!activeIconClass && activeText" :aria-hidden="!checked">
        {{ activeText }}
      </span>
    </span>
  </div>
</template>

<script>
import Focus from "../../../static/src/mixins/focus.js";
import lzhIcon from "../../icon/dist/es/index.js";
export default {
  name: "LzhSwitch",
  mixins: [Focus("input")],
  components: {
    lzhIcon,
  },
  inject: {
    lzhForm: {
      default: "",
    },
  },
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 40,
    },
    activeIconClass: {
      type: String,
      default: "",
    },
    inactiveIconClass: {
      type: String,
      default: "",
    },
    activeText: String,
    inactiveText: String,
    activeColor: {
      type: String,
      default: "",
    },
    inactiveColor: {
      type: String,
      default: "",
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
    id: String,
  },
  data() {
    return {
      coreWidth: this.width,
    };
  },
  computed: {
    checked() {
      console.log("computed", this.value);
      return this.value === this.activeValue;
    },
    switchDisabled() {
      // 有可能在 form 里面使用的时候 在 form 上设置了 disable
      return this.disabled || (this.lzhForm || {}).disabled;
    },
  },
  watch: {
    checked() {
      // 修改 input 组件的 checked
      this.$refs.input.checked = this.checked;
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor();
      }
    },
  },
  created() {
    //  !~ -> 有一个规律 -(X+1)
    // 规范初始绑定的 value 值
    // 初始绑定的 value 值必须是 activeValue inactiveValue 其中的一种 否则就把该值修改为 inactiveValue
    if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
      this.$emit("input", this.inactiveValue);
    }
  },
  mounted() {
    /* istanbul ignore if */
    this.coreWidth = this.width || 40;
    if (this.activeColor || this.inactiveColor) {
      this.setBackgroundColor();
    }
    this.$refs.input.checked = this.checked;
  },
  methods: {
    handleChange() {
      const val = this.checked ? this.inactiveValue : this.activeValue;
      // 这里会发送事件给父组件 然后修改绑定的 value 值 value变化又导致 computed 里面的 checked 变化
      this.$emit("input", val);
      this.$emit("change", val);
      this.$nextTick(() => {
        // set input's checked property
        // in case parent refuses to change component's value
        if (this.$refs.input) {
          this.$refs.input.checked = this.checked;
        }
      });
    },
    switchValue() {
      // 在没有禁用的情况下才切换状态
      !this.switchDisabled && this.handleChange();
    },
    setBackgroundColor() {
      let newColor = this.checked ? this.activeColor : this.inactiveColor;
      console.log(newColor);
      this.$refs.core.style.borderColor = newColor;
      this.$refs.core.style.backgroundColor = newColor;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style/switch.scss";
</style>
