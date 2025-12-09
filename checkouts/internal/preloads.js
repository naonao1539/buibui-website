
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/polyfills-legacy.FcdAucpL.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/app-legacy.CbTcYSW4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/en-legacy.CgdeSJSz.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.DRV9rZUQ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/DeliveryMethodSelectorSection-legacy.D3wA2LqU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/useUiComponentsColorContrast-legacy.C-xAfUjB.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.B2EopXGO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.timwFJ53.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.Css7wfsg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.D6LHWCfC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.Bo6D39ev.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.Cd7bDJpO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/PayButtonSection-legacy._loVFpCH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch-legacy.B5YtmxX7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger-legacy.DhtxFE3K.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/index-legacy.CzjcOgxx.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0759/3741/5384/files/LOGO_x320.png?v=1754100082"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
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
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  