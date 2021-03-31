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
        'img/portfolio/tany/tany_1.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_2.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_3.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_4.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_5.jpg',

        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_6.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_7.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_8.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_9.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_10.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_11.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_12.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_13.jpg',

        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_14.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_15.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_16.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_17.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_18.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_19.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_20.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_21.jpg',

        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_22.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_23.jpg',
        'photo'
    ).render();
    new ItemList(
        '.port-gallery__table',
        'img/portfolio/tany/tany_24.jpg',
        'photo'
    ).render();



});