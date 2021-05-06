$(function(){
    const burgerMenu = document.querySelector(".menu__icon");
    if (burgerMenu) {
        const responsiveMenu = document.querySelector(".menu__body");
        burgerMenu.addEventListener("click", function (e){
        document.body.classList.toggle("lock");    
        responsiveMenu.classList.toggle("active");
    });   
    }
});