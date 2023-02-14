export class scrollLocker {

    constructor(config) {
        this.lockingElementClassName = config.lockingElementClassName;
        this.lockedClassName = config.lockedClassName;
        this.unlockDelay = config.unlockDelay;
    }

    lockElements(
        hashMatches,
        {
            lockingElementClassName, 
            lockedClassName, 
            unlockDelay, 
        }
    ) {

        const anchorElement = document.getElementById( hashMatches?.[0].slice(1) );

        if (!anchorElement) return;

        const lockingElements = document.querySelectorAll(lockingElementClassName);
        
        lockingElements.forEach(lockingElement => {

            if ( !lockingElement.closest( hashMatches[0] ) ) {
    
                lockingElement.classList.add( lockedClassName.slice(1) );
    
                setTimeout(() => {
                    lockingElement.classList.remove( lockedClassName.slice(1) );
                }, unlockDelay);
    
            }

        });

    }

    init() {

        window.addEventListener('load', () => {

            const hashMatches = window.location.hash.match(/^#(.*)/);
            this.lockElements(hashMatches, this);
            
        });

        const links = document.querySelectorAll(`[href*="#"]`);

        links.forEach(link => {

            link.addEventListener('click', () => {

                const hashMatches = link.getAttribute('href').match(/#(.*)$/);
                this.lockElements(hashMatches, this);

            });

        });

    }

}