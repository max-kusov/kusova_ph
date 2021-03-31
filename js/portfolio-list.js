document.addEventListener("DOMContentLoaded", () => {

    class ItemList {
        constructor(parentSelector, img, alt,) {
            this.parentSelector = document.querySelector(parentSelector);
            this.img = img;
            this.alt = alt;
        }
        render() {
            const element = document.createElement('div');
            element.classList.add("port-gallery__item");

            element.innerHTML = `
                <img src=${this.img} alt=${this.alt}>
            `
            this.parentSelector.append(element);
        }
    }

    new ItemList(
        '.port-gallery__table',
        'img/portfolio/alina/1.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/alina/2.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/alina/3.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/alina/4.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/alina/5.jpg',

        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/alina/6.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/alina/7.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/alina/8.jpg',
        'photo'
    ).render();



});