export function parallax(parallaxObjects) {

    parallaxObjects.forEach(parallaxObject => {

        const images = document.querySelectorAll(parallaxObject.imageClassName);
    
        images.forEach(image => {
    
            const imageComputedStyle = getComputedStyle(image);
    
            image.style.transitionProperty = imageComputedStyle.transitionProperty + ', background-position-y';
            image.style.transitionDuration = imageComputedStyle.transitionDuration + `, ${parallaxObject.durationTime}ms`;
            image.style.transitionTimingFunction = imageComputedStyle.transitionTimingFunction + ', ease';
    
            window.addEventListener("scroll", event => {
                
                const imageHeight = image.offsetHeight;
                const topCoordinate = image.getBoundingClientRect().top;
    
                if ( (topCoordinate >= -imageHeight) && (topCoordinate <= imageHeight) ) {
    
                    image.style.backgroundPositionY = imageHeight * parallaxObject.imageStartPosition 
                                                      + topCoordinate * parallaxObject.speedCoefficient + 'px';
    
                }
    
            });
    
        });

    });

}