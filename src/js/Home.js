import Menu from '../../modules/Menu/Menu'
import Slider from '../../modules/Slider/Slider'

const menu = new Menu({
    logo: { href: "./index.html", text: "Anzhelika Kusova" },
    links: [
        { href: "./portfolio.html", text: "Портфолио" },
        { href: "./price.html", text: "Прайс" },
        { href: "./contacts.html", text: "Контакты" },
    ],
})

const slider = new Slider({
    imgDesktop: [
        './img/5.jpg',
        './img/4.jpg',
        './img/3.jpg',
        './img/2.jpg',
    ],
    imgModile: [

    ],
    valueInterval: 1500,
})