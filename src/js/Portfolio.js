import Preloader from '../../modules/Preloader/Preloader'
import Menu from '../../modules/Menu/Menu'
import Modal from '../../modules/Modal/Modal'
import { ModalContent } from '../../modules/Modal/Modal'
// import json from '../../js/catalog.json'


const preloader = new Preloader(3000)
window.onload = preloader

const menu = new Menu({
    logo: { href: "./index.html", text: "Anzhelika Kusova" },
    links: [
        { href: "./portfolio.html", text: "Портфолио" },
        { href: "./price.html", text: "Прайс" },
        { href: "./contacts.html", text: "Контакты" },
    ],
});

const modal = new Modal('.portfolio__img')
const modalContent = new ModalContent(modal)

