class Preloader {
    constructor(time) {
        this.time = time
        this._init()
    }
    hide() {
        this.preloader.classList.add("hide");
        document.body.style.overflow = ""
    }
    _getPreloader() {
        return `<img src="./img/preview.gif" alt="preloader">`
    }
    _render() {
        this.preloader.classList.add('preloader')
        this.preloader.innerHTML = this._getPreloader()
    }
    _timeOut() {
        setTimeout(this.hide, this.time)
    }
    _init() {
        this.preloader = document.querySelector("#preloader");
        document.body.style.overflow = "hidden"
        this._timeOut()
        this._render()
    }
}

export default Preloader
