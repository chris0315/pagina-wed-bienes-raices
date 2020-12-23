let menu = document.querySelector(".mobile-menu")
let nav = document.querySelector("#navegacion")
menu.addEventListener("click", mobileMenu)

function mobileMenu() {
    if (nav.classList.contains("nav")) {
        nav.classList.remove("nav")
    } else {
        nav.classList.add("nav")
    }

}