// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/burgerToggle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.burgerToggle = void 0;

var burgerToggle = function burgerToggle(el) {
  var currEl = document.querySelector(el);
  currEl.classList.contains('active') ? currEl.classList.remove('active') : currEl.classList.add('active');
};

exports.burgerToggle = burgerToggle;
},{}],"js/db.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goods = exports.brands = exports.typeSelect = void 0;
var typeSelect = [{
  id: '1',
  value: 'Компакт-камера'
}, {
  id: '2',
  value: 'Беззеркальная'
}, {
  id: '3',
  value: 'Зеркальная'
}, {
  id: '4',
  value: 'Среднеформатная'
}];
exports.typeSelect = typeSelect;
var brands = [{
  id: '1',
  value: 'Canon'
}, {
  id: '2',
  value: 'Nikon'
}, {
  id: '3',
  value: 'Sony'
}, {
  id: '4',
  value: 'Fujifilm'
}, {
  id: '5',
  value: 'Samsung'
}, {
  id: '6',
  value: 'Olympus'
}];
exports.brands = brands;
var goods = [{
  id: 1,
  img: './photo.png',
  title: 'Canon EOS 5D Mark III Body',
  description: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей профессиональных фотографов и видеооператоров. Преемник успешной модели EOS 5D Mark II. Фотоаппарат имеет 22.3 Мп. CMOS-сенсор размером 36х24 мм, 14-битный процессор DIGIC 5+, 61-точечный автофокус.',
  shortDescription: 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.',
  cost: '3 200,00',
  oldCost: '4 400,00'
}];
exports.goods = goods;
},{}],"js/goods.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Goods = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _render = new WeakSet();

var Goods = function Goods(selector, data) {
  _classCallCheck(this, Goods);

  _render.add(this);

  this.el = document.querySelector(selector);
  this.data = data;

  _classPrivateMethodGet(this, _render, _render2).call(this);
};

exports.Goods = Goods;

var _render2 = function _render2() {
  for (var i = 0; i < 11; i++) {
    if (i === 0) {
      this.el.innerHTML = "\n        <div class=\"card first\">\n          <img src=\"".concat(this.data[0].img, "\" alt=\"item\">\n          <div class=\"card-description\">\n            <h3>").concat(this.data[0].title, "</h3>\n            <p class=\"text\">").concat(this.data[0].description, "</p>\n            <span class=\"old-cost\">").concat(this.data[0].oldCost, " \u0440\u0443\u0431.</span>\n            <div class=\"cost\"><span>").concat(this.data[0].cost, " \u0440\u0443\u0431.</span><button><svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" xmlns=\"http://www.w3.org/2000/svg\" class=\"cart_img\">\n            <path d=\"M16.3015 2.91311H3.0096L2.81202 0.652847C2.77971 0.28322 2.47804 0 2.11666 0H0.69816C0.312576 0 0 0.320979 0 0.716927C0 1.11288 0.312576 1.43385 0.69816 1.43385H1.47837C1.90475 6.31176 0.802785 -6.29581 2.28136 10.6204C2.33834 11.2825 2.68672 12.0009 3.28687 12.4891C2.20482 13.9081 3.19349 16 4.95361 16C6.4145 16 7.44488 14.5038 6.9439 13.0868H10.765C10.2647 14.502 11.2928 16 12.7553 16C13.9224 16 14.872 15.0249 14.872 13.8264C14.872 12.628 13.9224 11.6529 12.7553 11.6529H4.95834C4.428 11.6529 3.96585 11.3243 3.76638 10.8456L14.9239 10.1723C15.2285 10.1539 15.4862 9.93446 15.5603 9.63048L16.9789 3.80391C17.0888 3.35211 16.7558 2.91311 16.3015 2.91311ZM4.95361 14.5661C4.55646 14.5661 4.23331 14.2343 4.23331 13.8264C4.23331 13.4186 4.55646 13.0868 4.95361 13.0868C5.3508 13.0868 5.67395 13.4186 5.67395 13.8264C5.67395 14.2343 5.3508 14.5661 4.95361 14.5661ZM12.7553 14.5661C12.3581 14.5661 12.035 14.2343 12.035 13.8264C12.035 13.4186 12.3581 13.0868 12.7553 13.0868C13.1525 13.0868 13.4756 13.4186 13.4756 13.8264C13.4756 14.2343 13.1525 14.5661 12.7553 14.5661ZM14.33 8.77181L3.57844 9.42062L3.13494 4.34693H15.4073L14.33 8.77181Z\"/>\n          </svg></button></div>\n          </div>\n        </div>");
    } else {
      this.el.innerHTML += "\n            <div class=\"card\">\n              <img src=\"".concat(this.data[0].img, "\" alt=\"item\">\n              <h3>").concat(this.data[0].title, "</h3>\n              <p class=\"text\">").concat(this.data[0].shortDescription, "</p>\n              <hr>\n              <div class=\"cost\"><span>").concat(this.data[0].cost, " \u0440\u0443\u0431.</span>\n              <button>\n              <svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" xmlns=\"http://www.w3.org/2000/svg\" class=\"cart_img\">\n              <path d=\"M16.3015 2.91311H3.0096L2.81202 0.652847C2.77971 0.28322 2.47804 0 2.11666 0H0.69816C0.312576 0 0 0.320979 0 0.716927C0 1.11288 0.312576 1.43385 0.69816 1.43385H1.47837C1.90475 6.31176 0.802785 -6.29581 2.28136 10.6204C2.33834 11.2825 2.68672 12.0009 3.28687 12.4891C2.20482 13.9081 3.19349 16 4.95361 16C6.4145 16 7.44488 14.5038 6.9439 13.0868H10.765C10.2647 14.502 11.2928 16 12.7553 16C13.9224 16 14.872 15.0249 14.872 13.8264C14.872 12.628 13.9224 11.6529 12.7553 11.6529H4.95834C4.428 11.6529 3.96585 11.3243 3.76638 10.8456L14.9239 10.1723C15.2285 10.1539 15.4862 9.93446 15.5603 9.63048L16.9789 3.80391C17.0888 3.35211 16.7558 2.91311 16.3015 2.91311ZM4.95361 14.5661C4.55646 14.5661 4.23331 14.2343 4.23331 13.8264C4.23331 13.4186 4.55646 13.0868 4.95361 13.0868C5.3508 13.0868 5.67395 13.4186 5.67395 13.8264C5.67395 14.2343 5.3508 14.5661 4.95361 14.5661ZM12.7553 14.5661C12.3581 14.5661 12.035 14.2343 12.035 13.8264C12.035 13.4186 12.3581 13.0868 12.7553 13.0868C13.1525 13.0868 13.4756 13.4186 13.4756 13.8264C13.4756 14.2343 13.1525 14.5661 12.7553 14.5661ZM14.33 8.77181L3.57844 9.42062L3.13494 4.34693H15.4073L14.33 8.77181Z\"/>\n              </svg>\n              </button>\n              </div>\n            </div>");
    }
  }
};
},{}],"js/select.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var getTemplate = function getTemplate() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var placeholder = arguments.length > 1 ? arguments[1] : undefined;
  var selectedId = arguments.length > 2 ? arguments[2] : undefined;
  var text = placeholder !== null && placeholder !== void 0 ? placeholder : 'Placeholder по умолчанию';
  var items = data.map(function (item) {
    var cls = '';

    if (item.id === selectedId) {
      text = item.value;
      cls = 'selected';
    }

    return "\n      <li class=\"select__item ".concat(cls, "\" data-type=\"item\" data-id=\"").concat(item.id, "\">").concat(item.value, "</li>\n    ");
  });
  return "\n    <div class=\"select__backdrop\" data-type=\"backdrop\"></div>\n    <div class=\"select__input\" data-type=\"input\">\n      <div data-type=\"input\">\n      <span data-value=\"value\">".concat(text, "</span>\n      <img src=\"./arrow.svg\" alt=\"arrow\" data-type=\"arrow\">\n      </div>\n    </div>\n    <div class=\"select__dropdown\">\n      <ul class=\"select__list\">\n        ").concat(items.join(''), "\n      </ul>\n    </div>\n  ");
};

