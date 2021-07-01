import Modal from '../../modules/Modal/Modal'
import { ModalContent } from '../../modules/Modal/Modal'
// import Preloader from '../../modules/Preloader/Preloader'
import Menu from '../../modules/Menu/Menu'
// import Slider from '../../modules/Slider/Slider'
import { catalogs } from '../../js/catalog-1'

const menu = new Menu({
    logo: { href: "./index.html", text: "Anzhelika Kusova" },
    links: [
        { href: "./portfolio.html", text: "Портфолио" },
        { href: "./price.html", text: "Прайс" },
        { href: "./contacts.html", text: "Контакты" },
    ],
})
//'.portfolio__img'
const modal = new Modal({
    triggerElement: '.portfolio__img',
    catalogs,
})
const modalContent = new ModalContent(modal, catalogs)


// const preloader = new Preloader(3000)
// window.onload = preloader


// const slider = new Slider({
//     imgDesktop: [
//         './img/5.jpg',
//         './img/4.jpg',
//         './img/3.jpg',
//         './img/2.jpg',
//     ],
//     imgModile: [

//     ],
//     valueInterval: 1500,
// })


// async function getRespose() {
//     let response = await fetch('../../js/catalog.json')
//     let cont = await response.json()
//     console.log(cont.splice(0, 2))
// }

// getRespose()


