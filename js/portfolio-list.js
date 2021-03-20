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
        'img/portfolio/alina_1.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/alina_2.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/alina_3.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/alina_4.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/alina_5.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/alina_6.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/alina_7.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/alina_8.jpg',
        'photo'
    ).render();



});