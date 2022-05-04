'use strict';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
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

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "lzh-badge" },
    [
      _vm._t("default"),
      _vm._v(" "),
      _c("sup", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.hidden,
            expression: "!hidden",
          },
        ],
        staticClass: "lzh-badge__content",
        class: [
          _vm.type ? "lzh-badge__content--" + _vm.type : null,
          {
            "is-fixed": _vm.$slots.default,
            "is-dot": _vm.isDot,
          },
        ],
        domProps: { textContent: _vm._s(_vm.content) },
      }),
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-37ee7a6e_0", { source: "@charset \"UTF-8\";\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Empty\n-------------------------- */\n/* Descriptions\n-------------------------- */\n/* Skeleton \n--------------------------*/\n/* Svg\n--------------- */\n/* Result\n-------------------------- */\n/* Break-point\n--------------------------*/\n/* BEM命名规范\n -------------------------- */\n.lzh-badge[data-v-37ee7a6e] {\n  position: relative;\n  vertical-align: middle;\n  display: inline-block;\n}\n.lzh-badge .lzh-badge__content[data-v-37ee7a6e] {\n  background-color: #F56C6C;\n  border-radius: 10px;\n  color: #FFFFFF;\n  display: inline-block;\n  font-size: 12px;\n  height: 18px;\n  line-height: 18px;\n  padding: 0 6px;\n  text-align: center;\n  white-space: nowrap;\n  border: 1px solid #FFFFFF;\n}\n.lzh-badge .lzh-badge__content.is-fixed[data-v-37ee7a6e] {\n  position: absolute;\n  top: 0;\n  right: 10px;\n  transform: translateY(-50%) translateX(100%);\n}\n.lzh-badge .lzh-badge__content.is-fixed.is-dot[data-v-37ee7a6e] {\n  right: 5px;\n}\n.lzh-badge .lzh-badge__content.is-dot[data-v-37ee7a6e] {\n  height: 8px;\n  width: 8px;\n  padding: 0;\n  right: 0;\n  border-radius: 50%;\n}\n.lzh-badge .lzh-badge__content--primary[data-v-37ee7a6e] {\n  background-color: #409EFF;\n}\n.lzh-badge .lzh-badge__content--success[data-v-37ee7a6e] {\n  background-color: #67C23A;\n}\n.lzh-badge .lzh-badge__content--warning[data-v-37ee7a6e] {\n  background-color: #E6A23C;\n}\n.lzh-badge .lzh-badge__content--info[data-v-37ee7a6e] {\n  background-color: #909399;\n}\n.lzh-badge .lzh-badge__content--danger[data-v-37ee7a6e] {\n  background-color: #F56C6C;\n}\n\n/*# sourceMappingURL=Badge.vue.map */", map: {"version":3,"sources":["Badge.vue","D:\\vscode\\VscodeStorehouse\\组件库\\lzhUI\\packages\\badge\\src\\Badge.vue"],"names":[],"mappings":"AAAA,gBAAgB;AAChB,4BAA4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;6BAC6B;AAC7B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;4BAC4B;AAC5B;2BAC2B;AAC3B;4BAC4B;AAC5B;4BAC4B;AAC5B;2BAC2B;AAC3B;iBACiB;AACjB;4BAC4B;AAC5B;2BAC2B;AAC3B;6BAC6B;AAC7B;EACE,kBAAkB;EAClB,sBAAsB;EACtB,qBAAqB;AACvB;AACA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,cAAc;EACd,qBAAqB;EACrB,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,4CAA4C;AAC9C;AACA;EACE,UAAU;AACZ;AAEA;EACE,WAAW;EACX,UAAU;EACV,UAAU;EACV,QAAQ;EACR,kBAAkB;AACpB;AAEA;EACE,yBAAyB;AAC3B;AAEA;EACE,yBAAyB;AAC3B;AAEA;EACE,yBAAyB;AAC3B;AAEA;EC9HA,yBAAA;ADgIA;AAEA;EACE,yBAAyB;AAC3B;;AAEA,oCAAoC","file":"Badge.vue","sourcesContent":["@charset \"UTF-8\";\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Empty\n-------------------------- */\n/* Descriptions\n-------------------------- */\n/* Skeleton \n--------------------------*/\n/* Svg\n--------------- */\n/* Result\n-------------------------- */\n/* Break-point\n--------------------------*/\n/* BEM命名规范\n -------------------------- */\n.lzh-badge {\n  position: relative;\n  vertical-align: middle;\n  display: inline-block;\n}\n.lzh-badge .lzh-badge__content {\n  background-color: #F56C6C;\n  border-radius: 10px;\n  color: #FFFFFF;\n  display: inline-block;\n  font-size: 12px;\n  height: 18px;\n  line-height: 18px;\n  padding: 0 6px;\n  text-align: center;\n  white-space: nowrap;\n  border: 1px solid #FFFFFF;\n}\n.lzh-badge .lzh-badge__content.is-fixed {\n  position: absolute;\n  top: 0;\n  right: 10px;\n  transform: translateY(-50%) translateX(100%);\n}\n.lzh-badge .lzh-badge__content.is-fixed.is-dot {\n  right: 5px;\n}\n\n.lzh-badge .lzh-badge__content.is-dot {\n  height: 8px;\n  width: 8px;\n  padding: 0;\n  right: 0;\n  border-radius: 50%;\n}\n\n.lzh-badge .lzh-badge__content--primary {\n  background-color: #409EFF;\n}\n\n.lzh-badge .lzh-badge__content--success {\n  background-color: #67C23A;\n}\n\n.lzh-badge .lzh-badge__content--warning {\n  background-color: #E6A23C;\n}\n\n.lzh-badge .lzh-badge__content--info {\n  background-color: #909399;\n}\n\n.lzh-badge .lzh-badge__content--danger {\n  background-color: #F56C6C;\n}\n\n/*# sourceMappingURL=Badge.vue.map */","<template>\r\n  <div class=\"lzh-badge\">\r\n    <slot></slot>\r\n\r\n    <sup\r\n      v-show=\"!hidden\"\r\n      class=\"lzh-badge__content\"\r\n      :class=\"[\r\n        type ? 'lzh-badge__content--' + type : null,\r\n        {\r\n          'is-fixed': $slots.default,\r\n          'is-dot': isDot,\r\n        },\r\n      ]\"\r\n      v-text=\"content\"\r\n    ></sup>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: \"LzhBadge\",\r\n  props: {\r\n    value: {\r\n      type: [String, Number],\r\n    },\r\n    hidden: Boolean,\r\n    max: Number,\r\n    isDot: Boolean,\r\n    type: {\r\n      type: String,\r\n      validator(val) {\r\n        return (\r\n          [\"primary\", \"success\", \"warning\", \"info\", \"danger\"].indexOf(val) > -1\r\n        );\r\n      },\r\n    },\r\n  },\r\n  methods: {},\r\n  computed: {\r\n    content() {\r\n      if (this.isDot) return;\r\n      const value = this.value;\r\n      const max = this.max;\r\n      // 当 value 和 max 都是 number 的时候 并且value大于num 则返回 max+\r\n      if (typeof value === \"number\" && typeof max === \"number\") {\r\n        return max < value ? `${max}+` : value;\r\n      }\r\n      return value;\r\n    },\r\n  },\r\n};\r\n</script>\r\n\r\n<style lang=\"scss\" scoped>\r\n@import \"./style/badge.scss\";\r\n</style>\r\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-37ee7a6e";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

__vue_component__ .install = Vue => {
  Vue.component(__vue_component__ .name, __vue_component__ );
};

module.exports = __vue_component__;
