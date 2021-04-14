document.addEventListener("DOMContentLoaded", () => {
    const itemsPortfolio = document.querySelectorAll(".portfolio__img"),
        modal = document.querySelector(".modal"),
        btnExit = document.querySelector(".modal__exit"),
        openImg = document.querySelector('.modal__img'),
        left = document.querySelector('.fa-chevron-left'),
        right = document.querySelector('.fa-chevron-right');

    let modalWindow = document.querySelector('.modal__table'),
        slideIndex = 0;


    right.addEventListener('click', () => {
        console.log('лево')
    })

    itemsPortfolio.forEach(item => {
        item.addEventListener("click", () => {
            let modalImg = modalWindow.querySelectorAll('img');

            modal.style.display = "block";
            document.body.style.overflow = "hidden";

            let filterDate = item.dataset['name'];


            modalImg.forEach(img => {
                img.style.display = 'block';
                if (!img.classList.contains(filterDate)) {
                    img.style.display = 'none';
                }
                //////// изоброжение на весь экран
                img.addEventListener('click', () => {
                    let page = document.querySelector('.modal__page');
                    openImg.style.display = 'flex';
                    page.append(img);
                })
            })
        })
    })
    btnExit.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "";
    })
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "";
        }
    })

    //////// изоброжение на весь экран
    openImg.addEventListener('click', (event) => {
        if (event.target === openImg) {
            openImg.style.display = "none";
        }
    })

    class Photo {

        render() {

            catalogList.forEach(({ id, img }) => {
                modalWindow.innerHTML += `
                    <img class="${id}" src=${img} alt=${id}>
                `
            })
        }
    }

    const photo = new Photo;
    photo.render();


});