var _render = new WeakSet();

var _setup = new WeakSet();

var Select = /*#__PURE__*/function () {
  function Select(selector, options) {
    _classCallCheck(this, Select);

    _setup.add(this);

    _render.add(this);

    this.$el = document.querySelector(selector);
    this.options = options;
    this.selectedId = options.selectedId;

    _classPrivateMethodGet(this, _render, _render2).call(this);

    _classPrivateMethodGet(this, _setup, _setup2).call(this);
  }

  _createClass(Select, [{
    key: "clickHandler",
    value: function clickHandler(event) {
      var type = event.target.dataset.type;

      if (type === 'input') {
        this.toggle();
      } else if (type === 'item') {
        var id = event.target.dataset.id;
        this.select(id);
      } else if (type === 'backdrop') {
        this.close();
      }
    }
  }, {
    key: "select",
    value: function select(id) {
      this.selectedId = id;
      this.$value.textContent = this.current.value;
      this.$el.querySelectorAll('[data-type="item"]').forEach(function (el) {
        el.classList.remove('selected');
      });
      this.$el.querySelector("[data-id=\"".concat(id, "\"]")).classList.add('selected');
      this.options.onSelect ? this.options.onSelect(this.current) : null;
      this.close();
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.isOpen ? this.close() : this.open();
    }
  }, {
    key: "open",
    value: function open() {
      this.$el.classList.add('open');
      this.$arrow.style.transform = 'rotate(180deg)';
    }
  }, {
    key: "close",
    value: function close() {
      this.$el.classList.remove('open');
      this.$arrow.style.transform = 'rotate(0deg)';
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$el.removeEventListener('click', this.clickHandler);
      this.$el.innerHTML = '';
    }
  }, {
    key: "isOpen",
    get: function get() {
      return this.$el.classList.contains('open');
    }
  }, {
    key: "current",
    get: function get() {
      var _this = this;

      return this.options.data.find(function (item) {
        return item.id === _this.selectedId;
      });
    }
  }]);

  return Select;
}();

exports.Select = Select;

var _render2 = function _render2() {
  var _this$options = this.options,
      placeholder = _this$options.placeholder,
      data = _this$options.data;
  this.$el.classList.add('select');
  this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId);
};

var _setup2 = function _setup2() {
  this.clickHandler = this.clickHandler.bind(this);
  this.$el.addEventListener('click', this.clickHandler);
  this.$arrow = this.$el.querySelector('[data-type="arrow"]');
  this.$value = this.$el.querySelector('[data-value="value"]');
};
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _burgerToggle = require("./burgerToggle");

var _db = require("./db");

var _goods = require("./goods");

var _select = require("./select");

var type = new _select.Select('.type', {
  placeholder: 'Любого логотипа',
  data: _db.typeSelect
});
var brand = new _select.Select('.brand', {
  placeholder: 'Любого бренда',
  data: _db.brands
});
var photos = new _goods.Goods('.goods', _db.goods);
document.querySelector('.burger').addEventListener('click', function () {
  return (0, _burgerToggle.burgerToggle)('.modal');
});
},{"./burgerToggle":"js/burgerToggle.js","./db":"js/db.js","./goods":"js/goods.js","./select":"js/select.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59772" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map