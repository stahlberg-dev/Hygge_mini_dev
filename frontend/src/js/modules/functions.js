export function lockBody (lockPaddingElements, disablePointerDelay = 0) {

    if (!document.body.classList.contains('locked')) {

        const lockPaddingValue = window.innerWidth - document.documentElement.clientWidth + 'px';

        document.body.classList.add('locked');
        document.body.style.paddingRight = lockPaddingValue;

        lockPaddingElements.forEach(item => {
            item.style.paddingRight = lockPaddingValue;
        });

        let scroller = document.createElement('div');
        scroller.className = 'scroller disable-pointer';
        document.body.append(scroller);

        setTimeout(function() {

            scroller.classList.remove('disable-pointer');

        }, disablePointerDelay);

    }

}

export function unlockBody (lockPaddingElements, unlockDelay = 0) {

    if (document.body.classList.contains('locked')) {

        const scroller = document.querySelector('.scroller');
        scroller?.classList.add('disable-pointer');

        setTimeout(function() {
            
            document.body.classList.remove('locked');
            document.body.style.paddingRight = '0px';

            lockPaddingElements.forEach(item => {
                item.style.paddingRight = '0px';
            });
            
            scroller?.remove();
    
        }, unlockDelay);

    } 

}

export function fixBitrixButton (
    bitrixButtonClassName, 
    footerClassName, 
    lockPaddingElementClassName
) {

    window.addEventListener('load', function() {

        const bitrixButton = document.querySelector(bitrixButtonClassName);
        const footer = document.querySelector(footerClassName);

        bitrixButton.classList.add( lockPaddingElementClassName.slice(1) );
        bitrixButton.style.bottom = '50px';

        window.addEventListener('scroll', function() {

            const footerCoordinate = document.documentElement.clientHeight - footer.getBoundingClientRect().top;
    
            if (footerCoordinate > -50) {
    
                const bitrixButtonCoordinate = 100 + footerCoordinate + 'px';
                bitrixButton.style.bottom = bitrixButtonCoordinate;
    
            } else {
                bitrixButton.style.bottom = '50px';
            }

        });
        
    });

}

export function setPromoMonth(seasonClassName, monthClassName) {

    const now = new Date();
    const monthNumber = now.getMonth();

    let month, season;
    switch (monthNumber) {
        case 0:
            month = 'января';
            season = 'Зимняя';
            break;
        case 1:
            month = 'февраля';
            season = 'Зимняя';
            break;
        case 2:
            month = 'марта';
            season = 'Весенняя';
            break;
        case 3:
            month = 'апреля';
            season = 'Весенняя';
            break;
        case 4:
            month = 'мая';
            season = 'Весенняя';
            break;
        case 5:
            month = 'июня';
            season = 'Летняя';
            break;
        case 6:
            month = 'июля';
            season = 'Летняя';
            break;
        case 7:
            month = 'августа';
            season = 'Летняя';
            break;  
        case 8:
            month = 'сентября';
            season = 'Осенняя';
            break;  
        case 9:
            month = 'октября';
            season = 'Осенняя';
            break;  
        case 10:
            month = 'ноября';
            season = 'Осенняя';
            break;  
        case 11:
            month = 'декабря';
            season = 'Зимняя';
            break;   
        default:
            month = 'января';
            season = 'Зимняя';
    }

    const promoMonthElements = document.querySelectorAll(monthClassName);

    promoMonthElements.forEach(promoMonthElement => {

        promoMonthElement.innerHTML = month;

    });

    const promoSeasonElements = document.querySelectorAll(seasonClassName);

    promoSeasonElements.forEach(promoSeasonElement => {

        promoSeasonElement.innerHTML = season;

    });

}