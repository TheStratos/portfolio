

const burger = document.querySelector(".button__menu");
const navMenu = document.querySelector(".menu__list");
const toggleBtnMenu = function () {
        burger.classList.toggle("button__menu-active");
        navMenu.classList.toggle("menu__list-active");
}


burger.addEventListener("click", () => {
        toggleBtnMenu();

})

document.querySelectorAll(".menu__list-item").forEach(n => n.addEventListener("click", () => {
        burger.classList.remove("button__menu-active");
        navMenu.classList.remove("menu__list-active");
}))




const themeIsPink = document.querySelector(".themetoggle__pink");
themeIsPink.addEventListener("click", () => {
        document.body.className = '';
        document.body.classList.add("theme-pink");

})
const themeIsPurple = document.querySelector(".themetoggle__purple");
themeIsPurple.addEventListener("click", () => {
        document.body.className = '';
        document.body.classList.add("theme-purple");

})
const themeIsGreen = document.querySelector(".themetoggle__green");
themeIsGreen.addEventListener("click", () => {
        document.body.className = '';
        document.body.classList.add("theme-green");
        

})
const themeIsBlue = document.querySelector(".themetoggle__blue");
themeIsBlue.addEventListener("click", () => {
        document.body.className = '';
        document.body.classList.add("theme-blue");
        
})
const themeIsOrange = document.querySelector(".themetoggle__orange");
themeIsOrange.addEventListener("click", () => {
        document.body.className = '';
        document.body.classList.add("theme-orange");
        
})
