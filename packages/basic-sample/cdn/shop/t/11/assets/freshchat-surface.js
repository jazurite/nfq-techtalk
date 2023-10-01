class FreshchatSurface extends HTMLElement {

    resources = {
        stylesheets: [''],
        scripts: ["https://wchat.eu.freshchat.com/js/widget.js?t=1696081325371"]
    }

    constructor() {
        super();

        this.setAccessibility();
    }

    setAccessibility() {
        this.addEventListener('click', (e) => {
            e.preventDefault();
            this.load()
        });
    }

    async load() {
        window.fcSettings = {
            token: 'b2b2897c-9240-4bdd-a965-9f4381519c6e',
            host: 'https://wchat.eu.freshchat.com',
            locale: 'en',
            tags: ['ca'],
            faqTags: {
                filterType: 'article',
                tags: ['general', 'shop_ca', 'faq_ca']
            },
            open: true,
            onInit: function() {
                document.querySelector('freshchat-surface').remove()
            }
        };

        this.querySelector('svg.open').classList.add('hidden')
        this.querySelector('svg.spinner').classList.remove('hidden')

        await this.loadStyleSheets(this.resources.stylesheets)

        await this.loadScripts(this.resources.scripts);
    }


    async loadStyleSheets(data) {
        await Promise.allSettled(data.map(url => $.getStylesheet(url)))
    }

    async loadScripts(data) {
        await Promise.allSettled(data.map(url => $.getScript(url)))
    }
}

customElements.define('freshchat-surface', FreshchatSurface);
