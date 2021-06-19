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
})({"modules/Burger/Burger.js":[function(require,module,exports) {
"use strict"; /// переиминовать файл в меню

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu = /*#__PURE__*/function () {
  function Menu(data) {
    _classCallCheck(this, Menu);

    this._init(); // this.data = data


    this._getPr(data);
  }

  _createClass(Menu, [{
    key: "clickIconMenu",
    value: function clickIconMenu(e) {
      e.target.classList.remove('fa-times');
      e.target.classList.add('fa-bars');
      this.menuNav.classList.remove('menu-show');
      document.body.style.overflow = "";
    }
  }, {
    key: "clickIconMenuClose",
    value: function clickIconMenuClose(e) {
      e.target.classList.add('fa-times');
      e.target.classList.remove('fa-bars');
      this.menuNav.classList.add('menu-show');
      document.body.style.overflow = "hidden";
    }
  }, {
    key: "_getPr",
    value: function _getPr(data) {
      this.data = data;
      var a = this.data;
      this.b = a.map(function (item) {
        return "<li><a class=\"menu__link\" href=\"./index.html\">".concat(item.text, "</a></li>");
      });
    }
  }, {
    key: "_getMenu",
    value: function _getMenu() {
      //сделать модули
      return "\n            <a href=\"index.html\" class=\"menu__logo\"><span>Anzhelika Kusova</span></a>\n            <div class=\"menu__wrapp\">\n                <div class=\"menu__icon\">\n                    <i class=\"fas fa-bars\" data-js=\"menu\"></i>\n                </div>\n                <nav class=\"menu__nav\">\n                    <ul class=\"menu__list\">\n                        <li><a class=\"menu__link\" href=\"./index.html\"></a></li>\n                        <li><a class=\"menu__link\" href=\"portfolio.html\">\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E</a></li>\n                        <li><a class=\"menu__link\" href=\"price.html\">\u041F\u0440\u0430\u0439\u0441</a></li>\n                        <li><a class=\"menu__link\" href=\"contacts.html\">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a></li>\n                    </ul>\n                </nav>\n            </div>\n        ";
    }
  }, {
    key: "_handlerClickBtn",
    value: function _handlerClickBtn(e) {
      e.target.classList.contains("fa-times") ? this.clickIconMenu(e) : this.clickIconMenuClose(e);
    }
  }, {
    key: "_render",
    value: function _render() {
      this.menu = document.querySelector('#menu');
      this.menu.innerHTML = this._getMenu();
    }
  }, {
    key: "_addEvents",
    value: function _addEvents() {
      this._handlerClickBtn = this._handlerClickBtn.bind(this);
      this.menuNav = document.querySelector('.menu__nav'); /// временное место деслакации

      this.iconMenu = document.querySelector('[data-js="menu"]');
      this.iconMenu.addEventListener('click', this._handlerClickBtn);
    }
  }, {
    key: "_init",
    value: function _init() {
      this._render();

      this._addEvents();
    }
  }]);

  return Menu;
}();

var _default = Menu;
exports.default = _default;
},{}],"modules/Slider/Slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider = /*#__PURE__*/function () {
  function Slider(pages) {
    _classCallCheck(this, Slider);

    this.movePage(pages);
    this.init();
  }

  _createClass(Slider, [{
    key: "getSlider",
    value: function getSlider() {
      return "\n        <div class=\"slider__page  active\">\n        <div class=\"slider__img--four\"></div>\n        </div>\n        <div class=\"slider__page\">\n            <div class=\"slider__img--three\"></div>\n        </div>\n        <div class=\"slider__page\">\n            <div class=\"slider__img--two\"></div>\n        </div>\n        <div class=\"slider__page\">\n            <div class=\"slider__img\"></div>\n        </div>\n        <nav class=\"slider__nav\">\n            <div class=\"slider__btn\"></div>\n            <div class=\"slider__btn\"></div>\n            <div class=\"slider__btn\"></div>\n            <div class=\"slider__btn\"></div>\n        </nav>\n        <div class=\"slider__social\">\n            <a href=\"https://www.t.me/kusovaaaaaaa\" target=\" _blank\"><i class=\"fab fa-telegram-plane\"></i></a>\n            <a href=\"https://www.instagram.com/kusovaaaaaaa/?igshid=t60wcs3v8rz8\" target=\"_blank\"><i\n                    class=\"fab fa-instagram\"></i></a>\n        </div>\n        ";
    }
  }, {
    key: "movePage",
    value: function movePage(pages) {
      this.pages = pages;
      this.pages.map(function (item) {
        return console.log(item);
      });
    }
  }, {
    key: "clickBtn",
    value: function clickBtn() {
      var _this = this;

      this.handlerBtnClick = this.handlerBtnClick.bind(this);
      this.btns = document.querySelectorAll(".slider__btn");
      this.btns.forEach(function (btn, i) {
        btn.addEventListener('click', function () {
          return _this.handlerBtnClick(i);
        });
      });
    }
  }, {
    key: "time",
    value: function time() {
      var _this2 = this;

      this.img = document.querySelectorAll('.slider__page');
      var i = 1;
      setInterval(function () {
        _this2.handlerBtnClick(i++);

        if (i >= _this2.img.length) {
          return i = 0;
        }
      }, 4000);
    }
  }, {
    key: "handlerBtnClick",
    value: function handlerBtnClick(i) {
      this.img = document.querySelectorAll('.slider__page');
      this.img.forEach(function (i) {
        return i.classList.remove('active');
      });
      this.img[i].classList.add('active');
    }
  }, {
    key: "render",
    value: function render() {
      this.slidery = document.querySelector('#slider');
      this.slidery.classList.add('slider');
      this.slidery.innerHTML = this.getSlider();
    }
  }, {
    key: "init",
    value: function init() {
      this.render();
      this.time();
      this.clickBtn();
    }
  }]);

  return Slider;
}();

var _default = Slider;
exports.default = _default;
},{}],"script.js":[function(require,module,exports) {
"use strict";

var _Burger = _interopRequireDefault(require("./modules/Burger/Burger"));

var _Slider = _interopRequireDefault(require("./modules/Slider/Slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Modal from './modules/Modal/Modal'
// import Preloader from './modules/Preloader/Preloader'
var slider = new _Slider.default(['./gallery/1.jpg', './gallery/2.jpg', './gallery/3.jpg', './gallery/4.jpg']);
var menu = new _Burger.default([{
  href: "portfolio.html",
  text: "Портфолио"
}, {
  href: "portfolio.html",
  text: "Портфолио"
}]); // const modal = new Modal('.portfolio__img', '#modal', '')
// const preloader = new Preloader(3000)
// window.onload = preloader
},{"./modules/Burger/Burger":"modules/Burger/Burger.js","./modules/Slider/Slider":"modules/Slider/Slider.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64420" + '/');

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
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map