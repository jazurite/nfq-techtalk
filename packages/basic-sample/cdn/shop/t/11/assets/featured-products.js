$("#featured-products-section").ready(function () {
    new Splide("#featured-products-section .splide", {
        autoWidth: !0,
        padding: {right: "5rem"},
        perPage: 4,
        perMove: 1,
        gap: "20px",
        pagination: !1,
        breakpoints: {768: {perPage: 1, arrows: !1, pagination: !0, gap: "12px"}}
    }).mount()
});
//# sourceMappingURL=/cdn/shop/t/11/assets/featured-products.js.map?v=108917295628996507591688024715
