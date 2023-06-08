import {fixBitrixButton, setPromoMonth} from "./modules/functions.js";
import {scrollLocker} from "./modules/scroll-locker.js";
import * as sliders from "./modules/sliders.js";
import {gallery} from "./modules/gallery.js";
import * as forms from "./modules/forms.js";
import {headerScrollObserver, elementScrollObserver} from "./modules/scroll-observer.js";
import {burger} from "./modules/burger.js";
import {popupsMaker} from "./modules/popups-maker.js";
import {labelLinksMaker} from "./modules/label-links.js";
import {phoneMask} from "./modules/masks.js";
import {clickScroller} from "./modules/click-scroller.js";
import {clickAnimator} from "./modules/click-animation.js";
import {parallax} from "./modules/parallax.js";
import {accordion} from "./modules/accordion.js";
import {temporaryElementMaker} from "./modules/temporary-element-maker.js";
 

//----- Scroll locking ----------------------------------------------------------------------

new scrollLocker({
    lockingElementClassName: '.observing', 
    lockedClassName: '.observing_locked',
    intersectingClassName: '.observing_shown',
    unlockDelay: 1000,
}).init();

//-------------------------------------------------------------------------------------------

//----- Fix Bitrix button -------------------------------------------------------------------

fixBitrixButton(
    '.b24-widget-button-position-bottom-right',
    '.footer',
    '.lock-padding'
);

//-------------------------------------------------------------------------------------------

//----- Set promo month ---------------------------------------------------------------------

setPromoMonth('.promo-season', '.promo-month');

//-------------------------------------------------------------------------------------------

// ----- BaguetteBox gallery() --------------------------------------------------------------

gallery();

//-------------------------------------------------------------------------------------------

//----- Header scroll -----------------------------------------------------------------------

new headerScrollObserver({
    elementClassName: '.header',
    scrolledClassName: '.header_scroll',
}).init();

//-------------------------------------------------------------------------------------------

//----- Appearing scrolling elements --------------------------------------------------------

new elementScrollObserver({
    elementClassName: '.observing',
    intersectingClassName: '.observing_shown',
    lockedElementClassName: '.observing_locked',
    headerClassName: '.header__wrapper',
}).init();

//-------------------------------------------------------------------------------------------

// ----- Burger -----------------------------------------------------------------------------
  
new burger({
    buttonClassName: '.burger',
    activeButtonClassName: '.burger_active',
    menuClassName: '.menu',
    activeMenuClassName: '.menu_active',
    menuLinkClassName: '.menu__link',
    lockPaddingElementClassName: '.lock-padding',
    showHideTime: 300,
}).init();

//-------------------------------------------------------------------------------------------

// ----- Header submenus --------------------------------------------------------------------

new labelLinksMaker({
    linkAttributeName: 'data-sublink',
    activeLinkClassName: '.header__left-menu-item_submenu-active',
    labelAttributeName: 'data-submenu',
    activeLabelClassName: '.header__left-submenu-list_active',
    onMouseLeaveHide: true,
    showHideTime: 300,
}).init();

//-------------------------------------------------------------------------------------------

// ----- Popups -----------------------------------------------------------------------------

popupsMaker.init();

//-------------------------------------------------------------------------------------------

// ----- Forms ------------------------------------------------------------------------------

forms.startForms();

//-------------------------------------------------------------------------------------------

// ----- Phone mask -------------------------------------------------------------------------

phoneMask('.form__input_phone-mask');

//------------------------------------------------------------------------------------------- 

//----- Click scroller ----------------------------------------------------------------------

/* 
new clickScroller({
    linkAttributeName: 'data-goto',
    headerClassName: '.header__wrapper',
    maxHeaderHeight: 50,
    lockedSections: [
        {
            sectionClassName: '.observing', 
            lockedClassName: '.observing_locked', 
            unlockDelay: 1000,
        },
    ],
}).init(); 
*/

//-------------------------------------------------------------------------------------------

//----- Complectation labels ----------------------------------------------------------------

const complectationDesktopLabels = new labelLinksMaker({
    linkAttributeName: 'data-caption',
    activeLinkClassName: '.complectation__caption_active',
    labelAttributeName: 'data-number',
    activeLabelClassName: '.complectation__number_active',
    showHideTime: 300,
    visibleLabelNames: ['surface'],
});

