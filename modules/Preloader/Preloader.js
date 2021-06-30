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

export default Preloader
