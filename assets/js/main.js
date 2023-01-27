const menuBtn = document.getElementById("menu__bars")
const menuList = document.querySelector(".nav__menu")


menuBtn.addEventListener("click", () => {
    if (menuBtn.classList.contains("ph-list")) {
        menuBtn.classList.remove("ph-list")
        menuBtn.classList.add("ph-x")
        menuList.classList.add("active")
    } else {
        menuBtn.classList.remove("ph-x")
        menuBtn.classList.add("ph-list")
        menuList.classList.remove("active")
    }
})