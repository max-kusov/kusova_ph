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
})({"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\portfolio\\alena\\alena_16.jpg":[["alena_16.f6ea234f.jpg","img/portfolio/alena/alena_16.jpg"],"img/portfolio/alena/alena_16.jpg"],"./..\\img\\portfolio\\regina\\regina_4.jpg":[["regina_4.9837911a.jpg","img/portfolio/regina/regina_4.jpg"],"img/portfolio/regina/regina_4.jpg"],"./..\\img\\portfolio\\tany\\tany_1.jpg":[["tany_1.0fd5fa65.jpg","img/portfolio/tany/tany_1.jpg"],"img/portfolio/tany/tany_1.jpg"],"./..\\img\\portfolio\\oksana\\oksana_4.jpg":[["oksana_4.f124e6bc.jpg","img/portfolio/oksana/oksana_4.jpg"],"img/portfolio/oksana/oksana_4.jpg"],"./..\\img\\portfolio\\anna\\anna_5.jpg":[["anna_5.0e58351b.jpg","img/portfolio/anna/anna_5.jpg"],"img/portfolio/anna/anna_5.jpg"],"./..\\img\\portfolio\\nastia\\nastia_11.jpg":[["nastia_11.6048c28a.jpg","img/portfolio/nastia/nastia_11.jpg"],"img/portfolio/nastia/nastia_11.jpg"],"./..\\img\\portfolio\\sveta\\sveta_7.jpg":[["sveta_7.0dada7a7.jpg","img/portfolio/sveta/sveta_7.jpg"],"img/portfolio/sveta/sveta_7.jpg"],"./..\\img\\portfolio\\angelina\\angelina_4.jpg":[["angelina_4.ff428427.jpg","img/portfolio/angelina/angelina_4.jpg"],"img/portfolio/angelina/angelina_4.jpg"],"./..\\img\\portfolio\\ela\\ela_8.jpg":[["ela_8.66919988.jpg","img/portfolio/ela/ela_8.jpg"],"img/portfolio/ela/ela_8.jpg"],"./..\\img\\portfolio\\lera\\lera_1.jpg":[["lera_1.7143492b.jpg","img/portfolio/lera/lera_1.jpg"],"img/portfolio/lera/lera_1.jpg"],"./..\\img\\portfolio\\olga\\olga_11.jpg":[["olga_11.58495cbb.jpg","img/portfolio/olga/olga_11.jpg"],"img/portfolio/olga/olga_11.jpg"],"./..\\img\\portfolio\\maria\\maria_2.jpg":[["maria_2.284f58a9.jpg","img/portfolio/maria/maria_2.jpg"],"img/portfolio/maria/maria_2.jpg"],"./..\\img\\portfolio\\yna\\yna_9.jpg":[["yna_9.c0514d33.jpg","img/portfolio/yna/yna_9.jpg"],"img/portfolio/yna/yna_9.jpg"],"./..\\img\\portfolio\\anastasia\\anastasia_9.jpg":[["anastasia_9.f10ffdef.jpg","img/portfolio/anastasia/anastasia_9.jpg"],"img/portfolio/anastasia/anastasia_9.jpg"],"./..\\img\\portfolio\\dana\\dana_10.jpg":[["dana_10.fd941597.jpg","img/portfolio/dana/dana_10.jpg"],"img/portfolio/dana/dana_10.jpg"],"./..\\img\\portfolio\\svetlana\\svetlana_8.jpg":[["svetlana_8.187f4076.jpg","img/portfolio/svetlana/svetlana_8.jpg"],"img/portfolio/svetlana/svetlana_8.jpg"],"./..\\img\\portfolio\\annaidima\\annaidima_7.jpg":[["annaidima_7.5737a414.jpg","img/portfolio/annaidima/annaidima_7.jpg"],"img/portfolio/annaidima/annaidima_7.jpg"],"./..\\img\\portfolio\\dimaiana\\dimaiana_10.jpg":[["dimaiana_10.94ce08fc.jpg","img/portfolio/dimaiana/dimaiana_10.jpg"],"img/portfolio/dimaiana/dimaiana_10.jpg"],"./..\\img\\portfolio\\tatana\\tatana_12.jpg":[["tatana_12.e3a0b055.jpg","img/portfolio/tatana/tatana_12.jpg"],"img/portfolio/tatana/tatana_12.jpg"],"./..\\img\\portfolio\\leraizhena\\leraizhena_12.jpg":[["leraizhena_12.9d5c9ec3.jpg","img/portfolio/leraizhena/leraizhena_12.jpg"],"img/portfolio/leraizhena/leraizhena_12.jpg"],"./..\\img\\portfolio\\angelinaikirill\\angelinaikirill_15.jpg":[["angelinaikirill_15.90b5008d.jpg","img/portfolio/angelinaikirill/angelinaikirill_15.jpg"],"img/portfolio/angelinaikirill/angelinaikirill_15.jpg"],"./..\\img\\price\\price_person.jpg":[["price_person.178119c6.jpg","img/price/price_person.jpg"],"img/price/price_person.jpg"],"./..\\img\\price\\price_love.jpg":[["price_love.27c3e338.jpg","img/price/price_love.jpg"],"img/price/price_love.jpg"],"./..\\img\\price\\price_small.jpg":[["price_small.6f9f57ad.jpg","img/price/price_small.jpg"],"img/price/price_small.jpg"],"./..\\img\\2.jpg":[["2.3ca6bb44.jpg","img/2.jpg"],"img/2.jpg"],"./..\\img\\3.jpg":[["3.a433b89d.jpg","img/3.jpg"],"img/3.jpg"],"./..\\img\\4.jpg":[["4.c6d96be5.jpg","img/4.jpg"],"img/4.jpg"],"./..\\img\\5.jpg":[["5.689b68fd.jpg","img/5.jpg"],"img/5.jpg"],"./..\\img\\gallery\\4.jpg":[["4.59d36255.jpg","img/gallery/4.jpg"],"img/gallery/4.jpg"],"./..\\img\\gallery\\3.jpg":[["3.93f6f538.jpg","img/gallery/3.jpg"],"img/gallery/3.jpg"],"./..\\img\\gallery\\2.jpg":[["2.2ca67951.jpg","img/gallery/2.jpg"],"img/gallery/2.jpg"],"./..\\img\\gallery\\1.jpg":[["1.d3ab9851.jpg","img/gallery/1.jpg"],"img/gallery/1.jpg"],"_css_loader":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/style.78032849.js.map