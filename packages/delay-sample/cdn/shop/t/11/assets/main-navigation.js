
class NavigationBar extends HTMLElement {
    constructor() {
        super();
        this.$self = $(this);
    }

    connectedCallback() {
        const $navigationDropdowns = $("navigation-dropdown");
        this.$self.mouseleave(() => $navigationDropdowns.hide());

        this.$self.find('.navigation-accordion-wrapper').beefup({
            trigger: '.navigation-accordion',
            content: '.navigation-accordion__content',
            openSpeed: 100,
            closeSpeed: 100,
            openSingle: true
        })
    }
}

customElements.define("navigation-bar", NavigationBar);

class NavigationLink extends HTMLElement {
    constructor() {
        super();
        this.$self = $(this);
    }

    connectedCallback() {
        const $navigationDropdowns = $("navigation-dropdown");
        const $navigationDropdown = $(`navigation-dropdown[data-link-title='${this.$self.data("link-title")}']`);

        this.$self.mouseenter(() => {
            $navigationDropdowns.hide();
            $navigationDropdown.show();
        });
    }
}

customElements.define("navigation-link", NavigationLink);

class NavigationDropdownLink extends HTMLElement {
    constructor() {
        super();
        this.$self = $(this);
    }

    connectedCallback() {
        const $dropdownContent = $(`navigation-dropdown-content[data-childlink-title='${this.$self.data("childlink-title")}']`);

        this.$self.hover(debounce(() => {
            this.$dropdownContents.hide();
            $dropdownContent.show();
        }, 100));
    }

    setDropdownContents(elements) {
        this.$dropdownContents = elements;
    }
}

customElements.define("navigation-dropdown-link", NavigationDropdownLink);

class NavigationDropdownContent extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define("navigation-dropdown-content", NavigationDropdownContent);

class NavigationDropdown extends HTMLElement {
    constructor() {
        super();
        this.$self = $(this);
    }

    connectedCallback() {
        this.initDropdownLinkData();
        this.hideOnMouseLeave();
    }

    hideOnMouseLeave() {
        this.$self.mouseleave(() => this.$self.hide());
    }

    initDropdownLinkData() {
        const dropdownLinks = this.querySelectorAll("navigation-dropdown-link");
        const $dropdownContents = this.$self.find("navigation-dropdown-content");
        for (const dropdownLink of dropdownLinks) {
            dropdownLink.setDropdownContents($dropdownContents);
        }
    }
}

customElements.define("navigation-dropdown", NavigationDropdown);
