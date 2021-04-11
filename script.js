document.addEventListener("DOMContentLoaded", () => {

    const burger = document.querySelector(".burger"),
        burgerIcon = document.querySelector(".header__burger"),
        exitBurger = document.querySelector(".burger__exit"),
        linksBurger = document.querySelectorAll(".burger a"),
        sliderBtns = document.querySelectorAll(".slider__btn"),
        pages = document.querySelectorAll(".slider__page");


    burgerIcon.addEventListener("click", () => {
        burger.style.cssText = "display: flex";
        burgerIcon.style.cssText = "display: none";
        exitBurger.style.cssText = "display: block";
        document.body.style.overflow = "hidden";
    })

    exitBurger.addEventListener("click", () => {
        burger.style.cssText = "display: none";
        burgerIcon.style.cssText = "display: block";
        exitBurger.style.cssText = "display: none";
        document.body.style.overflow = "";
    })
    function manualNav(item) {
        linksBurger.forEach(link => {
            link.style.cssText = "color: rgb(204, 203, 203)";
        })
        linksBurger[item].style.cssText = "color: #fff";
    }

    linksBurger.forEach((link, i) => {
        link.addEventListener("click", () => {
            manualNav(i);
        })
    })


    function movePage(item) {
        pages.forEach(page => {
            page.classList.remove("active");
        })
        sliderBtns.forEach(btn => {
            btn.classList.remove("active");
        })
        pages[item].classList.add("active");
        sliderBtns[item].classList.add("active");
    }

    sliderBtns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            movePage(i);
        })
    })

    let i = 0;

    function timer() {

        i++;

        if (i >= pages.length) {
            return i = -1;
        }

        pages.forEach(page => {
            if (page.classList.contains("active")) {
                page.classList.remove("active");
            }
        })

        pages[i].classList.add("active");
    }

    setInterval(timer, 4000)

})