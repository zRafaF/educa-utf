if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>n(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-9b4d2a02"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"018e6468416c07b829d5404f5cf84652"},{url:"/_next/static/chunks/1101.0b069922f63fc284.js",revision:"0b069922f63fc284"},{url:"/_next/static/chunks/1313-7d8349bbe14e556b.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/1338-ecf82150e94dfa7d.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/1749-0441ae3864b9bb91.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/1774-7e43ba785f180aa5.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/2468-759a5e8580ff0603.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/2909.49802ce973540930.js",revision:"49802ce973540930"},{url:"/_next/static/chunks/292-c400c5d80d54474e.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/2980.d4f0414784a12ccf.js",revision:"d4f0414784a12ccf"},{url:"/_next/static/chunks/3044-cc7cf7bebf92e688.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/3051-3c1d5ca8726acb60.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/3194-31cba61647a60690.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/3203.3c9409ed4efc7adc.js",revision:"3c9409ed4efc7adc"},{url:"/_next/static/chunks/3285-d81d81d88b64fe52.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/3461-3376613b70050212.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/3657-b1040f3e5a25a1a6.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/3741-9388037bd1265b5a.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/3902-2363f31b3115880b.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/398-9092ccf0a3e033bb.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/4304.19ae6ee5496716c1.js",revision:"19ae6ee5496716c1"},{url:"/_next/static/chunks/4389-d511551f52f35c51.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/4590-6d5422bbc59d2b01.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/4678-36e63fc705e2e4e5.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/4721-bf632cbf9897c86d.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/4938-1f1f48ea24789bef.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/5133-7fef8f071c8765d1.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/5545.7f6056d06accd045.js",revision:"7f6056d06accd045"},{url:"/_next/static/chunks/5572-5514f1ce3d28c78a.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/5727-dd5f57ff5409a49e.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/5826-ef4da3b39e78ebf0.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/6010-408e148ddb6aeb5b.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/602dbae6-e237f536062dfbfb.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/6093-173b6ffe1fc76881.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/6163-67daeb13f697678a.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/6205.478678588ee2d551.js",revision:"478678588ee2d551"},{url:"/_next/static/chunks/654-b7c13f8f81cff8b4.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/6737-bebd8d77daab92d5.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/6901-17ea04d9f4ebd810.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/7240-b3ba72f1427b2770.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/7650.9cb6ae8026c20827.js",revision:"9cb6ae8026c20827"},{url:"/_next/static/chunks/7666-23d2f4af525b50ba.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/7715-8a152cc7b91fa956.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/7827-5c0953048afcb667.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/7929-55374f1585e26e2d.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/8128-479893d720a5422b.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/8857-52fae889d66bcfe8.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/8939-7a9a65d85fbaa17c.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/8947-64bd0c9bacfef048.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/8b30ef62-53aed13ca228fba5.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/9029-1d65d260fe76e474.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/9163-e3206f2d33e17c62.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/9442-5ee14587be5ba423.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/9704-ea9c699a24302fa6.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/9969-3d6969880d216083.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/article/%5B...slug%5D/page-bca6bf1edab25186.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/attributions/page-97c2e7067648c739.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/browse/articles/loading-b36bcb8570f9f925.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/browse/articles/page-cf2f05a27bc72215.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/browse/chapters/loading-a1105fb295f74c85.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/browse/chapters/page-a651572d177289f2.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/browse/layout-c7bb4659289950e6.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/browse/loading-cde1e71228b2c94e.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/browse/page-9e8a2133dced103b.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/%5BarticleId%5D/page-4ab88ab36196405f.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/edit/page-a42d7e7c33d1689f.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/error-2510301e092766b5.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/layout-2171c197b710b025.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/page-7d4fda840da5e353.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/edit-article/%5BarticleId%5D/page-e08a435559676450.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/layout-134643b3759db009.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/login-required/page-513a6c0033878f9a.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/new/loading-71b8b7f5298745d9.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/new/page-3f2eb2392cb2fb69.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/page-fb6dca845622e798.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/privacy/page-30fdc0318b7712cf.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/profile/%5Busername%5D/error-bf3fb69aa4cc0663.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/profile/%5Busername%5D/page-316d239ef7b5c196.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/random/loading-932fbc75dfcf8caf.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/random/page-86c903f18e5b3c62.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(app)/terms/page-ddf52cf2a16508fa.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(authentication)/layout-96f1c06eecb1a34e.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(authentication)/login/page-36b7ef7b5c0f3dec.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/(authentication)/register/page-95d7f8d0f71e5347.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/_not-found-67b6f5c8cad04d52.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/error-6b8cbc30c7cf6e95.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/app/layout-dd9088765eaad690.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/e6b75fd3-3a1a894d3ada9fa2.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/fd9d1056-31838fff4373994f.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/main-app-5d0a1ad64798bfd5.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/main-e4950855e57c27d0.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/pages/_app-31397adcb4d2b835.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/pages/_error-b225d4412fb76f89.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f3dbbc2722037003.js",revision:"xJ5D57lZh7QLBZXNnpVJo"},{url:"/_next/static/css/1332aa92f4de6f96.css",revision:"1332aa92f4de6f96"},{url:"/_next/static/css/5dca946160d93e6d.css",revision:"5dca946160d93e6d"},{url:"/_next/static/css/75ddc901a7ebce0c.css",revision:"75ddc901a7ebce0c"},{url:"/_next/static/css/bc636276b55e8a69.css",revision:"bc636276b55e8a69"},{url:"/_next/static/media/logo-utf-sm-inverted.6bf52b4e.png",revision:"60b867d86458501d93d6b42855f7a3a7"},{url:"/_next/static/media/logo-utf-sm.0704de23.png",revision:"bd8522d6cb548044d3445baffedced92"},{url:"/_next/static/media/utf-bg.c24164be.jpg",revision:"017a8a240f44866980b426df847d59ff"},{url:"/_next/static/media/vecteezy_new-file-empty-state-single-isolated-icon-with-flat-style_11537831.f2550479.svg",revision:"8f7568b02228a6cc3fc04ce2176f0764"},{url:"/_next/static/xJ5D57lZh7QLBZXNnpVJo/_buildManifest.js",revision:"a27b2b7607326fa26b144e657011ec52"},{url:"/_next/static/xJ5D57lZh7QLBZXNnpVJo/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/google9365f4fd3245c688.html",revision:"9b6da80ea580c24d1cf362a5eb8f8c70"},{url:"/icon-192x192.png",revision:"91e7778bd8569ebede555ca01b778dc9"},{url:"/icon-256x256.png",revision:"2241ea378612ecec7db96e436ef76db6"},{url:"/icon-384x384.png",revision:"96d8d48f7dc8bcd5509f321213dc5996"},{url:"/icon-512x512.png",revision:"22b14f5539d9330017957ef09cc01e12"},{url:"/loaderio-26a619f17d42d0c2cf8fdac721627b3d.txt",revision:"370521bd6baad68f246769efee25abe5"},{url:"/manifest.json",revision:"5f81c03126a92133d09cc4ba08c658d1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
