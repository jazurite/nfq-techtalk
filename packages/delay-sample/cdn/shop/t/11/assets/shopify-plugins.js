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

(function e(e, a, n, r, t, o, i) {
    var s = null !== e, l = function () {
        var e = "unknown", a = null, n = navigator.userAgent, r = n.match(/(Firefox|Chrome)\/(\d+)/i),
            t = n.match(/(Edg)\/(\d+)/i), o = n.match(/(Version)\/(\d+)(.+)(Safari)\/(\d+)/i);
        o ? (e = "safari", a = parseInt(o[2], 10)) : t ? (e = "edge", a = parseInt(t[2], 10)) : r && (e = r[1].toLocaleLowerCase(), a = parseInt(r[2], 10));
        var i = {chrome: 60, firefox: 55, safari: 11, edge: 80}[e];
        return void 0 !== i && null !== a && i <= a ? "modern" : "legacy"
    }().substring(0, 1), d = r.substring(0, 1);
    if (s) {
        window.Shopify = window.Shopify || {};
        var c = window.Shopify;
        c.analytics = c.analytics || {};
        var u = c.analytics;
        u.replayQueue = [], u.publish = function (e, a, n) {
            u.replayQueue.push([e, a, n])
        };
        try {
            self.performance.mark("wpm:start")
        } catch (e) {
        }
    }
    var p, f, h, m, v, y, w, g, b, _ = [n, "/wpm", "/", d, o, l, ".js"].join("");
    f = (p = {
        src: _, async: !0, onload: function () {
            if (e) {
                var n = window.webPixelsManager.init(e);
                null == a || a(n);
                var r = window.Shopify.analytics;
                r.replayQueue.forEach((function (e) {
                    var a = e[0], r = e[1], t = e[2];
                    n.publishCustomEvent(a, r, t)
                })), r.replayQueue = [], r.publish = n.publishCustomEvent, r.visitor = n.visitor
            }
        }, onerror: function () {
            var a = (null == e ? void 0 : e.storefrontBaseUrl) ? e.storefrontBaseUrl.replace(/\/$/, "") : self.location.origin,
                n = "".concat(a, "/.well-known/shopify/monorail/unstable/produce_batch"), r = JSON.stringify({
                    metadata: {event_sent_at_ms: (new Date).getTime()},
                    events: [{
                        schema_id: "web_pixels_manager_load/2.0",
                        payload: {
                            version: t || "latest",
                            page_url: self.location.href,
                            status: "failed",
                            error_msg: "".concat(_, " has failed to load")
                        },
                        metadata: {event_created_at_ms: (new Date).getTime()}
                    }]
                });
            try {
                if (self.navigator.sendBeacon.bind(self.navigator)(n, r)) return !0
            } catch (e) {
            }
            var o = new XMLHttpRequest;
            try {
                return o.open("POST", n, !0), o.setRequestHeader("Content-Type", "text/plain"), o.send(r), !0
            } catch (e) {
                console && console.warn && console.warn("[Web Pixels Manager] Got an unhandled error while logging a load error.")
            }
            return !1
        }
    }).src, h = p.async, m = void 0 === h || h, v = p.onload, y = p.onerror, w = document.createElement("script"), g = document.head, b = document.body, w.async = m, w.src = f, v && w.addEventListener("load", v), y && w.addEventListener("error", y), g ? g.appendChild(w) : b ? b.appendChild(w) : console.error("Did not find a head or body element to append the script")
})({
    shopId: 56298733706,
    storefrontBaseUrl: "https:",
    cdnBaseUrl: "https:/cdn",
    surface: "storefront-renderer",
    enabledBetaFlags: ["web_pixels_async_pixel_refactor", "web_pixels_visitor_api"],
    webPixelsConfigList: [{
        "id": "shopify-app-pixel",
        "configuration": "{}",
        "eventPayloadVersion": "v1",
        "runtimeContext": "STRICT",
        "scriptVersion": "0566",
        "apiClientId": "shopify-pixel",
        "type": "APP"
    }, {
        "id": "shopify-custom-pixel",
        "eventPayloadVersion": "v1",
        "runtimeContext": "LAX",
        "scriptVersion": "0566",
        "apiClientId": "shopify-pixel",
        "type": "CUSTOM"
    }],
    initData: {
        "cart": {
            "cost": {"totalAmount": {"amount": 489.0, "currencyCode": "CAD"}},
            "id": "1c0b4adfa252a988a3fa979a7710c811",
            "lines": [{
                "cost": {"totalAmount": {"amount": 489.0, "currencyCode": "CAD"}},
                "merchandise": {
                    "id": "43026954223754",
                    "image": {"src": "\/\/emma-sleep.ca\/cdn\/shop\/files\/1.png?v=1689072809"},
                    "price": {"amount": 489.0, "currencyCode": "CAD"},
                    "product": {
                        "id": "7741865164938",
                        "title": "Ellamart Hybrid Comfort",
                        "untranslatedTitle": "Ellamart Hybrid Comfort",
                        "vendor": "Ellamart\u00ae Canada",
                        "type": "Mattress"
                    },
                    "sku": "EMACL099190CA1",
                    "title": "Twin | 39\" x 75\"",
                    "untranslatedTitle": "Twin | 39\" x 75\""
                },
                "quantity": 1
            }],
            "totalQuantity": 1
        }, "checkout": null, "customer": null, "productVariants": []
    },
}, function pageEvents(webPixelsManagerAPI) {
    webPixelsManagerAPI.publish("page_viewed");
}, "https:/cdn", "browser", "0.0.368", "01fbfa7bwf128b223pbb0f9335m6d9cc028", ["web_pixels_async_pixel_refactor", "web_pixels_visitor_api"]);

