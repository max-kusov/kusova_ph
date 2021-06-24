"use strict"
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

    _checkingIntervalValues() {
        this.valueInterval = this.options.valueInterval
        this.valueInterval = this._isValueIntervalValid() ? 4000 : this.valueInterval
    }

    _checkingСounterValues() {
        this.counter = (this.counter >= this.img.length) ? 0 : this.counter
    }

    _changeImageAtInterval() {
        this._checkingIntervalValues()
        setInterval(() => {
            this._changeImage(this.counter++)
            this._checkingСounterValues()
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

export default Slider
