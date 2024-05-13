function encrypt(message) {
    var tempVar;
    var encodedMessage = unescape(encodeURIComponent(JSON.stringify(message)));
    var permutationTable = [];
    var permutationIndex = 0;
    var encryptedText = '';
    
    for (var i = 0; i < 256; i++) {
        permutationTable[i] = i;
    }
    
    for (var j = 0; j < 256; j++) {
        permutationIndex = (permutationIndex + permutationTable[j] + "FZMÃ›SÃª/Â·V«xÞhí¢³4<`ô2ª,µ¦YÃ»".charCodeAt(j % "FZMÃ›SÃª/Â·V«xÞhí¢³4<`ô2ª,µ¦YÃ»".length)) % 256;
        tempVar = permutationTable[j];
        permutationTable[j] = permutationTable[permutationIndex];
        permutationTable[permutationIndex] = tempVar;
    }
    
    var keystreamIndex = 0;
    permutationIndex = 0;
    
    for (var k = 0; k < encodedMessage.length; k++) {
        permutationIndex = (permutationIndex + permutationTable[keystreamIndex = (keystreamIndex + 1) % 256]) % 256;
        tempVar = permutationTable[keystreamIndex];
        permutationTable[keystreamIndex] = permutationTable[permutationIndex];
        permutationTable[permutationIndex] = tempVar;
        encryptedText += String.fromCharCode(encodedMessage.charCodeAt(k) ^ permutationTable[(permutationTable[keystreamIndex] + permutationTable[permutationIndex]) % 256]);
    }
    
    return btoa(encryptedText);
}

function decrypt(encryptedMessage) {
    var tempVar;
    var decodedMessage = atob(encryptedMessage);
    var permutationTable = [];
    var permutationIndex = 0;
    var decryptedText = '';
    
    for (var i = 0; i < 256; i++) {
        permutationTable[i] = i;
    }
    
    for (var j = 0; j < 256; j++) {
        permutationIndex = (permutationIndex + permutationTable[j] + "FZMÃ›SÃª/Â·V«xÞhí¢³4<`ô2ª,µ¦YÃ»".charCodeAt(j % "FZMÃ›SÃª/Â·V«xÞhí¢³4<`ô2ª,µ¦YÃ»".length)) % 256;
        tempVar = permutationTable[j];
        permutationTable[j] = permutationTable[permutationIndex];
        permutationTable[permutationIndex] = tempVar;
    }
    
    var keystreamIndex = 0;
    permutationIndex = 0;
    
    for (var k = 0; k < decodedMessage.length; k++) {
        permutationIndex = (permutationIndex + permutationTable[keystreamIndex = (keystreamIndex + 1) % 256]) % 256;
        tempVar = permutationTable[keystreamIndex];
        permutationTable[keystreamIndex] = permutationTable[permutationIndex];
        permutationTable[permutationIndex] = tempVar;
        decryptedText += String.fromCharCode(decodedMessage.charCodeAt(k) ^ permutationTable[(permutationTable[keystreamIndex] + permutationTable[permutationIndex]) % 256]);
    }
    
    return decodeURIComponent(escape(decryptedText));
}



