'use strict'
class Modal {
    constructor(elements, modalSelector, options) {
        this._init(elements, modalSelector, options)
    }
    openModal() {
        this.handlerImgClick = this.handlerImgClick.bind(this)
        this.elements.forEach(elem => elem.addEventListener('click', this.handlerImgClick))
    }
    closeModal() {
        this.handlerExitClick = this.handlerExitClick.bind(this)

        this.close = document.querySelector('.fa-times')
        this.close.addEventListener('click', this.handlerExitClick)

        this.modalSelector.addEventListener('click', (e) => {
            e.target === this.modalSelector && this.handlerExitClick()
        })
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

    _init(elements, modalSelector, options) {
        this.elements = document.querySelectorAll(elements)
        this.modalSelector = document.querySelector(modalSelector)
        this.options = options

        this._render()
        this._addEvent()
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
    _render() {
        this.modalSelector.classList.add('modal')
        this.modalSelector.innerHTML = this._getModal()
    }
    _addEvent() {
        this.openModal()
        this.closeModal()
    }
}

export default Modal