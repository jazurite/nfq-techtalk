(function () {
    var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.b61b3f9dfdcc0a077f11.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/809.latest.en.22b066f200008aec130a.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/Information.latest.en.54dfe5d34985e1982b50.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/23.latest.en.a7ee3a2bd3fc2ad170b2.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/733.latest.en.22cb4eafe0499ff4281e.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/39.latest.en.99827a586f76e932dc2d.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.f936660d1941d75ef257.js"];
    var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/23.latest.en.3cbccf84d73cde1fb510.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.9d6b9f970cd086c012b2.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/739.latest.en.3ad1658c0d5df64841ff.css"];

    function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            link.fetchPriority = 'low';
            link.as = as;
            link.href = url;
            link.onload = link.onerror = callback;
            document.head.appendChild(link);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onloadend = callback;
            xhr.send();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function (url) {
                return [url, 'script'];
            }),
            styles.map(function (url) {
                return [url, 'style'];
            })
        );
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        })();
    }

    addEventListener('load', prefetchAssets);
})();

(function () {
    function asyncLoad() {
        var urls = ["https:\/\/cdn.weglot.com\/weglot_script_tag.js?shop=emma-sleep-ca.myshopify.com", "https:\/\/cdn.avmws.com\/1021029\/?shop=emma-sleep-ca.myshopify.com", "\/\/cdn.shopify.com\/proxy\/971447fa0ca00471c4a74bf546f8fb248d71816fc5fd20c73369ed0354fa0437\/bingshoppingtool-t2app-prod.trafficmanager.net\/uet\/tracking_script?shop=emma-sleep-ca.myshopify.com\u0026sp-cache-control=cHVibGljLCBtYXgtYWdlPTkwMA", "\/\/staticw2.yotpo.com\/hEc3IC0lCXuQ15phwUS54IFWUkW2L7LAcNLTHkt6\/widget.js?shop=emma-sleep-ca.myshopify.com", "https:\/\/cdn-scripts.signifyd.com\/shopify\/script-tag.js?shop=emma-sleep-ca.myshopify.com", "https:\/\/cdn.attn.tv\/emmasleep\/dtag.js?shop=emma-sleep-ca.myshopify.com", "https:\/\/www.dwin1.com\/41984.js?shop=emma-sleep-ca.myshopify.com", "https:\/\/static.shareasale.com\/json\/shopify\/deduplication.js?shop=emma-sleep-ca.myshopify.com", "https:\/\/cdn1.judge.me\/assets\/installed.js?shop=emma-sleep-ca.myshopify.com", "\/\/productreviews.shopifycdn.com\/embed\/loader.js?shop=emma-sleep-ca.myshopify.com", "https:\/\/my.parcelpanel.com\/assets\/admin\/custom\/js\/checkout.js?v=1.0.1\u0026shop=emma-sleep-ca.myshopify.com"];
        for (var i = 0; i < urls.length; i++) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = urls[i];
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
        }
    };
    if (window.attachEvent) {
        window.attachEvent('onload', asyncLoad);
    } else {
        window.addEventListener('load', asyncLoad, false);
    }
})();
