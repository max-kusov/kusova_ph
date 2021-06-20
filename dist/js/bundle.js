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
    constructor(data) {
        this._init()
        this._getPr(data)
    }

    clickIconMenu(e) {
        e.target.classList.remove('fa-times')
        e.target.classList.add('fa-bars')
        this.menuNav.classList.remove('menu-show')
        document.body.style.overflow = ""

    }
    clickIconMenuClose(e) {
        e.target.classList.add('fa-times')
        e.target.classList.remove('fa-bars')
        this.menuNav.classList.add('menu-show')
        document.body.style.overflow = "hidden"
    }

    _getPr(data) {
        this.data = data
        let a = this.data
        this.b = a.map(item => {
            return `<li><a class="menu__link" href="./index.html">${item.text}</a></li>`
        })

    }
    _getMenu() { //сделать модули
        return `
            <a href="index.html" class="menu__logo"><span>Anzhelika Kusova</span></a>
            <div class="menu__wrapp">
                <div class="menu__icon">
                    <i class="fas fa-bars" data-js="menu"></i>
                </div>
                <nav class="menu__nav">
                    <ul class="menu__list">
                        <li><a class="menu__link" href="./index.html"></a></li>
                        <li><a class="menu__link" href="portfolio.html">Портфолио</a></li>
                        <li><a class="menu__link" href="price.html">Прайс</a></li>
                        <li><a class="menu__link" href="contacts.html">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        `
    }
    _handlerClickBtn(e) {
        e.target.classList.contains("fa-times") ? this.clickIconMenu(e) : this.clickIconMenuClose(e)
    }
    _render() {
        this.menu = document.querySelector('#menu')
        this.menu.innerHTML = this._getMenu()
    }
    _addEvents() {
        this._handlerClickBtn = this._handlerClickBtn.bind(this)
        this.menuNav = document.querySelector('.menu__nav') /// временное место деслакации
        this.iconMenu = document.querySelector('[data-js="menu"]')
        this.iconMenu.addEventListener('click', this._handlerClickBtn)
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
    constructor(pages) {
        this.movePage(pages)
        this.init()

    }
    getSlider() {
        return `
            <div class="slider__page  active">
                <img class="slider__img" src="../img/5.jpg" alt="">
            </div>

            <div class="slider__page">
                <img class="slider__img" src="/img/4.jpg" alt="">
            </div>

            <div class="slider__page">
                <img class="slider__img" src="/img/3.jpg" alt="">
            </div>
            
            <div class="slider__page">
                <img class="slider__img" src="/img/2.jpg" alt="">
            </div>
            <nav class="slider__nav">
                <div class="slider__btn"></div>
                <div class="slider__btn"></div>
                <div class="slider__btn"></div>
                <div class="slider__btn"></div>
            </nav>
            <div class="slider__social">
                <a href="https://www.t.me/kusovaaaaaaa" target=" _blank"><i class="fab fa-telegram-plane"></i></a>
                <a href="https://www.instagram.com/kusovaaaaaaa/?igshid=t60wcs3v8rz8" target="_blank"><i
                        class="fab fa-instagram"></i></a>
            </div>
        `
    }
    movePage(pages) {
        this.pages = pages
        this.pages.map(item => console.log(item))
    }
    clickBtn() {
        this.handlerBtnClick = this.handlerBtnClick.bind(this)

        this.btns = document.querySelectorAll(".slider__btn")
        this.btns.forEach((btn, i) => {
            btn.addEventListener('click', () => this.handlerBtnClick(i))
        })
    }
    time() {
        this.img = document.querySelectorAll('.slider__page')
        let i = 1
        setInterval(() => {
            this.handlerBtnClick(i++)
            if (i >= this.img.length) {
                return i = 0
            }
        }, 4000);
    }
    handlerBtnClick(i) {
        this.img = document.querySelectorAll('.slider__page')
        this.img.forEach(i => i.classList.remove('active'))
        this.img[i].classList.add('active')
    }
    render() {
        this.slidery = document.querySelector('#slider')
        this.slidery.classList.add('slider')
        this.slidery.innerHTML = this.getSlider()

    }
    init() {
        this.render()
        this.time()
        this.clickBtn()
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
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Menu_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/Menu/Menu */ "./modules/Menu/Menu.js");
/* harmony import */ var _modules_Slider_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/Slider/Slider */ "./modules/Slider/Slider.js");
// import Modal from './modules/Modal/Modal'
// import Preloader from './modules/Preloader/Preloader'



const slider = new _modules_Slider_Slider__WEBPACK_IMPORTED_MODULE_1__.default([
    './gallery/1.jpg',
    './gallery/2.jpg',
    './gallery/3.jpg',
    './gallery/4.jpg',
])
const menu = new _modules_Menu_Menu__WEBPACK_IMPORTED_MODULE_0__.default([
    { href: "portfolio.html", text: "Портфолио" },
    { href: "portfolio.html", text: "Портфолио" },
])
// const modal = new Modal('.portfolio__img', '#modal', '')
// const preloader = new Preloader(3000)
// window.onload = preloader



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map