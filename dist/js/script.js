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

    //hamburger

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav__wrapper');
    const body = document.querySelector('body');
    const navBackground = document.querySelector('.nav__background');
    const navItemList = document.querySelectorAll('.nav__item');

    hamburger.addEventListener('click', () => {
        closeNavMenu();
    });

    navBackground.addEventListener('click', () => {
        if (!navBackground.classList.contains('hide')) {
            closeNavMenu();
        }
    });

    navItemList.forEach(elem => {
        elem.addEventListener('click', ()   => {
            if (hamburger.classList.contains('hamburger_active')) {
                closeNavMenu();
            }
        });
    });

    function closeNavMenu() {
        navMenu.classList.toggle('nav__wrapper_active');
        hamburger.classList.toggle('hamburger_active');
        if (hamburger.classList.contains('hamburger_active')) {
            body.style.overflow = 'hidden';
            navigationPanel.classList.remove('nav_scrolled');
            navBackground.classList.remove('hide');
        } else {
            body.style.overflow = '';
            navBackground.classList.add('hide');
        }
    }

    // Modal window
    const modalWindow = document.querySelector('.modal');
    const closeModalElements = document.querySelectorAll('[data-close]');

    closeModalElements.forEach((elem) => {
        elem.addEventListener('click', () => {
            controlWindow(modalWindow);
        });
    });

    function controlWindow(element) {
        element.classList.toggle('modal_active');
        navBackground.classList.toggle('nav__background_active');
        navigationPanel.classList.toggle('hide');
        body.style.overflow = 'hidden';
        if (element.classList.contains('modal_active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }

    // form
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        fetch('mailer/smart.php', {
            method: "POST",
            body: new FormData(form),
        })
        .then(() =>{
            controlWindow(modalWindow);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            clearInput();
        });
    });

    function clearInput() {
        const inputs = document.querySelectorAll('input');
        const textarea = document.querySelector('textarea');
        
        inputs.forEach(elem => {
            elem.value = '';
        });
        textarea.value = '';
    }
});