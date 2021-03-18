window.onload = function () {
    let preloader = document.querySelector(".preloader");
    preloader.classList.add("hidepreloader");
    setTimeout(function () {
        preloader.classList.add("hide");
    }, 1500)
}