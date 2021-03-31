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
        'img/portfolio/regina/1.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/regina/2.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/regina/3.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/regina/4.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/regina/5.jpg',

        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/regina/6.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/regina/7.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/regina/8.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/regina/9.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/regina/10.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/regina/11.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/regina/12.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/regina/13.jpg',

        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/regina/14.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/regina/15.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/regina/16.jpg',
        'photo'
    ).render();



});