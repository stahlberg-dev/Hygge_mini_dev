import baguetteBox from 'baguettebox.js';

export function baguetteBoxGallery() {

    if (!document.querySelector('.gallery__images')) return;

    window.addEventListener('load', function() {

        baguetteBox.run('.gallery__images', {
            animation: 'slideIn',
            noScrollbars: true,
            fullScreen: true,
        });
        
    });
    
}
