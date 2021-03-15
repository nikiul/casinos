const ratingCard = document.querySelectorAll('.card__wrapper');
if(ratingCard) {
    for (let card of ratingCard) {
        const cardLearnMoreBtn = card.querySelector('.card__add-block');
        const learnMore = card.querySelector('.card__add-wrap');
        const learnMoreImg = card.querySelector('.card__arrow');
        const learnMoreText = card.querySelector('.card__add-block-btn');

        cardLearnMoreBtn.addEventListener('click', function(){
            learnMore.classList.toggle('hidden');
            learnMoreImg.classList.toggle('card__arrow-active');
            learnMoreText.innerHTML = (learnMoreText.innerHTML == 'Ocultar') ? 'Detallado' : 'Ocultar' ;
        })
    }
}
