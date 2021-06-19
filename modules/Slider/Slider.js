"use strict"
class Slider {
    constructor(pages) {
        this.movePage(pages)
        this.init()

    }
    getSlider() {
        return `
        <div class="slider__page  active">
            <div class="slider__img--four"></div>
        </div>
        <div class="slider__page">
            <div class="slider__img--three"></div>
        </div>
        <div class="slider__page">
            <div class="slider__img--two"></div>
        </div>
        <div class="slider__page">
            <div class="slider__img"></div>
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

export default Slider