var payload = {
    "fingerprint_version": 42,
    "timestamp": "2024-05-13T12:23:49.249Z",
    "math_rand": "147f55ed96845",
    "webasm": true,
    "document": {
        "title": "Zaloguj się na konto Epic Games | Epic Games",
        "referrer": "https://store.epicgames.com/"
    },
    "navigator": {
        "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "platform": "Win32",
        "language": "pl-PL",
        "languages": [
            "pl-PL"
        ],
        "hardware_concurrency": 6,
        "device_memory": 8,
        "product": "Gecko",
        "product_sub": "20030107",
        "vendor": "Google Inc.",
        "vendor_sub": "",
        "webdriver": false,
        "max_touch_points": 0,
        "cookie_enabled": true,
        "property_list": [
            "vendorSub",
            "productSub",
            "vendor",
            "maxTouchPoints",
            "scheduling",
            "userActivation",
            "doNotTrack",
            "geolocation",
            "plugins",
            "mimeTypes",
            "pdfViewerEnabled",
            "webkitTemporaryStorage",
            "webkitPersistentStorage",
            "brave",
            "globalPrivacyControl",
            "windowControlsOverlay",
            "hardwareConcurrency",
            "cookieEnabled",
            "appCodeName",
            "appName",
            "appVersion",
            "platform",
            "product",
            "userAgent",
            "language",
            "languages",
            "onLine",
            "webdriver",
            "getGamepads",
            "javaEnabled",
            "sendBeacon",
            "vibrate",
            "bluetooth",
            "storageBuckets",
            "clipboard",
            "credentials",
            "keyboard",
            "managed",
            "mediaDevices",
            "storage",
            "serviceWorker",
            "virtualKeyboard",
            "wakeLock",
            "deviceMemory",
            "userAgentData",
            "ink",
            "mediaCapabilities",
            "hid",
            "locks",
            "gpu",
            "mediaSession",
            "permissions",
            "presentation",
            "usb",
            "xr",
            "canShare",
            "share",
            "clearAppBadge",
            "getBattery",
            "getUserMedia",
            "requestMIDIAccess",
            "requestMediaKeySystemAccess",
            "setAppBadge",
            "webkitGetUserMedia",
            "getInstalledRelatedApps",
            "registerProtocolHandler",
            "unregisterProtocolHandler"
        ]
    },
    "web_gl": {
        "canvas_fingerprint": {
            "length": 32490,
            "num_colors": 4526,
            "md5": "97c31d3d23a0c58093309dafca8674cb",
            "tlsh": "43E2E16E720E3E1F0920F925BD24CA9D6EB1D3EECC782F5002F92575A7479E15C27046"
        },
        "parameters": {
            "renderer": "ANGLE (NVIDIA, NVIDIA GeForce RTX 4070 SUPER (0x00002783) Direct3D11 vs_5_0 ps_5_0, D3D11)",
            "vendor": "Google Inc. (NVIDIA)"
        }
    },
    "window": {
        "location": {
            "origin": "https://www.epicgames.com",
            "pathname": "/id/login/epic",
            "href": "https://www.epicgames.com/id/login/epic?lang=pl&redirect_uri=https%3A%2F%2Fstore.epicgames.com%2Fpl%2F&client_id=875a3b57d3a640a6b7f9b4e883463ab4"
        },
        "history": {
            "length": 3
        },
        "screen": {
            "avail_height": 1314,
            "avail_width": 813,
            "avail_top": 6,
            "height": 1314,
            "width": 813,
            "color_depth": 24
        },
        "performance": {
            "memory": {
                "js_heap_size_limit": 4294705152,
                "total_js_heap_size": 25434077,
                "used_js_heap_size": 20873697
            },
            "resources": [
                "https://static-assets-prod.unrealengine.com/account-portal/static/static/css/main.c19873d8.css",
                "https://static-assets-prod.unrealengine.com/account-portal/static/static/js/main.58adfe8d.js",
                "https://tracking.epicgames.com/tracking.js",
                "https://static-assets-prod.unrealengine.com/account-portal/static/static/css/polyfills.fdeb4d23.chunk.css",
                "https://static-assets-prod.unrealengine.com/account-portal/static/static/js/7947.50df8dbf.chunk.js",
                "https://static-assets-prod.unrealengine.com/account-portal/static/static/js/polyfills.7de817c8.chunk.js",
                "https://www.epicgames.com/id/api/reputation",
                "https://www.epicgames.com/id/api/i18n?ns=epic-consent-dialog&lang=pl",
                "https://www.epicgames.com/id/api/i18n?ns=messages&lang=pl",
                "https://www.epicgames.com/id/api/i18n?ns=epic-consent-dialog&lang=pl",
                "https://www.epicgames.com/id/api/i18n?ns=messages&lang=pl",
                "https://sentry.io/api/1333512/envelope/?sentry_key=7a13b97c16f4455f92376d5c1e27f102&sentry_version=7&sentry_client=sentry.javascript.react%2F7.106.1",
                "https://www.epicgames.com/id/api/location",
                "https://tracking.epicgames.com/track.png?referringUrl=https%3A%2F%2Fstore.epicgames.com%2F&location=https%3A%2F%2Fwww.epicgames.com%2Fid%2Flogin%2Fepic%3Flang%3Dpl%26redirect_uri%3Dhttps%253A%252F%252Fstore.epicgames.com%252Fpl%252F%26client_id%3D875a3b57d3a640a6b7f9b4e883463ab4&now=1715601351329&eventType=pageView",
                "https://www.epicgames.com/id/api/analytics",
                "https://www.epicgames.com/id/api/analytics",
                "https://static-assets-prod.unrealengine.com/account-portal/static/manifest.json",
                "https://static-assets-prod.unrealengine.com/account-portal/static/epic-favicon-96x96.png",
                "https://www.epicgames.com/id/api/analytics",
                "https://www.epicgames.com/id/api/authenticate",
                "https://www.epicgames.com/id/api/client/875a3b57d3a640a6b7f9b4e883463ab4?redirectUrl=https%3A%2F%2Fstore.epicgames.com%2Fpl%2F",
                "https://www.epicgames.com/id/api/analytics",
                "https://www.epicgames.com/id/api/analytics",
                "https://static-assets-prod.unrealengine.com/account-portal/static/static/js/2893.1b7db46f.chunk.js",
                "https://static-assets-prod.unrealengine.com/account-portal/static/static/js/3670.0040c04c.chunk.js",
                "https://talon-website-prod.ecosec.on.epicgames.com/talon_sdk.js",
                "https://talon-service-prod.ecosec.on.epicgames.com/v1/init",
                "https://js.hcaptcha.com/1/api.js?onload=hCaptchaLoaded&render=explicit",
                "https://newassets.hcaptcha.com/captcha/v1/7329d5a/static/i18n/pl.json",
                "https://newassets.hcaptcha.com/captcha/v1/7329d5a/static/hcaptcha.html#frame=challenge&id=061vjsfmp40x&host=www.epicgames.com&sentry=true&reportapi=https%3A%2F%2Faccounts.hcaptcha.com&recaptchacompat=true&custom=false&hl=pl&tplinks=on&pstissuer=https%3A%2F%2Fpst-issuer.hcaptcha.com&sitekey=91e4137f-95af-4bc9-97af-cdcedce21c8c&theme=dark&size=invisible&challenge-container=h_captcha_challenge_login_prod&origin=https%3A%2F%2Fwww.epicgames.com",
                "https://sentry.io/api/1333512/envelope/?sentry_key=7a13b97c16f4455f92376d5c1e27f102&sentry_version=7&sentry_client=sentry.javascript.react%2F7.106.1",
                "https://talon-service-prod.ecosec.on.epicgames.com/v1/phaser/batch",
                "https://sentry.io/api/1333512/envelope/?sentry_key=7a13b97c16f4455f92376d5c1e27f102&sentry_version=7&sentry_client=sentry.javascript.react%2F7.106.1",
                "https://sentry.io/api/1333512/envelope/?sentry_key=7a13b97c16f4455f92376d5c1e27f102&sentry_version=7&sentry_client=sentry.javascript.react%2F7.106.1",
                "https://sentry.io/api/1333512/envelope/?sentry_key=7a13b97c16f4455f92376d5c1e27f102&sentry_version=7&sentry_client=sentry.javascript.react%2F7.106.1",
                "https://sentry.io/api/1333512/envelope/?sentry_key=7a13b97c16f4455f92376d5c1e27f102&sentry_version=7&sentry_client=sentry.javascript.react%2F7.106.1",
                "https://sentry.io/api/1333512/envelope/?sentry_key=7a13b97c16f4455f92376d5c1e27f102&sentry_version=7&sentry_client=sentry.javascript.react%2F7.106.1",
                "https://talon-service-prod.ecosec.on.epicgames.com/v1/phaser/batch",
                "https://talon-service-prod.ecosec.on.epicgames.com/v1/init/execute"
            ]
        },
        "device_pixel_ratio": 1,
        "dark_mode": true,
        "chrome": true,
        "property_list": [
            "0",
            "1",
            "2",
            "window",
            "self",
            "document",
            "name",
            "location",
            "customElements",
            "history",
            "navigation",
            "locationbar",
            "menubar",
            "personalbar",
            "scrollbars",
            "statusbar",
            "toolbar",
            "status",
            "closed",
            "frames",
            "length",
            "top",
            "opener",
            "parent",
            "frameElement",
            "navigator",
            "origin",
            "external",
            "screen",
            "innerWidth",
            "innerHeight",
            "scrollX",
            "pageXOffset",
            "scrollY",
            "pageYOffset",
            "visualViewport",
            "screenX",
            "screenY",
            "outerWidth",
            "outerHeight",
            "devicePixelRatio",
            "clientInformation",
            "screenLeft",
            "screenTop",
            "styleMedia",
            "onsearch",
            "isSecureContext",
            "trustedTypes",
            "performance",
            "onappinstalled",
            "onbeforeinstallprompt",
            "crypto",
            "indexedDB",
            "sessionStorage",
            "localStorage",
            "onbeforexrselect",
            "onabort",
            "onbeforeinput",
            "onbeforematch",
            "onbeforetoggle",
            "onblur",
            "oncancel",
            "oncanplay",
            "oncanplaythrough",
            "onchange",
            "onclick",
            "onclose",
            "oncontentvisibilityautostatechange",
            "oncontextlost",
            "oncontextmenu",
            "oncontextrestored",
            "oncuechange",
            "ondblclick",
            "ondrag",
            "ondragend",
            "ondragenter",
            "ondragleave",
            "ondragover",
            "ondragstart",
            "ondrop",
            "ondurationchange",
            "onemptied",
            "onended",
            "onerror",
            "onfocus",
            "onformdata",
            "oninput",
            "oninvalid",
            "onkeydown",
            "onkeypress",
            "onkeyup",
            "onload",
            "onloadeddata",
            "onloadedmetadata",
            "onloadstart",
            "onmousedown",
            "onmouseenter",
            "onmouseleave",
            "onmousemove",
            "onmouseout",
            "onmouseover",
            "onmouseup",
            "onmousewheel",
            "onpause",
            "onplay",
            "onplaying",
            "onprogress",
            "onratechange",
            "onreset",
            "onresize",
            "onscroll",
            "onsecuritypolicyviolation",
            "onseeked",
            "onseeking",
            "onselect",
            "onslotchange",
            "onstalled",
            "onsubmit",
            "onsuspend",
            "ontimeupdate",
            "ontoggle",
            "onvolumechange",
            "onwaiting",
            "onwebkitanimationend",
            "onwebkitanimationiteration",
            "onwebkitanimationstart",
            "onwebkittransitionend",
            "onwheel",
            "onauxclick",
            "ongotpointercapture",
            "onlostpointercapture",
            "onpointerdown",
            "onpointermove",
            "onpointerrawupdate",
            "onpointerup",
            "onpointercancel",
            "onpointerover",
            "onpointerout",
            "onpointerenter",
            "onpointerleave",
            "onselectstart",
            "onselectionchange",
            "onanimationend",
            "onanimationiteration",
            "onanimationstart",
            "ontransitionrun",
            "ontransitionstart",
            "ontransitionend",
            "ontransitioncancel",
            "onafterprint",
            "onbeforeprint",
            "onbeforeunload",
            "onhashchange",
            "onlanguagechange",
            "onmessage",
            "onmessageerror",
            "onoffline",
            "ononline",
            "onpagehide",
            "onpageshow",
            "onpopstate",
            "onrejectionhandled",
            "onstorage",
            "onunhandledrejection",
            "onunload",
            "crossOriginIsolated",
            "scheduler",
            "alert",
            "atob",
            "blur",
            "btoa",
            "cancelAnimationFrame",
            "cancelIdleCallback",
            "captureEvents",
            "clearInterval",
            "clearTimeout",
            "close",
            "confirm",
            "createImageBitmap",
            "fetch",
            "find",
            "focus",
            "getComputedStyle",
            "getSelection",
            "matchMedia",
            "moveBy",
            "moveTo",
            "open",
            "postMessage",
            "print",
            "prompt",
            "queueMicrotask",
            "releaseEvents",
            "reportError",
            "requestAnimationFrame",
            "requestIdleCallback",
            "resizeBy",
            "resizeTo",
            "scroll",
            "scrollBy",
            "scrollTo",
            "setInterval",
            "setTimeout",
            "stop",
            "structuredClone",
            "webkitCancelAnimationFrame",
            "webkitRequestAnimationFrame",
            "chrome",
            "caches",
            "cookieStore",
            "ondevicemotion",
            "ondeviceorientation",
            "ondeviceorientationabsolute",
            "launchQueue",
            "documentPictureInPicture",
            "getScreenDetails",
            "queryLocalFonts",
            "originAgentCluster",
            "onpageswap",
            "onpagereveal",
            "credentialless",
            "speechSynthesis",
            "onscrollend",
            "webkitRequestFileSystem",
            "webkitResolveLocalFileSystemURL",
            "ethereum",
            "solana",
            "AppInit",
            "_epicEnableCookieGuard",
            "__tracking_base",
            "_sentryDebugIds",
            "webpackChunkaccountportal_node_website",
            "__axiosInstance",
            "regeneratorRuntime",
            "__core-js_shared__",
            "core",
            "__axiosInstanceCached",
            "IMask",
            "__store",
            "__SENTRY__",
            "_epicTrackingCookieDomainId",
            "_epicTrackingCountryCode",
            "_epicTracking",
            "clearImmediate",
            "setImmediate",
            "recaptchaOptions",
            "a0_0x1ea3",
            "a0_0x3a11",
            "talon",
            "hCaptchaLoaded",
            "hCaptchaReady",
            "Raven",
            "hcaptcha",
            "grecaptcha",
            "k",
            "i",
            "TEMPORARY",
            "PERSISTENT",
            "addEventListener",
            "dispatchEvent",
            "removeEventListener"
        ]
    },
    "date": {
        "timezone_offset": -120,
        "format": {
            "calendar": "gregory",
            "day": "numeric",
            "locale": "pl",
            "month": "2-digit",
            "numbering_system": "latn",
            "time_zone": "Europe/Warsaw",
            "year": "numeric"
        }
    },
    "runtime": {
        "sd_recurse": false
    },
    "fpjs": {
        "version": "3.4.2",
        "visitor_id": "999f84fed7c89323908111d787854d06",
        "confidence": 0.6,
        "hashes": {
            "fonts": "4c61172d7cfa8b454f036b9d43e2b9ed",
            "plugins": "7bbf20e1498b1aa72c466b5c23a57077",
            "audio": "dc10d9e193645da6152e742023620860",
            "canvas": "9b6ae6b9cb639555fc62775495640ac4",
            "screen": "00a88049bdb65bf8cde702937ab887ec"
        }
    },
    "motion": {
        "mousemove": [
            {
                "t": 6294,
                "x": 450,
                "y": 19
            },
            {
                "t": 6346,
                "x": 485,
                "y": 109
            },
            {
                "t": 6395,
                "x": 588,
                "y": 422
            },
            {
                "t": 6445,
                "x": 623,
                "y": 565
            },
            {
                "t": 6457,
                "x": 622,
                "y": 569
            },
            {
                "t": 6553,
                "x": 611,
                "y": 582
            },
            {
                "t": 6603,
                "x": 572,
                "y": 612
            },
            {
                "t": 6652,
                "x": 468,
                "y": 637
            },
            {
                "t": 6685,
                "x": 413,
                "y": 628
            },
            {
                "t": 6939,
                "x": 412,
                "y": 628
            },
            {
                "t": 6987,
                "x": 395,
                "y": 636
            },
            {
                "t": 7037,
                "x": 378,
                "y": 658
            },
            {
                "t": 7087,
                "x": 371,
                "y": 671
            },
            {
                "t": 7100,
                "x": 370,
                "y": 672
            },
            {
                "t": 8814,
                "x": 371,
                "y": 672
            },
            {
                "t": 8863,
                "x": 419,
                "y": 675
            },
            {
                "t": 8914,
                "x": 628,
                "y": 707
            },
            {
                "t": 8937,
                "x": 809,
                "y": 730
            },
            {
                "t": 1564641,
                "x": 667,
                "y": 557
            },
            {
                "t": 1564641,
                "x": 667,
                "y": 557
            },
            {
                "t": 1620345,
                "x": 779,
                "y": 909
            },
            {
                "t": 1620345,
                "x": 779,
                "y": 909
            },
            {
                "t": 1620565,
                "x": 780,
                "y": 909
            },
            {
                "t": 1620597,
                "x": 808,
                "y": 904
            },
            {
                "t": 1630236,
                "x": 808,
                "y": 692
            },
            {
                "t": 1630286,
                "x": 437,
                "y": 668
            },
            {
                "t": 1630331,
                "x": 305,
                "y": 689
            },
            {
                "t": 1630386,
                "x": 342,
                "y": 698
            },
            {
                "t": 1630415,
                "x": 363,
                "y": 702
            },
            {
                "t": 1630446,
                "x": 363,
                "y": 701
            },
            {
                "t": 1630515,
                "x": 363,
                "y": 700
            },
            {
                "t": 1630597,
                "x": 363,
                "y": 698
            },
            {
                "t": 1630639,
                "x": 363,
                "y": 695
            },
            {
                "t": 1630744,
                "x": 363,
                "y": 694
            },
            {
                "t": 1630763,
                "x": 363,
                "y": 691
            },
            {
                "t": 1631122,
                "x": 364,
                "y": 691
            },
            {
                "t": 1631169,
                "x": 367,
                "y": 693
            },
            {
                "t": 1631222,
                "x": 375,
                "y": 721
            },
            {
                "t": 1631271,
                "x": 385,
                "y": 753
            },
            {
                "t": 1631324,
                "x": 392,
                "y": 783
            },
            {
                "t": 1631374,
                "x": 396,
                "y": 798
            },
            {
                "t": 1631421,
                "x": 399,
                "y": 812
            },
            {
                "t": 1631454,
                "x": 400,
                "y": 816
            },
            {
                "t": 1678085,
                "x": 455,
                "y": 22
            },
            {
                "t": 1678134,
                "x": 588,
                "y": 153
            },
            {
                "t": 1678166,
                "x": 808,
                "y": 343
            }
        ],
        "mousedown": [
            {
                "t": 1630676,
                "x": 363,
                "y": 695
            },
            {
                "t": 1631515,
                "x": 400,
                "y": 816
            }
        ],
        "mouseup": [
            {
                "t": 1630749,
                "x": 363,
                "y": 694
            },
            {
                "t": 1631583,
                "x": 400,
                "y": 816
            },
            {
                "t": 1633733,
                "x": 450,
                "y": 24
            },
            {
                "t": 1639228,
                "x": 448,
                "y": 21
            },
            {
                "t": 1641020,
                "x": 448,
                "y": 21
            },
            {
                "t": 1642561,
                "x": 448,
                "y": 21
            },
            {
                "t": 1644639,
                "x": 448,
                "y": 21
            },
            {
                "t": 1651516,
                "x": 453,
                "y": 17
            },
            {
                "t": 1652228,
                "x": 453,
                "y": 17
            },
            {
                "t": 1652810,
                "x": 453,
                "y": 17
            },
            {
                "t": 1653942,
                "x": 453,
                "y": 17
            },
            {
                "t": 1655959,
                "x": 453,
                "y": 17
            },
            {
                "t": 1673462,
                "x": 454,
                "y": 22
            },
            {
                "t": 1674189,
                "x": 454,
                "y": 22
            },
            {
                "t": 1675149,
                "x": 454,
                "y": 22
            },
            {
                "t": 1676512,
                "x": 454,
                "y": 22
            },
            {
                "t": 1677430,
                "x": 454,
                "y": 22
            },
            {
                "t": 5714389,
                "x": 451,
                "y": 25
            },
            {
                "t": 5717074,
                "x": 451,
                "y": 25
            },
            {
                "t": 5718222,
                "x": 451,
                "y": 25
            },
            {
                "t": 5718708,
                "x": 451,
                "y": 25
            },
            {
                "t": 5719311,
                "x": 451,
                "y": 25
            },
            {
                "t": 5719877,
                "x": 451,
                "y": 25
            },
            {
                "t": 5720357,
                "x": 451,
                "y": 25
            },
            {
                "t": 5720873,
                "x": 451,
                "y": 25
            },
            {
                "t": 5721513,
                "x": 451,
                "y": 25
            },
            {
                "t": 5722684,
                "x": 451,
                "y": 25
            }
        ],
        "wheel": [],
        "touchstart": [],
        "touchend": [],
        "touchmove": [],
        "scroll": [],
        "keydown": [
            {
                "t": 1631079
            },
            {
                "t": 1631197
            },
            {
                "t": 1631319
            }
        ],
        "keyup": [
            {
                "t": 1631131
            },
            {
                "t": 1631263
            },
            {
                "t": 1631402
            }
        ],
        "resize": [],
        "paste": []
    },
    "sdk": {
        "caller_stack_trace": "Error\n    at https://talon-website-prod.ecosec.on.epicgames.com/talon_sdk.js:1:362161\n    at Object._0x3d662c [as execute] (https://talon-website-prod.ecosec.on.epicgames.com/talon_sdk.js:1:362320)\n    at Oe.updateIfNeeded (https://static-assets-prod.unrealengine.com/account-portal/static/static/js/main.58adfe8d.js:4:502057)\n    at Ie.updateIfNeeded (https://static-assets-prod.unrealengine.com/account-portal/static/static/js/main.58adfe8d.js:4:503991)\n    at submit (https://static-assets-prod.unrealengine.com/account-portal/static/static/js/main.58adfe8d.js:4:343373)\n    at Object.Me (https://static-assets-prod.unrealengine.com/account-portal/static/static/js/main.58adfe8d.js:4:1773057)\n    at Be (https://static-assets-prod.unrealengine.com/account-portal/static/static/js/main.58adfe8d.js:4:1773211)\n    at https://static-assets-prod.unrealengine.com/account-portal/static/static/js/main.58adfe8d.js:4:1793111\n    at jr (https://static-assets-prod.unrealengine.com/account-portal/static/static/js/main.58adfe8d.js:4:1793205)\n    at Ur (https://static-assets-prod.unrealengine.com/account-portal/static/static/js/main.58adfe8d.js:4:1793620)"
    },
    "s": 657291179,
    "solve_token": true
}

let a = encrypt(payload);
console.log(a);