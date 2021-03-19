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



// const ratingCard = document.querySelectorAll('.card__wrapper');
// if(ratingCard) {
//     for (let card of ratingCard) {
//         const cardLearnMoreBtn = card.querySelector('.card__add-block');
//         const learnMore = card.querySelector('.card__add-wrap');
//         const learnMoreImg = card.querySelector('.card__arrow');
//         const learnMoreText = card.querySelector('.card__add-block-btn');

//         cardLearnMoreBtn.addEventListener('click', function(){
//             learnMore.classList.toggle('hidden');
//             learnMoreImg.classList.toggle('card__arrow-active');
//             learnMoreText.innerHTML = (learnMoreText.innerHTML == 'Ocultar') ? 'Detallado' : 'Ocultar' ;
//         })
//     }
// }

  
var ratingCard = document.querySelectorAll(".card__wrapper");

ratingCard.forEach(function(item) {
    var addBtn = item.querySelector(".card__add-block");
    var textBtn = item.querySelector(".card__add-block-btn");
    var imgBtn = item.querySelector(".card__arrow");
    var addContent = item.querySelector(".card__add-wrap");

    addBtn.addEventListener("click", function(){

        if( textBtn.innerHTML == "Ocultar" ) {
            textBtn.innerHTML = "Detallado";
        } else {
            textBtn.innerHTML = "Ocultar";
        }

        imgBtn.classList.toggle("card__arrow-active");
        addContent.classList.toggle("hidden");

    });
})



