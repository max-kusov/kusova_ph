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

/***/ "./modules/Modal/Modal.js":
/*!********************************!*\
  !*** ./modules/Modal/Modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ModalContent": () => (/* binding */ ModalContent)
/* harmony export */ });


class Modal {
    constructor(triggerElement) {
        this.triggerElement = triggerElement

        this._init()
    }
    _getModal() {
        return `
            <div class="modal__window">
                <i class="fas fa-times modal__exit"></i>
                <div class="modal__content">
                    
                </div>
            </div>
        `
    }

    openModal() {
        this.trigger = document.querySelectorAll(this.triggerElement)
        this.handlerImgClick = this.handlerImgClick.bind(this)
        this.trigger.forEach(elem => elem.addEventListener('click', this.handlerImgClick))
    }

    closeModal() {
        this.handlerExitClick = this.handlerExitClick.bind(this)

        this.BtnClose = document.querySelector('.fa-times')
        this.BtnClose.addEventListener('click', this.handlerExitClick)

        this.modalSelector.addEventListener('click', e => e.target === this.modalSelector && this.handlerExitClick())
    }

    handlerImgClick() {
        this.modalSelector.classList.add('open')
        document.body.style.overflow = "hidden"
        document.querySelector('.modal__window').scrollTop = 0;
    }
    handlerExitClick() {
        this.modalSelector.classList.remove('open');
        document.body.style.overflow = "";
    }
    _render() {
        this.modalSelector = document.querySelector('#modal')
        this.modalSelector.classList.add('modal')
        this.modalSelector.innerHTML = this._getModal()
    }
    _addEvent() {
        this._render()
        this.trigger = this.triggerElement
        this.openModal()
        this.closeModal()
    }
    _init() {
        this._addEvent()
    }
}

class ModalContent {
    constructor(modal, url) {
        this.modal = modal
        this.url = url

        this._init()
    }
    _addEvent() {
        this.modal.trigger = document.querySelectorAll(this.modal.triggerElement)
        this.modal.trigger.forEach(elem => elem.addEventListener('click', (e) => this._handlerImgClick(e)))
    }
    async _handlerImgClick(e) {
        this.content = await fetch(this.url)
        this.contentJson = await this.content.json()

        for (let key in this.contentJson) {
            (key === e.target.dataset['name']) && this._renderContent(key)
        }
    }

    _renderContent(key) {
        this.content = this.contentJson[key].map(item => `<img class="" src=${item} alt=""></img>`)
        document.querySelector('.modal__content').innerHTML = this.content.join('')
    }
    _init() {
        this._addEvent()
    }

}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);




/***/ }),

/***/ "./modules/Preloader/Preloader.js":
/*!****************************************!*\
  !*** ./modules/Preloader/Preloader.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Preloader {
    constructor(time) {
        this.time = time
        this._init()
    }
    _getPreloader() {
        return `<img src="./img/preview.gif" alt="preloader">`
    }
    _hidePreloader() {
        this.preloader.classList.add("hide");
        document.body.style.overflow = ""
    }
    _timeOut() {
        setTimeout(this._hidePreloader, this.time)
    }
    _render() {
        this.preloader = document.querySelector("#preloader");
        this.preloader.classList.add('preloader')
        this.preloader.innerHTML = this._getPreloader()
    }
    _init() {
        document.body.style.overflow = "hidden"
        this._render()
        this._timeOut()
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preloader);


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
/*!*****************************!*\
  !*** ./src/js/Portfolio.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/Preloader/Preloader */ "./modules/Preloader/Preloader.js");
/* harmony import */ var _modules_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/Menu/Menu */ "./modules/Menu/Menu.js");
/* harmony import */ var _modules_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/Modal/Modal */ "./modules/Modal/Modal.js");





const preloader = new _modules_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_0__.default(3000)
window.onload = preloader

const menu = new _modules_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__.default({
    logo: { href: "./index.html", text: "Anzhelika Kusova" },
    links: [
        { href: "./portfolio.html", text: "Портфолио" },
        { href: "./price.html", text: "Прайс" },
        { href: "./contacts.html", text: "Контакты" },
    ],
})

const modal = new _modules_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__.default('.portfolio__img')
const modalContent = new _modules_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__.ModalContent(modal, './js/catalog.json')


})();

/******/ })()
;
//# sourceMappingURL=portfolio.js.map