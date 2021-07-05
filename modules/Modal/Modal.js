'use strict'

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
        this.content = await fetch('./catalog.json')
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



export default Modal
export { ModalContent }

