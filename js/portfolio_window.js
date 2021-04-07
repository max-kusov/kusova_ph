document.addEventListener("DOMContentLoaded", () => {
    const itemsPortfolio = document.querySelectorAll(".portfolio__img"),
        modal = document.querySelector(".modal"),
        btnExit = document.querySelector(".modal__exit");

    let modalWindow = document.querySelector('.modal__table'),
        modalImg = document.querySelectorAll('img');


    itemsPortfolio.forEach(item => {
        item.addEventListener("click", () => {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";


            catalogList.filter((img) => {
                if (img.id == item.dataset['name']) {
                    console.log('raboteet')

                }
            })
        })
    })
    btnExit.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "";
    })

    class Photo {

        render() {

            catalogList.forEach(({ id, img, alt }) => {
                modalWindow.innerHTML += `
                    <img class="${id}" src=${img} alt=${alt}>
                `
            })
        }
    }

    const photo = new Photo;
    photo.render();
});

