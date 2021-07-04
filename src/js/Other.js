import Preloader from '../../modules/Preloader/Preloader'
import Menu from '../../modules/Menu/Menu'

const preloader = new Preloader(3000)
window.onload = preloader

const menu = new Menu({
    logo: { href: "./index.html", text: "Anzhelika Kusova" },
    links: [
        { href: "./portfolio.html", text: "Портфолио" },
        { href: "./price.html", text: "Прайс" },
        { href: "./contacts.html", text: "Контакты" },
    ],
})
