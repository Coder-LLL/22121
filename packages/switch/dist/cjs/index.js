'use strict';

function Focus (ref) {
  return {
    methods: {
      focus() {
        console.log("mixins中的focus方法被调用");
        this.$refs[ref].focus();
      }
    }
  }
}

//
//
//
//

var script$1 = {
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

function normalizeComponent$1(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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

const isOldIE$1 = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector$1(context) {
    return (id, style) => addStyle$1(id, style);
}
let HEAD$1;
const styles$1 = {};
function addStyle$1(id, css) {
    const group = isOldIE$1 ? css.media || 'default' : id;
    const style = styles$1[group] || (styles$1[group] = { ids: new Set(), styles: [] });
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
            if (HEAD$1 === undefined) {
                HEAD$1 = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD$1.appendChild(style.element);
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
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("i", {
    class: "lzh-icon-" + _vm.name,
    on: { click: _vm.iconClick },
  })
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-7fa03e62_0", { source: "/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Empty\n-------------------------- */\n/* Descriptions\n-------------------------- */\n/* Skeleton \n--------------------------*/\n/* Svg\n--------------- */\n/* Result\n-------------------------- */\n/* Break-point\n--------------------------*/\n@font-face {\n  font-family: \"element-icons\";\n  src: url(\"fonts/element-icons.woff\") format(\"woff\"), url(\"fonts/element-icons.ttf\") format(\"truetype\");\n  /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/\n  font-weight: normal;\n  font-display: \"auto\";\n  font-style: normal;\n}\n[class^=lzh-icon-][data-v-7fa03e62],\n[class*=\" lzh-icon-\"][data-v-7fa03e62] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"element-icons\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  vertical-align: baseline;\n  display: inline-block;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.lzh-icon-ice-cream-round[data-v-7fa03e62]:before {\n  content: \"\\e6a0\";\n}\n.lzh-icon-ice-cream-square[data-v-7fa03e62]:before {\n  content: \"\\e6a3\";\n}\n.lzh-icon-lollipop[data-v-7fa03e62]:before {\n  content: \"\\e6a4\";\n}\n.lzh-icon-potato-strips[data-v-7fa03e62]:before {\n  content: \"\\e6a5\";\n}\n.lzh-icon-milk-tea[data-v-7fa03e62]:before {\n  content: \"\\e6a6\";\n}\n.lzh-icon-ice-drink[data-v-7fa03e62]:before {\n  content: \"\\e6a7\";\n}\n.lzh-icon-ice-tea[data-v-7fa03e62]:before {\n  content: \"\\e6a9\";\n}\n.lzh-icon-coffee[data-v-7fa03e62]:before {\n  content: \"\\e6aa\";\n}\n.lzh-icon-orange[data-v-7fa03e62]:before {\n  content: \"\\e6ab\";\n}\n.lzh-icon-pear[data-v-7fa03e62]:before {\n  content: \"\\e6ac\";\n}\n.lzh-icon-apple[data-v-7fa03e62]:before {\n  content: \"\\e6ad\";\n}\n.lzh-icon-cherry[data-v-7fa03e62]:before {\n  content: \"\\e6ae\";\n}\n.lzh-icon-watermelon[data-v-7fa03e62]:before {\n  content: \"\\e6af\";\n}\n.lzh-icon-grape[data-v-7fa03e62]:before {\n  content: \"\\e6b0\";\n}\n.lzh-icon-refrigerator[data-v-7fa03e62]:before {\n  content: \"\\e6b1\";\n}\n.lzh-icon-goblet-square-full[data-v-7fa03e62]:before {\n  content: \"\\e6b2\";\n}\n.lzh-icon-goblet-square[data-v-7fa03e62]:before {\n  content: \"\\e6b3\";\n}\n.lzh-icon-goblet-full[data-v-7fa03e62]:before {\n  content: \"\\e6b4\";\n}\n.lzh-icon-goblet[data-v-7fa03e62]:before {\n  content: \"\\e6b5\";\n}\n.lzh-icon-cold-drink[data-v-7fa03e62]:before {\n  content: \"\\e6b6\";\n}\n.lzh-icon-coffee-cup[data-v-7fa03e62]:before {\n  content: \"\\e6b8\";\n}\n.lzh-icon-water-cup[data-v-7fa03e62]:before {\n  content: \"\\e6b9\";\n}\n.lzh-icon-hot-water[data-v-7fa03e62]:before {\n  content: \"\\e6ba\";\n}\n.lzh-icon-ice-cream[data-v-7fa03e62]:before {\n  content: \"\\e6bb\";\n}\n.lzh-icon-dessert[data-v-7fa03e62]:before {\n  content: \"\\e6bc\";\n}\n.lzh-icon-sugar[data-v-7fa03e62]:before {\n  content: \"\\e6bd\";\n}\n.lzh-icon-tableware[data-v-7fa03e62]:before {\n  content: \"\\e6be\";\n}\n.lzh-icon-burger[data-v-7fa03e62]:before {\n  content: \"\\e6bf\";\n}\n.lzh-icon-knife-fork[data-v-7fa03e62]:before {\n  content: \"\\e6c1\";\n}\n.lzh-icon-fork-spoon[data-v-7fa03e62]:before {\n  content: \"\\e6c2\";\n}\n.lzh-icon-chicken[data-v-7fa03e62]:before {\n  content: \"\\e6c3\";\n}\n.lzh-icon-food[data-v-7fa03e62]:before {\n  content: \"\\e6c4\";\n}\n.lzh-icon-dish-1[data-v-7fa03e62]:before {\n  content: \"\\e6c5\";\n}\n.lzh-icon-dish[data-v-7fa03e62]:before {\n  content: \"\\e6c6\";\n}\n.lzh-icon-moon-night[data-v-7fa03e62]:before {\n  content: \"\\e6ee\";\n}\n.lzh-icon-moon[data-v-7fa03e62]:before {\n  content: \"\\e6f0\";\n}\n.lzh-icon-cloudy-and-sunny[data-v-7fa03e62]:before {\n  content: \"\\e6f1\";\n}\n.lzh-icon-partly-cloudy[data-v-7fa03e62]:before {\n  content: \"\\e6f2\";\n}\n.lzh-icon-cloudy[data-v-7fa03e62]:before {\n  content: \"\\e6f3\";\n}\n.lzh-icon-sunny[data-v-7fa03e62]:before {\n  content: \"\\e6f6\";\n}\n.lzh-icon-sunset[data-v-7fa03e62]:before {\n  content: \"\\e6f7\";\n}\n.lzh-icon-sunrise-1[data-v-7fa03e62]:before {\n  content: \"\\e6f8\";\n}\n.lzh-icon-sunrise[data-v-7fa03e62]:before {\n  content: \"\\e6f9\";\n}\n.lzh-icon-heavy-rain[data-v-7fa03e62]:before {\n  content: \"\\e6fa\";\n}\n.lzh-icon-lightning[data-v-7fa03e62]:before {\n  content: \"\\e6fb\";\n}\n.lzh-icon-light-rain[data-v-7fa03e62]:before {\n  content: \"\\e6fc\";\n}\n.lzh-icon-wind-power[data-v-7fa03e62]:before {\n  content: \"\\e6fd\";\n}\n.lzh-icon-baseball[data-v-7fa03e62]:before {\n  content: \"\\e712\";\n}\n.lzh-icon-soccer[data-v-7fa03e62]:before {\n  content: \"\\e713\";\n}\n.lzh-icon-football[data-v-7fa03e62]:before {\n  content: \"\\e715\";\n}\n.lzh-icon-basketball[data-v-7fa03e62]:before {\n  content: \"\\e716\";\n}\n.lzh-icon-ship[data-v-7fa03e62]:before {\n  content: \"\\e73f\";\n}\n.lzh-icon-truck[data-v-7fa03e62]:before {\n  content: \"\\e740\";\n}\n.lzh-icon-bicycle[data-v-7fa03e62]:before {\n  content: \"\\e741\";\n}\n.lzh-icon-mobile-phone[data-v-7fa03e62]:before {\n  content: \"\\e6d3\";\n}\n.lzh-icon-service[data-v-7fa03e62]:before {\n  content: \"\\e6d4\";\n}\n.lzh-icon-key[data-v-7fa03e62]:before {\n  content: \"\\e6e2\";\n}\n.lzh-icon-unlock[data-v-7fa03e62]:before {\n  content: \"\\e6e4\";\n}\n.lzh-icon-lock[data-v-7fa03e62]:before {\n  content: \"\\e6e5\";\n}\n.lzh-icon-watch[data-v-7fa03e62]:before {\n  content: \"\\e6fe\";\n}\n.lzh-icon-watch-1[data-v-7fa03e62]:before {\n  content: \"\\e6ff\";\n}\n.lzh-icon-timer[data-v-7fa03e62]:before {\n  content: \"\\e702\";\n}\n.lzh-icon-alarm-clock[data-v-7fa03e62]:before {\n  content: \"\\e703\";\n}\n.lzh-icon-map-location[data-v-7fa03e62]:before {\n  content: \"\\e704\";\n}\n.lzh-icon-delete-location[data-v-7fa03e62]:before {\n  content: \"\\e705\";\n}\n.lzh-icon-add-location[data-v-7fa03e62]:before {\n  content: \"\\e706\";\n}\n.lzh-icon-location-information[data-v-7fa03e62]:before {\n  content: \"\\e707\";\n}\n.lzh-icon-location-outline[data-v-7fa03e62]:before {\n  content: \"\\e708\";\n}\n.lzh-icon-location[data-v-7fa03e62]:before {\n  content: \"\\e79e\";\n}\n.lzh-icon-place[data-v-7fa03e62]:before {\n  content: \"\\e709\";\n}\n.lzh-icon-discover[data-v-7fa03e62]:before {\n  content: \"\\e70a\";\n}\n.lzh-icon-first-aid-kit[data-v-7fa03e62]:before {\n  content: \"\\e70b\";\n}\n.lzh-icon-trophy-1[data-v-7fa03e62]:before {\n  content: \"\\e70c\";\n}\n.lzh-icon-trophy[data-v-7fa03e62]:before {\n  content: \"\\e70d\";\n}\n.lzh-icon-medal[data-v-7fa03e62]:before {\n  content: \"\\e70e\";\n}\n.lzh-icon-medal-1[data-v-7fa03e62]:before {\n  content: \"\\e70f\";\n}\n.lzh-icon-stopwatch[data-v-7fa03e62]:before {\n  content: \"\\e710\";\n}\n.lzh-icon-mic[data-v-7fa03e62]:before {\n  content: \"\\e711\";\n}\n.lzh-icon-copy-document[data-v-7fa03e62]:before {\n  content: \"\\e718\";\n}\n.lzh-icon-full-screen[data-v-7fa03e62]:before {\n  content: \"\\e719\";\n}\n.lzh-icon-switch-button[data-v-7fa03e62]:before {\n  content: \"\\e71b\";\n}\n.lzh-icon-aim[data-v-7fa03e62]:before {\n  content: \"\\e71c\";\n}\n.lzh-icon-crop[data-v-7fa03e62]:before {\n  content: \"\\e71d\";\n}\n.lzh-icon-odometer[data-v-7fa03e62]:before {\n  content: \"\\e71e\";\n}\n.lzh-icon-time[data-v-7fa03e62]:before {\n  content: \"\\e71f\";\n}\n.lzh-icon-bangzhu[data-v-7fa03e62]:before {\n  content: \"\\e724\";\n}\n.lzh-icon-close-notification[data-v-7fa03e62]:before {\n  content: \"\\e726\";\n}\n.lzh-icon-microphone[data-v-7fa03e62]:before {\n  content: \"\\e727\";\n}\n.lzh-icon-turn-off-microphone[data-v-7fa03e62]:before {\n  content: \"\\e728\";\n}\n.lzh-icon-position[data-v-7fa03e62]:before {\n  content: \"\\e729\";\n}\n.lzh-icon-postcard[data-v-7fa03e62]:before {\n  content: \"\\e72a\";\n}\n.lzh-icon-message[data-v-7fa03e62]:before {\n  content: \"\\e72b\";\n}\n.lzh-icon-chat-line-square[data-v-7fa03e62]:before {\n  content: \"\\e72d\";\n}\n.lzh-icon-chat-dot-square[data-v-7fa03e62]:before {\n  content: \"\\e72e\";\n}\n.lzh-icon-chat-dot-round[data-v-7fa03e62]:before {\n  content: \"\\e72f\";\n}\n.lzh-icon-chat-square[data-v-7fa03e62]:before {\n  content: \"\\e730\";\n}\n.lzh-icon-chat-line-round[data-v-7fa03e62]:before {\n  content: \"\\e731\";\n}\n.lzh-icon-chat-round[data-v-7fa03e62]:before {\n  content: \"\\e732\";\n}\n.lzh-icon-set-up[data-v-7fa03e62]:before {\n  content: \"\\e733\";\n}\n.lzh-icon-turn-off[data-v-7fa03e62]:before {\n  content: \"\\e734\";\n}\n.lzh-icon-open[data-v-7fa03e62]:before {\n  content: \"\\e735\";\n}\n.lzh-icon-connection[data-v-7fa03e62]:before {\n  content: \"\\e736\";\n}\n.lzh-icon-link[data-v-7fa03e62]:before {\n  content: \"\\e737\";\n}\n.lzh-icon-cpu[data-v-7fa03e62]:before {\n  content: \"\\e738\";\n}\n.lzh-icon-thumb[data-v-7fa03e62]:before {\n  content: \"\\e739\";\n}\n.lzh-icon-female[data-v-7fa03e62]:before {\n  content: \"\\e73a\";\n}\n.lzh-icon-male[data-v-7fa03e62]:before {\n  content: \"\\e73b\";\n}\n.lzh-icon-guide[data-v-7fa03e62]:before {\n  content: \"\\e73c\";\n}\n.lzh-icon-news[data-v-7fa03e62]:before {\n  content: \"\\e73e\";\n}\n.lzh-icon-price-tag[data-v-7fa03e62]:before {\n  content: \"\\e744\";\n}\n.lzh-icon-discount[data-v-7fa03e62]:before {\n  content: \"\\e745\";\n}\n.lzh-icon-wallet[data-v-7fa03e62]:before {\n  content: \"\\e747\";\n}\n.lzh-icon-coin[data-v-7fa03e62]:before {\n  content: \"\\e748\";\n}\n.lzh-icon-money[data-v-7fa03e62]:before {\n  content: \"\\e749\";\n}\n.lzh-icon-bank-card[data-v-7fa03e62]:before {\n  content: \"\\e74a\";\n}\n.lzh-icon-box[data-v-7fa03e62]:before {\n  content: \"\\e74b\";\n}\n.lzh-icon-present[data-v-7fa03e62]:before {\n  content: \"\\e74c\";\n}\n.lzh-icon-sell[data-v-7fa03e62]:before {\n  content: \"\\e6d5\";\n}\n.lzh-icon-sold-out[data-v-7fa03e62]:before {\n  content: \"\\e6d6\";\n}\n.lzh-icon-shopping-bag-2[data-v-7fa03e62]:before {\n  content: \"\\e74d\";\n}\n.lzh-icon-shopping-bag-1[data-v-7fa03e62]:before {\n  content: \"\\e74e\";\n}\n.lzh-icon-shopping-cart-2[data-v-7fa03e62]:before {\n  content: \"\\e74f\";\n}\n.lzh-icon-shopping-cart-1[data-v-7fa03e62]:before {\n  content: \"\\e750\";\n}\n.lzh-icon-shopping-cart-full[data-v-7fa03e62]:before {\n  content: \"\\e751\";\n}\n.lzh-icon-smoking[data-v-7fa03e62]:before {\n  content: \"\\e752\";\n}\n.lzh-icon-no-smoking[data-v-7fa03e62]:before {\n  content: \"\\e753\";\n}\n.lzh-icon-house[data-v-7fa03e62]:before {\n  content: \"\\e754\";\n}\n.lzh-icon-table-lamp[data-v-7fa03e62]:before {\n  content: \"\\e755\";\n}\n.lzh-icon-school[data-v-7fa03e62]:before {\n  content: \"\\e756\";\n}\n.lzh-icon-office-building[data-v-7fa03e62]:before {\n  content: \"\\e757\";\n}\n.lzh-icon-toilet-paper[data-v-7fa03e62]:before {\n  content: \"\\e758\";\n}\n.lzh-icon-notebook-2[data-v-7fa03e62]:before {\n  content: \"\\e759\";\n}\n.lzh-icon-notebook-1[data-v-7fa03e62]:before {\n  content: \"\\e75a\";\n}\n.lzh-icon-files[data-v-7fa03e62]:before {\n  content: \"\\e75b\";\n}\n.lzh-icon-collection[data-v-7fa03e62]:before {\n  content: \"\\e75c\";\n}\n.lzh-icon-receiving[data-v-7fa03e62]:before {\n  content: \"\\e75d\";\n}\n.lzh-icon-suitcase-1[data-v-7fa03e62]:before {\n  content: \"\\e760\";\n}\n.lzh-icon-suitcase[data-v-7fa03e62]:before {\n  content: \"\\e761\";\n}\n.lzh-icon-film[data-v-7fa03e62]:before {\n  content: \"\\e763\";\n}\n.lzh-icon-collection-tag[data-v-7fa03e62]:before {\n  content: \"\\e765\";\n}\n.lzh-icon-data-analysis[data-v-7fa03e62]:before {\n  content: \"\\e766\";\n}\n.lzh-icon-pie-chart[data-v-7fa03e62]:before {\n  content: \"\\e767\";\n}\n.lzh-icon-data-board[data-v-7fa03e62]:before {\n  content: \"\\e768\";\n}\n.lzh-icon-data-line[data-v-7fa03e62]:before {\n  content: \"\\e76d\";\n}\n.lzh-icon-reading[data-v-7fa03e62]:before {\n  content: \"\\e769\";\n}\n.lzh-icon-magic-stick[data-v-7fa03e62]:before {\n  content: \"\\e76a\";\n}\n.lzh-icon-coordinate[data-v-7fa03e62]:before {\n  content: \"\\e76b\";\n}\n.lzh-icon-mouse[data-v-7fa03e62]:before {\n  content: \"\\e76c\";\n}\n.lzh-icon-brush[data-v-7fa03e62]:before {\n  content: \"\\e76e\";\n}\n.lzh-icon-headset[data-v-7fa03e62]:before {\n  content: \"\\e76f\";\n}\n.lzh-icon-umbrella[data-v-7fa03e62]:before {\n  content: \"\\e770\";\n}\n.lzh-icon-scissors[data-v-7fa03e62]:before {\n  content: \"\\e771\";\n}\n.lzh-icon-mobile[data-v-7fa03e62]:before {\n  content: \"\\e773\";\n}\n.lzh-icon-attract[data-v-7fa03e62]:before {\n  content: \"\\e774\";\n}\n.lzh-icon-monitor[data-v-7fa03e62]:before {\n  content: \"\\e775\";\n}\n.lzh-icon-search[data-v-7fa03e62]:before {\n  content: \"\\e778\";\n}\n.lzh-icon-takeaway-box[data-v-7fa03e62]:before {\n  content: \"\\e77a\";\n}\n.lzh-icon-paperclip[data-v-7fa03e62]:before {\n  content: \"\\e77d\";\n}\n.lzh-icon-printer[data-v-7fa03e62]:before {\n  content: \"\\e77e\";\n}\n.lzh-icon-document-add[data-v-7fa03e62]:before {\n  content: \"\\e782\";\n}\n.lzh-icon-document[data-v-7fa03e62]:before {\n  content: \"\\e785\";\n}\n.lzh-icon-document-checked[data-v-7fa03e62]:before {\n  content: \"\\e786\";\n}\n.lzh-icon-document-copy[data-v-7fa03e62]:before {\n  content: \"\\e787\";\n}\n.lzh-icon-document-delete[data-v-7fa03e62]:before {\n  content: \"\\e788\";\n}\n.lzh-icon-document-remove[data-v-7fa03e62]:before {\n  content: \"\\e789\";\n}\n.lzh-icon-tickets[data-v-7fa03e62]:before {\n  content: \"\\e78b\";\n}\n.lzh-icon-folder-checked[data-v-7fa03e62]:before {\n  content: \"\\e77f\";\n}\n.lzh-icon-folder-delete[data-v-7fa03e62]:before {\n  content: \"\\e780\";\n}\n.lzh-icon-folder-remove[data-v-7fa03e62]:before {\n  content: \"\\e781\";\n}\n.lzh-icon-folder-add[data-v-7fa03e62]:before {\n  content: \"\\e783\";\n}\n.lzh-icon-folder-opened[data-v-7fa03e62]:before {\n  content: \"\\e784\";\n}\n.lzh-icon-folder[data-v-7fa03e62]:before {\n  content: \"\\e78a\";\n}\n.lzh-icon-edit-outline[data-v-7fa03e62]:before {\n  content: \"\\e764\";\n}\n.lzh-icon-edit[data-v-7fa03e62]:before {\n  content: \"\\e78c\";\n}\n.lzh-icon-date[data-v-7fa03e62]:before {\n  content: \"\\e78e\";\n}\n.lzh-icon-c-scale-to-original[data-v-7fa03e62]:before {\n  content: \"\\e7c6\";\n}\n.lzh-icon-view[data-v-7fa03e62]:before {\n  content: \"\\e6ce\";\n}\n.lzh-icon-loading[data-v-7fa03e62]:before {\n  content: \"\\e6cf\";\n}\n.lzh-icon-rank[data-v-7fa03e62]:before {\n  content: \"\\e6d1\";\n}\n.lzh-icon-sort-down[data-v-7fa03e62]:before {\n  content: \"\\e7c4\";\n}\n.lzh-icon-sort-up[data-v-7fa03e62]:before {\n  content: \"\\e7c5\";\n}\n.lzh-icon-sort[data-v-7fa03e62]:before {\n  content: \"\\e6d2\";\n}\n.lzh-icon-finished[data-v-7fa03e62]:before {\n  content: \"\\e6cd\";\n}\n.lzh-icon-refresh-left[data-v-7fa03e62]:before {\n  content: \"\\e6c7\";\n}\n.lzh-icon-refresh-right[data-v-7fa03e62]:before {\n  content: \"\\e6c8\";\n}\n.lzh-icon-refresh[data-v-7fa03e62]:before {\n  content: \"\\e6d0\";\n}\n.lzh-icon-video-play[data-v-7fa03e62]:before {\n  content: \"\\e7c0\";\n}\n.lzh-icon-video-pause[data-v-7fa03e62]:before {\n  content: \"\\e7c1\";\n}\n.lzh-icon-d-arrow-right[data-v-7fa03e62]:before {\n  content: \"\\e6dc\";\n}\n.lzh-icon-d-arrow-left[data-v-7fa03e62]:before {\n  content: \"\\e6dd\";\n}\n.lzh-icon-arrow-up[data-v-7fa03e62]:before {\n  content: \"\\e6e1\";\n}\n.lzh-icon-arrow-down[data-v-7fa03e62]:before {\n  content: \"\\e6df\";\n}\n.lzh-icon-arrow-right[data-v-7fa03e62]:before {\n  content: \"\\e6e0\";\n}\n.lzh-icon-arrow-left[data-v-7fa03e62]:before {\n  content: \"\\e6de\";\n}\n.lzh-icon-top-right[data-v-7fa03e62]:before {\n  content: \"\\e6e7\";\n}\n.lzh-icon-top-left[data-v-7fa03e62]:before {\n  content: \"\\e6e8\";\n}\n.lzh-icon-top[data-v-7fa03e62]:before {\n  content: \"\\e6e6\";\n}\n.lzh-icon-bottom[data-v-7fa03e62]:before {\n  content: \"\\e6eb\";\n}\n.lzh-icon-right[data-v-7fa03e62]:before {\n  content: \"\\e6e9\";\n}\n.lzh-icon-back[data-v-7fa03e62]:before {\n  content: \"\\e6ea\";\n}\n.lzh-icon-bottom-right[data-v-7fa03e62]:before {\n  content: \"\\e6ec\";\n}\n.lzh-icon-bottom-left[data-v-7fa03e62]:before {\n  content: \"\\e6ed\";\n}\n.lzh-icon-caret-top[data-v-7fa03e62]:before {\n  content: \"\\e78f\";\n}\n.lzh-icon-caret-bottom[data-v-7fa03e62]:before {\n  content: \"\\e790\";\n}\n.lzh-icon-caret-right[data-v-7fa03e62]:before {\n  content: \"\\e791\";\n}\n.lzh-icon-caret-left[data-v-7fa03e62]:before {\n  content: \"\\e792\";\n}\n.lzh-icon-d-caret[data-v-7fa03e62]:before {\n  content: \"\\e79a\";\n}\n.lzh-icon-share[data-v-7fa03e62]:before {\n  content: \"\\e793\";\n}\n.lzh-icon-menu[data-v-7fa03e62]:before {\n  content: \"\\e798\";\n}\n.lzh-icon-s-grid[data-v-7fa03e62]:before {\n  content: \"\\e7a6\";\n}\n.lzh-icon-s-check[data-v-7fa03e62]:before {\n  content: \"\\e7a7\";\n}\n.lzh-icon-s-data[data-v-7fa03e62]:before {\n  content: \"\\e7a8\";\n}\n.lzh-icon-s-opportunity[data-v-7fa03e62]:before {\n  content: \"\\e7aa\";\n}\n.lzh-icon-s-custom[data-v-7fa03e62]:before {\n  content: \"\\e7ab\";\n}\n.lzh-icon-s-claim[data-v-7fa03e62]:before {\n  content: \"\\e7ad\";\n}\n.lzh-icon-s-finance[data-v-7fa03e62]:before {\n  content: \"\\e7ae\";\n}\n.lzh-icon-s-comment[data-v-7fa03e62]:before {\n  content: \"\\e7af\";\n}\n.lzh-icon-s-flag[data-v-7fa03e62]:before {\n  content: \"\\e7b0\";\n}\n.lzh-icon-s-marketing[data-v-7fa03e62]:before {\n  content: \"\\e7b1\";\n}\n.lzh-icon-s-shop[data-v-7fa03e62]:before {\n  content: \"\\e7b4\";\n}\n.lzh-icon-s-open[data-v-7fa03e62]:before {\n  content: \"\\e7b5\";\n}\n.lzh-icon-s-management[data-v-7fa03e62]:before {\n  content: \"\\e7b6\";\n}\n.lzh-icon-s-ticket[data-v-7fa03e62]:before {\n  content: \"\\e7b7\";\n}\n.lzh-icon-s-release[data-v-7fa03e62]:before {\n  content: \"\\e7b8\";\n}\n.lzh-icon-s-home[data-v-7fa03e62]:before {\n  content: \"\\e7b9\";\n}\n.lzh-icon-s-promotion[data-v-7fa03e62]:before {\n  content: \"\\e7ba\";\n}\n.lzh-icon-s-operation[data-v-7fa03e62]:before {\n  content: \"\\e7bb\";\n}\n.lzh-icon-s-unfold[data-v-7fa03e62]:before {\n  content: \"\\e7bc\";\n}\n.lzh-icon-s-fold[data-v-7fa03e62]:before {\n  content: \"\\e7a9\";\n}\n.lzh-icon-s-platform[data-v-7fa03e62]:before {\n  content: \"\\e7bd\";\n}\n.lzh-icon-s-order[data-v-7fa03e62]:before {\n  content: \"\\e7be\";\n}\n.lzh-icon-s-cooperation[data-v-7fa03e62]:before {\n  content: \"\\e7bf\";\n}\n.lzh-icon-bell[data-v-7fa03e62]:before {\n  content: \"\\e725\";\n}\n.lzh-icon-message-solid[data-v-7fa03e62]:before {\n  content: \"\\e799\";\n}\n.lzh-icon-video-camera[data-v-7fa03e62]:before {\n  content: \"\\e772\";\n}\n.lzh-icon-video-camera-solid[data-v-7fa03e62]:before {\n  content: \"\\e796\";\n}\n.lzh-icon-camera[data-v-7fa03e62]:before {\n  content: \"\\e779\";\n}\n.lzh-icon-camera-solid[data-v-7fa03e62]:before {\n  content: \"\\e79b\";\n}\n.lzh-icon-download[data-v-7fa03e62]:before {\n  content: \"\\e77c\";\n}\n.lzh-icon-upload2[data-v-7fa03e62]:before {\n  content: \"\\e77b\";\n}\n.lzh-icon-upload[data-v-7fa03e62]:before {\n  content: \"\\e7c3\";\n}\n.lzh-icon-picture-outline-round[data-v-7fa03e62]:before {\n  content: \"\\e75f\";\n}\n.lzh-icon-picture-outline[data-v-7fa03e62]:before {\n  content: \"\\e75e\";\n}\n.lzh-icon-picture[data-v-7fa03e62]:before {\n  content: \"\\e79f\";\n}\n.lzh-icon-close[data-v-7fa03e62]:before {\n  content: \"\\e6db\";\n}\n.lzh-icon-check[data-v-7fa03e62]:before {\n  content: \"\\e6da\";\n}\n.lzh-icon-plus[data-v-7fa03e62]:before {\n  content: \"\\e6d9\";\n}\n.lzh-icon-minus[data-v-7fa03e62]:before {\n  content: \"\\e6d8\";\n}\n.lzh-icon-help[data-v-7fa03e62]:before {\n  content: \"\\e73d\";\n}\n.lzh-icon-s-help[data-v-7fa03e62]:before {\n  content: \"\\e7b3\";\n}\n.lzh-icon-circle-close[data-v-7fa03e62]:before {\n  content: \"\\e78d\";\n}\n.lzh-icon-circle-check[data-v-7fa03e62]:before {\n  content: \"\\e720\";\n}\n.lzh-icon-circle-plus-outline[data-v-7fa03e62]:before {\n  content: \"\\e723\";\n}\n.lzh-icon-remove-outline[data-v-7fa03e62]:before {\n  content: \"\\e722\";\n}\n.lzh-icon-zoom-out[data-v-7fa03e62]:before {\n  content: \"\\e776\";\n}\n.lzh-icon-zoom-in[data-v-7fa03e62]:before {\n  content: \"\\e777\";\n}\n.lzh-icon-error[data-v-7fa03e62]:before {\n  content: \"\\e79d\";\n}\n.lzh-icon-success[data-v-7fa03e62]:before {\n  content: \"\\e79c\";\n}\n.lzh-icon-circle-plus[data-v-7fa03e62]:before {\n  content: \"\\e7a0\";\n}\n.lzh-icon-remove[data-v-7fa03e62]:before {\n  content: \"\\e7a2\";\n}\n.lzh-icon-info[data-v-7fa03e62]:before {\n  content: \"\\e7a1\";\n}\n.lzh-icon-question[data-v-7fa03e62]:before {\n  content: \"\\e7a4\";\n}\n.lzh-icon-warning-outline[data-v-7fa03e62]:before {\n  content: \"\\e6c9\";\n}\n.lzh-icon-warning[data-v-7fa03e62]:before {\n  content: \"\\e7a3\";\n}\n.lzh-icon-goods[data-v-7fa03e62]:before {\n  content: \"\\e7c2\";\n}\n.lzh-icon-s-goods[data-v-7fa03e62]:before {\n  content: \"\\e7b2\";\n}\n.lzh-icon-star-off[data-v-7fa03e62]:before {\n  content: \"\\e717\";\n}\n.lzh-icon-star-on[data-v-7fa03e62]:before {\n  content: \"\\e797\";\n}\n.lzh-icon-more-outline[data-v-7fa03e62]:before {\n  content: \"\\e6cc\";\n}\n.lzh-icon-more[data-v-7fa03e62]:before {\n  content: \"\\e794\";\n}\n.lzh-icon-phone-outline[data-v-7fa03e62]:before {\n  content: \"\\e6cb\";\n}\n.lzh-icon-phone[data-v-7fa03e62]:before {\n  content: \"\\e795\";\n}\n.lzh-icon-user[data-v-7fa03e62]:before {\n  content: \"\\e6e3\";\n}\n.lzh-icon-user-solid[data-v-7fa03e62]:before {\n  content: \"\\e7a5\";\n}\n.lzh-icon-setting[data-v-7fa03e62]:before {\n  content: \"\\e6ca\";\n}\n.lzh-icon-s-tools[data-v-7fa03e62]:before {\n  content: \"\\e7ac\";\n}\n.lzh-icon-delete[data-v-7fa03e62]:before {\n  content: \"\\e6d7\";\n}\n.lzh-icon-delete-solid[data-v-7fa03e62]:before {\n  content: \"\\e7c9\";\n}\n.lzh-icon-eleme[data-v-7fa03e62]:before {\n  content: \"\\e7c7\";\n}\n.lzh-icon-platform-eleme[data-v-7fa03e62]:before {\n  content: \"\\e7ca\";\n}\n.lzh-icon-loading[data-v-7fa03e62] {\n  animation: rotating-data-v-7fa03e62 2s linear infinite;\n}\n.lzh-icon--right[data-v-7fa03e62] {\n  margin-left: 5px;\n}\n.lzh-icon--left[data-v-7fa03e62] {\n  margin-right: 5px;\n}\n@keyframes rotating-data-v-7fa03e62 {\n0% {\n    transform: rotateZ(0deg);\n}\n100% {\n    transform: rotateZ(360deg);\n}\n}\n\n/*# sourceMappingURL=icon.vue.map */", map: {"version":3,"sources":["icon.vue","D:\\vscode\\VscodeStorehouse\\组件库\\lzhUI\\packages\\icon\\src\\icon.vue"],"names":[],"mappings":"AAAA,4BAA4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;6BAC6B;AAC7B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;4BAC4B;AAC5B;2BAC2B;AAC3B;4BAC4B;AAC5B;4BAC4B;AAC5B;2BAC2B;AAC3B;iBACiB;AACjB;4BAC4B;AAC5B;2BAC2B;AAC3B;EACE,4BAA4B;EAC5B,sGAAsG;EACtG,qDAAqD;EACrD,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;AACpB;AACA;;EAEE,+EAA+E;EAC/E,uCAAuC;EACvC,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EC5HrB,oBAAA;ED8HE,oBAAoB;EACpB,cAAc;EACd,wBAAwB;EACxB,qBAAqB;EACrB,sCAAsC;EACtC,mCAAmC;EACnC,kCAAkC;AACpC;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,sDAAsC;AACxC;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,iBAAiB;AACnB;AAEA;AACE;IACE,wBAAwB;AAC1B;AACA;IACE,0BAA0B;AAC5B;AACF;;AAEA,mCAAmC","file":"icon.vue","sourcesContent":["/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Empty\n-------------------------- */\n/* Descriptions\n-------------------------- */\n/* Skeleton \n--------------------------*/\n/* Svg\n--------------- */\n/* Result\n-------------------------- */\n/* Break-point\n--------------------------*/\n@font-face {\n  font-family: \"element-icons\";\n  src: url(\"fonts/element-icons.woff\") format(\"woff\"), url(\"fonts/element-icons.ttf\") format(\"truetype\");\n  /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/\n  font-weight: normal;\n  font-display: \"auto\";\n  font-style: normal;\n}\n[class^=lzh-icon-],\n[class*=\" lzh-icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"element-icons\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  vertical-align: baseline;\n  display: inline-block;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.lzh-icon-ice-cream-round:before {\n  content: \"\\e6a0\";\n}\n\n.lzh-icon-ice-cream-square:before {\n  content: \"\\e6a3\";\n}\n\n.lzh-icon-lollipop:before {\n  content: \"\\e6a4\";\n}\n\n.lzh-icon-potato-strips:before {\n  content: \"\\e6a5\";\n}\n\n.lzh-icon-milk-tea:before {\n  content: \"\\e6a6\";\n}\n\n.lzh-icon-ice-drink:before {\n  content: \"\\e6a7\";\n}\n\n.lzh-icon-ice-tea:before {\n  content: \"\\e6a9\";\n}\n\n.lzh-icon-coffee:before {\n  content: \"\\e6aa\";\n}\n\n.lzh-icon-orange:before {\n  content: \"\\e6ab\";\n}\n\n.lzh-icon-pear:before {\n  content: \"\\e6ac\";\n}\n\n.lzh-icon-apple:before {\n  content: \"\\e6ad\";\n}\n\n.lzh-icon-cherry:before {\n  content: \"\\e6ae\";\n}\n\n.lzh-icon-watermelon:before {\n  content: \"\\e6af\";\n}\n\n.lzh-icon-grape:before {\n  content: \"\\e6b0\";\n}\n\n.lzh-icon-refrigerator:before {\n  content: \"\\e6b1\";\n}\n\n.lzh-icon-goblet-square-full:before {\n  content: \"\\e6b2\";\n}\n\n.lzh-icon-goblet-square:before {\n  content: \"\\e6b3\";\n}\n\n.lzh-icon-goblet-full:before {\n  content: \"\\e6b4\";\n}\n\n.lzh-icon-goblet:before {\n  content: \"\\e6b5\";\n}\n\n.lzh-icon-cold-drink:before {\n  content: \"\\e6b6\";\n}\n\n.lzh-icon-coffee-cup:before {\n  content: \"\\e6b8\";\n}\n\n.lzh-icon-water-cup:before {\n  content: \"\\e6b9\";\n}\n\n.lzh-icon-hot-water:before {\n  content: \"\\e6ba\";\n}\n\n.lzh-icon-ice-cream:before {\n  content: \"\\e6bb\";\n}\n\n.lzh-icon-dessert:before {\n  content: \"\\e6bc\";\n}\n\n.lzh-icon-sugar:before {\n  content: \"\\e6bd\";\n}\n\n.lzh-icon-tableware:before {\n  content: \"\\e6be\";\n}\n\n.lzh-icon-burger:before {\n  content: \"\\e6bf\";\n}\n\n.lzh-icon-knife-fork:before {\n  content: \"\\e6c1\";\n}\n\n.lzh-icon-fork-spoon:before {\n  content: \"\\e6c2\";\n}\n\n.lzh-icon-chicken:before {\n  content: \"\\e6c3\";\n}\n\n.lzh-icon-food:before {\n  content: \"\\e6c4\";\n}\n\n.lzh-icon-dish-1:before {\n  content: \"\\e6c5\";\n}\n\n.lzh-icon-dish:before {\n  content: \"\\e6c6\";\n}\n\n.lzh-icon-moon-night:before {\n  content: \"\\e6ee\";\n}\n\n.lzh-icon-moon:before {\n  content: \"\\e6f0\";\n}\n\n.lzh-icon-cloudy-and-sunny:before {\n  content: \"\\e6f1\";\n}\n\n.lzh-icon-partly-cloudy:before {\n  content: \"\\e6f2\";\n}\n\n.lzh-icon-cloudy:before {\n  content: \"\\e6f3\";\n}\n\n.lzh-icon-sunny:before {\n  content: \"\\e6f6\";\n}\n\n.lzh-icon-sunset:before {\n  content: \"\\e6f7\";\n}\n\n.lzh-icon-sunrise-1:before {\n  content: \"\\e6f8\";\n}\n\n.lzh-icon-sunrise:before {\n  content: \"\\e6f9\";\n}\n\n.lzh-icon-heavy-rain:before {\n  content: \"\\e6fa\";\n}\n\n.lzh-icon-lightning:before {\n  content: \"\\e6fb\";\n}\n\n.lzh-icon-light-rain:before {\n  content: \"\\e6fc\";\n}\n\n.lzh-icon-wind-power:before {\n  content: \"\\e6fd\";\n}\n\n.lzh-icon-baseball:before {\n  content: \"\\e712\";\n}\n\n.lzh-icon-soccer:before {\n  content: \"\\e713\";\n}\n\n.lzh-icon-football:before {\n  content: \"\\e715\";\n}\n\n.lzh-icon-basketball:before {\n  content: \"\\e716\";\n}\n\n.lzh-icon-ship:before {\n  content: \"\\e73f\";\n}\n\n.lzh-icon-truck:before {\n  content: \"\\e740\";\n}\n\n.lzh-icon-bicycle:before {\n  content: \"\\e741\";\n}\n\n.lzh-icon-mobile-phone:before {\n  content: \"\\e6d3\";\n}\n\n.lzh-icon-service:before {\n  content: \"\\e6d4\";\n}\n\n.lzh-icon-key:before {\n  content: \"\\e6e2\";\n}\n\n.lzh-icon-unlock:before {\n  content: \"\\e6e4\";\n}\n\n.lzh-icon-lock:before {\n  content: \"\\e6e5\";\n}\n\n.lzh-icon-watch:before {\n  content: \"\\e6fe\";\n}\n\n.lzh-icon-watch-1:before {\n  content: \"\\e6ff\";\n}\n\n.lzh-icon-timer:before {\n  content: \"\\e702\";\n}\n\n.lzh-icon-alarm-clock:before {\n  content: \"\\e703\";\n}\n\n.lzh-icon-map-location:before {\n  content: \"\\e704\";\n}\n\n.lzh-icon-delete-location:before {\n  content: \"\\e705\";\n}\n\n.lzh-icon-add-location:before {\n  content: \"\\e706\";\n}\n\n.lzh-icon-location-information:before {\n  content: \"\\e707\";\n}\n\n.lzh-icon-location-outline:before {\n  content: \"\\e708\";\n}\n\n.lzh-icon-location:before {\n  content: \"\\e79e\";\n}\n\n.lzh-icon-place:before {\n  content: \"\\e709\";\n}\n\n.lzh-icon-discover:before {\n  content: \"\\e70a\";\n}\n\n.lzh-icon-first-aid-kit:before {\n  content: \"\\e70b\";\n}\n\n.lzh-icon-trophy-1:before {\n  content: \"\\e70c\";\n}\n\n.lzh-icon-trophy:before {\n  content: \"\\e70d\";\n}\n\n.lzh-icon-medal:before {\n  content: \"\\e70e\";\n}\n\n.lzh-icon-medal-1:before {\n  content: \"\\e70f\";\n}\n\n.lzh-icon-stopwatch:before {\n  content: \"\\e710\";\n}\n\n.lzh-icon-mic:before {\n  content: \"\\e711\";\n}\n\n.lzh-icon-copy-document:before {\n  content: \"\\e718\";\n}\n\n.lzh-icon-full-screen:before {\n  content: \"\\e719\";\n}\n\n.lzh-icon-switch-button:before {\n  content: \"\\e71b\";\n}\n\n.lzh-icon-aim:before {\n  content: \"\\e71c\";\n}\n\n.lzh-icon-crop:before {\n  content: \"\\e71d\";\n}\n\n.lzh-icon-odometer:before {\n  content: \"\\e71e\";\n}\n\n.lzh-icon-time:before {\n  content: \"\\e71f\";\n}\n\n.lzh-icon-bangzhu:before {\n  content: \"\\e724\";\n}\n\n.lzh-icon-close-notification:before {\n  content: \"\\e726\";\n}\n\n.lzh-icon-microphone:before {\n  content: \"\\e727\";\n}\n\n.lzh-icon-turn-off-microphone:before {\n  content: \"\\e728\";\n}\n\n.lzh-icon-position:before {\n  content: \"\\e729\";\n}\n\n.lzh-icon-postcard:before {\n  content: \"\\e72a\";\n}\n\n.lzh-icon-message:before {\n  content: \"\\e72b\";\n}\n\n.lzh-icon-chat-line-square:before {\n  content: \"\\e72d\";\n}\n\n.lzh-icon-chat-dot-square:before {\n  content: \"\\e72e\";\n}\n\n.lzh-icon-chat-dot-round:before {\n  content: \"\\e72f\";\n}\n\n.lzh-icon-chat-square:before {\n  content: \"\\e730\";\n}\n\n.lzh-icon-chat-line-round:before {\n  content: \"\\e731\";\n}\n\n.lzh-icon-chat-round:before {\n  content: \"\\e732\";\n}\n\n.lzh-icon-set-up:before {\n  content: \"\\e733\";\n}\n\n.lzh-icon-turn-off:before {\n  content: \"\\e734\";\n}\n\n.lzh-icon-open:before {\n  content: \"\\e735\";\n}\n\n.lzh-icon-connection:before {\n  content: \"\\e736\";\n}\n\n.lzh-icon-link:before {\n  content: \"\\e737\";\n}\n\n.lzh-icon-cpu:before {\n  content: \"\\e738\";\n}\n\n.lzh-icon-thumb:before {\n  content: \"\\e739\";\n}\n\n.lzh-icon-female:before {\n  content: \"\\e73a\";\n}\n\n.lzh-icon-male:before {\n  content: \"\\e73b\";\n}\n\n.lzh-icon-guide:before {\n  content: \"\\e73c\";\n}\n\n.lzh-icon-news:before {\n  content: \"\\e73e\";\n}\n\n.lzh-icon-price-tag:before {\n  content: \"\\e744\";\n}\n\n.lzh-icon-discount:before {\n  content: \"\\e745\";\n}\n\n.lzh-icon-wallet:before {\n  content: \"\\e747\";\n}\n\n.lzh-icon-coin:before {\n  content: \"\\e748\";\n}\n\n.lzh-icon-money:before {\n  content: \"\\e749\";\n}\n\n.lzh-icon-bank-card:before {\n  content: \"\\e74a\";\n}\n\n.lzh-icon-box:before {\n  content: \"\\e74b\";\n}\n\n.lzh-icon-present:before {\n  content: \"\\e74c\";\n}\n\n.lzh-icon-sell:before {\n  content: \"\\e6d5\";\n}\n\n.lzh-icon-sold-out:before {\n  content: \"\\e6d6\";\n}\n\n.lzh-icon-shopping-bag-2:before {\n  content: \"\\e74d\";\n}\n\n.lzh-icon-shopping-bag-1:before {\n  content: \"\\e74e\";\n}\n\n.lzh-icon-shopping-cart-2:before {\n  content: \"\\e74f\";\n}\n\n.lzh-icon-shopping-cart-1:before {\n  content: \"\\e750\";\n}\n\n.lzh-icon-shopping-cart-full:before {\n  content: \"\\e751\";\n}\n\n.lzh-icon-smoking:before {\n  content: \"\\e752\";\n}\n\n.lzh-icon-no-smoking:before {\n  content: \"\\e753\";\n}\n\n.lzh-icon-house:before {\n  content: \"\\e754\";\n}\n\n.lzh-icon-table-lamp:before {\n  content: \"\\e755\";\n}\n\n.lzh-icon-school:before {\n  content: \"\\e756\";\n}\n\n.lzh-icon-office-building:before {\n  content: \"\\e757\";\n}\n\n.lzh-icon-toilet-paper:before {\n  content: \"\\e758\";\n}\n\n.lzh-icon-notebook-2:before {\n  content: \"\\e759\";\n}\n\n.lzh-icon-notebook-1:before {\n  content: \"\\e75a\";\n}\n\n.lzh-icon-files:before {\n  content: \"\\e75b\";\n}\n\n.lzh-icon-collection:before {\n  content: \"\\e75c\";\n}\n\n.lzh-icon-receiving:before {\n  content: \"\\e75d\";\n}\n\n.lzh-icon-suitcase-1:before {\n  content: \"\\e760\";\n}\n\n.lzh-icon-suitcase:before {\n  content: \"\\e761\";\n}\n\n.lzh-icon-film:before {\n  content: \"\\e763\";\n}\n\n.lzh-icon-collection-tag:before {\n  content: \"\\e765\";\n}\n\n.lzh-icon-data-analysis:before {\n  content: \"\\e766\";\n}\n\n.lzh-icon-pie-chart:before {\n  content: \"\\e767\";\n}\n\n.lzh-icon-data-board:before {\n  content: \"\\e768\";\n}\n\n.lzh-icon-data-line:before {\n  content: \"\\e76d\";\n}\n\n.lzh-icon-reading:before {\n  content: \"\\e769\";\n}\n\n.lzh-icon-magic-stick:before {\n  content: \"\\e76a\";\n}\n\n.lzh-icon-coordinate:before {\n  content: \"\\e76b\";\n}\n\n.lzh-icon-mouse:before {\n  content: \"\\e76c\";\n}\n\n.lzh-icon-brush:before {\n  content: \"\\e76e\";\n}\n\n.lzh-icon-headset:before {\n  content: \"\\e76f\";\n}\n\n.lzh-icon-umbrella:before {\n  content: \"\\e770\";\n}\n\n.lzh-icon-scissors:before {\n  content: \"\\e771\";\n}\n\n.lzh-icon-mobile:before {\n  content: \"\\e773\";\n}\n\n.lzh-icon-attract:before {\n  content: \"\\e774\";\n}\n\n.lzh-icon-monitor:before {\n  content: \"\\e775\";\n}\n\n.lzh-icon-search:before {\n  content: \"\\e778\";\n}\n\n.lzh-icon-takeaway-box:before {\n  content: \"\\e77a\";\n}\n\n.lzh-icon-paperclip:before {\n  content: \"\\e77d\";\n}\n\n.lzh-icon-printer:before {\n  content: \"\\e77e\";\n}\n\n.lzh-icon-document-add:before {\n  content: \"\\e782\";\n}\n\n.lzh-icon-document:before {\n  content: \"\\e785\";\n}\n\n.lzh-icon-document-checked:before {\n  content: \"\\e786\";\n}\n\n.lzh-icon-document-copy:before {\n  content: \"\\e787\";\n}\n\n.lzh-icon-document-delete:before {\n  content: \"\\e788\";\n}\n\n.lzh-icon-document-remove:before {\n  content: \"\\e789\";\n}\n\n.lzh-icon-tickets:before {\n  content: \"\\e78b\";\n}\n\n.lzh-icon-folder-checked:before {\n  content: \"\\e77f\";\n}\n\n.lzh-icon-folder-delete:before {\n  content: \"\\e780\";\n}\n\n.lzh-icon-folder-remove:before {\n  content: \"\\e781\";\n}\n\n.lzh-icon-folder-add:before {\n  content: \"\\e783\";\n}\n\n.lzh-icon-folder-opened:before {\n  content: \"\\e784\";\n}\n\n.lzh-icon-folder:before {\n  content: \"\\e78a\";\n}\n\n.lzh-icon-edit-outline:before {\n  content: \"\\e764\";\n}\n\n.lzh-icon-edit:before {\n  content: \"\\e78c\";\n}\n\n.lzh-icon-date:before {\n  content: \"\\e78e\";\n}\n\n.lzh-icon-c-scale-to-original:before {\n  content: \"\\e7c6\";\n}\n\n.lzh-icon-view:before {\n  content: \"\\e6ce\";\n}\n\n.lzh-icon-loading:before {\n  content: \"\\e6cf\";\n}\n\n.lzh-icon-rank:before {\n  content: \"\\e6d1\";\n}\n\n.lzh-icon-sort-down:before {\n  content: \"\\e7c4\";\n}\n\n.lzh-icon-sort-up:before {\n  content: \"\\e7c5\";\n}\n\n.lzh-icon-sort:before {\n  content: \"\\e6d2\";\n}\n\n.lzh-icon-finished:before {\n  content: \"\\e6cd\";\n}\n\n.lzh-icon-refresh-left:before {\n  content: \"\\e6c7\";\n}\n\n.lzh-icon-refresh-right:before {\n  content: \"\\e6c8\";\n}\n\n.lzh-icon-refresh:before {\n  content: \"\\e6d0\";\n}\n\n.lzh-icon-video-play:before {\n  content: \"\\e7c0\";\n}\n\n.lzh-icon-video-pause:before {\n  content: \"\\e7c1\";\n}\n\n.lzh-icon-d-arrow-right:before {\n  content: \"\\e6dc\";\n}\n\n.lzh-icon-d-arrow-left:before {\n  content: \"\\e6dd\";\n}\n\n.lzh-icon-arrow-up:before {\n  content: \"\\e6e1\";\n}\n\n.lzh-icon-arrow-down:before {\n  content: \"\\e6df\";\n}\n\n.lzh-icon-arrow-right:before {\n  content: \"\\e6e0\";\n}\n\n.lzh-icon-arrow-left:before {\n  content: \"\\e6de\";\n}\n\n.lzh-icon-top-right:before {\n  content: \"\\e6e7\";\n}\n\n.lzh-icon-top-left:before {\n  content: \"\\e6e8\";\n}\n\n.lzh-icon-top:before {\n  content: \"\\e6e6\";\n}\n\n.lzh-icon-bottom:before {\n  content: \"\\e6eb\";\n}\n\n.lzh-icon-right:before {\n  content: \"\\e6e9\";\n}\n\n.lzh-icon-back:before {\n  content: \"\\e6ea\";\n}\n\n.lzh-icon-bottom-right:before {\n  content: \"\\e6ec\";\n}\n\n.lzh-icon-bottom-left:before {\n  content: \"\\e6ed\";\n}\n\n.lzh-icon-caret-top:before {\n  content: \"\\e78f\";\n}\n\n.lzh-icon-caret-bottom:before {\n  content: \"\\e790\";\n}\n\n.lzh-icon-caret-right:before {\n  content: \"\\e791\";\n}\n\n.lzh-icon-caret-left:before {\n  content: \"\\e792\";\n}\n\n.lzh-icon-d-caret:before {\n  content: \"\\e79a\";\n}\n\n.lzh-icon-share:before {\n  content: \"\\e793\";\n}\n\n.lzh-icon-menu:before {\n  content: \"\\e798\";\n}\n\n.lzh-icon-s-grid:before {\n  content: \"\\e7a6\";\n}\n\n.lzh-icon-s-check:before {\n  content: \"\\e7a7\";\n}\n\n.lzh-icon-s-data:before {\n  content: \"\\e7a8\";\n}\n\n.lzh-icon-s-opportunity:before {\n  content: \"\\e7aa\";\n}\n\n.lzh-icon-s-custom:before {\n  content: \"\\e7ab\";\n}\n\n.lzh-icon-s-claim:before {\n  content: \"\\e7ad\";\n}\n\n.lzh-icon-s-finance:before {\n  content: \"\\e7ae\";\n}\n\n.lzh-icon-s-comment:before {\n  content: \"\\e7af\";\n}\n\n.lzh-icon-s-flag:before {\n  content: \"\\e7b0\";\n}\n\n.lzh-icon-s-marketing:before {\n  content: \"\\e7b1\";\n}\n\n.lzh-icon-s-shop:before {\n  content: \"\\e7b4\";\n}\n\n.lzh-icon-s-open:before {\n  content: \"\\e7b5\";\n}\n\n.lzh-icon-s-management:before {\n  content: \"\\e7b6\";\n}\n\n.lzh-icon-s-ticket:before {\n  content: \"\\e7b7\";\n}\n\n.lzh-icon-s-release:before {\n  content: \"\\e7b8\";\n}\n\n.lzh-icon-s-home:before {\n  content: \"\\e7b9\";\n}\n\n.lzh-icon-s-promotion:before {\n  content: \"\\e7ba\";\n}\n\n.lzh-icon-s-operation:before {\n  content: \"\\e7bb\";\n}\n\n.lzh-icon-s-unfold:before {\n  content: \"\\e7bc\";\n}\n\n.lzh-icon-s-fold:before {\n  content: \"\\e7a9\";\n}\n\n.lzh-icon-s-platform:before {\n  content: \"\\e7bd\";\n}\n\n.lzh-icon-s-order:before {\n  content: \"\\e7be\";\n}\n\n.lzh-icon-s-cooperation:before {\n  content: \"\\e7bf\";\n}\n\n.lzh-icon-bell:before {\n  content: \"\\e725\";\n}\n\n.lzh-icon-message-solid:before {\n  content: \"\\e799\";\n}\n\n.lzh-icon-video-camera:before {\n  content: \"\\e772\";\n}\n\n.lzh-icon-video-camera-solid:before {\n  content: \"\\e796\";\n}\n\n.lzh-icon-camera:before {\n  content: \"\\e779\";\n}\n\n.lzh-icon-camera-solid:before {\n  content: \"\\e79b\";\n}\n\n.lzh-icon-download:before {\n  content: \"\\e77c\";\n}\n\n.lzh-icon-upload2:before {\n  content: \"\\e77b\";\n}\n\n.lzh-icon-upload:before {\n  content: \"\\e7c3\";\n}\n\n.lzh-icon-picture-outline-round:before {\n  content: \"\\e75f\";\n}\n\n.lzh-icon-picture-outline:before {\n  content: \"\\e75e\";\n}\n\n.lzh-icon-picture:before {\n  content: \"\\e79f\";\n}\n\n.lzh-icon-close:before {\n  content: \"\\e6db\";\n}\n\n.lzh-icon-check:before {\n  content: \"\\e6da\";\n}\n\n.lzh-icon-plus:before {\n  content: \"\\e6d9\";\n}\n\n.lzh-icon-minus:before {\n  content: \"\\e6d8\";\n}\n\n.lzh-icon-help:before {\n  content: \"\\e73d\";\n}\n\n.lzh-icon-s-help:before {\n  content: \"\\e7b3\";\n}\n\n.lzh-icon-circle-close:before {\n  content: \"\\e78d\";\n}\n\n.lzh-icon-circle-check:before {\n  content: \"\\e720\";\n}\n\n.lzh-icon-circle-plus-outline:before {\n  content: \"\\e723\";\n}\n\n.lzh-icon-remove-outline:before {\n  content: \"\\e722\";\n}\n\n.lzh-icon-zoom-out:before {\n  content: \"\\e776\";\n}\n\n.lzh-icon-zoom-in:before {\n  content: \"\\e777\";\n}\n\n.lzh-icon-error:before {\n  content: \"\\e79d\";\n}\n\n.lzh-icon-success:before {\n  content: \"\\e79c\";\n}\n\n.lzh-icon-circle-plus:before {\n  content: \"\\e7a0\";\n}\n\n.lzh-icon-remove:before {\n  content: \"\\e7a2\";\n}\n\n.lzh-icon-info:before {\n  content: \"\\e7a1\";\n}\n\n.lzh-icon-question:before {\n  content: \"\\e7a4\";\n}\n\n.lzh-icon-warning-outline:before {\n  content: \"\\e6c9\";\n}\n\n.lzh-icon-warning:before {\n  content: \"\\e7a3\";\n}\n\n.lzh-icon-goods:before {\n  content: \"\\e7c2\";\n}\n\n.lzh-icon-s-goods:before {\n  content: \"\\e7b2\";\n}\n\n.lzh-icon-star-off:before {\n  content: \"\\e717\";\n}\n\n.lzh-icon-star-on:before {\n  content: \"\\e797\";\n}\n\n.lzh-icon-more-outline:before {\n  content: \"\\e6cc\";\n}\n\n.lzh-icon-more:before {\n  content: \"\\e794\";\n}\n\n.lzh-icon-phone-outline:before {\n  content: \"\\e6cb\";\n}\n\n.lzh-icon-phone:before {\n  content: \"\\e795\";\n}\n\n.lzh-icon-user:before {\n  content: \"\\e6e3\";\n}\n\n.lzh-icon-user-solid:before {\n  content: \"\\e7a5\";\n}\n\n.lzh-icon-setting:before {\n  content: \"\\e6ca\";\n}\n\n.lzh-icon-s-tools:before {\n  content: \"\\e7ac\";\n}\n\n.lzh-icon-delete:before {\n  content: \"\\e6d7\";\n}\n\n.lzh-icon-delete-solid:before {\n  content: \"\\e7c9\";\n}\n\n.lzh-icon-eleme:before {\n  content: \"\\e7c7\";\n}\n\n.lzh-icon-platform-eleme:before {\n  content: \"\\e7ca\";\n}\n\n.lzh-icon-loading {\n  animation: rotating 2s linear infinite;\n}\n\n.lzh-icon--right {\n  margin-left: 5px;\n}\n\n.lzh-icon--left {\n  margin-right: 5px;\n}\n\n@keyframes rotating {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n\n/*# sourceMappingURL=icon.vue.map */","<template>\r\n  <i :class=\"'lzh-icon-' + name\" @click=\"iconClick\"></i>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: \"LzhIcon\",\r\n  props: {\r\n    // 图标名称\r\n    name: String,\r\n  },\r\n  methods: {\r\n    iconClick() {\r\n      this.$emit(\"click\");\r\n    },\r\n  },\r\n};\r\n</script>\r\n\r\n<style lang=\"scss\" scoped>\r\n@import \"./style/icon.scss\";\r\n</style>\r\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-7fa03e62";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector$1,
    undefined,
    undefined
  );

__vue_component__$1.install = Vue => {
  Vue.component(__vue_component__$1.name, __vue_component__$1);
};

//
var script = {
  name: "LzhSwitch",
  mixins: [Focus("input")],
  components: {
    lzhIcon: __vue_component__$1,
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
      staticClass: "lzh-switch",
      class: { "is-disabled": _vm.switchDisabled, "is-checked": _vm.checked },
      attrs: {
        role: "switch",
        "aria-checked": _vm.checked,
        "aria-disabled": _vm.switchDisabled,
      },
      on: {
        click: function ($event) {
          $event.preventDefault();
          return _vm.switchValue.apply(null, arguments)
        },
      },
    },
    [
      _c("input", {
        ref: "input",
        staticClass: "lzh-switch__input",
        attrs: {
          type: "checkbox",
          id: _vm.id,
          name: _vm.name,
          "true-value": _vm.activeValue,
          "false-value": _vm.inactiveValue,
          disabled: _vm.switchDisabled,
        },
        on: {
          change: _vm.handleChange,
          keydown: function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return _vm.switchValue.apply(null, arguments)
          },
        },
      }),
      _vm._v(" "),
      _vm.inactiveText || _vm.inactiveIconClass
        ? _c(
            "span",
            {
              class: [
                "lzh-switch__label",
                "lzh-switch__label--left",
                !_vm.checked ? "is-active" : "",
              ],
            },
            [
              _vm.inactiveIconClass
                ? _c("lzh-icon", { class: _vm.inactiveIconClass })
                : _vm._e(),
              _vm._v(" "),
              !_vm.inactiveIconClass && _vm.activeText
                ? _c("span", { attrs: { "aria-hidden": "checked" } }, [
                    _vm._v("\n      " + _vm._s(_vm.inactiveText) + "\n    "),
                  ])
                : _vm._e(),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("span", {
        ref: "core",
        staticClass: "lzh-switch__core",
        style: { width: _vm.coreWidth + "px" },
      }),
      _vm._v(" "),
      _vm.activeIconClass || _vm.activeText
        ? _c(
            "span",
            {
              class: [
                "lzh-switch__label",
                "lzh-switch__label--right",
                _vm.checked ? "is-active" : "",
              ],
            },
            [
              _vm.activeIconClass
                ? _c("lzh-icon", { class: [_vm.activeIconClass] })
                : _vm._e(),
              _vm._v(" "),
              !_vm.activeIconClass && _vm.activeText
                ? _c("span", { attrs: { "aria-hidden": !_vm.checked } }, [
                    _vm._v("\n      " + _vm._s(_vm.activeText) + "\n    "),
                  ])
                : _vm._e(),
            ],
            1
          )
        : _vm._e(),
    ]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-232ba36a_0", { source: "@charset \"UTF-8\";\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Empty\n-------------------------- */\n/* Descriptions\n-------------------------- */\n/* Skeleton \n--------------------------*/\n/* Svg\n--------------- */\n/* Result\n-------------------------- */\n/* Break-point\n--------------------------*/\n/* BEM命名规范\n -------------------------- */\n.lzh-switch[data-v-232ba36a] {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  font-size: 14px;\n  line-height: 20px;\n  height: 20px;\n  vertical-align: middle;\n}\n.lzh-switch.is-disabled .lzh-switch__core[data-v-232ba36a], .lzh-switch.is-disabled .lzh-switch__label[data-v-232ba36a] {\n  cursor: not-allowed;\n}\n.lzh-switch .lzh-switch__label[data-v-232ba36a] {\n  transition: 0.2s;\n  height: 20px;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  vertical-align: middle;\n  color: #303133;\n}\n.lzh-switch .lzh-switch__label.is-active[data-v-232ba36a] {\n  color: #409EFF;\n}\n.lzh-switch .lzh-switch__label--left[data-v-232ba36a] {\n  margin-right: 10px;\n}\n.lzh-switch .lzh-switch__label--right[data-v-232ba36a] {\n  margin-left: 10px;\n}\n.lzh-switch .lzh-switch__label *[data-v-232ba36a] {\n  line-height: 1;\n  font-size: 14px;\n  display: inline-block;\n}\n.lzh-switch .lzh-switch__input[data-v-232ba36a] {\n  position: absolute;\n  width: 0;\n  height: 0;\n  opacity: 0;\n  margin: 0;\n}\n.lzh-switch .lzh-switch__core[data-v-232ba36a] {\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 20px;\n  border: 1px solid #DCDFE6;\n  outline: none;\n  border-radius: 10px;\n  box-sizing: border-box;\n  background: #DCDFE6;\n  cursor: pointer;\n  transition: border-color 0.3s, background-color 0.3s;\n  vertical-align: middle;\n}\n.lzh-switch .lzh-switch__core[data-v-232ba36a]:after {\n  content: \"\";\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  border-radius: 100%;\n  transition: all 0.3s;\n  width: 16px;\n  height: 16px;\n  background-color: #FFFFFF;\n}\n.lzh-switch.is-checked .lzh-switch__core[data-v-232ba36a] {\n  border-color: #409EFF;\n  background-color: #409EFF;\n}\n.lzh-switch.is-checked .lzh-switch__core[data-v-232ba36a]::after {\n  left: 100%;\n  margin-left: -17px;\n}\n.lzh-switch.is-disabled[data-v-232ba36a] {\n  opacity: 0.6;\n}\n.lzh-switch--wide .lzh-switch__label.lzh-switch__label--left span[data-v-232ba36a] {\n  left: 10px;\n}\n.lzh-switch--wide .lzh-switch__label.lzh-switch__label--right span[data-v-232ba36a] {\n  right: 10px;\n}\n.lzh-switch .label-fade-enter[data-v-232ba36a], .lzh-switch .label-fade-leave-active[data-v-232ba36a] {\n  opacity: 0;\n}\n\n/*# sourceMappingURL=Switch.vue.map */", map: {"version":3,"sources":["Switch.vue"],"names":[],"mappings":"AAAA,gBAAgB;AAChB,4BAA4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX,WAAW;AACX;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;6BAC6B;AAC7B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;2BAC2B;AAC3B;4BAC4B;AAC5B;2BAC2B;AAC3B;4BAC4B;AAC5B;4BAC4B;AAC5B;2BAC2B;AAC3B;iBACiB;AACjB;4BAC4B;AAC5B;2BAC2B;AAC3B;6BAC6B;AAC7B;EACE,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,mBAAmB;AACrB;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,sBAAsB;EACtB,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AAEA;EACE,kBAAkB;AACpB;AAEA;EACE,iBAAiB;AACnB;AAEA;EACE,cAAc;EACd,eAAe;EACf,qBAAqB;AACvB;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,SAAS;AACX;AAEA;EACE,SAAS;EACT,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,oDAAoD;EACpD,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,mBAAmB;EACnB,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;AAEA;EACE,qBAAqB;EACrB,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,kBAAkB;AACpB;AAEA;EACE,YAAY;AACd;AAEA;EACE,UAAU;AACZ;AACA;EACE,WAAW;AACb;AAEA;EACE,UAAU;AACZ;;AAEA,qCAAqC","file":"Switch.vue","sourcesContent":["@charset \"UTF-8\";\n/* Element Chalk Variables */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* 53a8ff */\n/* 66b1ff */\n/* 79bbff */\n/* 8cc5ff */\n/* a0cfff */\n/* b3d8ff */\n/* c6e2ff */\n/* d9ecff */\n/* ecf5ff */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* Size\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Empty\n-------------------------- */\n/* Descriptions\n-------------------------- */\n/* Skeleton \n--------------------------*/\n/* Svg\n--------------- */\n/* Result\n-------------------------- */\n/* Break-point\n--------------------------*/\n/* BEM命名规范\n -------------------------- */\n.lzh-switch {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  font-size: 14px;\n  line-height: 20px;\n  height: 20px;\n  vertical-align: middle;\n}\n.lzh-switch.is-disabled .lzh-switch__core, .lzh-switch.is-disabled .lzh-switch__label {\n  cursor: not-allowed;\n}\n\n.lzh-switch .lzh-switch__label {\n  transition: 0.2s;\n  height: 20px;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  vertical-align: middle;\n  color: #303133;\n}\n.lzh-switch .lzh-switch__label.is-active {\n  color: #409EFF;\n}\n\n.lzh-switch .lzh-switch__label--left {\n  margin-right: 10px;\n}\n\n.lzh-switch .lzh-switch__label--right {\n  margin-left: 10px;\n}\n\n.lzh-switch .lzh-switch__label * {\n  line-height: 1;\n  font-size: 14px;\n  display: inline-block;\n}\n\n.lzh-switch .lzh-switch__input {\n  position: absolute;\n  width: 0;\n  height: 0;\n  opacity: 0;\n  margin: 0;\n}\n\n.lzh-switch .lzh-switch__core {\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 20px;\n  border: 1px solid #DCDFE6;\n  outline: none;\n  border-radius: 10px;\n  box-sizing: border-box;\n  background: #DCDFE6;\n  cursor: pointer;\n  transition: border-color 0.3s, background-color 0.3s;\n  vertical-align: middle;\n}\n.lzh-switch .lzh-switch__core:after {\n  content: \"\";\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  border-radius: 100%;\n  transition: all 0.3s;\n  width: 16px;\n  height: 16px;\n  background-color: #FFFFFF;\n}\n\n.lzh-switch.is-checked .lzh-switch__core {\n  border-color: #409EFF;\n  background-color: #409EFF;\n}\n.lzh-switch.is-checked .lzh-switch__core::after {\n  left: 100%;\n  margin-left: -17px;\n}\n\n.lzh-switch.is-disabled {\n  opacity: 0.6;\n}\n\n.lzh-switch--wide .lzh-switch__label.lzh-switch__label--left span {\n  left: 10px;\n}\n.lzh-switch--wide .lzh-switch__label.lzh-switch__label--right span {\n  right: 10px;\n}\n\n.lzh-switch .label-fade-enter, .lzh-switch .label-fade-leave-active {\n  opacity: 0;\n}\n\n/*# sourceMappingURL=Switch.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-232ba36a";
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
