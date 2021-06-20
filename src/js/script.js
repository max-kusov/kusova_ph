// import Modal from './modules/Modal/Modal'
// import Preloader from './modules/Preloader/Preloader'
import Menu from '../../modules/Menu/Menu'
import Slider from '../../modules/Slider/Slider'

const slider = new Slider([
    './gallery/1.jpg',
    './gallery/2.jpg',
    './gallery/3.jpg',
    './gallery/4.jpg',
])
const menu = new Menu([
    { href: "portfolio.html", text: "Портфолио" },
    { href: "portfolio.html", text: "Портфолио" },
])
// const modal = new Modal('.portfolio__img', '#modal', '')
// const preloader = new Preloader(3000)
// window.onload = preloader


