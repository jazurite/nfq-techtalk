class StoreLocalizationSurface extends HTMLElement {
    GEOLOCATION_API_KEY = "dedf743cfea543cfa1ce4f08be16125b"

    resources = {
        stylesheets: ['store-localization.css'],
        scripts: ['store-localization.js']
    }

    constructor() {
        super();
        this.innerHTML = `Localized`

        this.setAccessibility();
    }

    setAccessibility() {
        this.addEventListener('click', (e) => {
            e.preventDefault();
            this.checkGeolocation()
        });
    }

    checkGeolocation() {
        // const localizationDisabled = !!sessionStorage.getItem('storeLocalizationOnSite')

        if (this.isLoaded)  {
            document.querySelector('store-localization').showPopup()
        } else {
            fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${this.GEOLOCATION_API_KEY}`)
                .then(res => res.json())
                .then(this.localizationGuard)
        }
    }

    localizationGuard = async (ipgeo) => {
        const inDifferentCountry = ipgeo.country_code2 !== 'CA'
        if (inDifferentCountry) {
            await this.loadStoreLocalization(ipgeo)
        }
    }

    async loadStoreLocalization(ipgeo) {
        await this.loadResources();

        // sessionStorage.setItem('storeLocalizationOnSite', 'true');
        this.isLoaded = true

        $(this).append(`<store-localization :countryCode="${ipgeo.country_code2}"></store-localization>`)
    }


    async loadResources() {
        await this.loadStyleSheets(this.resources.stylesheets)

        await this.loadScripts(this.resources.scripts)
    }

    async loadStyleSheets(data) {
        await Promise.allSettled(data.map(url => $.getStylesheet(Shop.assetUrl + url)))
    }

    async loadScripts(data) {
        await Promise.allSettled(data.map(url => $.getScript(Shop.assetUrl + url)))
    }
}

customElements.define('store-localization-surface', StoreLocalizationSurface);