complectationDesktopLabels.init();

const complectationMobileLabels = new labelLinksMaker({
    linkAttributeName: 'data-point',
    activeLinkClassName: '.complectation__point_active',
    labelAttributeName: 'data-point-label',
    activeLabelClassName: '.complectation__point-label_active',
    showHideTime: 300,
});

complectationMobileLabels.init();

const safetyLabel = new labelLinksMaker({
    linkAttributeName: 'data-paragraph-link',
    activeLinkClassName: '.safety__paragraph-link_active',
    labelAttributeName: 'data-paragraph-label',
    activeLabelClassName: '.safety__paragraph-label_active',
    onMouseLeaveHide: true,
    showHideTime: 300,
});

safetyLabel.init();

const accessoriesLabel = new labelLinksMaker({
    linkAttributeName: 'data-question-link',
    activeLinkClassName: '.accessories__question_active',
    labelAttributeName: 'data-question-label',
    activeLabelClassName: '.accessories__question-label_active',
    onMouseLeaveHide: true,
    showHideTime: 300,
});

accessoriesLabel.init();

//-------------------------------------------------------------------------------------------

//----- Click animation ---------------------------------------------------------------------

new clickAnimator([
    {
        clickableElementClassName: '.burger',
        clickedElementClassName: '.burger_clicked',
    },
    {
        clickableElementClassName: '.header__link',
        clickedElementClassName: '.header__link_clicked',
    },
    {
        clickableElementClassName: '.footer__link',
        clickedElementClassName: '.footer__link_clicked',
    },
    {
        clickableElementClassName: '.slider-button',
        clickedElementClassName: '.slider-button_clicked',
    },
    {
        clickableElementClassName: '.safety__paragraph-link',
        clickedElementClassName: '.safety__paragraph-link_clicked',
    },
    {
        clickableElementClassName: '.accordion__section-title',
        clickedElementClassName: '.accordion__section-title_clicked',
        duration: 500,
    },
    {
        clickableElementClassName: '.accordion__subsection-title',
        clickedElementClassName: '.accordion__subsection-title_clicked',
        duration: 500,
    },
    {
        clickableElementClassName: '.button',
        clickedElementClassName: '.button_clicked',
        clickCoordinates: true,
    },
    {
        clickableElementClassName: '.popup__close',
        clickedElementClassName: '.popup__close_clicked',
    },
]).init();

//-------------------------------------------------------------------------------------------

// ----- About slider -----------------------------------------------------------------------

sliders.swiperAboutSlider();

//-------------------------------------------------------------------------------------------

// ----- Constructive slider ----------------------------------------------------------------

sliders.swiperConstructiveSlider();

//-------------------------------------------------------------------------------------------

// ----- Parallax effect --------------------------------------------------------------------

parallax([
    {
        imageClassName: '.complectation__background',
        imageStartPosition: 0.3,
        speedCoefficient: 0.2,
        durationTime: 1000,
    },
]);

//-------------------------------------------------------------------------------------------

// ----- Questions --------------------------------------------------------------------------

const questionSubAccordion = new accordion({
    accordionClassName: '.accordion', 
    sectionClassName: '.accordion__subsection', 
    activeSectionClassName: '.accordion__subsection_active', 
    sectionTitleClassName: '.accordion__subsection-title', 
    sectionContentWrapperClassName: '.accordion__subsection-content',
    sectionContentClassName: '.accordion__subsection-text',
    showHideTime: 500,
    onLoadActiveSectionNums: [0],
});

questionSubAccordion.init();

const questionAccordion = new accordion({
    accordionClassName: '.accordion',
    sectionClassName: '.accordion__section', 
    activeSectionClassName: '.accordion__section_active', 
    sectionTitleClassName: '.accordion__section-title', 
    sectionContentWrapperClassName: '.accordion__section-list-wrapper',
    sectionContentClassName: '.accordion__section-list',
    showHideTime: 1000,
    onLoadActiveSectionNums: [0, 1],
    subAccordions: [questionSubAccordion],
});

questionAccordion.init();

//------------------------------------------------------------------------------------------- 