document.addEventListener("DOMContentLoaded", () => {
    const itemsPortfolio = document.querySelectorAll(".portfolio__img"),
        modal = document.querySelector(".modal"),
        btnExit = document.querySelector(".modal__exit");

    let modalWindow = document.querySelector('.modal__table');

    itemsPortfolio.forEach(item => {
        item.addEventListener("click", () => {
            let modalImg = modalWindow.querySelectorAll('img');

            modal.style.display = "block";
            document.body.style.overflow = "hidden";

            let filterDate = item.dataset['name'];
            console.log(filterDate);

            modalImg.forEach(img => {
                img.style.display = 'block';
                if (!img.classList.contains(filterDate)) {
                    img.style.display = 'none';
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

// nav.addEventListener('click', event => {
//     if (event.target.tagName !== 'LI') return false;

//     let filterDate = event.target.dataset['color'];
//     console.log(filterDate);

//     square.forEach(item => {
//         item.style.display = 'block'
//         if (!item.classList.contains(filterDate)) {
//             item.style.display = 'none'
//         }
//     })
// })