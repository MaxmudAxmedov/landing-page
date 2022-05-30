const elShowBtn = document.querySelector(".header__show");
const elResetBtn = document.querySelector(".header__reset");
const elNavList = document.querySelector(".nav-list-box");


elShowBtn.addEventListener("click", function () {
    
    elNavList.classList.add("show-list-box");
    
})
elResetBtn.addEventListener("click", function () {
    elNavList.classList.remove("show-list-box");

})