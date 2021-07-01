'use strict'

class Modal {
    constructor(options = {}) {
        this.options = options

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
        this.trigger = document.querySelectorAll(this.options.triggerElement)
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
        this.trigger = this.options.triggerElement
        this.openModal()
        this.closeModal()
    }
    _init() {
        this._render()
        // this._renderContent()
        this._addEvent()
    }
}

class ModalContent {
    constructor(modal, catalogs) {
        this.modal = modal
        this.catalogs = catalogs

        this._init()
    }
    _render() {
        this.modal.trigger = document.querySelectorAll(this.modal.options.triggerElement)
        this.modal.trigger.forEach(elem => elem.addEventListener('click', (e) => {
            let event = e.target.dataset['name']

            for (let key in this.catalogs) {
                if (key == event) {
                    let a = this.catalogs[key].map(item => {
                        return `<img class="" src=${item} alt=""></img>`
                    })
                    document.querySelector('.modal__content').innerHTML = a.join('')
                }
            }
        }))
    }
    _init() {
        this._render()
        // this._addEvent()
    }
}
export default Modal
export { ModalContent }