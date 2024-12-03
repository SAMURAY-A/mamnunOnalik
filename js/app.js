var isInIFrame = (window.self !== window.top) ? true : false;

if (!isInIFrame) {
    var jsData = ["showcase-cta", "https:\/\/websitedemos.net\/fashion-lifestyle-02\/wp-content\/plugins\/astra-sites-server\/admin\/showcase-cta\/switcher\/dist\/style-main.css?ver=9181358ee4ae020dff05"];
    var style = document.createElement('link');
    style.setAttribute('id', jsData[0]);
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('type', 'text/css');
    style.setAttribute('media', 'all');
    style.setAttribute('href', jsData[1]);

    document.head.appendChild(style);
}
var isInIFrame = (window.self !== window.top) ? true : false;

if (!isInIFrame) {
    var jsData = ["showcase-cta-google-fonts", "\/\/fonts.googleapis.com\/css?family=DM%20Sans%3A400%2C500%2C700&subset=latin%2Clatin-ext"];
    var style = document.createElement('link');
    style.setAttribute('id', jsData[0]);
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('type', 'text/css');
    style.setAttribute('media', 'all');
    style.setAttribute('href', jsData[1]);

    document.head.appendChild(style);
} {
    "@context" ["https://schema.org"],
    "@graph" [{
        "@type": "WebPage",
        "@id": "https://websitedemos.net/fashion-lifestyle-02/contact-me/",
        "url": "https://websitedemos.net/fashion-lifestyle-02/contact-me/",
        "name": "Contact - Fashion Lifestyle Blog",
        "isPartOf": {
            "@id": "https://websitedemos.net/fashion-lifestyle-02/#website"
        },
        "primaryImageOfPage": {
            "@id": "https://websitedemos.net/fashion-lifestyle-02/contact-me/#primaryimage"
        },
        "image": {
            "@id": "https://websitedemos.net/fashion-lifestyle-02/contact-me/#primaryimage"
        },
        "thumbnailUrl": "https://websitedemos.net/fashion-lifestyle-02/wp-content/uploads/sites/427/2019/01/clients01-free-img.jpg",
        "datePublished": "2018-12-21T06:29:53+00:00",
        "dateModified": "2024-01-17T20:59:12+00:00",
        "breadcrumb": {
            "@id": "https://websitedemos.net/fashion-lifestyle-02/contact-me/#breadcrumb"
        },
        "inLanguage": "en-US",
        "potentialAction": [{
            "@type": "ReadAction",
            "target": ["https://websitedemos.net/fashion-lifestyle-02/contact-me/"]
        }]
    }, {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "@id": "https://websitedemos.net/fashion-lifestyle-02/contact-me/#primaryimage",
        "url": "https://websitedemos.net/fashion-lifestyle-02/wp-content/uploads/sites/427/2019/01/clients01-free-img.jpg",
        "contentUrl": "https://websitedemos.net/fashion-lifestyle-02/wp-content/uploads/sites/427/2019/01/clients01-free-img.jpg",
        "width": 160,
        "height": 160,
        "caption": ""
    }, {
        "@type": "BreadcrumbList",
        "@id": "https://websitedemos.net/fashion-lifestyle-02/contact-me/#breadcrumb",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://websitedemos.net/fashion-lifestyle-02/"
        }, {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact"
        }]
    }, {
        "@type": "WebSite",
        "@id": "https://websitedemos.net/fashion-lifestyle-02/#website",
        "url": "https://websitedemos.net/fashion-lifestyle-02/",
        "name": "Fashion Lifestyle Blog",
        "description": "Let’s Create Your Own Style!",
        "publisher": {
            "@id": "https://websitedemos.net/fashion-lifestyle-02/#organization"
        },
        "potentialAction": [{
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://websitedemos.net/fashion-lifestyle-02/?s={search_term_string}"
            },
            "query-input": {
                "@type": "PropertyValueSpecification",
                "valueRequired": true,
                "valueName": "search_term_string"
            }
        }],
        "inLanguage": "en-US"
    }, {
        "@type": "Organization",
        "@id": "https://websitedemos.net/fashion-lifestyle-02/#organization",
        "name": "Fashion Lifestyle Blog",
        "url": "https://websitedemos.net/fashion-lifestyle-02/",
        "logo": {
            "@type": "ImageObject",
            "inLanguage": "en-US",
            "@id": "https://websitedemos.net/fashion-lifestyle-02/#/schema/logo/image/",
            "url": "https://websitedemos.net/fashion-lifestyle-02/wp-content/uploads/sites/427/2019/03/kara-logo-free.svg",
            "contentUrl": "https://websitedemos.net/fashion-lifestyle-02/wp-content/uploads/sites/427/2019/03/kara-logo-free.svg",
            "width": 167,
            "height": 57,
            "caption": "Fashion Lifestyle Blog"
        },
        "image": {
            "@id": "https://websitedemos.net/fashion-lifestyle-02/#/schema/logo/image/"
        }
    }]
}
window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/svg\/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "https:\/\/websitedemos.net\/fashion-lifestyle-02\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.6.2"
    }
};
/*! This file is auto-generated */
! function(i, n) {
    var o, s, e;

    function c(e) {
        try {
            var t = {
                supportTests: e,
                timestamp: (new Date).valueOf()
            };
            sessionStorage.setItem(o, JSON.stringify(t))
        } catch (e) {}
    }

    function p(e, t, n) {
        e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0);
        var t = new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data),
            r = (e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(n, 0, 0), new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data));
        return t.every(function(e, t) {
            return e === r[t]
        })
    }

    function u(e, t, n) {
        switch (t) {
            case "flag":
                return n(e, "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !n(e, "\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !n(e, "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");
            case "emoji":
                return !n(e, "\ud83d\udc26\u200d\u2b1b", "\ud83d\udc26\u200b\u2b1b")
        }
        return !1
    }

    function f(e, t, n) {
        var r = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? new OffscreenCanvas(300, 150) : i.createElement("canvas"),
            a = r.getContext("2d", {
                willReadFrequently: !0
            }),
            o = (a.textBaseline = "top", a.font = "600 32px Arial", {});
        return e.forEach(function(e) {
            o[e] = t(a, e, n)
        }), o
    }

    function t(e) {
        var t = i.createElement("script");
        t.src = e, t.defer = !0, i.head.appendChild(t)
    }
    "undefined" != typeof Promise && (o = "wpEmojiSettingsSupports", s = ["flag", "emoji"], n.supports = {
        everything: !0,
        everythingExceptFlag: !0
    }, e = new Promise(function(e) {
        i.addEventListener("DOMContentLoaded", e, {
            once: !0
        })
    }), new Promise(function(t) {
        var n = function() {
            try {
                var e = JSON.parse(sessionStorage.getItem(o));
                if ("object" == typeof e && "number" == typeof e.timestamp && (new Date).valueOf() < e.timestamp + 604800 && "object" == typeof e.supportTests) return e.supportTests
            } catch (e) {}
            return null
        }();
        if (!n) {
            if ("undefined" != typeof Worker && "undefined" != typeof OffscreenCanvas && "undefined" != typeof URL && URL.createObjectURL && "undefined" != typeof Blob) try {
                var e = "postMessage(" + f.toString() + "(" + [JSON.stringify(s), u.toString(), p.toString()].join(",") + "));",
                    r = new Blob([e], {
                        type: "text/javascript"
                    }),
                    a = new Worker(URL.createObjectURL(r), {
                        name: "wpTestEmojiSupports"
                    });
                return void(a.onmessage = function(e) {
                    c(n = e.data), a.terminate(), t(n)
                })
            } catch (e) {}
            c(n = f(s, u, p))
        }
        t(n)
    }).then(function(e) {
        for (var t in e) n.supports[t] = e[t], n.supports.everything = n.supports.everything && n.supports[t], "flag" !== t && (n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && n.supports[t]);
        n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && !n.supports.flag, n.DOMReady = !1, n.readyCallback = function() {
            n.DOMReady = !0
        }
    }).then(function() {
        return e
    }).then(function() {
        var e;
        n.supports.everything || (n.readyCallback(), (e = n.source || {}).concatemoji ? t(e.concatemoji) : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji)))
    }))
}((window, document), window._wpemojiSettings);

