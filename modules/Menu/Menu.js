"use strict"
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
export default Menu



