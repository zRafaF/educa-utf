if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),l={module:{uri:i},exports:c,require:r};s[i]=Promise.all(t.map((e=>l[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"9822aa144b380484df981f35d1a8fe89"},{url:"/_next/static/1SZakQEQSh2NKlK9-KVIQ/_buildManifest.js",revision:"f73e8c19daa8474d229371b8da40f744"},{url:"/_next/static/1SZakQEQSh2NKlK9-KVIQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1188-15ebeb3d8b357f10.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/1469-af1858342a0737c8.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/152-bbd044026f03fe89.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/2074-525c96e3a7ce0912.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/2558-a499e78fcfad13ae.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/2784-7852e8f07a35bb5f.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/3218-2e40a2c31a5d00c8.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/3222-659824094741588c.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/3667.e588aa80e58691d3.js",revision:"e588aa80e58691d3"},{url:"/_next/static/chunks/3680-69af0a6e0a5ba6d0.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/4100-c2c0d7fd51974b85.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/4223-99a6a52ae7d7b092.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/4320-6791a3fba4d5c8bb.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/4385-a4b5ebf1a5202554.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/4398-87e81163fd043160.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/4782-0fe3d59814a05bc2.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/5162-e5b282b6e3c29273.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/5373-41c5f65a2539ba19.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/5875-fe1598cefb0fff08.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/596-ebcd43d1d784aff9.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/6172-f541afa9a6f467e0.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/6200-0847996c9932a788.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/6685-11741ce999bdfce1.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/7788-c76b8e7ad40d645d.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/8536-87bf906070e890b6.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/8748-81945825be92ae5d.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/8785-8a01d2528d137be5.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/8818-4b5c75740c504b2f.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/8862-3926bcd8dc6bd3a3.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/8874-6ade7e9fc1c16127.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/9073-514e0bfb064e7f63.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/9163-e3206f2d33e17c62.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/9650-c69608bc6ebff4d0.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/967.ec9e0864e07beb64.js",revision:"ec9e0864e07beb64"},{url:"/_next/static/chunks/9758-4d21a5f9ed3d81c7.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/article/%5B...slug%5D/page-7eb4b1631ba2e45f.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/browse/articles/page-1013e18c9556e1cc.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/browse/chapters/page-7cf28f35e169a58c.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/browse/layout-5e757fb9f4dcce33.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/browse/page-4b0e48d2d78d5e42.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/%5BarticleId%5D/page-5326ead910d3b7b8.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/error-f5c8b3b22facc6a0.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/layout-c6fc32c001e5cbfb.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/chapter/%5BchapterId%5D/page-38a80d9dfaba6e45.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/edit/%5BarticleId%5D/page-8c210e4d4ad60f67.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/layout-8c8d3788524adfea.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/new-article/loading-4142669b2c4b1997.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/new-article/page-cf260f15ebe74aa9.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/new-chapter/page-6b46af4aa7193b5f.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/page-4e8656966f33d9ce.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/privacy/page-5ddf7e9f9f60512f.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/profile/%5Busername%5D/error-9d60ce20b0a74687.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/profile/%5Busername%5D/page-086ddacc2012d59a.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/random/loading-0b676fdb6a00f3c6.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/random/page-fc54d3e952a54546.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(app)/terms/page-c561c2a4cf614d80.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(authentication)/layout-66216b11f33d57da.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(authentication)/login/page-b7aa73ebacdfd9c5.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/(authentication)/register/page-8ae307c596ba1299.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/error-6d9daf3195f664f8.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/app/layout-baa66045c0e51ef7.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/fd9d1056-1c8903b410d6fef0.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/main-971473ddccd7ba29.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/main-app-1586656564d869fd.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/pages/_app-8af45f6c5c3cbc8e.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/pages/_error-6aec2ce618e2a362.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-343c1672033291e4.js",revision:"1SZakQEQSh2NKlK9-KVIQ"},{url:"/_next/static/css/338fb1607f8402e7.css",revision:"338fb1607f8402e7"},{url:"/_next/static/css/5dca946160d93e6d.css",revision:"5dca946160d93e6d"},{url:"/_next/static/css/88eca491ed67cb95.css",revision:"88eca491ed67cb95"},{url:"/_next/static/css/bc636276b55e8a69.css",revision:"bc636276b55e8a69"},{url:"/_next/static/media/contemplative-reptile.8e5e4017.jpg",revision:"34dfeed20d644ba572bd2d8d31bc8d77"},{url:"/_next/static/media/logo-utf-sm-inverted.6bf52b4e.png",revision:"60b867d86458501d93d6b42855f7a3a7"},{url:"/_next/static/media/logo-utf-sm.0704de23.png",revision:"bd8522d6cb548044d3445baffedced92"},{url:"/_next/static/media/utf-bg.c24164be.jpg",revision:"017a8a240f44866980b426df847d59ff"},{url:"/google9365f4fd3245c688.html",revision:"9b6da80ea580c24d1cf362a5eb8f8c70"},{url:"/icon-192x192.png",revision:"91e7778bd8569ebede555ca01b778dc9"},{url:"/icon-256x256.png",revision:"2241ea378612ecec7db96e436ef76db6"},{url:"/icon-384x384.png",revision:"96d8d48f7dc8bcd5509f321213dc5996"},{url:"/icon-512x512.png",revision:"22b14f5539d9330017957ef09cc01e12"},{url:"/loaderio-26a619f17d42d0c2cf8fdac721627b3d.txt",revision:"370521bd6baad68f246769efee25abe5"},{url:"/manifest.json",revision:"04b2a97a9d28c61889da8e736afbcdb2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
