// import Modal from './modules/Modal/Modal'
// import Preloader from './modules/Preloader/Preloader'
import Menu from '../../modules/Menu/Menu'
import Slider from '../../modules/Slider/Slider'

const slider = new Slider({
    imgDesktop: ['./img/5.jpg',
        './img/4.jpg',
        './img/3.jpg',
        './img/2.jpg',],
    imgModile: [],
    valueInterval: 1500,
})
const menu = new Menu([
    { href: "portfolio.html", text: "Портфолио" },
    { href: "portfolio.html", text: "Портфолио" },
])
// const modal = new Modal('.portfolio__img', '#modal', '')
// const preloader = new Preloader(3000)
// window.onload = preloader