(function () {
    var customDocumentWrite = function (content) {
        var jquery = null;

        if (window.jQuery) {
            jquery = window.jQuery;
        } else if (window.Checkout && window.Checkout.$) {
            jquery = window.Checkout.$;
        }

        if (jquery) {
            jquery('body').append(content);
        }
    };

    var hasLoggedConversion = function (token) {
        if (token) {
            return document.cookie.indexOf('loggedConversion=' + token) !== -1;
        }
        return false;
    }

    var setCookieIfConversion = function (token) {
        if (token) {
            var twoMonthsFromNow = new Date(Date.now());
            twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);

            document.cookie = 'loggedConversion=' + token + '; expires=' + twoMonthsFromNow;
        }
    }

    var trekkie = window.ShopifyAnalytics.lib = window.trekkie = window.trekkie || [];
    if (trekkie.integrations) {
        return;
    }
    trekkie.methods = [
        'identify',
        'page',
        'ready',
        'track',
        'trackForm',
        'trackLink'
    ];
    trekkie.factory = function (method) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(method);
            trekkie.push(args);
            return trekkie;
        };
    };
    for (var i = 0; i < trekkie.methods.length; i++) {
        var key = trekkie.methods[i];
        trekkie[key] = trekkie.factory(key);
    }
    trekkie.load = function (config) {
        trekkie.config = config || {};
        trekkie.config.initialDocumentCookie = document.cookie;
        var first = document.getElementsByTagName('script')[0];
        var script = document.createElement('script', {is: 'delay-script'});
        script.type = 'text/javascript';
        script.onerror = function (e) {
            var scriptFallback = document.createElement('script', {is: 'delay-script'});
            scriptFallback.type = 'text/javascript';
            scriptFallback.onerror = function (error) {
                var Monorail = {
                    produce: function produce(monorailDomain, schemaId, payload) {
                        var currentMs = new Date().getTime();
                        var event = {
                            schema_id: schemaId,
                            payload: payload,
                            metadata: {
                                event_created_at_ms: currentMs,
                                event_sent_at_ms: currentMs
                            }
                        };
                        return Monorail.sendRequest("https://" + monorailDomain + "/v1/produce", JSON.stringify(event));
                    },
                    sendRequest: function sendRequest(endpointUrl, payload) {
                        // Try the sendBeacon API
                        if (window && window.navigator && typeof window.navigator.sendBeacon === 'function' && typeof window.Blob === 'function' && !Monorail.isIos12()) {
                            var blobData = new window.Blob([payload], {
                                type: 'text/plain'
                            });

                            if (window.navigator.sendBeacon(endpointUrl, blobData)) {
                                return true;
                            } // sendBeacon was not successful

                        } // XHR beacon

                        var xhr = new XMLHttpRequest();

                        try {
                            xhr.open('POST', endpointUrl);
                            xhr.setRequestHeader('Content-Type', 'text/plain');
                            xhr.send(payload);
                        } catch (e) {
                            console.log(e);
                        }

                        return false;
                    },
                    isIos12: function isIos12() {
                        return window.navigator.userAgent.lastIndexOf('iPhone; CPU iPhone OS 12_') !== -1 || window.navigator.userAgent.lastIndexOf('iPad; CPU OS 12_') !== -1;
                    }
                };
                Monorail.produce('monorail-edge.shopifysvc.com',
                    'trekkie_storefront_load_errors/1.1',
                    {
                        shop_id: 56298733706,
                        theme_id: 124363800714,
                        app_name: "storefront",
                        context_url: window.location.href,
                        source_url: "/cdn/s/trekkie.storefront.b31f2032c0d69b240cfbd23a96457e984a0bbbac.min.js"
                    });

            };
            scriptFallback.async = true;
            scriptFallback.phase = "interactive"
            scriptFallback.url = '/cdn/s/trekkie.storefront.b31f2032c0d69b240cfbd23a96457e984a0bbbac.min.js';
            first.parentNode.insertBefore(scriptFallback, first);
        };
        script.async = true;
        script.phase = "interactive"
        script.url = '/cdn/s/trekkie.storefront.b31f2032c0d69b240cfbd23a96457e984a0bbbac.min.js';
        first.parentNode.insertBefore(script, first);
    };
    trekkie.load(
        {
            "Trekkie": {
                "appName": "storefront",
                "development": false,
                "defaultAttributes": {
                    "shopId": 56298733706,
                    "isMerchantRequest": null,
                    "themeId": 124363800714,
                    "themeCityHash": "2066275773428196244",
                    "contentLanguage": "en",
                    "currency": "CAD"
                },
                "isServerSideCookieWritingEnabled": true,
                "monorailRegion": "shop_domain"
            },
            "Facebook Pixel": {"pixelIds": ["833565017410832"], "agent": "plshopify1.2"},
            "Google Gtag Pixel": {
                "conversionId": "G-4G3H7S6WR9",
                "eventLabels": [{"type": "begin_checkout", "action_label": "G-4G3H7S6WR9"}, {
                    "type": "search",
                    "action_label": "G-4G3H7S6WR9"
                }, {"type": "view_item", "action_label": ["G-4G3H7S6WR9", "MC-W5TQV8YRTF"]}, {
                    "type": "purchase",
                    "action_label": ["G-4G3H7S6WR9", "MC-W5TQV8YRTF"]
                }, {
                    "type": "page_view",
                    "action_label": ["G-4G3H7S6WR9", "MC-W5TQV8YRTF"]
                }, {"type": "add_payment_info", "action_label": "G-4G3H7S6WR9"}, {
                    "type": "add_to_cart",
                    "action_label": "G-4G3H7S6WR9"
                }],
                "targetCountry": "CA"
            },
            "Session Attribution": {},
            "S2S": {
                "facebookCapiEnabled": true,
                "facebookAppPixelId": "833565017410832",
                "source": "trekkie-storefront-renderer"
            }
        }
    );

    var loaded = false;
    trekkie.ready(function () {
        if (loaded) return;
        loaded = true;

        window.ShopifyAnalytics.lib = window.trekkie;


        var originalDocumentWrite = document.write;
        document.write = customDocumentWrite;
        try {
            window.ShopifyAnalytics.merchantGoogleAnalytics.call(this);
        } catch (error) {
        }
        ;
        document.write = originalDocumentWrite;

        window.ShopifyAnalytics.lib.page(null, {"pageType": "home"});

        var match = window.location.pathname.match(/checkouts\/(.+)\/(thank_you|post_purchase)/)
        var token = match ? match[1] : undefined;
        if (!hasLoggedConversion(token)) {
            setCookieIfConversion(token);

        }
    });


    var eventsListenerScript = document.createElement('script');
    eventsListenerScript.async = true;
    eventsListenerScript.src = "/cdn/shopifycloud/shopify/assets/shop_events_listener-a7c63dba65ccddc484f77541dc8ca437e60e1e9e297fe1c3faebf6523a0ede9b.js";
    document.getElementsByTagName('head')[0].appendChild(eventsListenerScript);

})();

