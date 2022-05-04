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
    {
      staticClass: "lzh-card",
      class: _vm.shadow ? "is-" + _vm.shadow + "-shadow" : "is-always-shadow",
    },
    [
      _c(
        "div",
        { staticClass: "lzh-card__header" },
        [
          _vm._t("header", function () {
            return [_vm._v(_vm._s(_vm.header))]
          }),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "lzh-card__body", style: _vm.bodyStyle },
        [_vm._t("default")],
        2
      ),
    ]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-0de4b971_0", { source: "@charset \"UTF-8\";\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Empty\n-------------------------- */\n/* Descriptions\n-------------------------- */\n/* Skeleton \n--------------------------*/\n/* Svg\n--------------- */\n/* Result\n-------------------------- */\n/* Break-point\n--------------------------*/\n/* BEM命名规范\n -------------------------- */\n.lzh-card[data-v-0de4b971] {\n  border-radius: 4px;\n  border: 1px solid #EBEEF5;\n  background-color: #FFFFFF;\n  overflow: hidden;\n  color: #303133;\n  transition: 0.3s;\n}\n.lzh-card.is-always-shadow[data-v-0de4b971] {\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n}\n.lzh-card.is-hover-shadow[data-v-0de4b971]:hover, .lzh-card.is-hover-shadow[data-v-0de4b971]:focus {\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n}\n.lzh-card .lzh-card__header[data-v-0de4b971] {\n  padding: 18px 20px;\n  border-bottom: 1px solid #EBEEF5;\n  box-sizing: border-box;\n}\n.lzh-card .lzh-card__body[data-v-0de4b971] {\n  padding: 20px;\n}\n\n/*# sourceMappingURL=Card.vue.map */", map: {"version":3,"sources":["Card.vue","D:\\vscode\\VscodeStorehouse\\组件库\\lzhUI\\packages\\card\\src\\Card.vue"],"names":[],"mappings":"AAAA,gBAAgB;AAChB,4BAA4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;ACkBX,WAAA;ADhBA,WAAW;AACX,WAAW;AACX;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;6BAC6B;AAC7B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;4BAC4B;AAC5B;2BAC2B;AAC3B;4BAC4B;AAC5B;4BAC4B;AAC5B;2BAC2B;AAC3B;iBACiB;AACjB;4BAC4B;AAC5B;2BAC2B;AAC3B;6BAC6B;AAC7B;EACE,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,2CAA2C;AAC7C;AAEA;EACE,2CAA2C;AAC7C;AAEA;EACE,kBAAkB;EAClB,gCAAgC;EAChC,sBAAsB;AACxB;AAEA;EACE,aAAa;AACf;;AAEA,mCAAmC","file":"Card.vue","sourcesContent":["@charset \"UTF-8\";\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Empty\n-------------------------- */\n/* Descriptions\n-------------------------- */\n/* Skeleton \n--------------------------*/\n/* Svg\n--------------- */\n/* Result\n-------------------------- */\n/* Break-point\n--------------------------*/\n/* BEM命名规范\n -------------------------- */\n.lzh-card {\n  border-radius: 4px;\n  border: 1px solid #EBEEF5;\n  background-color: #FFFFFF;\n  overflow: hidden;\n  color: #303133;\n  transition: 0.3s;\n}\n.lzh-card.is-always-shadow {\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n}\n\n.lzh-card.is-hover-shadow:hover, .lzh-card.is-hover-shadow:focus {\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n}\n\n.lzh-card .lzh-card__header {\n  padding: 18px 20px;\n  border-bottom: 1px solid #EBEEF5;\n  box-sizing: border-box;\n}\n\n.lzh-card .lzh-card__body {\n  padding: 20px;\n}\n\n/*# sourceMappingURL=Card.vue.map */","<template>\r\n  <div\r\n    class=\"lzh-card\"\r\n    :class=\"shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'\"\r\n  >\r\n    <div class=\"lzh-card__header\">\r\n      <slot name=\"header\">{{ header }}</slot>\r\n    </div>\r\n    <div class=\"lzh-card__body\" :style=\"bodyStyle\">\r\n      <slot></slot>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: \"LzhCard\",\r\n  props: {\r\n    header: {},\r\n    bodyStyle: {},\r\n    shadow: {\r\n      type: String,\r\n    },\r\n  },\r\n  methods: {},\r\n};\r\n</script>\r\n\r\n<style lang=\"scss\" scoped>\r\n@import \"./style/card.scss\";\r\n</style>\r\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-0de4b971";
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

export { __vue_component__ as default };
