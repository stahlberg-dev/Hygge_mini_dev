import lightGallery from 'lightgallery';

export function gallery() {

    if (!document.querySelector('.gallery__images')) return;

    lightGallery(document.querySelector('.gallery__images'), {
        speed: 600,
        download: false,
        hideScrollbar: true,
    });
        
}
