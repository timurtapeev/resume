window.addEventListener('DOMContentLoaded', () => {

    // scroll
    const navigationPanel = document.querySelector('.nav');

    function countBlockHeight(selector) {
        let promoBlock = document.querySelector(selector);
        return promoBlock.scrollHeight;
    }

    document.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        if(countBlockHeight('.promo') < scrollTop + 50) {
            navigationPanel.classList.add('nav_scrolled');
        } else {
            navigationPanel.classList.remove('nav_scrolled');
        }
    });

    // hover card

    const portfolioCards = document.querySelectorAll('.portfolio__card');

    portfolioCards.forEach((elem) => {
        elem.addEventListener('mouseover', (e) => {
            let targetElem = e.target.closest('.portfolio__card');
            let cardWrapper = targetElem.querySelector('.card__wrapper');
            let cardTitle = targetElem.querySelector('.card__title');
            let cardfocus = targetElem.querySelector('.card__filter');

            cardfocus.classList.add('.card__filter_hover');
            cardTitle.classList.add('card__title_hover');
            cardWrapper.classList.remove('hide');
            cardWrapper.classList.add('show');
        });

        elem.addEventListener('mouseout', (e) => {
            let targetElem = e.target.closest('.portfolio__card');
            let cardWrapper = targetElem.querySelector('.card__wrapper');
            let cardTitle = targetElem.querySelector('.card__title');
            let cardfocus = targetElem.querySelector('.card__filter');

            cardfocus.classList.remove('.card__filter_hover');
            cardTitle.classList.remove('card__title_hover');
            cardWrapper.classList.remove('show');
            cardWrapper.classList.add('hide');
        });
    });
});