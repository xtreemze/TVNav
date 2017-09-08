var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(c,f,e){c!=Array.prototype&&c!=Object.prototype&&(c[f]=e.value)};$jscomp.getGlobal=function(c){return"undefined"!=typeof window&&window===c?c:"undefined"!=typeof global&&null!=global?global:c};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(c){return $jscomp.SYMBOL_PREFIX+(c||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var c=$jscomp.global.Symbol.iterator;c||(c=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[c]&&$jscomp.defineProperty(Array.prototype,c,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(c){var f=0;return $jscomp.iteratorPrototype((function(){return f<c.length?{done:!1,value:c[f++]}:{done:!0}}))};
$jscomp.iteratorPrototype=function(c){$jscomp.initSymbolIterator();c={next:c};c[$jscomp.global.Symbol.iterator]=function(){return this};return c};$jscomp.iteratorFromArray=function(c,f){$jscomp.initSymbolIterator();c instanceof String&&(c+="");var e=0,d={next:function(){if(e<c.length){var a=e++;return{value:f(a,c[a]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d};
$jscomp.polyfill=function(c,f,e,d){if(f){e=$jscomp.global;c=c.split(".");for(d=0;d<c.length-1;d++){var a=c[d];a in e||(e[a]={});e=e[a]}c=c[c.length-1];d=e[c];f=f(d);f!=d&&null!=f&&$jscomp.defineProperty(e,c,{configurable:!0,writable:!0,value:f})}};$jscomp.polyfill("Array.prototype.keys",(function(c){return c?c:function(){return $jscomp.iteratorFromArray(this,(function(c){return c}))}}),"es6-impl","es3");
$jscomp.makeIterator=function(c){$jscomp.initSymbolIterator();var f=c[Symbol.iterator];return f?f.call(c):$jscomp.arrayIterator(c)};$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill("Promise",(function(c){function f(){this.batch_=null}function e(b){return b instanceof a?b:new a(function(g,a){g(b)})}if(c&&!$jscomp.FORCE_POLYFILL_PROMISE)return c;f.prototype.asyncExecute=function(b){null==this.batch_&&(this.batch_=[],this.asyncExecuteBatch_());this.batch_.push(b);return this};f.prototype.asyncExecuteBatch_=function(){var b=this;this.asyncExecuteFunction((function(){b.executeBatch_()}))};var d=$jscomp.global.setTimeout;f.prototype.asyncExecuteFunction=function(b){d(b,
0)};f.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var b=this.batch_;this.batch_=[];for(var g=0;g<b.length;++g){var a=b[g];delete b[g];try{a()}catch(l){this.asyncThrow_(l)}}}this.batch_=null};f.prototype.asyncThrow_=function(b){this.asyncExecuteFunction((function(){throw b;}))};var a=function(b){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var g=this.createResolveAndReject_();try{b(g.resolve,g.reject)}catch(k){g.reject(k)}};a.prototype.createResolveAndReject_=
function(){function b(b){return function(c){a||(a=!0,b.call(g,c))}}var g=this,a=!1;return{resolve:b(this.resolveTo_),reject:b(this.reject_)}};a.prototype.resolveTo_=function(b){if(b===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof a)this.settleSameAsPromise_(b);else{a:switch(typeof b){case "object":var g=null!=b;break a;case "function":g=!0;break a;default:g=!1}g?this.resolveToNonPromiseObj_(b):this.fulfill_(b)}};a.prototype.resolveToNonPromiseObj_=function(b){var a=
void 0;try{a=b.then}catch(k){this.reject_(k);return}"function"==typeof a?this.settleSameAsThenable_(a,b):this.fulfill_(b)};a.prototype.reject_=function(b){this.settle_(2,b)};a.prototype.fulfill_=function(b){this.settle_(1,b)};a.prototype.settle_=function(b,a){if(0!=this.state_)throw Error("Cannot settle("+b+", "+a|"): Promise already settled in state"+this.state_);this.state_=b;this.result_=a;this.executeOnSettledCallbacks_()};a.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var b=
this.onSettledCallbacks_,a=0;a<b.length;++a)b[a].call(),b[a]=null;this.onSettledCallbacks_=null}};var h=new f;a.prototype.settleSameAsPromise_=function(b){var a=this.createResolveAndReject_();b.callWhenSettled_(a.resolve,a.reject)};a.prototype.settleSameAsThenable_=function(a,c){var b=this.createResolveAndReject_();try{a.call(c,b.resolve,b.reject)}catch(l){b.reject(l)}};a.prototype.then=function(b,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(m){g(m)}}:b}var e,g,f=new a(function(a,
b){e=a;g=b});this.callWhenSettled_(d(b,e),d(c,g));return f};a.prototype.catch=function(a){return this.then(void 0,a)};a.prototype.callWhenSettled_=function(a,c){function b(){switch(d.state_){case 1:a(d.result_);break;case 2:c(d.result_);break;default:throw Error("Unexpected state: "+d.state_);}}var d=this;null==this.onSettledCallbacks_?h.asyncExecute(b):this.onSettledCallbacks_.push((function(){h.asyncExecute(b)}))};a.resolve=e;a.reject=function(b){return new a(function(a,c){c(b)})};a.race=function(b){return new a(function(a,
c){for(var d=$jscomp.makeIterator(b),g=d.next();!g.done;g=d.next())e(g.value).callWhenSettled_(a,c)})};a.all=function(b){var c=$jscomp.makeIterator(b),d=c.next();return d.done?e([]):new a(function(a,b){function g(b){return function(c){f[b]=c;k--;0==k&&a(f)}}var f=[],k=0;do f.push(void 0),k++,e(d.value).callWhenSettled_(g(f.length-1),b),d=c.next();while(!d.done)})};return a}),"es6-impl","es3");
(function(c){function f(d){if(e[d])return e[d].exports;var a=e[d]={i:d,l:!1,exports:{}};c[d].call(a.exports,a,a.exports,f);a.l=!0;return a.exports}var e={};f.m=c;f.c=e;f.d=function(c,a,e){f.o(c,a)||Object.defineProperty(c,a,{configurable:!1,enumerable:!0,get:e})};f.n=function(c){var a=c&&c.__esModule?function(){return c["default"]}:function(){return c};f.d(a,"a",a);return a};f.o=function(c,a){return Object.prototype.hasOwnProperty.call(c,a)};f.p="";return f(f.s=0)})([(function(c,f,e){e(1);e(2);e(3);
var d=e(5);d.install({onUpdating:function(){console.log("SW Event:","onUpdating")},onUpdateReady:function(){console.log("SW Event:","onUpdateReady");d.applyUpdate()},onUpdated:function(){console.log("SW Event:","onUpdated");window.location.reload()},onUpdateFailed:function(){console.log("SW Event:","onUpdateFailed")}})}),(function(c,f,e){c.exports=e.p+"index.html"}),(function(c,f){}),(function(c,f,e){Object.defineProperty(f,"__esModule",{value:!0});c=e(4);var d=e.n(c),a=document.getElementById("videoSection"),
h=document.getElementById("channelSection");e=function(a,b,c,d,e,f){this.name=a;this.shortName=b;this.link=c;this.type=d?d:"application/x-mpegURL";this.video=e?"audio":"video";this.data=f;h.innerHTML+='\x3cdiv onclick\x3d"updateVideo('+b+');" class\x3d"individualChannel" id\x3d'+b+"\x3e"+a+"\x3c/div\x3e"};window.tn5=new e("TN5","tn5","https://trinity-lh.akamaihd.net/i/TelevicentroLive2_d@508538/index_800_av-p.m3u8?sd\x3d10\x26rebase\x3don");window.tsi=new e("TSi","tsi","https://trinity-lh.akamaihd.net/i/TelevicentroLive1_d@17977/index_800_av-p.m3u8?sd\x3d10\x26rebase\x3don");
window.tn8=new e("TN8","tn8","https://www.youtube.com/embed/6SWOtepXrbI","video/youtube");window.ten=new e("TEN","ten","http://stream.grupoabchn.com:1935/TENHD/TENLive.smil/playlist.m3u8");window.hch=new e("HCH","hch","https://5997ea093ae04.streamlock.net/hch/hch/playlist.m3u8");window.choluSat=new e("CholuSat","choluSat","http://live.audiotvserver.com:1935/livemedia/cholusat/playlist.m3u8");window.globoTV=new e("GloboTV","globoTV","http://tv.aliasdns.info:8979/live/g13/playlist.m3u8");window.tele7=
new e("TeleCeiba","tele7","http://190.11.224.14:8134/liveevent.m3u8");window.prog=new e("TeleProgreso","prog","http://streannlive-lh.akamaihd.net/i/teleprogreso_1@372779/index_3_av-p.m3u8?sd\x3d10\x26set-segment-duration\x3dsmoothest\x26rebase\x3don\x26hdntl\x3dexp\x3d1504818729~acl\x3d%2f*~data\x3dhdntl~hmac\x3d3193f9a3a3ffbb7e4421fae3798785724aa25340fbbdf18e452f6a3f058d1876");window.campus=new e("CampusTV","campus","http://st2.worldkast.com/8004/8004/playlist.m3u8");window.hrn=new e("HRN","hrn",
"http://radios504.geucast.net:18101/radio-live","audio/mpeg","audio");window.america=new e("Radio America","america","http://17803.live.streamtheworld.com/AMERICAAAC.aac","audio/mpeg","audio");window.rGlobo=new e("Radio Globo","rGlobo","http://aliasdns.info:8016/;stream.mp3","audio/mpeg","audio");window.rprog=new e("Radio Progreso","rprog","http://noasrv.caster.fm:10194/stream?1504792373090.mp3","audio/mpeg","audio");window.updateVideo=function(b){videojs.players.videoContainer&&window.player&&(window.currentElement.classList.remove("active"),
videojs.players.videoContainer.dispose());a.innerHTML="\x3c"+b.video+' controls id\x3d"videoContainer" preload\x3d"auto" poster\x3d"../img/test.jpg" autoplay muted class\x3d"video-js vjs-default-skin vjs-big-play-centered"\x3e\n  \x3csource src\x3d'+b.link+" type\x3d"+b.type+" "+b.data+"\x3e\n  \x3c/"+b.video+"\x3e";window.player=videojs("videoContainer",{techOrder:["html5","youtube","flash"]});window.player.width(window.innerWidth);window.player.height(window.innerHeight);window.currentElement=document.getElementById(b.shortName);
window.currentElement.classList.add("active");document.title=b.name+" | TVNav";setTimeout((function(){window.player.muted(!1);setTimeout((function(){window.player.play()}),200)}),900)};window.toggleChannels=function(){h.classList.toggle("inactiveChannels")};window.updateVideo(tsi);window.addEventListener("resize",(function(){window.player.width(window.innerWidth);window.player.height(window.innerHeight)}));window.addEventListener("orientationchange",(function(){window.player.width(window.innerWidth);window.player.height(window.innerHeight)}));
var b=document.getElementById("main");document.getElementById("fullscreenButton").addEventListener("click",(function(){null!==d.a.fullscreenElement?d.a.exitFullscreen():(h.classList.add("inactiveChannels"),d.a.requestFullscreen(b))}))}),(function(c,f,e){Object.defineProperty(f,"__esModule",{value:!0});var d={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5};c="webkitFullscreenEnabled webkitFullscreenElement webkitRequestFullscreen webkitExitFullscreen webkitfullscreenchange webkitfullscreenerror".split(" ");
e="mozFullScreenEnabled mozFullScreenElement mozRequestFullScreen mozCancelFullScreen mozfullscreenchange mozfullscreenerror".split(" ");var a="msFullscreenEnabled msFullscreenElement msRequestFullscreen msExitFullscreen MSFullscreenChange MSFullscreenError".split(" "),h="undefined"!==typeof window&&"undefined"!==typeof window.document?window.document:{},b="fullscreenEnabled"in h&&Object.keys(d)||c[0]in h&&c||e[0]in h&&e||a[0]in h&&a||[];f.default={requestFullscreen:function(a){return a[b[d.requestFullscreen]]()},
requestFullscreenFunction:function(a){return a[b[d.requestFullscreen]]},get exitFullscreen(){return h[b[d.exitFullscreen]].bind(h)},addEventListener:function(a,c,e){return h.addEventListener(b[d[a]],c,e)},removeEventListener:function(a,c,e){return h.removeEventListener(b[d[a]],c,e)},get fullscreenEnabled(){return!!h[b[d.fullscreenEnabled]]},set fullscreenEnabled(a){},get fullscreenElement(){return h[b[d.fullscreenElement]]},set fullscreenElement(a){},get onfullscreenchange(){return h[("on"+b[d.fullscreenchange]).toLowerCase()]},
set onfullscreenchange(a){return h[("on"+b[d.fullscreenchange]).toLowerCase()]=a},get onfullscreenerror(){return h[("on"+b[d.fullscreenerror]).toLowerCase()]},set onfullscreenerror(a){return h[("on"+b[d.fullscreenerror]).toLowerCase()]=a}}}),(function(c,f){function e(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}var d;f.install=
function(a){a||(a={});if(e()){var c=function(a){function c(){switch(d.state){case "redundant":b("onUpdateFailed");d.onstatechange=null;break;case "installing":g||b("onUpdating");break;case "installed":f||b("onUpdateReady");break;case "activated":b("onUpdated"),d.onstatechange=null}}function e(){switch(d.state){case "redundant":d.onstatechange=null;break;case "activated":b("onInstalled"),d.onstatechange=null}}var d=a.installing||a.waiting,f;if(d&&!d.onstatechange){if(a.active){c();var h=c}else e(),
h=e;var g=!0;a.waiting&&(f=!0);d.onstatechange=h}},b=function(b){if("function"===typeof a[b])a[b]({source:"ServiceWorker"})};navigator.serviceWorker.register("sw.js").then((function(a){a&&(c(a),a.onupdatefound=function(){c(a)})})).catch((function(a){b("onError");return Promise.reject(a)}))}else if(window.applicationCache){var f=function(){var b=document.createElement("iframe");window.addEventListener("message",(function(c){if(c.source===b.contentWindow&&(c=(c.data+"").match(/__offline-plugin_AppCacheEvent:(\w+)/)[1],
"function"===typeof a[c]))a[c]({source:"AppCache"})}));b.src="appcache/manifest.html";b.style.display="none";d=b;document.body.appendChild(b)};"complete"===document.readyState?setTimeout(f):window.addEventListener("load",f)}};f.applyUpdate=function(a,c){if(e())navigator.serviceWorker.getRegistration().then((function(b){b&&b.waiting?(b.waiting.postMessage({action:"skipWaiting"}),a&&a()):c&&c()}));else if(d)try{d.contentWindow.__applyUpdate(),a&&setTimeout(a)}catch(b){c&&setTimeout(c)}};f.update=function(){e()&&
navigator.serviceWorker.getRegistration().then((function(a){if(a)return a.update()}));if(d)try{d.contentWindow.applicationCache.update()}catch(a){}}})]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbbnVsbF0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztnY0FFZ2MsQ0FBQSw4REFBOEQsQ0FBQTs7Z1NBRTlOLENBQUEsd0VBQXdFLENBQUEscUJBQXFCLENBQUEsR0FBRyxDQUFBOzsyQkFFclcsQ0FBQSw2V0FBNlcsQ0FBQSw2QkFBNkIsQ0FBQTsyUkFDMUksQ0FBQSxvQkFBb0IsQ0FBQTs7OztrWUFJbUYsQ0FBQSw2QkFBNkIsQ0FBQTt3WEFDdkMsQ0FBQTt3ZEFDZ0csQ0FBQTtpVUFDdkosQ0FBQSxDQUFDLENBQUEsMkNBQTJDLENBQUEsQ0FBQyxDQUFBLGVBQWUsQ0FBQSxDQUFDLENBQUE7Ozs7OzswRkFNcFMsQ0FBQSw4Q0FBOEMsQ0FBQSxnQ0FBZ0MsQ0FBQSxNQUFNLENBQUEseUlBQXlJLENBQUEsMkZBQTJGLENBQUEsOENBQThDLENBQUEsMkZBQTJGLENBQUE7MkdBQ2hiLENBQUEsNEhBQTRILENBQUEsRUFBRSxDQUFBLENBQUMsQ0FBQTs7O2dQQUdNLENBQUEsQ0FBQyxDQUFBOzs0S0FFckUsQ0FBQSx1REFBdUQsQ0FBQSxRQUFRLENBQUEsa0RBQWtELENBQUEsNkhBQTZILENBQUE7b0RBQ3RXLENBQUEsK1BBQStQLENBQUEsdUZBQXVGLENBQUE7K0NBQzNWLENBQUEsbUNBQW1DLENBQUEsaUVBQWlFLENBQUEifQ==