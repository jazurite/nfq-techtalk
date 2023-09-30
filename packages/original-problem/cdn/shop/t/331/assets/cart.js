/** Shopify CDN: Minification failed

Line 12:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 17:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 19:15 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 22:12 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 23:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 30:8 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 36:18 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
class CartScrollableContent extends CustomElement {
}

customElements.define('cart-scrollable-content', CartScrollableContent);

class CartIconBubble extends CustomButton {

  setupTooltips() {
    tippy('cart-icon-bubble', {
      content: "Loading... Please Wait",
      onShow(instance) {
        const $el = $(instance.reference)

        return !!$el.hasClass('is-loading')
      },
    });
  }

  onLoad(isLoading) {
    super.onLoad(isLoading);

    this.disabled = !!isLoading
  }

  onDisabledChange(isDisabled) {
    this.$el[!!isDisabled ? 'addClass' : 'removeClass']('is-disabled')
  }
}

customElements.define('cart-icon-bubble', CartIconBubble);
