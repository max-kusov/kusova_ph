//// хня не нужная

// const burger = document.querySelector(".burger"),
//     burgerIcon = document.querySelector(".fa-bars"),
//     exitBurger = document.querySelector(".fa-times"),
//     linksBurger = document.querySelectorAll(".burger a");
// sliderBtns = document.querySelectorAll(".slider__btn"),
// pages = document.querySelectorAll(".slider__page");


// burgerIcon.addEventListener("click", () => {
//     burger.style.cssText = "display: flex";
//     burgerIcon.style.cssText = "display: none";
//     exitBurger.style.cssText = "display: block";
//     document.body.style.overflow = "hidden";
// })

// exitBurger.addEventListener("click", () => {
//     burger.style.cssText = "display: none";
//     burgerIcon.style.cssText = "display: block";
//     exitBurger.style.cssText = "display: none";
//     document.body.style.overflow = "";
// })
// function manualNav(item) {
//     linksBurger.forEach(link => {
//         link.style.cssText = "color: rgb(204, 203, 203)";
//     })
//     linksBurger[item].style.cssText = "color: #fff";
// }

// linksBurger.forEach((link, i) => {
//     link.addEventListener("click", () => {
//         manualNav(i);
//     })
// })