(function () {
    if (window.BOOMR && (window.BOOMR.version || window.BOOMR.snippetExecuted)) {
        return;
    }
    window.BOOMR = window.BOOMR || {};
    window.BOOMR.snippetStart = new Date().getTime();
    window.BOOMR.snippetExecuted = true;
    window.BOOMR.snippetVersion = 12;
    window.BOOMR.application = "storefront-renderer";
    window.BOOMR.themeName = "Brooklyn";
    window.BOOMR.themeVersion = "17.6.0";
    window.BOOMR.shopId = 56298733706;
    window.BOOMR.themeId = 124363800714;
    window.BOOMR.renderRegion = "gcp-us-central1";
    window.BOOMR.url =
        "https:/cdn/shopifycloud/boomerang/shopify-boomerang-1.0.0.min.js";
    var where = document.currentScript || document.getElementsByTagName("script")[0];
    var parentNode = where.parentNode;
    var promoted = false;
    var LOADER_TIMEOUT = 3000;

    function promote() {
        if (promoted) {
            return;
        }
        var script = document.createElement("script");
        script.id = "boomr-scr-as";
        script.src = window.BOOMR.url;
        script.async = true;
        parentNode.appendChild(script);
        promoted = true;
    }

    function iframeLoader(wasFallback) {
        promoted = true;
        var dom, bootstrap, iframe, iframeStyle;
        var doc = document;
        var win = window;
        window.BOOMR.snippetMethod = wasFallback ? "if" : "i";
        bootstrap = function (parent, scriptId) {
            var script = doc.createElement("script");
            script.id = scriptId || "boomr-if-as";
            script.src = window.BOOMR.url;
            BOOMR_lstart = new Date().getTime();
            parent = parent || doc.body;
            parent.appendChild(script);
        };
        if (!window.addEventListener && window.attachEvent && navigator.userAgent.match(/MSIE [67]./)) {
            window.BOOMR.snippetMethod = "s";
            bootstrap(parentNode, "boomr-async");
            return;
        }
        iframe = document.createElement("IFRAME");
        iframe.src = "about:blank";
        iframe.title = "";
        iframe.role = "presentation";
        iframe.loading = "eager";
        iframeStyle = (iframe.frameElement || iframe).style;
        iframeStyle.width = 0;
        iframeStyle.height = 0;
        iframeStyle.border = 0;
        iframeStyle.display = "none";
        parentNode.appendChild(iframe);
        try {
            win = iframe.contentWindow;
            doc = win.document.open();
        } catch (e) {
            dom = document.domain;
            iframe.src = "javascript:var d=document.open();d.domain='" + dom + "';void(0);";
            win = iframe.contentWindow;
            doc = win.document.open();
        }
        if (dom) {
            doc._boomrl = function () {
                this.domain = dom;
                bootstrap();
            };
            doc.write("<body onload='document._boomrl();'>");
        } else {
            win._boomrl = function () {
                bootstrap();
            };
            if (win.addEventListener) {
                win.addEventListener("load", win._boomrl, false);
            } else if (win.attachEvent) {
                win.attachEvent("onload", win._boomrl);
            }
        }
        doc.close();
    }

    var link = document.createElement("link");
    if (link.relList &&
        typeof link.relList.supports === "function" &&
        link.relList.supports("preload") &&
        ("as" in link)) {
        window.BOOMR.snippetMethod = "p";
        link.href = window.BOOMR.url;
        link.rel = "preload";
        link.as = "script";
        link.addEventListener("load", promote);
        link.addEventListener("error", function () {
            iframeLoader(true);
        });
        setTimeout(function () {
            if (!promoted) {
                iframeLoader(true);
            }
        }, LOADER_TIMEOUT);
        BOOMR_lstart = new Date().getTime();
        parentNode.appendChild(link);
    } else {
        iframeLoader(false);
    }

    function boomerangSaveLoadTime(e) {
        window.BOOMR_onload = (e && e.timeStamp) || new Date().getTime();
    }

    if (window.addEventListener) {
        window.addEventListener("load", boomerangSaveLoadTime, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", boomerangSaveLoadTime);
    }
    if (document.addEventListener) {
        document.addEventListener("onBoomerangLoaded", function (e) {
            e.detail.BOOMR.init({
                ResourceTiming: {
                    enabled: true,
                    trackedResourceTypes: ["script", "img", "css"]
                },
            });
            e.detail.BOOMR.t_end = new Date().getTime();
        });
    } else if (document.attachEvent) {
        document.attachEvent("onpropertychange", function (e) {
            if (!e) e = event;
            if (e.propertyName === "onBoomerangLoaded") {
                e.detail.BOOMR.init({
                    ResourceTiming: {
                        enabled: true,
                        trackedResourceTypes: ["script", "img", "css"]
                    },
                });
                e.detail.BOOMR.t_end = new Date().getTime();
            }
        });
    }
})();
