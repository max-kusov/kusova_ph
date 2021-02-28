const burger = document.querySelector(".burger"),
    burgerIcon = document.querySelector(".header__burger"),
    exitBurger = document.querySelector(".burger__exit");


burgerIcon.addEventListener("click", () => {
    burger.style.cssText = "display: block";
    burgerIcon.style.cssText = "display: none";
    exitBurger.style.cssText = "display: block";
})

exitBurger.addEventListener("click", () => {
    burger.style.cssText = "display: none";
    burgerIcon.style.cssText = "display: block";
    exitBurger.style.cssText = "display: none";
})