// Google Tag Manager 
(function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-PW78FQ8');

var showcaseCTA = {
    "adminUrl": "https:\/\/websitedemos.net\/fashion-lifestyle-02\/wp-admin\/",
    "networkSiteURL": "https:\/\/websitedemos.net\/",
    "templateName": "Fashion Lifestyle Blog",
    "isMainSite": "",
    "templateColorScheme": "light",
    "path": "\/fashion-lifestyle-02\/",
    "pageBuilder": ["elementor"],
    "customizerData": {
        "astra-settings": {
            "blog-single-width": "custom",
            "blog-single-max-width": 1100,
            "single-content-images-shadow": false,
            "single-post-ast-content-layout": "default",
            "single-post-sidebar-style": "default",
            "ast-dynamic-single-post-elements-gap": 10,
            "ast-dynamic-single-post-meta-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "ast-dynamic-single-post-meta-font-weight": "",
            "ast-dynamic-single-post-metadata": ["comments", "ast-dynamic-single-post-taxonomy"],
            "section-search-page-title-structure": ["section-search-page-title-title"],
            "section-search-page-title-custom-title": "Search Results for:",
            "section-search-page-title-found-custom-description": "Here are the search results for your search.",
            "section-search-page-title-not-found-custom-description": "Sorry, but we could not find anything related to your search terms. Please try again.",
            "section-search-page-title-title-font-weight": "",
            "section-search-page-title-title-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "ast-search-results-per-page": 10,
            "section-search-page-title-horizontal-alignment": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "ast-search-live-search": false,
            "ast-search-live-search-post-types": {
                "post": 1,
                "page": 1
            },
            "blog-post-structure": ["image", "title", "title-meta", "excerpt", "read-more"],
            "blog-post-per-page": 10,
            "blog-hover-effect": "none",
            "blog-layout": "blog-layout-classic",
            "blog-width": "default",
            "blog-meta-date-type": "published",
            "blog-meta-date-format": "",
            "blog-max-width": 1200,
            "blog-post-content": "excerpt",
            "blog-meta": ["comments", "category", "author"],
            "post-card-border-radius": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "post-card-featured-overlay": "",
            "blog-category-style": "default",
            "blog-tag-style": "default",
            "blog-post-meta-divider-type": "\/",
            "blog-meta-category-style": "default",
            "blog-meta-tag-style": "default",
            "blog-image-ratio-type": "",
            "blog-image-ratio-pre-scale": "16\/9",
            "blog-image-custom-scale-width": 16,
            "blog-image-custom-scale-height": 9,
            "text-color": "var(--ast-global-color-3)",
            "link-color": "var(--ast-global-color-0)",
            "theme-color": "var(--ast-global-color-0)",
            "link-h-color": "var(--ast-global-color-1)",
            "heading-base-color": "var(--ast-global-color-2)",
            "border-color": "",
            "footer-bg-obj": {
                "background-color": "#000000",
                "background-image": "",
                "background-repeat": "no-repeat",
                "background-position": "left top",
                "background-size": "cover",
                "background-attachment": "scroll",
                "background-media": "",
                "background-type": "color",
                "overlay-type": "none",
                "overlay-color": "",
                "overlay-gradient": ""
            },
            "footer-color": "#a3a3a3",
            "footer-link-color": "",
            "footer-link-h-color": "",
            "footer-adv-bg-obj": {
                "background-color": "",
                "background-image": "",
                "background-repeat": "repeat",
                "background-position": "center center",
                "background-size": "auto",
                "background-attachment": "scroll",
                "background-type": "",
                "background-media": "",
                "overlay-type": "none",
                "overlay-color": "",
                "overlay-gradient": ""
            },
            "footer-adv-text-color": "",
            "footer-adv-link-color": "",
            "footer-adv-link-h-color": "",
            "footer-adv-wgt-title-color": "",
            "button-color": "var(--ast-global-color-0)",
            "button-h-color": "var(--ast-global-color-5)",
            "button-bg-color": "rgba(255,255,255,0)",
            "button-bg-h-color": "var(--ast-global-color-1)",
            "secondary-button-bg-h-color": "var(--ast-global-color-1)",
            "secondary-button-bg-color": "rgba(255,255,255,0)",
            "secondary-button-color": "",
            "secondary-button-h-color": "",
            "theme-button-padding": {
                "desktop": {
                    "top": 13,
                    "right": 33,
                    "bottom": 13,
                    "left": 33
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "secondary-theme-button-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "button-radius-fields": {
                "desktop": {
                    "top": 0,
                    "right": 0,
                    "bottom": 0,
                    "left": 0
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "secondary-button-radius-fields": {
                "desktop": {
                    "top": 0,
                    "right": 0,
                    "bottom": 0,
                    "left": 0
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "theme-button-border-group-border-size": {
                "top": "1",
                "right": "1",
                "bottom": "1",
                "left": "1"
            },
            "secondary-theme-button-border-group-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "footer-sml-layout": "footer-sml-layout-2",
            "footer-sml-section-1": "custom",
            "footer-sml-section-1-credit": "Copyright \u00a9 [current_year] [site_title]",
            "footer-sml-section-2": "menu",
            "footer-sml-section-2-credit": "Powered by [site_title]",
            "footer-sml-dist-equal-align": true,
            "footer-sml-divider": 0,
            "footer-sml-divider-color": "#7a7a7a",
            "footer-layout-width": "content",
            "ast-header-retina-logo": "",
            "ast-header-logo-width": "",
            "ast-header-responsive-logo-width": {
                "desktop": "157",
                "tablet": "",
                "mobile": ""
            },
            "header-color-site-title": "",
            "header-color-h-site-title": "",
            "header-color-site-tagline": "",
            "display-site-title-responsive": {
                "desktop": false,
                "tablet": false,
                "mobile": false
            },
            "display-site-tagline-responsive": {
                "desktop": 0,
                "tablet": 0,
                "mobile": 0
            },
            "logo-title-inline": false,
            "disable-primary-nav": false,
            "header-layouts": "header-main-layout-1",
            "header-main-rt-section": "widget",
            "header-display-outside-menu": false,
            "header-main-rt-section-html": "<button>Contact Us<\/button>",
            "header-main-rt-section-button-text": "Join Me Now",
            "header-main-rt-section-button-link": "#",
            "header-main-rt-section-button-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "header-main-rt-section-button-style": "custom-button",
            "header-main-rt-section-button-text-color": "#afafaf",
            "header-main-rt-section-button-back-color": "rgba(124,124,124,0)",
            "header-main-rt-section-button-text-h-color": "#000000",
            "header-main-rt-section-button-back-h-color": "",
            "header-main-rt-section-button-padding": {
                "desktop": {
                    "top": "5",
                    "right": "23",
                    "bottom": "5",
                    "left": "23"
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-main-rt-section-button-border-size": {
                "top": "1",
                "right": "1",
                "bottom": "1",
                "left": "1"
            },
            "header-main-sep": 1,
            "header-main-sep-color": "",
            "header-main-layout-width": "content",
            "primary-submenu-border": {
                "top": "2",
                "right": "0",
                "bottom": "0",
                "left": "0"
            },
            "primary-submenu-item-border": false,
            "primary-submenu-b-color": "",
            "primary-submenu-item-b-color": "",
            "primary-header-button-font-family": "inherit",
            "primary-header-button-font-weight": "inherit",
            "primary-header-button-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "primary-header-button-text-transform": "",
            "primary-header-button-line-height": 1,
            "primary-header-button-letter-spacing": "",
            "header-main-menu-label": "",
            "header-main-menu-align": "inline",
            "header-main-submenu-container-animation": "fade",
            "mobile-header-breakpoint": "",
            "mobile-header-logo": "",
            "mobile-header-logo-width": "",
            "site-layout": "ast-full-width-layout",
            "site-content-width": 1200,
            "narrow-container-max-width": 750,
            "site-layout-outside-bg-obj-responsive": {
                "desktop": {
                    "background-color": "var(--ast-global-color-4)",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "color",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "content-bg-obj-responsive": {
                "desktop": {
                    "background-color": "var(--ast-global-color-5)",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "color",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "var(--ast-global-color-5)",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "color",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "var(--ast-global-color-5)",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "color",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "wp-blocks-ui": "comfort",
            "wp-blocks-global-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "em",
                "tablet-unit": "em",
                "mobile-unit": "em"
            },
            "enable-comments-area": true,
            "comments-box-placement": "",
            "comment-form-position": "below",
            "comments-box-container-width": "",
            "ast-sub-section-comments-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "em",
                "tablet-unit": "em",
                "mobile-unit": "em"
            },
            "ast-sub-section-comments-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": 3,
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "em",
                "tablet-unit": "em",
                "mobile-unit": "em"
            },
            "single-page-ast-content-layout": "default",
            "single-page-content-style": "default",
            "single-post-content-style": "default",
            "archive-post-ast-content-layout": "default",
            "ast-site-content-layout": "normal-width-container",
            "site-content-style": "boxed",
            "body-font-family": "'Montserrat', sans-serif",
            "body-font-variant": "",
            "body-font-weight": "400",
            "font-size-body": {
                "desktop": "15",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "body-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "headings-font-height-settings": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "capitalize",
                "text-decoration": ""
            },
            "para-margin-bottom": "",
            "underline-content-links": false,
            "site-accessibility-toggle": true,
            "site-accessibility-highlight-type": "dotted",
            "site-accessibility-highlight-input-type": "disable",
            "body-text-transform": "",
            "headings-font-family": "'Libre Baskerville', serif",
            "headings-font-weight": "400",
            "font-size-site-title": {
                "desktop": 35,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-size-site-tagline": {
                "desktop": 15,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "single-post-outside-spacing": {
                "desktop": {
                    "top": "60",
                    "right": "0",
                    "bottom": "0",
                    "left": "0"
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-size-page-title": {
                "desktop": 40,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-size-post-tax": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-size-post-meta": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-size-h1": {
                "desktop": "78",
                "tablet": "",
                "mobile": "40",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-size-h2": {
                "desktop": "48",
                "tablet": "37",
                "mobile": "25",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-size-h3": {
                "desktop": "25",
                "tablet": "27",
                "mobile": "24",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-size-h4": {
                "desktop": 20,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-size-h5": {
                "desktop": "16",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-size-h6": {
                "desktop": "14",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "site-sidebar-layout": "no-sidebar",
            "site-sidebar-width": 30,
            "single-page-sidebar-layout": "default",
            "single-post-sidebar-layout": "no-sidebar",
            "archive-post-sidebar-layout": "default",
            "site-sticky-sidebar": false,
            "site-sidebar-style": "boxed",
            "single-page-sidebar-style": "default",
            "archive-post-sidebar-style": "default",
            "footer-adv": "disabled",
            "footer-adv-border-width": "",
            "footer-adv-border-color": "#7a7a7a",
            "mobile-header-toggle-btn-style": "fill",
            "hide-custom-menu-mobile": false,
            "mobile-header-toggle-target": "icon",
            "enable-scroll-to-id": false,
            "enable-related-posts": false,
            "related-posts-title": "Related Posts",
            "releted-posts-title-alignment": "left",
            "related-posts-total-count": 2,
            "enable-related-posts-excerpt": false,
            "related-posts-box-placement": "default",
            "related-posts-outside-location": "above",
            "related-posts-container-width": "fallback",
            "related-posts-excerpt-count": 25,
            "related-posts-based-on": "categories",
            "related-posts-order-by": "date",
            "related-posts-order": "asc",
            "related-posts-grid-responsive": {
                "desktop": "2-equal",
                "tablet": "2-equal",
                "mobile": "full"
            },
            "related-posts-structure": ["featured-image", "title-meta"],
            "related-posts-tag-style": "none",
            "related-posts-category-style": "none",
            "related-posts-date-format": "",
            "related-posts-meta-date-type": "published",
            "related-posts-author-avatar-size": "",
            "related-posts-author-avatar": false,
            "related-posts-author-prefix-label": "By ",
            "related-posts-image-size": "",
            "related-posts-image-custom-scale-width": 16,
            "related-posts-image-custom-scale-height": 9,
            "related-posts-image-ratio-pre-scale": "16\/9",
            "related-posts-image-ratio-type": "",
            "related-posts-meta-structure": ["comments", "category", "author"],
            "related-posts-text-color": "",
            "related-posts-link-color": "",
            "related-posts-title-color": "",
            "related-posts-background-color": "",
            "related-posts-meta-color": "",
            "related-posts-link-hover-color": "",
            "related-posts-meta-link-hover-color": "",
            "related-posts-section-title-font-family": "inherit",
            "related-posts-section-title-font-weight": "inherit",
            "related-posts-section-title-text-transform": "",
            "related-posts-section-title-line-height": "",
            "related-posts-section-title-font-extras": {
                "line-height": "1.6",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "related-posts-section-title-font-size": {
                "desktop": "30",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "related-posts-title-font-family": "inherit",
            "related-posts-title-font-weight": "inherit",
            "related-posts-title-text-transform": "",
            "related-posts-title-line-height": "1",
            "related-posts-title-font-size": {
                "desktop": "20",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "related-posts-title-font-extras": {
                "line-height": "1",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "related-posts-meta-font-family": "inherit",
            "related-posts-meta-font-weight": "inherit",
            "related-posts-meta-text-transform": "",
            "related-posts-meta-line-height": "",
            "related-posts-meta-font-size": {
                "desktop": "14",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "related-posts-meta-font-extras": {
                "line-height": "1.6",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "related-posts-content-font-family": "inherit",
            "related-posts-content-font-weight": "inherit",
            "related-posts-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "related-posts-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "ast-sub-section-related-posts-padding": {
                "desktop": {
                    "top": 2.5,
                    "right": 2.5,
                    "bottom": 2.5,
                    "left": 2.5
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "em",
                "tablet-unit": "em",
                "mobile-unit": "em"
            },
            "ast-sub-section-related-posts-margin": {
                "desktop": {
                    "top": 2,
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "em",
                "tablet-unit": "em",
                "mobile-unit": "em"
            },
            "transparent-header-logo": "https:\/\/websitedemos.net\/fashion-lifestyle-02\/wp-content\/uploads\/sites\/427\/2019\/02\/kara-logo-free.svg",
            "transparent-header-retina-logo": "",
            "different-transparent-logo": false,
            "different-transparent-retina-logo": false,
            "transparent-header-logo-width": {
                "desktop": "171",
                "tablet": "",
                "mobile": ""
            },
            "transparent-header-enable": 0,
            "transparent-header-disable-archive": 1,
            "transparent-header-disable-latest-posts-index": 1,
            "transparent-header-on-devices": "both",
            "transparent-header-main-sep": 0,
            "transparent-header-main-sep-color": "",
            "transparent-header-bg-color": "",
            "transparent-header-color-site-title": "",
            "transparent-header-color-h-site-title": "",
            "transparent-menu-bg-color": "",
            "transparent-menu-color": "",
            "transparent-menu-h-color": "",
            "transparent-submenu-bg-color": "",
            "transparent-submenu-color": "",
            "transparent-submenu-h-color": "",
            "transparent-header-logo-color": "",
            "transparent-header-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "transparent-header-color-site-title-responsive": {
                "desktop": "var(--ast-global-color-5)",
                "tablet": "",
                "mobile": ""
            },
            "transparent-header-color-h-site-title-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "transparent-menu-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "transparent-menu-color-responsive": {
                "desktop": "var(--ast-global-color-4)",
                "tablet": "#666666",
                "mobile": ""
            },
            "transparent-menu-h-color-responsive": {
                "desktop": "var(--ast-global-color-5)",
                "tablet": "#666666",
                "mobile": ""
            },
            "transparent-submenu-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "transparent-submenu-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "transparent-submenu-h-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "transparent-content-section-text-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "transparent-content-section-link-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "transparent-content-section-link-h-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "breadcrumb-font-family": "inherit",
            "breadcrumb-font-weight": "inherit",
            "breadcrumb-text-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "breadcrumb-active-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "breadcrumb-hover-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "breadcrumb-separator-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "breadcrumb-bg-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "breadcrumb-spacing": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "breadcrumb-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "breadcrumb-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "breadcrumb-separator-selector": "unicode",
            "breadcrumb-separator": "\u00000bb",
            "scroll-to-top-enable": false,
            "scroll-to-top-icon-size": 15,
            "scroll-to-top-icon-position": "right",
            "scroll-to-top-on-devices": "both",
            "scroll-to-top-icon-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "scroll-to-top-icon-color": "",
            "scroll-to-top-icon-h-color": "",
            "scroll-to-top-icon-bg-color": "",
            "scroll-to-top-icon-h-bg-color": "",
            "h1-color": "",
            "h2-color": "",
            "h3-color": "",
            "h4-color": "",
            "h5-color": "",
            "h6-color": "",
            "font-family-h1": "inherit",
            "font-weight-h1": "inherit",
            "font-extras-h1": {
                "line-height": "1.4",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "font-family-h2": "'Montserrat', sans-serif",
            "font-weight-h2": "500",
            "font-extras-h2": {
                "line-height": "1.3",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "font-family-h3": "inherit",
            "font-weight-h3": "inherit",
            "font-extras-h3": {
                "line-height": "1.5",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "font-family-h4": "inherit",
            "font-weight-h4": "inherit",
            "font-extras-h4": {
                "line-height": "1.2",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "font-family-h5": "inherit",
            "font-weight-h5": "inherit",
            "font-extras-h5": {
                "line-height": "1.2",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "font-family-h6": "inherit",
            "font-weight-h6": "inherit",
            "font-extras-h6": {
                "line-height": "1.25",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "font-weight-button": "500",
            "secondary-font-weight-button": "500",
            "font-family-button": "inherit",
            "secondary-font-family-button": "inherit",
            "font-size-button": {
                "desktop": "14",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "secondary-font-size-button": {
                "desktop": "14",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-extras-button": {
                "line-height": 1,
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "secondary-font-extras-button": {
                "line-height": 1,
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-desktop-items": {
                "above": {
                    "above_left": [],
                    "above_left_center": [],
                    "above_center": [],
                    "above_right_center": [],
                    "above_right": []
                },
                "below": {
                    "below_left": [],
                    "below_left_center": [],
                    "below_center": [],
                    "below_right_center": [],
                    "below_right": []
                },
                "primary": {
                    "primary_left": ["logo"],
                    "primary_left_center": [],
                    "primary_center": [],
                    "primary_right_center": [],
                    "primary_right": ["menu-1", "social-icons-1"]
                },
                "flag": true,
                "popup": {
                    "popup_content": []
                }
            },
            "header-mobile-items": {
                "above": {
                    "above_left": [],
                    "above_center": [],
                    "above_right": []
                },
                "below": {
                    "below_left": [],
                    "below_center": [],
                    "below_right": []
                },
                "popup": {
                    "popup_content": ["menu-1"]
                },
                "primary": {
                    "primary_left": ["logo"],
                    "primary_center": [],
                    "primary_right": ["mobile-trigger"]
                },
                "flag": false
            },
            "hb-header-main-layout-width": "content",
            "hb-header-height": {
                "desktop": 70,
                "tablet": "",
                "mobile": ""
            },
            "hb-stack": {
                "desktop": "stack",
                "tablet": "stack",
                "mobile": "stack"
            },
            "hb-header-main-sep": 0,
            "hb-header-main-sep-color": "",
            "hb-header-main-menu-align": "inline",
            "hb-header-bg-obj-responsive": {
                "desktop": {
                    "background-color": "var(--ast-global-color-5)",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "color",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "hb-header-spacing": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "1.5",
                    "right": "",
                    "bottom": "1.5",
                    "left": ""
                },
                "mobile": {
                    "top": "1",
                    "right": "",
                    "bottom": "1",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "em",
                "mobile-unit": "em"
            },
            "hba-header-layout": "above-header-layout-1",
            "hba-header-height": {
                "desktop": 50,
                "tablet": "",
                "mobile": ""
            },
            "hba-stack": {
                "desktop": "stack",
                "tablet": "stack",
                "mobile": "stack"
            },
            "hba-header-separator": 1,
            "hba-header-bottom-border-color": "#eaeaea",
            "hba-header-bg-obj-responsive": {
                "desktop": {
                    "background-color": "#ffffff",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "hba-header-text-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "hba-header-link-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "hba-header-link-h-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "hba-header-spacing": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "0",
                    "right": "",
                    "bottom": "0",
                    "left": ""
                },
                "mobile": {
                    "top": "0.5",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "em"
            },
            "hbb-header-layout": "below-header-layout-1",
            "hbb-header-height": {
                "desktop": 60,
                "tablet": "",
                "mobile": ""
            },
            "hbb-stack": {
                "desktop": "stack",
                "tablet": "stack",
                "mobile": "stack"
            },
            "hbb-header-separator": 1,
            "hbb-header-bottom-border-color": "#eaeaea",
            "hbb-header-bg-obj-responsive": {
                "desktop": {
                    "background-color": "#eeeeee",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "hbb-header-spacing": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "1",
                    "right": "",
                    "bottom": "1",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "em",
                "mobile-unit": "px"
            },
            "section-footer-builder-layout-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-footer-builder-layout-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-above-header-builder-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-above-header-builder-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-below-header-builder-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-below-header-builder-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-header-mobile-trigger-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-primary-header-builder-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-primary-header-builder-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "title_tagline-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-header-search-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-account-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-mobile-menu-menu-spacing": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-header-mobile-menu-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-above-footer-builder-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-above-footer-builder-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-below-footer-builder-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-footer-copyright-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-footer-menu-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-primary-footer-builder-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-primary-footer-builder-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-header-woo-cart-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-header-woo-cart-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button1-text": "Button",
            "header-button1-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "header-button1-font-family": "inherit",
            "header-button1-font-weight": "inherit",
            "header-button1-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-button1-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button1-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button1-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button1-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button1-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button1-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button1-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "header-button1-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button1-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button1-border-radius": "",
            "section-hb-button-1-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-hb-button-1-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "sticky-header-button1-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button1-text": "Button",
            "footer-button1-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "footer-button1-font-family": "inherit",
            "footer-button1-font-weight": "inherit",
            "footer-button1-text-transform": "",
            "footer-button1-line-height": "",
            "footer-button1-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button1-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button1-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button1-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button1-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button1-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button1-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "footer-button1-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button1-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button-1-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-button-1-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-button-1-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-html-1": "Insert HTML text here.",
            "header-html-1color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-1link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-1link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-hb-html-1": {
                "desktop": 15,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-weight-section-hb-html-1": "inherit",
            "font-family-section-hb-html-1": "inherit",
            "font-extras-section-hb-html-1": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-html-1-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-1": "Insert HTML text here.",
            "footer-html-1color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-1link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-1link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-fb-html-1": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-1-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "font-weight-section-fb-html-1": "inherit",
            "font-family-section-fb-html-1": "inherit",
            "font-extras-section-fb-html-1": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-fb-html-1-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-1-space": {
                "desktop": 22,
                "tablet": "",
                "mobile": ""
            },
            "header-social-1-bg-space": "",
            "header-social-1-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "header-social-1-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-1-color": {
                "desktop": "var(--ast-global-color-3)"
            },
            "header-social-1-h-color": {
                "desktop": "var(--ast-global-color-1)"
            },
            "header-social-1-bg-color": "",
            "header-social-1-bg-h-color": "",
            "header-social-1-label-toggle": false,
            "header-social-1-color-type": "custom",
            "header-social-1-brand-hover-toggle": false,
            "font-size-section-hb-social-icons-1": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-icons-1": {
                "items": [{
                    "id": "pinterest",
                    "enabled": true,
                    "url": "",
                    "color": "#ea575a",
                    "background": "transparent",
                    "icon": "pinterest-p",
                    "label": "Pinterest"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram-square",
                    "label": "Instagram"
                }, {
                    "id": "youtube",
                    "enabled": true,
                    "url": "",
                    "color": "#e96651",
                    "background": "transparent",
                    "icon": "youtube",
                    "label": "YouTube"
                }],
                "flag": false
            },
            "section-hb-social-icons-1-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-1-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-social-1-bg-space": "",
            "footer-social-1-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "footer-social-1-radius": "",
            "footer-social-1-color": "",
            "footer-social-1-h-color": "",
            "footer-social-1-bg-color": "",
            "footer-social-1-bg-h-color": "",
            "footer-social-1-label-toggle": false,
            "footer-social-1-color-type": "custom",
            "footer-social-1-brand-color": "",
            "footer-social-1-brand-label-color": "",
            "footer-social-1-brand-hover-toggle": false,
            "font-size-section-fb-social-icons-1": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-icons-1": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "footer-social-1-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-social-icons-1-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-1-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-1-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-1-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-1-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-1-font-family": "inherit",
            "header-widget-1-font-weight": "inherit",
            "header-widget-1-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-1-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-widget-1-content-font-family": "inherit",
            "header-widget-1-content-font-weight": "inherit",
            "header-widget-1-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-1-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "sidebar-widgets-header-widget-1-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": "20"
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-1-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-1-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-1-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-1-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-1-font-family": "inherit",
            "footer-widget-1-font-weight": "inherit",
            "footer-widget-1-text-transform": "",
            "footer-widget-1-line-height": "",
            "footer-widget-1-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-1-content-font-family": "inherit",
            "footer-widget-1-content-font-weight": "inherit",
            "footer-widget-1-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "footer-widget-1-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-alignment-1": {
                "desktop": "left",
                "tablet": "center",
                "mobile": "center"
            },
            "sidebar-widgets-footer-widget-1-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu1-bg-color": "",
            "header-menu1-color": "",
            "header-menu1-h-bg-color": "",
            "header-menu1-h-color": "",
            "header-menu1-a-bg-color": "",
            "header-menu1-a-color": "",
            "header-menu1-bg-obj-responsive": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "var(--ast-global-color-4)",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "color",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "header-menu1-color-responsive": {
                "desktop": "var(--ast-global-color-3)",
                "tablet": "",
                "mobile": ""
            },
            "header-menu1-h-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu1-h-color-responsive": {
                "desktop": "var(--ast-global-color-0)",
                "tablet": "",
                "mobile": ""
            },
            "header-menu1-a-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu1-a-color-responsive": {
                "desktop": "var(--ast-global-color-0)",
                "tablet": "",
                "mobile": ""
            },
            "header-menu1-menu-hover-animation": "",
            "header-menu1-submenu-container-animation": "fade",
            "section-hb-menu-1-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu1-menu-spacing": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "5",
                    "right": "",
                    "bottom": "5",
                    "left": ""
                },
                "mobile": {
                    "top": "2",
                    "right": "",
                    "bottom": "2",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu1-submenu-item-border": false,
            "header-menu1-submenu-item-b-size": "1",
            "header-menu1-submenu-item-b-color": "",
            "header-menu1-submenu-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu1-submenu-top-offset": "",
            "header-menu1-submenu-width": "",
            "header-menu1-submenu-border": {
                "top": "2",
                "right": "0",
                "bottom": "0",
                "left": "0"
            },
            "header-menu1-menu-stack-on-mobile": true,
            "header-menu1-font-size": {
                "desktop": "",
                "tablet": "14",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu1-font-weight": "inherit",
            "header-menu1-font-family": "inherit",
            "header-menu1-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-divider-1-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-divider-1-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button2-text": "Button",
            "header-button2-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "header-button2-font-family": "inherit",
            "header-button2-font-weight": "inherit",
            "header-button2-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-button2-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button2-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button2-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button2-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button2-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button2-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button2-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "header-button2-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button2-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button2-border-radius": "",
            "section-hb-button-2-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-hb-button-2-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "sticky-header-button2-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button2-text": "Button",
            "footer-button2-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "footer-button2-font-family": "inherit",
            "footer-button2-font-weight": "inherit",
            "footer-button2-text-transform": "",
            "footer-button2-line-height": "",
            "footer-button2-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button2-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button2-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button2-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button2-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button2-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button2-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "footer-button2-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button2-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button-2-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-button-2-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-button-2-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-html-2": "Insert HTML text here.",
            "header-html-2color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-2link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-2link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-hb-html-2": {
                "desktop": 15,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-weight-section-hb-html-2": "inherit",
            "font-family-section-hb-html-2": "inherit",
            "font-extras-section-hb-html-2": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-html-2-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-2": "Insert HTML text here.",
            "footer-html-2color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-2link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-2link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-fb-html-2": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-2-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "font-weight-section-fb-html-2": "inherit",
            "font-family-section-fb-html-2": "inherit",
            "font-extras-section-fb-html-2": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-fb-html-2-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-2-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-social-2-bg-space": "",
            "header-social-2-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "header-social-2-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-2-color": "",
            "header-social-2-h-color": "",
            "header-social-2-bg-color": "",
            "header-social-2-bg-h-color": "",
            "header-social-2-label-toggle": false,
            "header-social-2-color-type": "custom",
            "header-social-2-brand-hover-toggle": false,
            "font-size-section-hb-social-icons-2": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-icons-2": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "section-hb-social-icons-2-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-2-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-social-2-bg-space": "",
            "footer-social-2-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "footer-social-2-radius": "",
            "footer-social-2-color": "",
            "footer-social-2-h-color": "",
            "footer-social-2-bg-color": "",
            "footer-social-2-bg-h-color": "",
            "footer-social-2-label-toggle": false,
            "footer-social-2-color-type": "custom",
            "footer-social-2-brand-color": "",
            "footer-social-2-brand-label-color": "",
            "footer-social-2-brand-hover-toggle": false,
            "font-size-section-fb-social-icons-2": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-icons-2": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "footer-social-2-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-social-icons-2-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-2-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-2-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-2-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-2-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-2-font-family": "inherit",
            "header-widget-2-font-weight": "inherit",
            "header-widget-2-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-2-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-widget-2-content-font-family": "inherit",
            "header-widget-2-content-font-weight": "inherit",
            "header-widget-2-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-2-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "sidebar-widgets-header-widget-2-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-2-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-2-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-2-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-2-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-2-font-family": "inherit",
            "footer-widget-2-font-weight": "inherit",
            "footer-widget-2-text-transform": "",
            "footer-widget-2-line-height": "",
            "footer-widget-2-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-2-content-font-family": "inherit",
            "footer-widget-2-content-font-weight": "inherit",
            "footer-widget-2-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "footer-widget-2-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-alignment-2": {
                "desktop": "left",
                "tablet": "center",
                "mobile": "center"
            },
            "sidebar-widgets-footer-widget-2-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu2-bg-color": "",
            "header-menu2-color": "",
            "header-menu2-h-bg-color": "",
            "header-menu2-h-color": "",
            "header-menu2-a-bg-color": "",
            "header-menu2-a-color": "",
            "header-menu2-bg-obj-responsive": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "header-menu2-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu2-h-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu2-h-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu2-a-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu2-a-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu2-menu-hover-animation": "",
            "header-menu2-submenu-container-animation": "",
            "section-hb-menu-2-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu2-menu-spacing": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu2-submenu-item-border": false,
            "header-menu2-submenu-item-b-size": "1",
            "header-menu2-submenu-item-b-color": "#eaeaea",
            "header-menu2-submenu-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu2-submenu-top-offset": "",
            "header-menu2-submenu-width": "",
            "header-menu2-submenu-border": {
                "top": 2,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "header-menu2-menu-stack-on-mobile": true,
            "header-menu2-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu2-font-weight": "inherit",
            "header-menu2-font-family": "inherit",
            "header-menu2-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-divider-2-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-divider-2-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button3-text": "Button",
            "header-button3-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "header-button3-font-family": "inherit",
            "header-button3-font-weight": "inherit",
            "header-button3-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-button3-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button3-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button3-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button3-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button3-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button3-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button3-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "header-button3-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button3-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button3-border-radius": "",
            "section-hb-button-3-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-hb-button-3-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "sticky-header-button3-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button3-text": "Button",
            "footer-button3-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "footer-button3-font-family": "inherit",
            "footer-button3-font-weight": "inherit",
            "footer-button3-text-transform": "",
            "footer-button3-line-height": "",
            "footer-button3-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button3-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button3-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button3-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button3-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button3-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button3-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "footer-button3-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button3-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button-3-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-button-3-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-button-3-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-html-3": "Insert HTML text here.",
            "header-html-3color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-3link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-3link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-hb-html-3": {
                "desktop": 15,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-weight-section-hb-html-3": "inherit",
            "font-family-section-hb-html-3": "inherit",
            "font-extras-section-hb-html-3": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-html-3-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-3": "Insert HTML text here.",
            "footer-html-3color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-3link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-3link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-fb-html-3": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-3-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "font-weight-section-fb-html-3": "inherit",
            "font-family-section-fb-html-3": "inherit",
            "font-extras-section-fb-html-3": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-fb-html-3-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-3-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-social-3-bg-space": "",
            "header-social-3-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "header-social-3-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-3-color": "",
            "header-social-3-h-color": "",
            "header-social-3-bg-color": "",
            "header-social-3-bg-h-color": "",
            "header-social-3-label-toggle": false,
            "header-social-3-color-type": "custom",
            "header-social-3-brand-hover-toggle": false,
            "font-size-section-hb-social-icons-3": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-icons-3": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "section-hb-social-icons-3-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-3-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-social-3-bg-space": "",
            "footer-social-3-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "footer-social-3-radius": "",
            "footer-social-3-color": "",
            "footer-social-3-h-color": "",
            "footer-social-3-bg-color": "",
            "footer-social-3-bg-h-color": "",
            "footer-social-3-label-toggle": false,
            "footer-social-3-color-type": "custom",
            "footer-social-3-brand-color": "",
            "footer-social-3-brand-label-color": "",
            "footer-social-3-brand-hover-toggle": false,
            "font-size-section-fb-social-icons-3": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-icons-3": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "footer-social-3-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-social-icons-3-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-3-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-3-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-3-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-3-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-3-font-family": "inherit",
            "header-widget-3-font-weight": "inherit",
            "header-widget-3-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-3-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-widget-3-content-font-family": "inherit",
            "header-widget-3-content-font-weight": "inherit",
            "header-widget-3-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-3-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "sidebar-widgets-header-widget-3-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-3-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-3-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-3-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-3-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-3-font-family": "inherit",
            "footer-widget-3-font-weight": "inherit",
            "footer-widget-3-text-transform": "",
            "footer-widget-3-line-height": "",
            "footer-widget-3-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-3-content-font-family": "inherit",
            "footer-widget-3-content-font-weight": "inherit",
            "footer-widget-3-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "footer-widget-3-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-alignment-3": {
                "desktop": "left",
                "tablet": "center",
                "mobile": "center"
            },
            "sidebar-widgets-footer-widget-3-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu3-bg-color": "",
            "header-menu3-color": "",
            "header-menu3-h-bg-color": "",
            "header-menu3-h-color": "",
            "header-menu3-a-bg-color": "",
            "header-menu3-a-color": "",
            "header-menu3-bg-obj-responsive": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "header-menu3-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu3-h-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu3-h-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu3-a-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu3-a-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu3-menu-hover-animation": "",
            "header-menu3-submenu-container-animation": "",
            "section-hb-menu-3-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu3-menu-spacing": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu3-submenu-item-border": false,
            "header-menu3-submenu-item-b-size": "1",
            "header-menu3-submenu-item-b-color": "#eaeaea",
            "header-menu3-submenu-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu3-submenu-top-offset": "",
            "header-menu3-submenu-width": "",
            "header-menu3-submenu-border": {
                "top": 2,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "header-menu3-menu-stack-on-mobile": true,
            "header-menu3-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu3-font-weight": "inherit",
            "header-menu3-font-family": "inherit",
            "header-menu3-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-divider-3-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-divider-3-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button4-text": "Button",
            "header-button4-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "header-button4-font-family": "inherit",
            "header-button4-font-weight": "inherit",
            "header-button4-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-button4-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button4-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button4-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button4-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button4-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button4-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button4-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "header-button4-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button4-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button4-border-radius": "",
            "section-hb-button-4-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-hb-button-4-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "sticky-header-button4-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button4-text": "Button",
            "footer-button4-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "footer-button4-font-family": "inherit",
            "footer-button4-font-weight": "inherit",
            "footer-button4-text-transform": "",
            "footer-button4-line-height": "",
            "footer-button4-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button4-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button4-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button4-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button4-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button4-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button4-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "footer-button4-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button4-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button-4-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-button-4-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-button-4-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-html-4": "Insert HTML text here.",
            "header-html-4color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-4link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-4link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-hb-html-4": {
                "desktop": 15,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-weight-section-hb-html-4": "inherit",
            "font-family-section-hb-html-4": "inherit",
            "font-extras-section-hb-html-4": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-html-4-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-4": "Insert HTML text here.",
            "footer-html-4color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-4link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-4link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-fb-html-4": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-4-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "font-weight-section-fb-html-4": "inherit",
            "font-family-section-fb-html-4": "inherit",
            "font-extras-section-fb-html-4": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-fb-html-4-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-4-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-social-4-bg-space": "",
            "header-social-4-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "header-social-4-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-4-color": "",
            "header-social-4-h-color": "",
            "header-social-4-bg-color": "",
            "header-social-4-bg-h-color": "",
            "header-social-4-label-toggle": false,
            "header-social-4-color-type": "custom",
            "header-social-4-brand-hover-toggle": false,
            "font-size-section-hb-social-icons-4": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-icons-4": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "section-hb-social-icons-4-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-4-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-social-4-bg-space": "",
            "footer-social-4-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "footer-social-4-radius": "",
            "footer-social-4-color": "",
            "footer-social-4-h-color": "",
            "footer-social-4-bg-color": "",
            "footer-social-4-bg-h-color": "",
            "footer-social-4-label-toggle": false,
            "footer-social-4-color-type": "custom",
            "footer-social-4-brand-color": "",
            "footer-social-4-brand-label-color": "",
            "footer-social-4-brand-hover-toggle": false,
            "font-size-section-fb-social-icons-4": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-icons-4": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "footer-social-4-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-social-icons-4-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-4-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-4-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-4-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-4-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-4-font-family": "inherit",
            "header-widget-4-font-weight": "inherit",
            "header-widget-4-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-4-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-widget-4-content-font-family": "inherit",
            "header-widget-4-content-font-weight": "inherit",
            "header-widget-4-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-4-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "sidebar-widgets-header-widget-4-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-4-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-4-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-4-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-4-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-4-font-family": "inherit",
            "footer-widget-4-font-weight": "inherit",
            "footer-widget-4-text-transform": "",
            "footer-widget-4-line-height": "",
            "footer-widget-4-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-4-content-font-family": "inherit",
            "footer-widget-4-content-font-weight": "inherit",
            "footer-widget-4-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "footer-widget-4-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-alignment-4": {
                "desktop": "left",
                "tablet": "center",
                "mobile": "center"
            },
            "sidebar-widgets-footer-widget-4-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu4-bg-color": "",
            "header-menu4-color": "",
            "header-menu4-h-bg-color": "",
            "header-menu4-h-color": "",
            "header-menu4-a-bg-color": "",
            "header-menu4-a-color": "",
            "header-menu4-bg-obj-responsive": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "header-menu4-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu4-h-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu4-h-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu4-a-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu4-a-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu4-menu-hover-animation": "",
            "header-menu4-submenu-container-animation": "",
            "section-hb-menu-4-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu4-menu-spacing": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu4-submenu-item-border": false,
            "header-menu4-submenu-item-b-size": "1",
            "header-menu4-submenu-item-b-color": "#eaeaea",
            "header-menu4-submenu-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu4-submenu-top-offset": "",
            "header-menu4-submenu-width": "",
            "header-menu4-submenu-border": {
                "top": 2,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "header-menu4-menu-stack-on-mobile": true,
            "header-menu4-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu4-font-weight": "inherit",
            "header-menu4-font-family": "inherit",
            "header-menu4-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-divider-4-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-divider-4-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button5-text": "Button",
            "header-button5-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "header-button5-font-family": "inherit",
            "header-button5-font-weight": "inherit",
            "header-button5-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-button5-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button5-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button5-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button5-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button5-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button5-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button5-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "header-button5-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button5-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button5-border-radius": "",
            "section-hb-button-5-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-hb-button-5-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "sticky-header-button5-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button5-text": "Button",
            "footer-button5-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "footer-button5-font-family": "inherit",
            "footer-button5-font-weight": "inherit",
            "footer-button5-text-transform": "",
            "footer-button5-line-height": "",
            "footer-button5-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button5-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button5-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button5-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button5-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button5-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button5-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "footer-button5-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button5-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button-5-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-button-5-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-button-5-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-html-5": "Insert HTML text here.",
            "header-html-5color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-5link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-5link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-hb-html-5": {
                "desktop": 15,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-weight-section-hb-html-5": "inherit",
            "font-family-section-hb-html-5": "inherit",
            "font-extras-section-hb-html-5": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-html-5-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-5": "Insert HTML text here.",
            "footer-html-5color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-5link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-5link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-fb-html-5": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-5-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "font-weight-section-fb-html-5": "inherit",
            "font-family-section-fb-html-5": "inherit",
            "font-extras-section-fb-html-5": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-fb-html-5-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-5-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-social-5-bg-space": "",
            "header-social-5-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "header-social-5-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-5-color": "",
            "header-social-5-h-color": "",
            "header-social-5-bg-color": "",
            "header-social-5-bg-h-color": "",
            "header-social-5-label-toggle": false,
            "header-social-5-color-type": "custom",
            "header-social-5-brand-hover-toggle": false,
            "font-size-section-hb-social-icons-5": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-icons-5": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "section-hb-social-icons-5-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-5-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-social-5-bg-space": "",
            "footer-social-5-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "footer-social-5-radius": "",
            "footer-social-5-color": "",
            "footer-social-5-h-color": "",
            "footer-social-5-bg-color": "",
            "footer-social-5-bg-h-color": "",
            "footer-social-5-label-toggle": false,
            "footer-social-5-color-type": "custom",
            "footer-social-5-brand-color": "",
            "footer-social-5-brand-label-color": "",
            "footer-social-5-brand-hover-toggle": false,
            "font-size-section-fb-social-icons-5": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-icons-5": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "footer-social-5-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-social-icons-5-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-5-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-5-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-5-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-5-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-5-font-family": "inherit",
            "header-widget-5-font-weight": "inherit",
            "header-widget-5-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-5-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-widget-5-content-font-family": "inherit",
            "header-widget-5-content-font-weight": "inherit",
            "header-widget-5-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-5-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "sidebar-widgets-header-widget-5-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-5-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-5-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-5-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-5-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-5-font-family": "inherit",
            "footer-widget-5-font-weight": "inherit",
            "footer-widget-5-text-transform": "",
            "footer-widget-5-line-height": "",
            "footer-widget-5-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-5-content-font-family": "inherit",
            "footer-widget-5-content-font-weight": "inherit",
            "footer-widget-5-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "footer-widget-5-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-alignment-5": {
                "desktop": "left",
                "tablet": "center",
                "mobile": "center"
            },
            "sidebar-widgets-footer-widget-5-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu5-bg-color": "",
            "header-menu5-color": "",
            "header-menu5-h-bg-color": "",
            "header-menu5-h-color": "",
            "header-menu5-a-bg-color": "",
            "header-menu5-a-color": "",
            "header-menu5-bg-obj-responsive": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "header-menu5-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu5-h-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu5-h-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu5-a-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu5-a-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu5-menu-hover-animation": "",
            "header-menu5-submenu-container-animation": "",
            "section-hb-menu-5-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu5-menu-spacing": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu5-submenu-item-border": false,
            "header-menu5-submenu-item-b-size": "1",
            "header-menu5-submenu-item-b-color": "#eaeaea",
            "header-menu5-submenu-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu5-submenu-top-offset": "",
            "header-menu5-submenu-width": "",
            "header-menu5-submenu-border": {
                "top": 2,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "header-menu5-menu-stack-on-mobile": true,
            "header-menu5-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu5-font-weight": "inherit",
            "header-menu5-font-family": "inherit",
            "header-menu5-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-divider-5-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-divider-5-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button6-text": "Button",
            "header-button6-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "header-button6-font-family": "inherit",
            "header-button6-font-weight": "inherit",
            "header-button6-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-button6-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button6-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button6-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button6-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button6-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button6-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button6-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "header-button6-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button6-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button6-border-radius": "",
            "section-hb-button-6-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-hb-button-6-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "sticky-header-button6-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button6-text": "Button",
            "footer-button6-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "footer-button6-font-family": "inherit",
            "footer-button6-font-weight": "inherit",
            "footer-button6-text-transform": "",
            "footer-button6-line-height": "",
            "footer-button6-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button6-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button6-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button6-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button6-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button6-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button6-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "footer-button6-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button6-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button-6-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-button-6-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-button-6-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-html-6": "Insert HTML text here.",
            "header-html-6color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-6link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-6link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-hb-html-6": {
                "desktop": 15,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-weight-section-hb-html-6": "inherit",
            "font-family-section-hb-html-6": "inherit",
            "font-extras-section-hb-html-6": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-html-6-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-6": "Insert HTML text here.",
            "footer-html-6color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-6link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-6link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-fb-html-6": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-6-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "font-weight-section-fb-html-6": "inherit",
            "font-family-section-fb-html-6": "inherit",
            "font-extras-section-fb-html-6": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-fb-html-6-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-6-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-social-6-bg-space": "",
            "header-social-6-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "header-social-6-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-6-color": "",
            "header-social-6-h-color": "",
            "header-social-6-bg-color": "",
            "header-social-6-bg-h-color": "",
            "header-social-6-label-toggle": false,
            "header-social-6-color-type": "custom",
            "header-social-6-brand-hover-toggle": false,
            "font-size-section-hb-social-icons-6": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-icons-6": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "section-hb-social-icons-6-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-6-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-social-6-bg-space": "",
            "footer-social-6-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "footer-social-6-radius": "",
            "footer-social-6-color": "",
            "footer-social-6-h-color": "",
            "footer-social-6-bg-color": "",
            "footer-social-6-bg-h-color": "",
            "footer-social-6-label-toggle": false,
            "footer-social-6-color-type": "custom",
            "footer-social-6-brand-color": "",
            "footer-social-6-brand-label-color": "",
            "footer-social-6-brand-hover-toggle": false,
            "font-size-section-fb-social-icons-6": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-icons-6": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "footer-social-6-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-social-icons-6-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-6-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-6-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-6-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-6-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-6-font-family": "inherit",
            "header-widget-6-font-weight": "inherit",
            "header-widget-6-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-6-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-widget-6-content-font-family": "inherit",
            "header-widget-6-content-font-weight": "inherit",
            "header-widget-6-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-6-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "sidebar-widgets-header-widget-6-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-6-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-6-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-6-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-6-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-6-font-family": "inherit",
            "footer-widget-6-font-weight": "inherit",
            "footer-widget-6-text-transform": "",
            "footer-widget-6-line-height": "",
            "footer-widget-6-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-6-content-font-family": "inherit",
            "footer-widget-6-content-font-weight": "inherit",
            "footer-widget-6-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "footer-widget-6-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-alignment-6": {
                "desktop": "left",
                "tablet": "center",
                "mobile": "center"
            },
            "sidebar-widgets-footer-widget-6-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu6-bg-color": "",
            "header-menu6-color": "",
            "header-menu6-h-bg-color": "",
            "header-menu6-h-color": "",
            "header-menu6-a-bg-color": "",
            "header-menu6-a-color": "",
            "header-menu6-bg-obj-responsive": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "header-menu6-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu6-h-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu6-h-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu6-a-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu6-a-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu6-menu-hover-animation": "",
            "header-menu6-submenu-container-animation": "",
            "section-hb-menu-6-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu6-menu-spacing": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu6-submenu-item-border": false,
            "header-menu6-submenu-item-b-size": "1",
            "header-menu6-submenu-item-b-color": "#eaeaea",
            "header-menu6-submenu-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu6-submenu-top-offset": "",
            "header-menu6-submenu-width": "",
            "header-menu6-submenu-border": {
                "top": 2,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "header-menu6-menu-stack-on-mobile": true,
            "header-menu6-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu6-font-weight": "inherit",
            "header-menu6-font-family": "inherit",
            "header-menu6-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-divider-6-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-divider-6-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button7-text": "Button",
            "header-button7-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "header-button7-font-family": "inherit",
            "header-button7-font-weight": "inherit",
            "header-button7-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-button7-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button7-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button7-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button7-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button7-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button7-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button7-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "header-button7-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button7-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button7-border-radius": "",
            "section-hb-button-7-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-hb-button-7-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "sticky-header-button7-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button7-text": "Button",
            "footer-button7-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "footer-button7-font-family": "inherit",
            "footer-button7-font-weight": "inherit",
            "footer-button7-text-transform": "",
            "footer-button7-line-height": "",
            "footer-button7-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button7-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button7-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button7-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button7-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button7-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button7-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "footer-button7-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button7-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button-7-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-button-7-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-button-7-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-html-7": "Insert HTML text here.",
            "header-html-7color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-7link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-7link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-hb-html-7": {
                "desktop": 15,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-weight-section-hb-html-7": "inherit",
            "font-family-section-hb-html-7": "inherit",
            "font-extras-section-hb-html-7": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-html-7-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-7": "Insert HTML text here.",
            "footer-html-7color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-7link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-7link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-fb-html-7": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-7-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "font-weight-section-fb-html-7": "inherit",
            "font-family-section-fb-html-7": "inherit",
            "font-extras-section-fb-html-7": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-fb-html-7-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-7-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-social-7-bg-space": "",
            "header-social-7-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "header-social-7-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-7-color": "",
            "header-social-7-h-color": "",
            "header-social-7-bg-color": "",
            "header-social-7-bg-h-color": "",
            "header-social-7-label-toggle": false,
            "header-social-7-color-type": "custom",
            "header-social-7-brand-hover-toggle": false,
            "font-size-section-hb-social-icons-7": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-icons-7": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "section-hb-social-icons-7-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-7-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-social-7-bg-space": "",
            "footer-social-7-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "footer-social-7-radius": "",
            "footer-social-7-color": "",
            "footer-social-7-h-color": "",
            "footer-social-7-bg-color": "",
            "footer-social-7-bg-h-color": "",
            "footer-social-7-label-toggle": false,
            "footer-social-7-color-type": "custom",
            "footer-social-7-brand-color": "",
            "footer-social-7-brand-label-color": "",
            "footer-social-7-brand-hover-toggle": false,
            "font-size-section-fb-social-icons-7": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-icons-7": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "footer-social-7-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-social-icons-7-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-7-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-7-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-7-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-7-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-7-font-family": "inherit",
            "header-widget-7-font-weight": "inherit",
            "header-widget-7-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-7-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-widget-7-content-font-family": "inherit",
            "header-widget-7-content-font-weight": "inherit",
            "header-widget-7-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-7-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "sidebar-widgets-header-widget-7-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-7-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-7-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-7-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-7-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-7-font-family": "inherit",
            "footer-widget-7-font-weight": "inherit",
            "footer-widget-7-text-transform": "",
            "footer-widget-7-line-height": "",
            "footer-widget-7-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-7-content-font-family": "inherit",
            "footer-widget-7-content-font-weight": "inherit",
            "footer-widget-7-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "footer-widget-7-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-alignment-7": {
                "desktop": "left",
                "tablet": "center",
                "mobile": "center"
            },
            "sidebar-widgets-footer-widget-7-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu7-bg-color": "",
            "header-menu7-color": "",
            "header-menu7-h-bg-color": "",
            "header-menu7-h-color": "",
            "header-menu7-a-bg-color": "",
            "header-menu7-a-color": "",
            "header-menu7-bg-obj-responsive": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "header-menu7-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu7-h-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu7-h-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu7-a-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu7-a-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu7-menu-hover-animation": "",
            "header-menu7-submenu-container-animation": "",
            "section-hb-menu-7-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu7-menu-spacing": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu7-submenu-item-border": false,
            "header-menu7-submenu-item-b-size": "1",
            "header-menu7-submenu-item-b-color": "#eaeaea",
            "header-menu7-submenu-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu7-submenu-top-offset": "",
            "header-menu7-submenu-width": "",
            "header-menu7-submenu-border": {
                "top": 2,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "header-menu7-menu-stack-on-mobile": true,
            "header-menu7-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu7-font-weight": "inherit",
            "header-menu7-font-family": "inherit",
            "header-menu7-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-divider-7-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-divider-7-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button8-text": "Button",
            "header-button8-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "header-button8-font-family": "inherit",
            "header-button8-font-weight": "inherit",
            "header-button8-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-button8-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button8-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button8-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button8-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button8-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button8-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button8-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "header-button8-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button8-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button8-border-radius": "",
            "section-hb-button-8-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-hb-button-8-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "sticky-header-button8-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button8-text": "Button",
            "footer-button8-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "footer-button8-font-family": "inherit",
            "footer-button8-font-weight": "inherit",
            "footer-button8-text-transform": "",
            "footer-button8-line-height": "",
            "footer-button8-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button8-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button8-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button8-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button8-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button8-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button8-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "footer-button8-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button8-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button-8-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-button-8-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-button-8-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-html-8": "Insert HTML text here.",
            "header-html-8color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-8link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-8link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-hb-html-8": {
                "desktop": 15,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-weight-section-hb-html-8": "inherit",
            "font-family-section-hb-html-8": "inherit",
            "font-extras-section-hb-html-8": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-html-8-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-8": "Insert HTML text here.",
            "footer-html-8color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-8link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-8link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-fb-html-8": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-8-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "font-weight-section-fb-html-8": "inherit",
            "font-family-section-fb-html-8": "inherit",
            "font-extras-section-fb-html-8": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-fb-html-8-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-8-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-social-8-bg-space": "",
            "header-social-8-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "header-social-8-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-8-color": "",
            "header-social-8-h-color": "",
            "header-social-8-bg-color": "",
            "header-social-8-bg-h-color": "",
            "header-social-8-label-toggle": false,
            "header-social-8-color-type": "custom",
            "header-social-8-brand-hover-toggle": false,
            "font-size-section-hb-social-icons-8": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-icons-8": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "section-hb-social-icons-8-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-8-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-social-8-bg-space": "",
            "footer-social-8-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "footer-social-8-radius": "",
            "footer-social-8-color": "",
            "footer-social-8-h-color": "",
            "footer-social-8-bg-color": "",
            "footer-social-8-bg-h-color": "",
            "footer-social-8-label-toggle": false,
            "footer-social-8-color-type": "custom",
            "footer-social-8-brand-color": "",
            "footer-social-8-brand-label-color": "",
            "footer-social-8-brand-hover-toggle": false,
            "font-size-section-fb-social-icons-8": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-icons-8": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "footer-social-8-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-social-icons-8-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-8-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-8-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-8-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-8-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-8-font-family": "inherit",
            "header-widget-8-font-weight": "inherit",
            "header-widget-8-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-8-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-widget-8-content-font-family": "inherit",
            "header-widget-8-content-font-weight": "inherit",
            "header-widget-8-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-8-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "sidebar-widgets-header-widget-8-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-8-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-8-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-8-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-8-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-8-font-family": "inherit",
            "footer-widget-8-font-weight": "inherit",
            "footer-widget-8-text-transform": "",
            "footer-widget-8-line-height": "",
            "footer-widget-8-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-8-content-font-family": "inherit",
            "footer-widget-8-content-font-weight": "inherit",
            "footer-widget-8-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "footer-widget-8-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-alignment-8": {
                "desktop": "left",
                "tablet": "center",
                "mobile": "center"
            },
            "sidebar-widgets-footer-widget-8-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu8-bg-color": "",
            "header-menu8-color": "",
            "header-menu8-h-bg-color": "",
            "header-menu8-h-color": "",
            "header-menu8-a-bg-color": "",
            "header-menu8-a-color": "",
            "header-menu8-bg-obj-responsive": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "header-menu8-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu8-h-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu8-h-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu8-a-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu8-a-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu8-menu-hover-animation": "",
            "header-menu8-submenu-container-animation": "",
            "section-hb-menu-8-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu8-menu-spacing": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu8-submenu-item-border": false,
            "header-menu8-submenu-item-b-size": "1",
            "header-menu8-submenu-item-b-color": "#eaeaea",
            "header-menu8-submenu-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu8-submenu-top-offset": "",
            "header-menu8-submenu-width": "",
            "header-menu8-submenu-border": {
                "top": 2,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "header-menu8-menu-stack-on-mobile": true,
            "header-menu8-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu8-font-weight": "inherit",
            "header-menu8-font-family": "inherit",
            "header-menu8-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-divider-8-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-divider-8-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button9-text": "Button",
            "header-button9-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "header-button9-font-family": "inherit",
            "header-button9-font-weight": "inherit",
            "header-button9-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-button9-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button9-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button9-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button9-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button9-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button9-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button9-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "header-button9-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button9-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button9-border-radius": "",
            "section-hb-button-9-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-hb-button-9-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "sticky-header-button9-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button9-text": "Button",
            "footer-button9-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "footer-button9-font-family": "inherit",
            "footer-button9-font-weight": "inherit",
            "footer-button9-text-transform": "",
            "footer-button9-line-height": "",
            "footer-button9-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button9-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button9-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button9-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button9-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button9-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button9-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "footer-button9-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button9-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button-9-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-button-9-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-button-9-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-html-9": "Insert HTML text here.",
            "header-html-9color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-9link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-9link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-hb-html-9": {
                "desktop": 15,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-weight-section-hb-html-9": "inherit",
            "font-family-section-hb-html-9": "inherit",
            "font-extras-section-hb-html-9": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-html-9-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-9": "Insert HTML text here.",
            "footer-html-9color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-9link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-9link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-fb-html-9": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-9-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "font-weight-section-fb-html-9": "inherit",
            "font-family-section-fb-html-9": "inherit",
            "font-extras-section-fb-html-9": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-fb-html-9-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-9-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-social-9-bg-space": "",
            "header-social-9-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "header-social-9-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-9-color": "",
            "header-social-9-h-color": "",
            "header-social-9-bg-color": "",
            "header-social-9-bg-h-color": "",
            "header-social-9-label-toggle": false,
            "header-social-9-color-type": "custom",
            "header-social-9-brand-hover-toggle": false,
            "font-size-section-hb-social-icons-9": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-icons-9": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "section-hb-social-icons-9-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-9-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-social-9-bg-space": "",
            "footer-social-9-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "footer-social-9-radius": "",
            "footer-social-9-color": "",
            "footer-social-9-h-color": "",
            "footer-social-9-bg-color": "",
            "footer-social-9-bg-h-color": "",
            "footer-social-9-label-toggle": false,
            "footer-social-9-color-type": "custom",
            "footer-social-9-brand-color": "",
            "footer-social-9-brand-label-color": "",
            "footer-social-9-brand-hover-toggle": false,
            "font-size-section-fb-social-icons-9": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-icons-9": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "footer-social-9-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-social-icons-9-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-9-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-9-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-9-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-9-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-9-font-family": "inherit",
            "header-widget-9-font-weight": "inherit",
            "header-widget-9-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-9-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-widget-9-content-font-family": "inherit",
            "header-widget-9-content-font-weight": "inherit",
            "header-widget-9-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-9-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "sidebar-widgets-header-widget-9-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-9-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-9-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-9-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-9-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-9-font-family": "inherit",
            "footer-widget-9-font-weight": "inherit",
            "footer-widget-9-text-transform": "",
            "footer-widget-9-line-height": "",
            "footer-widget-9-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-9-content-font-family": "inherit",
            "footer-widget-9-content-font-weight": "inherit",
            "footer-widget-9-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "footer-widget-9-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-alignment-9": {
                "desktop": "left",
                "tablet": "center",
                "mobile": "center"
            },
            "sidebar-widgets-footer-widget-9-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu9-bg-color": "",
            "header-menu9-color": "",
            "header-menu9-h-bg-color": "",
            "header-menu9-h-color": "",
            "header-menu9-a-bg-color": "",
            "header-menu9-a-color": "",
            "header-menu9-bg-obj-responsive": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "header-menu9-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu9-h-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu9-h-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu9-a-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu9-a-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu9-menu-hover-animation": "",
            "header-menu9-submenu-container-animation": "",
            "section-hb-menu-9-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu9-menu-spacing": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu9-submenu-item-border": false,
            "header-menu9-submenu-item-b-size": "1",
            "header-menu9-submenu-item-b-color": "#eaeaea",
            "header-menu9-submenu-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu9-submenu-top-offset": "",
            "header-menu9-submenu-width": "",
            "header-menu9-submenu-border": {
                "top": 2,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "header-menu9-menu-stack-on-mobile": true,
            "header-menu9-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu9-font-weight": "inherit",
            "header-menu9-font-family": "inherit",
            "header-menu9-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-divider-9-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-divider-9-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button10-text": "Button",
            "header-button10-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "header-button10-font-family": "inherit",
            "header-button10-font-weight": "inherit",
            "header-button10-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-button10-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button10-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button10-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button10-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button10-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button10-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button10-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "header-button10-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-button10-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-button10-border-radius": "",
            "section-hb-button-10-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-hb-button-10-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "sticky-header-button10-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button10-text": "Button",
            "footer-button10-link-option": {
                "url": "https:\/\/www.wpastra.com",
                "new_tab": false,
                "link_rel": ""
            },
            "footer-button10-font-family": "inherit",
            "footer-button10-font-weight": "inherit",
            "footer-button10-text-transform": "",
            "footer-button10-line-height": "",
            "footer-button10-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button10-text-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button10-back-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button10-text-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button10-back-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button10-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button10-border-size": {
                "top": "",
                "right": "",
                "bottom": "",
                "left": ""
            },
            "footer-button10-border-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-button10-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-button-10-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-button-10-padding": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-button-10-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-html-10": "Insert HTML text here.",
            "header-html-10color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-10link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-html-10link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-hb-html-10": {
                "desktop": 15,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-weight-section-hb-html-10": "inherit",
            "font-family-section-hb-html-10": "inherit",
            "font-extras-section-hb-html-10": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-html-10-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-10": "Insert HTML text here.",
            "footer-html-10color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-10link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-html-10link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "font-size-section-fb-html-10": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-html-10-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "font-weight-section-fb-html-10": "inherit",
            "font-family-section-fb-html-10": "inherit",
            "font-extras-section-fb-html-10": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-fb-html-10-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-10-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-social-10-bg-space": "",
            "header-social-10-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "header-social-10-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-10-color": "",
            "header-social-10-h-color": "",
            "header-social-10-bg-color": "",
            "header-social-10-bg-h-color": "",
            "header-social-10-label-toggle": false,
            "header-social-10-color-type": "custom",
            "header-social-10-brand-hover-toggle": false,
            "font-size-section-hb-social-icons-10": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-social-icons-10": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "section-hb-social-icons-10-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-10-space": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-social-10-bg-space": "",
            "footer-social-10-size": {
                "desktop": 18,
                "tablet": "",
                "mobile": ""
            },
            "footer-social-10-radius": "",
            "footer-social-10-color": "",
            "footer-social-10-h-color": "",
            "footer-social-10-bg-color": "",
            "footer-social-10-bg-h-color": "",
            "footer-social-10-label-toggle": false,
            "footer-social-10-color-type": "custom",
            "footer-social-10-brand-color": "",
            "footer-social-10-brand-label-color": "",
            "footer-social-10-brand-hover-toggle": false,
            "font-size-section-fb-social-icons-10": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-social-icons-10": {
                "items": [{
                    "id": "facebook",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#557dbc",
                    "background": "transparent",
                    "icon": "facebook",
                    "label": "Facebook"
                }, {
                    "id": "twitter",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#7acdee",
                    "background": "transparent",
                    "icon": "twitter",
                    "label": "Twitter"
                }, {
                    "id": "instagram",
                    "enabled": true,
                    "source": "icon",
                    "url": "",
                    "color": "#8a3ab9",
                    "background": "transparent",
                    "icon": "instagram",
                    "label": "Instagram"
                }]
            },
            "footer-social-10-alignment": {
                "desktop": "center",
                "tablet": "center",
                "mobile": "center"
            },
            "section-fb-social-icons-10-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-10-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-10-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-10-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-10-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-widget-10-font-family": "inherit",
            "header-widget-10-font-weight": "inherit",
            "header-widget-10-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-10-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "header-widget-10-content-font-family": "inherit",
            "header-widget-10-content-font-weight": "inherit",
            "header-widget-10-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-widget-10-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "sidebar-widgets-header-widget-10-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-10-title-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-10-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-10-link-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-10-link-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-widget-10-font-family": "inherit",
            "footer-widget-10-font-weight": "inherit",
            "footer-widget-10-text-transform": "",
            "footer-widget-10-line-height": "",
            "footer-widget-10-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-10-content-font-family": "inherit",
            "footer-widget-10-content-font-weight": "inherit",
            "footer-widget-10-content-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "footer-widget-10-content-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-widget-alignment-10": {
                "desktop": "left",
                "tablet": "center",
                "mobile": "center"
            },
            "sidebar-widgets-footer-widget-10-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu10-bg-color": "",
            "header-menu10-color": "",
            "header-menu10-h-bg-color": "",
            "header-menu10-h-color": "",
            "header-menu10-a-bg-color": "",
            "header-menu10-a-color": "",
            "header-menu10-bg-obj-responsive": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "header-menu10-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu10-h-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu10-h-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu10-a-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu10-a-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-menu10-menu-hover-animation": "",
            "header-menu10-submenu-container-animation": "",
            "section-hb-menu-10-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu10-menu-spacing": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu10-submenu-item-border": false,
            "header-menu10-submenu-item-b-size": "1",
            "header-menu10-submenu-item-b-color": "#eaeaea",
            "header-menu10-submenu-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu10-submenu-top-offset": "",
            "header-menu10-submenu-width": "",
            "header-menu10-submenu-border": {
                "top": 2,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "header-menu10-menu-stack-on-mobile": true,
            "header-menu10-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-menu10-font-weight": "inherit",
            "header-menu10-font-family": "inherit",
            "header-menu10-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "section-hb-divider-10-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "section-fb-divider-10-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "sticky-header-on-devices": "desktop",
            "sticky-header-style": "none",
            "footer-desktop-items": {
                "above": {
                    "above_1": [],
                    "above_2": [],
                    "above_3": [],
                    "above_4": [],
                    "above_5": []
                },
                "primary": {
                    "primary_1": [],
                    "primary_2": [],
                    "primary_3": [],
                    "primary_4": [],
                    "primary_5": []
                },
                "below": {
                    "below_1": ["copyright"],
                    "below_2": ["menu"],
                    "below_3": [],
                    "below_4": [],
                    "below_5": []
                }
            },
            "hba-footer-height": 60,
            "hba-footer-column": 2,
            "hba-footer-layout": {
                "desktop": "2-equal",
                "tablet": "2-equal",
                "mobile": "full"
            },
            "hba-footer-bg-obj-responsive": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": "",
                "mobile": ""
            },
            "hbb-footer-bg-obj-responsive": {
                "desktop": {
                    "background-color": "var(--ast-global-color-6)",
                    "background-image": "",
                    "background-repeat": "no-repeat",
                    "background-position": "left top",
                    "background-size": "cover",
                    "background-attachment": "scroll",
                    "background-media": "",
                    "background-type": "color",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": "",
                "mobile": ""
            },
            "hb-footer-bg-obj-responsive": {
                "desktop": {
                    "background-color": "#f9f9f9",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "hbb-footer-top-border-color": "#7a7a7a",
            "hbb-footer-separator": 0,
            "section-header-builder-layout-margin": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "hbb-footer-height": 80,
            "hbb-footer-column": 2,
            "hbb-footer-layout": {
                "desktop": "2-equal",
                "tablet": "2-equal",
                "mobile": "full"
            },
            "hba-footer-layout-width": "content",
            "hb-footer-layout-width": "content",
            "hbb-footer-layout-width": "content",
            "hba-footer-vertical-alignment": "flex-start",
            "hb-footer-vertical-alignment": "flex-start",
            "hbb-footer-vertical-alignment": "center",
            "footer-bg-obj-responsive": {
                "desktop": {
                    "background-color": "var(--ast-global-color-2)",
                    "background-image": "",
                    "background-repeat": "no-repeat",
                    "background-position": "left top",
                    "background-size": "cover",
                    "background-attachment": "scroll",
                    "background-type": "color",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "hb-footer-column": "3",
            "hb-footer-separator": 1,
            "hb-footer-bottom-border-color": "#e6e6e6",
            "hb-footer-layout": {
                "desktop": "3-equal",
                "tablet": "3-equal",
                "mobile": "full"
            },
            "hb-footer-main-sep": 1,
            "hb-footer-main-sep-color": "#e6e6e6",
            "footer-copyright-editor": "Copyright \u00a9 [current_year] [site_title]",
            "footer-copyright-color": "var(--ast-global-color-5)",
            "line-height-section-footer-copyright": 2,
            "footer-copyright-alignment": {
                "desktop": "left",
                "tablet": "left",
                "mobile": "center"
            },
            "font-size-section-footer-copyright": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-weight-section-footer-copyright": "inherit",
            "font-family-section-footer-copyright": "inherit",
            "font-extras-section-footer-copyright": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "footer-menu-alignment": {
                "desktop": "flex-end",
                "tablet": "flex-end",
                "mobile": "center"
            },
            "section-below-footer-builder-padding": {
                "desktop": {
                    "top": "2.1",
                    "right": "1",
                    "bottom": "2.1",
                    "left": "1"
                },
                "tablet": {
                    "top": "2",
                    "right": "1",
                    "bottom": "2",
                    "left": "1"
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "em",
                "tablet-unit": "em",
                "mobile-unit": "px"
            },
            "header-search-icon-space": {
                "desktop": 18,
                "tablet": 18,
                "mobile": 18
            },
            "header-search-icon-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-search-width": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "live-search": false,
            "live-search-post-types": {
                "post": 1,
                "page": 1
            },
            "transparent-header-social-icons-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "transparent-header-social-icons-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "transparent-header-social-icons-bg-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "transparent-header-social-icons-bg-h-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "transparent-header-html-text-color": "",
            "transparent-header-html-link-color": "",
            "transparent-header-html-link-h-color": "",
            "transparent-header-widget-title-color": "",
            "transparent-header-widget-content-color": "",
            "transparent-header-widget-link-color": "",
            "transparent-header-widget-link-h-color": "",
            "transparent-header-button-text-color": "",
            "transparent-header-button-text-h-color": "",
            "transparent-header-button-bg-color": "",
            "transparent-header-button-bg-h-color": "",
            "off-canvas-layout": "side-panel",
            "off-canvas-slide": "right",
            "header-builder-menu-toggle-target": "icon",
            "header-offcanvas-content-alignment": "flex-start",
            "off-canvas-background": {
                "background-color": "#ffffff",
                "background-image": "",
                "background-repeat": "repeat",
                "background-position": "center center",
                "background-size": "auto",
                "background-attachment": "scroll",
                "overlay-type": "",
                "overlay-color": "",
                "overlay-gradient": ""
            },
            "off-canvas-close-color": "#3a3a3a",
            "mobile-header-type": "dropdown",
            "off-canvas-inner-spacing": "",
            "footer-menu-layout": {
                "desktop": "horizontal",
                "tablet": "horizontal",
                "mobile": "horizontal"
            },
            "footer-menu-bg-obj-responsive": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "footer-menu-color-responsive": {
                "desktop": "var(--ast-global-color-5)",
                "tablet": "",
                "mobile": ""
            },
            "footer-menu-h-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-menu-h-color-responsive": {
                "desktop": "var(--ast-global-color-4)",
                "tablet": "",
                "mobile": ""
            },
            "footer-menu-a-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "footer-menu-a-color-responsive": {
                "desktop": "var(--ast-global-color-4)",
                "tablet": "",
                "mobile": ""
            },
            "footer-menu-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "footer-menu-font-weight": "inherit",
            "footer-menu-font-family": "inherit",
            "footer-menu-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "footer-main-menu-spacing": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "0",
                    "right": "20",
                    "bottom": "0",
                    "left": "20"
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-trigger-icon": "menu",
            "mobile-header-toggle-icon-size": 20,
            "mobile-header-toggle-btn-border-size": {
                "top": 1,
                "right": 1,
                "bottom": 1,
                "left": 1
            },
            "mobile-header-toggle-border-radius": "",
            "mobile-header-toggle-border-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "mobile-header-label-font-family": "inherit",
            "mobile-header-label-font-weight": "inherit",
            "mobile-header-label-text-transform": "",
            "mobile-header-label-line-height": "",
            "mobile-header-label-font-size": "",
            "global-color-palette": {
                "labels": ["Theme Color", "Link Hover Color", "Heading Color", "Text Color", "Background Color", "Extra Color 1", "Extra Color 2", "Extra Color 3", "Extra Color 4"],
                "palette": ["#c2a09e", "#444444", "#000000", "#383f42", "#fcf5f2", "#ffffff", "#000000", "#000000", "#BFD1FF"],
                "flag": false
            },
            "header-logo-color": "",
            "header-mobile-menu-bg-color": "",
            "header-mobile-menu-color": "",
            "header-mobile-menu-h-bg-color": "",
            "header-mobile-menu-h-color": "",
            "header-mobile-menu-a-bg-color": "",
            "header-mobile-menu-a-color": "",
            "header-mobile-menu-bg-obj-responsive": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "header-mobile-menu-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-mobile-menu-h-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-mobile-menu-a-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-mobile-menu-h-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-mobile-menu-a-bg-color-responsive": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-mobile-menu-submenu-container-animation": "fade",
            "header-mobile-menu-submenu-item-border": false,
            "header-mobile-menu-submenu-item-b-size": "1",
            "header-mobile-menu-submenu-item-b-color": "#eaeaea",
            "header-mobile-menu-submenu-border": {
                "top": 2,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "header-mobile-menu-font-size": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "font-extras-header-mobile-menu": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "woo-header-cart-click-action": "default",
            "woo-slide-in-cart-width": {
                "desktop": 35,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "%",
                "tablet-unit": "%",
                "mobile-unit": "%"
            },
            "woo-header-cart-icon-total-label-position": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-woo-cart-icon-size": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "woo-header-cart-icon": "default",
            "woo-header-cart-icon-style": "outline",
            "woo-desktop-cart-flyout-direction": "right",
            "header-woo-cart-icon-color": "",
            "transparent-header-woo-cart-icon-color": "",
            "header-woo-cart-icon-hover-color": "",
            "woo-header-cart-border-width": 2,
            "woo-header-cart-icon-radius-fields": {
                "desktop": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "woo-header-cart-badge-display": true,
            "woo-header-cart-label-display": "Cart\/{cart_total_currency_symbol}",
            "header-woo-cart-text-color": "",
            "header-woo-cart-link-color": "",
            "header-woo-cart-background-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-woo-cart-background-hover-color": {
                "desktop": "",
                "tablet": "",
                "mobile": ""
            },
            "header-woo-cart-separator-color": "",
            "header-woo-cart-link-hover-color": "",
            "header-woo-cart-btn-text-color": "",
            "header-woo-cart-btn-background-color": "",
            "header-woo-cart-btn-text-hover-color": "",
            "header-woo-cart-btn-bg-hover-color": "",
            "header-woo-checkout-btn-text-color": "",
            "header-woo-checkout-btn-background-color": "",
            "header-woo-checkout-btn-text-hover-color": "",
            "header-woo-checkout-btn-bg-hover-color": "",
            "edd-header-cart-icon-style": "outline",
            "edd-header-cart-icon-color": "",
            "edd-header-cart-icon-radius": 3,
            "transparent-header-edd-cart-icon-color": "",
            "edd-header-cart-total-display": true,
            "edd-header-cart-title-display": true,
            "header-edd-cart-text-color": "",
            "header-edd-cart-link-color": "",
            "header-edd-cart-background-color": "",
            "header-edd-cart-separator-color": "",
            "header-edd-checkout-btn-text-color": "",
            "header-edd-checkout-btn-background-color": "",
            "header-edd-checkout-btn-text-hover-color": "",
            "header-edd-checkout-btn-bg-hover-color": "",
            "header-account-type": "default",
            "header-account-login-style": "icon",
            "header-account-action-type": "link",
            "header-account-link-type": "default",
            "header-account-logout-style": "icon",
            "header-account-logged-out-text": "Log In",
            "header-account-logged-in-text": "My Account",
            "header-account-logout-action": "link",
            "header-account-image-width": {
                "desktop": "40",
                "tablet": "",
                "mobile": ""
            },
            "header-account-icon-size": {
                "desktop": 18,
                "tablet": 18,
                "mobile": 18
            },
            "header-account-icon-color": "",
            "header-account-login-link": {
                "url": "",
                "new_tab": false,
                "link_rel": ""
            },
            "header-account-logout-link": {
                "url": "https:\/\/websitedemos.net\/fashion-lifestyle-02\/wp-login.php",
                "new_tab": false,
                "link_rel": ""
            },
            "font-size-section-header-account": {
                "desktop": "",
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-account-type-text-color": "",
            "header-account-woo-menu": false,
            "cloned-component-track": {
                "header-button": 2,
                "footer-button": 2,
                "header-html": 2,
                "footer-html": 2,
                "header-menu": 2,
                "header-widget": 4,
                "footer-widget": 4,
                "header-social-icons": 1,
                "footer-social-icons": 1,
                "header-divider": 0,
                "footer-divider": 0,
                "removed-items": []
            },
            "astra-addon-auto-version": "3.0.0",
            "theme-auto-version": "4.6.3",
            "site-content-layout": "boxed-container",
            "headings-font-variant": "",
            "display-site-title": false,
            "button-radius": 0,
            "blog-single-meta": ["comments", "category"],
            "header-main-rt-trans-section-button-back-color": "rgba(96,96,96,0)",
            "header-main-rt-trans-section-button-border-size": {
                "top": "1",
                "right": "1",
                "bottom": "1",
                "left": "1"
            },
            "header-main-rt-trans-section-button-border-color": "#dbdbdb",
            "header-main-rt-trans-section-button-padding": {
                "desktop": {
                    "top": "5",
                    "right": "23",
                    "bottom": "5",
                    "left": "23"
                },
                "tablet": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "mobile": {
                    "top": "",
                    "right": "",
                    "bottom": "",
                    "left": ""
                },
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "header-main-rt-section-button-border-color": "#afafaf",
            "header-main-rt-section-button-border-h-color": "#000000",
            "header-main-rt-trans-section-button-text-h-color": "#ffffff",
            "header-main-rt-trans-section-button-border-h-color": "#ffffff",
            "header-main-rt-trans-section-button-text-color": "#dbdbdb",
            "button-v-padding": 13,
            "button-h-padding": 33,
            "header-main-rt-section-button-border-radius": "",
            "header-main-rt-trans-section-button-back-h-color": "",
            "header-main-rt-trans-section-button-border-radius": "",
            "header-button-style-link": "",
            "primary-submenu-border-divider": "",
            "header-main-menu-label-divider": "",
            "mobile-header-toggle-btn-style-color": "",
            "mobile-header-toggle-btn-border-radius": "",
            "different-retina-logo": false,
            "different-mobile-logo": false,
            "ast-site-logo-divider": "",
            "display-site-tagline": 0,
            "ast-site-icon-divider": "",
            "ast-styling-section-blog-width": "",
            "blog-single-post-structure": ["single-image", "single-title-meta"],
            "ast-styling-section-single-blog-layouts": "",
            "single-page-sidebar-layout-divider": "",
            "divider-section-sidebar-width": "",
            "site-sidebar-width-description": "",
            "site-content-layout-divider": "",
            "single-page-content-layout": "default",
            "single-post-content-layout": "default",
            "archive-post-content-layout": "default",
            "site-layout-outside-bg-obj": {
                "background-color": "",
                "background-image": "",
                "background-repeat": "repeat",
                "background-position": "center center",
                "background-size": "auto",
                "background-attachment": "scroll"
            },
            "section-ast-small-footer-layout-info": "",
            "section-ast-small-footer-typography": "",
            "footer-adv-border-style": "",
            "divider-outside-bg-color": "",
            "divider-footer-image": "",
            "footer-adv-background-divider": "",
            "divider-section-archive-typo-archive-title": "",
            "divider-section-archive-summary-box-typo": "",
            "font-size-archive-summary-title": {
                "desktop": 40,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "divider-base-typo": "",
            "body-line-height": "",
            "divider-headings-typo": "",
            "headings-text-transform": "capitalize",
            "divider-section-h1": "",
            "divider-section-h2": "",
            "divider-section-h3": "",
            "divider-section-h4": "",
            "divider-section-h5": "",
            "divider-section-h6": "",
            "divider-section-header-typo-title": "",
            "divider-section-header-typo-tagline": "",
            "divider-section-header-single-title": "",
            "font-size-entry-title": {
                "desktop": 30,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "divider-transparent-menu-responsive": "",
            "divider-transparent-sub-menu-responsive": "",
            "divider-transparent-content-section": "",
            "transparent-header-disable-index": "",
            "transparent-header-disable-page": "",
            "transparent-header-disable-posts": "",
            "divider-section-transparent-display": "",
            "divider-section-transparent-styling": "",
            "header-main-rt-section-search-box-type": "slide-search",
            "above-header-section-1-search-box-type": "slide-search",
            "above-header-section-2-search-box-type": "slide-search",
            "below-header-section-1-search-box-type": "slide-search",
            "below-header-section-2-search-box-type": "slide-search",
            "_astra_pb_compatibility_completed": true,
            "submenu-open-below-header": false,
            "is_addon_queue_running": true,
            "line-height-h3": "1.5",
            "line-height-h2": "1.3",
            "theme-button-border-group-border-color": "var(--ast-global-color-0)",
            "theme-button-border-group-border-h-color": "var(--ast-global-color-1)",
            "is_astra_addon_queue_running": false,
            "ele-default-color-typo-setting-comp": false,
            "gtn-full-wide-image-grp-css": false,
            "gtn-full-wide-grp-cover-css": false,
            "footer-adv-bg-obj-responsive": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll"
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll"
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll"
                }
            },
            "guntenberg-core-blocks-comp-css": false,
            "guntenberg-media-text-block-padding-css": false,
            "is-header-footer-builder": true,
            "footer-copyright-link-color": "",
            "footer-copyright-link-h-color": "",
            "hba-footer-separator": "",
            "hba-footer-top-border-color": "#7a7a7a",
            "header-menu1-submenu-b-color": "",
            "mobile-header-menu-label": "",
            "mobile-header-toggle-btn-color": "var(--ast-global-color-4)",
            "mobile-header-toggle-border-color": "",
            "v3-option-migration": true,
            "mobile-header-toggle-btn-bg-color": "var(--ast-global-color-0)",
            "sidebar-widgets-header-widget-1-hide-tablet": true,
            "sidebar-widgets-header-widget-1-hide-mobile": true,
            "guntenberg-button-pattern-compat-css": false,
            "header-mobile-popup-items": true,
            "can-support-widget-and-editor-fonts": false,
            "can-remove-logo-max-width-css": false,
            "transparent-header-default-border": false,
            "btn-default-padding-updated": false,
            "support-footer-widget-right-margin": false,
            "remove-elementor-toc-margin-css": false,
            "remove-widget-design-options": false,
            "support-global-color-format": false,
            "improve-gb-editor-ui": false,
            "apply-content-background-fullwidth-layouts": false,
            "customizer-default-layout-update": false,
            "single-product-breadcrumb-disable": false,
            "woocommerce-single-product-fallback-default": true,
            "astra-old-global-sidebar-default": false,
            "dynamic-blog-layouts": false,
            "theme-dynamic-customizer-support": true,
            "ast-dynamic-single-astra-sites-structure": ["ast-dynamic-single-astra-sites-image", "ast-dynamic-single-astra-sites-title"],
            "ast-dynamic-single-astra-sites-metadata": ["comments"],
            "ast-archive-astra-sites-title": true,
            "ast-single-astra-sites-title": true,
            "ast-dynamic-archive-astra-sites-banner-image-type": "none",
            "ast-dynamic-archive-astra-sites-banner-custom-bg": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "ast-dynamic-archive-astra-sites-title-font-family": "",
            "ast-dynamic-archive-astra-sites-title-font-size": {
                "desktop": 40,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "ast-dynamic-archive-astra-sites-title-font-weight": "",
            "ast-dynamic-archive-astra-sites-title-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "ast-dynamic-archive-astra-sites-banner-title-color": "",
            "ast-dynamic-archive-astra-sites-banner-text-color": "",
            "ast-dynamic-single-astra-sites-banner-title-color": "",
            "ast-dynamic-single-astra-sites-title-font-family": "",
            "ast-dynamic-single-astra-sites-title-font-size": {
                "desktop": 30,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "ast-dynamic-single-astra-sites-title-font-weight": "",
            "ast-dynamic-single-astra-sites-title-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "ast-dynamic-single-site-pages-structure": ["ast-dynamic-single-site-pages-image", "ast-dynamic-single-site-pages-title"],
            "ast-dynamic-single-site-pages-metadata": ["comments"],
            "ast-archive-site-pages-title": true,
            "ast-single-site-pages-title": true,
            "ast-dynamic-archive-site-pages-banner-image-type": "none",
            "ast-dynamic-archive-site-pages-banner-custom-bg": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "ast-dynamic-archive-site-pages-title-font-family": "",
            "ast-dynamic-archive-site-pages-title-font-size": {
                "desktop": 40,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "ast-dynamic-archive-site-pages-title-font-weight": "",
            "ast-dynamic-archive-site-pages-title-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "ast-dynamic-archive-site-pages-banner-title-color": "",
            "ast-dynamic-archive-site-pages-banner-text-color": "",
            "ast-dynamic-single-site-pages-banner-title-color": "",
            "ast-dynamic-single-site-pages-title-font-family": "",
            "ast-dynamic-single-site-pages-title-font-size": {
                "desktop": 30,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "ast-dynamic-single-site-pages-title-font-weight": "",
            "ast-dynamic-single-site-pages-title-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "ast-dynamic-single-astra-blocks-structure": ["ast-dynamic-single-astra-blocks-image", "ast-dynamic-single-astra-blocks-title"],
            "ast-dynamic-single-astra-blocks-metadata": ["comments"],
            "ast-archive-astra-blocks-title": true,
            "ast-single-astra-blocks-title": true,
            "ast-dynamic-archive-astra-blocks-banner-image-type": "none",
            "ast-dynamic-archive-astra-blocks-banner-custom-bg": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "ast-dynamic-archive-astra-blocks-title-font-family": "",
            "ast-dynamic-archive-astra-blocks-title-font-size": {
                "desktop": 40,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "ast-dynamic-archive-astra-blocks-title-font-weight": "",
            "ast-dynamic-archive-astra-blocks-title-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "ast-dynamic-archive-astra-blocks-banner-title-color": "",
            "ast-dynamic-archive-astra-blocks-banner-text-color": "",
            "ast-dynamic-single-astra-blocks-banner-title-color": "",
            "ast-dynamic-single-astra-blocks-title-font-family": "",
            "ast-dynamic-single-astra-blocks-title-font-size": {
                "desktop": 30,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "ast-dynamic-single-astra-blocks-title-font-weight": "",
            "ast-dynamic-single-astra-blocks-title-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "ast-dynamic-single-post-structure": ["ast-dynamic-single-post-image", "ast-dynamic-single-post-title", "ast-dynamic-single-post-meta"],
            "ast-dynamic-single-post-taxonomy": "category",
            "ast-archive-post-title": true,
            "ast-single-post-title": true,
            "ast-dynamic-archive-post-banner-image-type": "none",
            "ast-dynamic-archive-post-banner-custom-bg": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "ast-dynamic-archive-post-title-font-family": "",
            "ast-dynamic-archive-post-title-font-size": {
                "desktop": 40,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "ast-dynamic-archive-post-title-font-weight": "",
            "ast-dynamic-archive-post-title-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "ast-dynamic-archive-post-banner-title-color": "",
            "ast-dynamic-archive-post-banner-text-color": "",
            "ast-dynamic-single-post-banner-title-color": "",
            "ast-dynamic-single-post-title-font-family": "",
            "ast-dynamic-single-post-title-font-size": {
                "desktop": 30,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "ast-dynamic-single-post-title-font-weight": "",
            "ast-dynamic-single-post-title-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "ast-dynamic-single-page-structure": ["ast-dynamic-single-page-title"],
            "ast-dynamic-single-page-metadata": ["comments"],
            "ast-archive-page-title": true,
            "ast-single-page-title": true,
            "ast-dynamic-archive-page-banner-image-type": "none",
            "ast-dynamic-archive-page-banner-custom-bg": {
                "desktop": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "tablet": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                },
                "mobile": {
                    "background-color": "",
                    "background-image": "",
                    "background-repeat": "repeat",
                    "background-position": "center center",
                    "background-size": "auto",
                    "background-attachment": "scroll",
                    "background-type": "",
                    "background-media": "",
                    "overlay-type": "",
                    "overlay-color": "",
                    "overlay-gradient": ""
                }
            },
            "ast-dynamic-archive-page-title-font-family": "",
            "ast-dynamic-archive-page-title-font-size": {
                "desktop": 40,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "ast-dynamic-archive-page-title-font-weight": "",
            "ast-dynamic-archive-page-title-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "ast-dynamic-archive-page-banner-title-color": "",
            "ast-dynamic-archive-page-banner-text-color": "",
            "ast-dynamic-single-page-banner-title-color": "",
            "ast-dynamic-single-page-title-font-family": "",
            "ast-dynamic-single-page-title-font-size": {
                "desktop": 30,
                "tablet": "",
                "mobile": "",
                "desktop-unit": "px",
                "tablet-unit": "px",
                "mobile-unit": "px"
            },
            "ast-dynamic-single-page-title-font-weight": "",
            "ast-dynamic-single-page-title-font-extras": {
                "line-height": "",
                "line-height-unit": "em",
                "letter-spacing": "",
                "letter-spacing-unit": "px",
                "text-transform": "",
                "text-decoration": ""
            },
            "archive-download-content-layout": "default",
            "archive-download-sidebar-layout": "no-sidebar",
            "single-download-content-layout": "default",
            "single-download-sidebar-layout": "default",
            "update-default-color-typo": false,
            "v4-block-editor-compat": false,
            "v4-1-0-update-migration": true,
            "single-product-payment-list": {
                "items": [{
                    "id": "item-100",
                    "enabled": true,
                    "source": "icon",
                    "icon": "cc-visa",
                    "image": "",
                    "label": "Visa"
                }, {
                    "id": "item-101",
                    "enabled": true,
                    "source": "icon",
                    "icon": "cc-mastercard",
                    "image": "",
                    "label": "Mastercard"
                }, {
                    "id": "item-102",
                    "enabled": true,
                    "source": "icon",
                    "icon": "cc-amex",
                    "image": "",
                    "label": "Amex"
                }, {
                    "id": "item-103",
                    "enabled": true,
                    "source": "icon",
                    "icon": "cc-discover",
                    "image": "",
                    "label": "Discover"
                }]
            },
            "v4-1-4-update-migration": true,
            "list-block-vertical-spacing": false,
            "add-hr-styling-css": false,
            "astra-site-svg-logo-equal-height": false,
            "archive-post-content-style": "default",
            "fullwidth_sidebar_support": false,
            "v4-2-0-update-migration": true,
            "v4-2-2-core-form-btns-styling": false,
            "v4-4-0-backward-option": false,
            "secondary-theme-button-border-group-border-color": "var(--ast-global-color-0)",
            "secondary-theme-button-border-group-border-h-color": "var(--ast-global-color-1)",
            "ast-dynamic-single-templates-article-featured-image-position-layout-1": "none",
            "ast-dynamic-single-templates-article-featured-image-position-layout-2": "none",
            "ast-dynamic-single-templates-article-featured-image-ratio-type": "default",
            "ast-dynamic-single-astra-sites-article-featured-image-position-layout-1": "none",
            "ast-dynamic-single-astra-sites-article-featured-image-position-layout-2": "none",
            "ast-dynamic-single-astra-sites-article-featured-image-ratio-type": "default",
            "ast-dynamic-single-site-pages-article-featured-image-position-layout-1": "none",
            "ast-dynamic-single-site-pages-article-featured-image-position-layout-2": "none",
            "ast-dynamic-single-site-pages-article-featured-image-ratio-type": "default",
            "ast-dynamic-single-astra-blocks-article-featured-image-position-layout-1": "none",
            "ast-dynamic-single-astra-blocks-article-featured-image-position-layout-2": "none",
            "ast-dynamic-single-astra-blocks-article-featured-image-ratio-type": "default",
            "ast-dynamic-single-post-article-featured-image-position-layout-1": "none",
            "ast-dynamic-single-post-article-featured-image-position-layout-2": "none",
            "ast-dynamic-single-post-article-featured-image-ratio-type": "default",
            "ast-dynamic-single-page-article-featured-image-position-layout-1": "none",
            "ast-dynamic-single-page-article-featured-image-position-layout-2": "none",
            "ast-dynamic-single-page-article-featured-image-ratio-type": "default",
            "v4-5-0-backward-option": false,
            "scndry-btn-default-padding": false,
            "is_theme_queue_running": false,
            "v4-6-0-backward-option": false,
            "ast-font-style-update": false,
            "v4-6-2-backward-option": false
        },
        "custom-css": ""
    }
};
var elementorFrontendConfig = {
    "environmentMode": {
        "edit": false,
        "wpPreview": false,
        "isScriptDebug": false
    },
    "i18n": {
        "shareOnFacebook": "Share on Facebook",
        "shareOnTwitter": "Share on Twitter",
        "pinIt": "Pin it",
        "download": "Download",
        "downloadImage": "Download image",
        "fullscreen": "Fullscreen",
        "zoom": "Zoom",
        "share": "Share",
        "playVideo": "Play Video",
        "previous": "Previous",
        "next": "Next",
        "close": "Close",
        "a11yCarouselWrapperAriaLabel": "Carousel | Horizontal scrolling: Arrow Left & Right",
        "a11yCarouselPrevSlideMessage": "Previous slide",
        "a11yCarouselNextSlideMessage": "Next slide",
        "a11yCarouselFirstSlideMessage": "This is the first slide",
        "a11yCarouselLastSlideMessage": "This is the last slide",
        "a11yCarouselPaginationBulletMessage": "Go to slide"
    },
    "is_rtl": false,
    "breakpoints": {
        "xs": 0,
        "sm": 480,
        "md": 768,
        "lg": 1025,
        "xl": 1440,
        "xxl": 1600
    },
    "responsive": {
        "breakpoints": {
            "mobile": {
                "label": "Mobile Portrait",
                "value": 767,
                "default_value": 767,
                "direction": "max",
                "is_enabled": true
            },
            "mobile_extra": {
                "label": "Mobile Landscape",
                "value": 880,
                "default_value": 880,
                "direction": "max",
                "is_enabled": false
            },
            "tablet": {
                "label": "Tablet Portrait",
                "value": 1024,
                "default_value": 1024,
                "direction": "max",
                "is_enabled": true
            },
            "tablet_extra": {
                "label": "Tablet Landscape",
                "value": 1200,
                "default_value": 1200,
                "direction": "max",
                "is_enabled": false
            },
            "laptop": {
                "label": "Laptop",
                "value": 1366,
                "default_value": 1366,
                "direction": "max",
                "is_enabled": false
            },
            "widescreen": {
                "label": "Widescreen",
                "value": 2400,
                "default_value": 2400,
                "direction": "min",
                "is_enabled": false
            }
        }
    },
    "version": "3.24.2",
    "is_static": false,
    "experimentalFeatures": {
        "additional_custom_breakpoints": true,
        "container": true,
        "container_grid": true,
        "e_swiper_latest": true,
        "e_nested_atomic_repeaters": true,
        "e_onboarding": true,
        "home_screen": true,
        "ai-layout": true,
        "landing-pages": true,
        "link-in-bio": true,
        "floating-buttons": true
    },
    "urls": {
        "assets": "https:\/\/websitedemos.net\/fashion-lifestyle-02\/wp-content\/plugins\/elementor\/assets\/",
        "ajaxurl": "https:\/\/websitedemos.net\/fashion-lifestyle-02\/wp-admin\/admin-ajax.php"
    },
    "nonces": {
        "floatingButtonsClickTracking": "4f3c3b890e"
    },
    "swiperClass": "swiper",
    "settings": {
        "page": [],
        "editorPreferences": []
    },
    "kit": {
        "global_image_lightbox": "yes",
        "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
        "lightbox_enable_counter": "yes",
        "lightbox_enable_fullscreen": "yes",
        "lightbox_enable_zoom": "yes",
        "lightbox_enable_share": "yes",
        "lightbox_title_src": "title",
        "lightbox_description_src": "description"
    },
    "post": {
        "id": 11,
        "title": "Contact%20-%20Fashion%20Lifestyle%20Blog",
        "excerpt": "\n\t\t\t\t\t\t",
        "featuredImage": false
    }
};

/* <![CDATA[ */
var wpforms_settings = {
        "val_required": "This field is required.",
        "val_email": "Please enter a valid email address.",
        "val_email_suggestion": "Did you mean {suggestion}?",
        "val_email_suggestion_title": "Click to accept this suggestion.",
        "val_email_restricted": "This email address is not allowed.",
        "val_number": "Please enter a valid number.",
        "val_number_positive": "Please enter a valid positive number.",
        "val_minimum_price": "Amount entered is less than the required minimum.",
        "val_confirm": "Field values do not match.",
        "val_checklimit": "You have exceeded the number of allowed selections: {#}.",
        "val_limit_characters": "{count} of {limit} max characters.",
        "val_limit_words": "{count} of {limit} max words.",
        "val_recaptcha_fail_msg": "Google reCAPTCHA verification failed, please try again later.",
        "val_turnstile_fail_msg": "Cloudflare Turnstile verification failed, please try again later.",
        "val_inputmask_incomplete": "Please fill out the field in required format.",
        "uuid_cookie": "",
        "locale": "en",
        "country": "",
        "country_list_label": "Country list",
        "wpforms_plugin_url": "https:\/\/websitedemos.net\/fashion-lifestyle-02\/wp-content\/plugins\/wpforms-lite\/",
        "gdpr": "",
        "ajaxurl": "https:\/\/websitedemos.net\/fashion-lifestyle-02\/wp-admin\/admin-ajax.php",
        "mailcheck_enabled": "1",
        "mailcheck_domains": [],
        "mailcheck_toplevel_domains": ["dev"],
        "is_ssl": "1",
        "currency_code": "USD",
        "currency_thousands": ",",
        "currency_decimals": "2",
        "currency_decimal": ".",
        "currency_symbol": "$",
        "currency_symbol_pos": "left",
        "val_requiredpayment": "Payment is required.",
        "val_creditcard": "Please enter a valid credit card number.",
        "error_updating_token": "Error updating token. Please try again or contact support if the issue persists.",
        "network_error": "Network error or server is unreachable. Check your connection or try again later.",
        "token_cache_lifetime": "86400",
        "hn_data": []
    }
    /* ]]> */

/(trident|msie)/i.test(navigator.userAgent) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", function() {
    var t, e = location.hash.substring(1);
    /^[A-z0-9_-]+$/.test(e) && (t = document.getElementById(e)) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus())
}, !1);

var wpformsElementorVars = {
    "captcha_provider": "recaptcha",
    "recaptcha_type": "v2"
};

var _wpUtilSettings = {
    "ajax": {
        "url": "\/fashion-lifestyle-02\/wp-admin\/admin-ajax.php"
    }
};