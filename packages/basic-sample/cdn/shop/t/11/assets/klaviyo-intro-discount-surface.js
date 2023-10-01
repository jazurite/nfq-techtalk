class KlaviyoIntroDiscountSurface extends HTMLElement {

    resources = {
        stylesheets: [''],
        scripts: ["https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=RZNSbn"]
    }

    constructor() {
        super();

        const disabledForms = !!localStorage.getItem('klaviyoOnsite')

        if (!disabledForms) {
            this.innerHTML = ` <img width="400" height="400"
         src="https://d3k81ch9hvuctc.cloudfront.net/company/Pb3wug/images/0ed14cd8-c684-4921-9ce6-11220a3203a1.png"
         alt="">`

            this.setAccessibility();
        }
    }

    setAccessibility() {
        this.addEventListener('click', (e) => {
            e.preventDefault();
            this.load()
        });
    }

    async load() {
        window.addEventListener("klaviyoForms", function (e) {
            if (e.detail.type == 'open') {
                document.querySelector('klaviyo-intro-discount-surface').remove()
            }
        });

        await this.loadScripts(this.resources.scripts);
    }

    async loadScripts(data) {
        await Promise.allSettled(data.map(url => $.getScript(url)))
    }
}

customElements.define('klaviyo-intro-discount-surface', KlaviyoIntroDiscountSurface);
