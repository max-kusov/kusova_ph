document.addEventListener("DOMContentLoaded", () => {

    const burger = document.querySelector(".burger"),
        burgerIcon = document.querySelector(".header__burger"),
        exitBurger = document.querySelector(".burger__exit"),
        linksBurger = document.querySelectorAll(".burger a"),
        mediaQuery = window.matchMedia('(max-width: 768px)'),
        sliderBtns = document.querySelectorAll(".slider__btn"),
        pages = document.querySelectorAll(".slider__page"),
        arrowLeft = document.querySelector(".fa-chevron-left"),
        arrowRight = document.querySelector(".fa-chevron-right");

    let counter = 0;

    function handleTabletChange(e) {
        if (e.matches) {

        } else {
            burger.style.cssText = "display: none";
            exitBurger.style.cssText = "display: none";

        }
    }
    mediaQuery.addListener(handleTabletChange);
    handleTabletChange(mediaQuery)


    burgerIcon.addEventListener("click", () => {
        burger.style.cssText = "display: flex";
        burgerIcon.style.cssText = "display: none";
        exitBurger.style.cssText = "display: block";
    })

    exitBurger.addEventListener("click", () => {
        burger.style.cssText = "display: none";
        burgerIcon.style.cssText = "display: block";
        exitBurger.style.cssText = "display: none";
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

    // arrows 

    function showSlider() {
        pages.forEach((page) => {
            if (!page.classList.contains("active")) {
                page.classList.add("active");
            } else {
                console.log(i)
            }

        })

    }

    arrowLeft.addEventListener("click", () => {
        showSlider()
        console.log(item)
    })
    // arrowRight.addEventListener("click", () => {
    //     pages.forEach((page, i) => {
    //         page.classList.remove("active");
    //         page[i].classList.add("active");
    //     })
    // })


    //////// Modal /////////

    const modal = document.querySelector(".modal"),
        modalClose = document.querySelector(".fa-times"),
        modalTrigger = document.querySelector("[data-modal]");

    function closeModal() {
        modal.classList.remove("show");
        modal.classList.add("hide");
        document.body.style.overflow = "";
    }
    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
    }

    modalTrigger.addEventListener("click", openModal);

    modalClose.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });

    window.addEventListener("scroll", () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
        }
    });

})


