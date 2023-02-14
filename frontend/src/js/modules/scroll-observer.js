export class headerScrollObserver {

    constructor(config) {
        this.elementClassName = config.elementClassName;
        this.scrolledClassName = config.scrolledClassName;
    }

    onScroll(element, scrolledClass) {

        const callback = function(entries, observer) {
            if (entries[0].isIntersecting) {
                element.classList.remove(scrolledClass);
            } else {
                element.classList.add(scrolledClass);
            }
        };

        const elementObserver = new IntersectionObserver(callback);
        elementObserver.observe(element);

    }

    init() {

        const element = document.querySelector(this.elementClassName);
        const scrolledClass = this.scrolledClassName.slice(1);

        if (element) {

            this.onScroll(element, scrolledClass);

        }

    }
}

export class elementScrollObserver {

    constructor(config) {
        this.elementClassName = config.elementClassName;
        this.intersectingClassName = config.intersectingClassName;
        this.lockedElementClassName = config.lockedElementClassName;
    }

    onScroll(elements, intersectingClass, lockedElementClass) {

        const callback = function(entries, observer) {

            entries.forEach((entry) => {  
        
                if( entry.isIntersecting ) {

                    if (!entry.target.classList.contains(lockedElementClass)) {
                        entry.target.classList.add(intersectingClass);
                    }

                } 

            });

        };

        const options = {
            threshold: [0.5], 
        };

        const elementObserver = new IntersectionObserver(callback, options);

        elements.forEach(element => {
            elementObserver.observe(element);
        });

    }

    init() {

        const elements = document.querySelectorAll(this.elementClassName);
        const intersectingClass = this.intersectingClassName.slice(1);
        const lockedElementClass = this.lockedElementClassName.slice(1);

        this.onScroll(elements, intersectingClass, lockedElementClass);

    }
}

/* export function showScrollingElement (hiddenClassName) {

    const hiddenElements = document.querySelectorAll(hiddenClassName);

    const callback = function(entries, observer) {

        entries.forEach((entry) => {  
    
            if( entry.isIntersecting ) {

                entry.target.classList.remove(hiddenClassName.slice(1));

            } 

        });
        
    };

    const options = {
        threshold: [0.5], 
    };

    const elementObserver = new IntersectionObserver(callback, options);

    hiddenElements.forEach(hiddenElement => {
        elementObserver.observe(hiddenElement);
    });

} */
