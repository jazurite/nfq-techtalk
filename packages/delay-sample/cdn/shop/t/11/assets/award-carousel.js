/** Shopify CDN: Minification failed

Line 9:1 Transforming async functions to the configured target environment ("es5") is not supported yet
Line 12:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 13:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 18:8 Transforming const to the configured target environment ("es5") is not supported yet

**/
(async (sectionId) => {
    function renderAwardQuote(slide) {
        if (slide.isClone) return
        const awardNameEl = $(slide.slide).data('heading')
        const awardName = $($.parseHTML(awardNameEl)).text()
        $(`#${sectionId} .award-name`).text(awardName)
    }

    window.addEventListener('complete', function () {
        const awardCarousel = new Splide(`#${sectionId} .splide`, {
            gap: '1.6rem',
            type: 'loop',
            perMove: 1,
            perPage: 5,
            pagination: false,
            arrows: true,
            focus: 'center',
            breakpoints: {
                768: {
                    perPage: 3,
                    pagination: true,
                    arrows: false
                }
            }
        })

        awardCarousel.on('active', renderAwardQuote);

        setTimeout(() => {
            awardCarousel.mount();
        })
    })

})(document.currentScript.closest('section.award-carousel').id);
