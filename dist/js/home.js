/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/Menu/Menu.js":
/*!******************************!*\
  !*** ./modules/Menu/Menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

class Menu {
    constructor(options = {}) {
        this.options = options
        this._init()
    }

    _getMenu() {
        let links = this.options.links.map(link => {
            return `<li><a class="menu__link" href="${link.href}">${link.text}</a></li>`
        })
        return `
            <a href="${this.options.logo.href}" class="menu__logo"><span>${this.options.logo.text}</span></a>
            <div class="menu__wrapp">
                <div class="menu__btn">
                    <i class="fas fa-bars" data-js="menu"></i>
                </div>
                <nav class="menu__nav">
                    <ul class="menu__list">
                        ${links.join('')}
                    </ul>
                </nav>
            </div>
        `
    }
    _clickBtnOpen(e) {
        e.target.classList.remove('fa-times')
        e.target.classList.add('fa-bars')
        this.menuNav.classList.remove('menu-show')
        document.body.style.overflow = ""
    }
    _clickBtnClose(e) {
        e.target.classList.add('fa-times')
        e.target.classList.remove('fa-bars')
        this.menuNav.classList.add('menu-show')
        document.body.style.overflow = "hidden"
    }

    _handlerBtnClick(e) {
        e.target.classList.contains("fa-times") ? this._clickBtnOpen(e) : this._clickBtnClose(e)
    }
    _addEvents() {
        this._handlerBtnClick = this._handlerBtnClick.bind(this)
        this.menuNav = document.querySelector('.menu__nav')
        this.iconMenu = document.querySelector('[data-js="menu"]')
        this.iconMenu.addEventListener('click', this._handlerBtnClick)
    }
    _render() {
        this.menu = document.querySelector('#menu')
        this.menu.classList.add('menu')
        this.menu.innerHTML = this._getMenu()
    }
    _init() {
        this._render()
        this._addEvents()
    }


}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);





/***/ }),

/***/ "./modules/Slider/Slider.js":
/*!**********************************!*\
  !*** ./modules/Slider/Slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

class Slider {
    constructor(options) {
        this.options = options
        this._init()
    }
    _getSlider() { // разбить на два метода? создание слайдера и кнопок??? 
        let btn = `<div class="slider__btn"></div>`,
            items = this.options.imgDesktop.map(item => {
                return `
                    <div class="slider__page">
                        <img class="slider__img" src="${item}" alt="">
                    </div>
                `
            })

        return `
            ${items.join('')}
            <nav class="slider__nav">
                ${btn.repeat(items.length)}
            </nav>
        `
    }

    _addEvents() {
        this._handlerBtnClick = this._handlerBtnClick.bind(this)
        this.btns = document.querySelectorAll(".slider__btn")
        this.btns.forEach((btn, i) => btn.addEventListener('click', () => this._handlerBtnClick(i)))
    }

    _handlerBtnClick(i) {
        this._changeImage(i)
        return this.counter = i
    }

    _changeImage(i) {
        this.img = document.querySelectorAll('.slider__page')
        this.img.forEach(i => i.classList.remove('active'))
        this.img[i].classList.add('active')
    }

    _isValueIntervalValid() {
        return (this.valueInterval == '') || (this.valueInterval == undefined) || (this.valueInterval <= 1500)
    }

    _checkIntervalValues() {
        this.valueInterval = this.options.valueInterval
        this.valueInterval = this._isValueIntervalValid() ? 4000 : this.valueInterval
    }

    _checkСounterValues() {
        this.counter = (this.counter >= this.img.length) ? 0 : this.counter
    }

    _changeImageAtInterval() {
        this._checkIntervalValues()
        setInterval(() => {
            this._changeImage(this.counter++)
            this._checkСounterValues()
        }, this.valueInterval);
    }

    _render() {
        this.counter = 1
        this.slider = document.querySelector('#slider')
        this.slider.classList.add('slider')
        this.slider.innerHTML = this._getSlider()
    }
    _init() {
        this._render()
        this._changeImage(0)
        this._addEvents()
        this._changeImageAtInterval()

    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Menu_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/Menu/Menu */ "./modules/Menu/Menu.js");
/* harmony import */ var _modules_Slider_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/Slider/Slider */ "./modules/Slider/Slider.js");



const menu = new _modules_Menu_Menu__WEBPACK_IMPORTED_MODULE_0__.default({
    logo: { href: "./index.html", text: "Anzhelika Kusova" },
    links: [
        { href: "./portfolio.html", text: "Портфолио" },
        { href: "./price.html", text: "Прайс" },
        { href: "./contacts.html", text: "Контакты" },
    ],
})

const slider = new _modules_Slider_Slider__WEBPACK_IMPORTED_MODULE_1__.default({
    imgDesktop: [
        './img/5.jpg',
        './img/4.jpg',
        './img/3.jpg',
        './img/2.jpg',
    ],
    imgModile: [

    ],
    valueInterval: 1500,
})
})();

/******/ })()
;
//# sourceMappingURL=home.js.map