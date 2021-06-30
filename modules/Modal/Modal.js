'use strict'

class Modal {
    constructor(options = {}) {
        this._init(options)
    }
    _getModal() {
        // let people = this.options.catalogs.anna.map(item => {
        //     return `<img class="" src=${item} alt=""></img>`
        // })
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

        this.trigger.forEach(elem => elem.addEventListener('click', (e) => {
            let gie = e.target.dataset['name']
            console.log(this.options.catalogs)
            for (let key in this.options.catalogs) {
                if (key == gie) {
                    // console.log(key)
                    let a = this.options.catalogs[key].map(item => {
                        return `<img class="" src=${item} alt=""></img>`
                    })

                    document.querySelector('.modal__content').innerHTML = a.join('')


                }
            }


            // .map(item => {
            //     return `<img class="" src=${item} alt=""></img>`
            // })

            // document.querySelector('.modal__content').innerHTML = ?????.join('')
        }))

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
    _init(options) {
        this.options = options

        this._render()
        this._addEvent()
    }
}

export default Modal