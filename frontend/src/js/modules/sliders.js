import Swiper, {Navigation, Pagination, Lazy, Thumbs, EffectFade} from 'swiper';

// ----- About slider ------------------------------------------------------------------------

export function swiperAboutSlider() {

    if (!document.querySelector('.about__slider')) return;
    
    const aboutSlider = new Swiper('.about__slider', {
        modules: [Navigation, Pagination, Lazy],
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        slidesPerView: 1,
        spaceBetween: 20,
        watchOverflow: true,
        speed: 500,
        loop: true,
        preloadImages: false,
        lazy: {
            loadPrevNext: true,
        },
        grabCursor: true,
        pagination: {
            el: '.about__slider-pagination',
            type: 'fraction',
            renderFraction: function(currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' + 
                        '<span>/</span>' +
                        '<span class="' + totalClass + '"></span>';
            },
        },
        navigation: {
        nextEl: '.about__slider-next-button',
        prevEl: '.about__slider-prev-button',
        },
        breakpoints: {
        
        }
    });

}
//------------------------------------------------------------------------------------------- 

// ----- Constructive slider ----------------------------------------------------------------

export function swiperConstructiveSlider() {

    if (!document.querySelector('.constructive__slider')
        || !document.querySelector('.constructive__thumb-slider')) return;

    const constructiveThumbSlider = new Swiper('.constructive__thumb-slider', {
        modules: [Thumbs, EffectFade],
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        slidesPerView: 1,
        spaceBetween: 0,
        watchOverflow: true,
        speed: 200,
        loop: true,
        allowTouchMove: false,
        breakpoints: {
        
        }
    });
    
    const constructiveSlider = new Swiper('.constructive__slider', {
        modules: [Navigation, Pagination, Lazy, Thumbs],
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        slidesPerView: 1,
        spaceBetween: 20,
        watchOverflow: true,
        speed: 500,
        loop: true,
        preloadImages: false,
        lazy: {
            loadPrevNext: true,
        },
        grabCursor: true,
        thumbs: { 
            swiper: constructiveThumbSlider,
        },
        pagination: {
            el: '.constructive__slider-pagination',
            type: 'fraction',
            renderFraction: function(currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' + 
                        '<span>/</span>' +
                        '<span class="' + totalClass + '"></span>';
            },
        },
        navigation: {
        nextEl: '.constructive__slider-next-button',
        prevEl: '.constructive__slider-prev-button',
        },
        breakpoints: {
        
        }
    });

}
//------------------------------------------------------------------------------------------- 
