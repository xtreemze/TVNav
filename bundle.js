var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,e){a!=Array.prototype&&a!=Object.prototype&&(a[c]=e.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return $jscomp.SYMBOL_PREFIX+(a||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var c=0;return $jscomp.iteratorPrototype((function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}))};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();var c=a[Symbol.iterator];return c?c.call(a):$jscomp.arrayIterator(a)};
$jscomp.polyfill=function(a,c,e,f){if(c){e=$jscomp.global;a=a.split(".");for(f=0;f<a.length-1;f++){var b=a[f];b in e||(e[b]={});e=e[b]}a=a[a.length-1];f=e[a];c=c(f);c!=f&&null!=c&&$jscomp.defineProperty(e,a,{configurable:!0,writable:!0,value:c})}};$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill("Promise",(function(a){function c(){this.batch_=null}function e(d){return d instanceof b?d:new b(function(b,a){b(d)})}if(a&&!$jscomp.FORCE_POLYFILL_PROMISE)return a;c.prototype.asyncExecute=function(d){null==this.batch_&&(this.batch_=[],this.asyncExecuteBatch_());this.batch_.push(d);return this};c.prototype.asyncExecuteBatch_=function(){var d=this;this.asyncExecuteFunction((function(){d.executeBatch_()}))};var f=$jscomp.global.setTimeout;c.prototype.asyncExecuteFunction=function(d){f(d,
0)};c.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var d=this.batch_;this.batch_=[];for(var b=0;b<d.length;++b){var a=d[b];delete d[b];try{a()}catch(h){this.asyncThrow_(h)}}}this.batch_=null};c.prototype.asyncThrow_=function(d){this.asyncExecuteFunction((function(){throw d;}))};var b=function(d){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var b=this.createResolveAndReject_();try{d(b.resolve,b.reject)}catch(g){b.reject(g)}};b.prototype.createResolveAndReject_=
function(){function b(b){return function(d){g||(g=!0,b.call(a,d))}}var a=this,g=!1;return{resolve:b(this.resolveTo_),reject:b(this.reject_)}};b.prototype.resolveTo_=function(d){if(d===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(d instanceof b)this.settleSameAsPromise_(d);else{a:switch(typeof d){case "object":var a=null!=d;break a;case "function":a=!0;break a;default:a=!1}a?this.resolveToNonPromiseObj_(d):this.fulfill_(d)}};b.prototype.resolveToNonPromiseObj_=function(b){var d=
void 0;try{d=b.then}catch(g){this.reject_(g);return}"function"==typeof d?this.settleSameAsThenable_(d,b):this.fulfill_(b)};b.prototype.reject_=function(b){this.settle_(2,b)};b.prototype.fulfill_=function(b){this.settle_(1,b)};b.prototype.settle_=function(b,a){if(0!=this.state_)throw Error("Cannot settle("+b+", "+a|"): Promise already settled in state"+this.state_);this.state_=b;this.result_=a;this.executeOnSettledCallbacks_()};b.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var b=
this.onSettledCallbacks_,a=0;a<b.length;++a)b[a].call(),b[a]=null;this.onSettledCallbacks_=null}};var k=new c;b.prototype.settleSameAsPromise_=function(b){var a=this.createResolveAndReject_();b.callWhenSettled_(a.resolve,a.reject)};b.prototype.settleSameAsThenable_=function(b,a){var d=this.createResolveAndReject_();try{b.call(a,d.resolve,d.reject)}catch(h){d.reject(h)}};b.prototype.then=function(a,f){function d(b,a){return"function"==typeof b?function(a){try{c(b(a))}catch(l){e(l)}}:a}var c,e,m=new b(function(b,
a){c=b;e=a});this.callWhenSettled_(d(a,c),d(f,e));return m};b.prototype.catch=function(b){return this.then(void 0,b)};b.prototype.callWhenSettled_=function(b,a){function d(){switch(c.state_){case 1:b(c.result_);break;case 2:a(c.result_);break;default:throw Error("Unexpected state: "+c.state_);}}var c=this;null==this.onSettledCallbacks_?k.asyncExecute(d):this.onSettledCallbacks_.push((function(){k.asyncExecute(d)}))};b.resolve=e;b.reject=function(a){return new b(function(b,d){d(a)})};b.race=function(a){return new b(function(b,
d){for(var c=$jscomp.makeIterator(a),f=c.next();!f.done;f=c.next())e(f.value).callWhenSettled_(b,d)})};b.all=function(a){var d=$jscomp.makeIterator(a),c=d.next();return c.done?e([]):new b(function(b,a){function f(a){return function(d){g[a]=d;h--;0==h&&b(g)}}var g=[],h=0;do g.push(void 0),h++,e(c.value).callWhenSettled_(f(g.length-1),a),c=d.next();while(!c.done)})};return b}),"es6-impl","es3");
(function(a){function c(f){if(e[f])return e[f].exports;var b=e[f]={i:f,l:!1,exports:{}};a[f].call(b.exports,b,b.exports,c);b.l=!0;return b.exports}var e={};c.m=a;c.c=e;c.d=function(a,b,e){c.o(a,b)||Object.defineProperty(a,b,{configurable:!1,enumerable:!0,get:e})};c.n=function(a){var b=a&&a.__esModule?function(){return a["default"]}:function(){return a};c.d(b,"a",b);return b};c.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};c.p="";return c(c.s=0)})([(function(a,c,e){e(1);e(2);e(3);
var f=e(4);f.install({onUpdating:function(){console.log("SW Event:","onUpdating")},onUpdateReady:function(){console.log("SW Event:","onUpdateReady");f.applyUpdate()},onUpdated:function(){console.log("SW Event:","onUpdated");window.location.reload()},onUpdateFailed:function(){console.log("SW Event:","onUpdateFailed")}})}),(function(a,c,e){a.exports=e.p+"index.html"}),(function(a,c){}),(function(a,c){var e=document.getElementById("videoSection");a=function(a,b){this.name=a;this.link=b};window.tn5=new a("TN5",
"https://trinity-lh.akamaihd.net/i/TelevicentroLive2_d@508538/index_800_av-p.m3u8");window.tele7=new a("TeleCeiba","http://190.11.224.14:8134/liveevent.m3u8");window.hch=new a("HCH","https://5997ea093ae04.streamlock.net/hch/hch/playlist.m3u8");window.updateVideo=function(a){!1===!videojs.players.videoContainer&&videojs.players.videoContainer.dispose();e.innerHTML='\x3cvideo controls id\x3d"videoContainer" crossorigin autoplay class\x3d"video-js vjs-default-skin"\x3e\n    \x3csource src\x3d'+a+' type\x3d"application/x-mpegURL"\x3e\n    \x3c/video\x3e';
document.getElementById("videoContainer");a=videojs("videoContainer");a.width(window.innerWidth);a.height(window.innerHeight);a.play()};window.updateVideo(tn5.link)}),(function(a,c){function e(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}var f;c.install=function(a){a||(a={});if(e()){var b=function(a){function b(){switch(e.state){case "redundant":d("onUpdateFailed");
e.onstatechange=null;break;case "installing":k||d("onUpdating");break;case "installed":f||d("onUpdateReady");break;case "activated":d("onUpdated"),e.onstatechange=null}}function c(){switch(e.state){case "redundant":e.onstatechange=null;break;case "activated":d("onInstalled"),e.onstatechange=null}}var e=a.installing||a.waiting,f;if(e&&!e.onstatechange){if(a.active){b();var g=b}else c(),g=c;var k=!0;a.waiting&&(f=!0);e.onstatechange=g}},d=function(b){if("function"===typeof a[b])a[b]({source:"ServiceWorker"})};
navigator.serviceWorker.register("sw.js").then((function(a){a&&(b(a),a.onupdatefound=function(){b(a)})})).catch((function(a){d("onError");return Promise.reject(a)}))}else if(window.applicationCache){var c=function(){var b=document.createElement("iframe");window.addEventListener("message",(function(c){if(c.source===b.contentWindow&&(c=(c.data+"").match(/__offline-plugin_AppCacheEvent:(\w+)/)[1],"function"===typeof a[c]))a[c]({source:"AppCache"})}));b.src="appcache/manifest.html";b.style.display="none";f=
b;document.body.appendChild(b)};"complete"===document.readyState?setTimeout(c):window.addEventListener("load",c)}};c.applyUpdate=function(a,c){if(e())navigator.serviceWorker.getRegistration().then((function(b){b&&b.waiting?(b.waiting.postMessage({action:"skipWaiting"}),a&&a()):c&&c()}));else if(f)try{f.contentWindow.__applyUpdate(),a&&setTimeout(a)}catch(d){c&&setTimeout(c)}};c.update=function(){e()&&navigator.serviceWorker.getRegistration().then((function(a){if(a)return a.update()}));if(f)try{f.contentWindow.applicationCache.update()}catch(b){}}})]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbbnVsbF0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztnY0FFZ2MsQ0FBQSw4REFBOEQsQ0FBQTs7OzJCQUduZSxDQUFBLDZXQUE2VyxDQUFBLDZCQUE2QixDQUFBOzJSQUMxSSxDQUFBLG9CQUFvQixDQUFBOzs7O2tZQUltRixDQUFBLDZCQUE2QixDQUFBO3dYQUN2QyxDQUFBO3dkQUNnRyxDQUFBO2lVQUN2SixDQUFBLENBQUMsQ0FBQSwyQ0FBMkMsQ0FBQSxDQUFDLENBQUEsZUFBZSxDQUFBLENBQUMsQ0FBQTs7cUtBRXpOLENBQUEsQ0FBQyxDQUFBOzsrQ0FFdkgsQ0FBQSx1REFBdUQsQ0FBQSxRQUFRLENBQUEsa0RBQWtELENBQUEsNkhBQTZILENBQUEsK0pBQStKLENBQUE7cU1BQ3ZQLENBQUEsdUZBQXVGLENBQUEscUtBQXFLLENBQUEsbUNBQW1DLENBQUEsaUVBQWlFLENBQUEifQ==