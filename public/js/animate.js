export default class Animate {
    constructor() {}
    /** Animate on scroll. */
    onAnimate() {
        /** Scroll elements. */
        const scrollElements = document.querySelectorAll('.scroll-page');

        /** Determine if element in view. */
        const elementInView = (el, dividend = 1) => {
            const elementTop = el.getBoundingClientRect().top;
            return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
        };

        /** Determine if element out of view. */
        const elementOutofView = (el) => {
            const elementTop = el.getBoundingClientRect().top;
            return elementTop > (window.innerHeight || document.documentElement.clientHeight);
        };

        /** Add animate class. */
        const displayScrollElement = (element) => {
            element.classList.add('animate__animated', 'animate__fadeInUp');
        };

        /** Hide animate class. */
        const hideScrollElement = (element) => {
            element.classList.remove('animate__animated', 'animate__fadeInUp');
        };

        /** Handle scroll animation. */
        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 1.25)) {
                    displayScrollElement(el);
                } else if (elementOutofView(el)) {
                    hideScrollElement(el);
                }
            });
        };

        /** Listen to scroll event. */
        window.onscroll = () => {
            handleScrollAnimation();
        };
    }
}

const animation = new Animate();
animation.onAnimate();
