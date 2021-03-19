var mobileMenuBtn = document.querySelector(".menu-icon-wrapper");
var menuIcon = document.querySelector(".menu-icon");
var mobileMenu = document.querySelector(".header");
var headerMobileBtn = document.querySelector(".header__menu-closet");
var bodyLock = document.querySelector("body");

mobileMenuBtn.addEventListener("click", function(){
    menuIcon.classList.add('menu-icon-active');
    mobileMenu.classList.add('header__mobile-nav--active');
    bodyLock.classList.add("body__lock");
})

headerMobileBtn.addEventListener("click", function(){
    menuIcon.classList.remove('menu-icon-active');
    mobileMenu.classList.remove("header__mobile-nav--active");
    bodyLock.classList.remove("body__lock");

})

  
var ratingCard = document.querySelectorAll(".card__wrapper");

ratingCard.forEach(function(item) {
    var addBtn = item.querySelector(".card__add-block");
    var textBtn = item.querySelector(".card__add-block-btn");
    var imgBtn = item.querySelector(".card__arrow");
    var imgBtnWhite = item.querySelector(".card__arrow--white");
    var addContent = item.querySelector(".card__add-wrap");
    var addBtnClose = item.querySelector(".add__arrow")

    addBtn.addEventListener("click", function(){

        if( textBtn.innerHTML == "Ocultar" ) {
            textBtn.innerHTML = "Detallado";
        } else {
            textBtn.innerHTML = "Ocultar";
        }

        imgBtn.classList.toggle("card__arrow-active");
        imgBtnWhite.classList.toggle("card__arrow-active")
        addContent.classList.toggle("hidden");

    });

    addBtnClose.addEventListener("click", function(){
        addContent.classList.add("hidden")
    })
})

