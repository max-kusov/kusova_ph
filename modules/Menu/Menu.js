"use strict"
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
export default Menu



