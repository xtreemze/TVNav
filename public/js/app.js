webpackJsonp([1],[,function(e,t,n){e.exports=n.p+"./img/honduras.svg?8d0121bb08ccd5044a21e4b74e90d303"},,,function(e,t,n){e.exports=n.p+"./img/usa.svg?eda1e03f9e8b1f80866c26eefcf4c63a"},,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"./img/rt.svg?0119fe7a23bd680aaacbcc1f2fae3715"},function(e,t,n){e.exports=n.p+"./img/russia.svg?14814a48e7284c087eaa9c44fb581302"},function(e,t,n){e.exports=n.p+"./img/colombia.svg?14d012867c7fab9aa745e9b9420cbd0d"},function(e,t,n){e.exports=n.p+"./img/spain.svg?48f5989c7f98c3cabae7cadd8c9e5da8"},function(e,t,n){e.exports=n.p+"./img/mexico.svg?f1ba522e8e48091b7eca97a81d2097f2"},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"./img/cbs.svg?711b99cc510c7573075a52443730d13b"},function(e,t,n){e.exports=n.p+"./img/dw.svg?33e0ea4d61d6bc83d9967f104aaf3aad"},function(e,t,n){e.exports=n.p+"./img/germany.svg?cfed9f984610e26dac5ff281c0329bcc"},function(e,t,n){e.exports=n.p+"./img/chile.svg?4e9ff41f7c822ef9a7b2bc728bde3c52"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){n(106),n(107),n(108),n(110),n(113),n(169)},function(e,t){},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(109);n.n(o);o.install({onInstalled:function(){h1Title.innerText="Actualizado | TVNav"},onUpdating:function(){h1Title.innerText="Actualizando... | TVNav"},onUpdateReady:function(){h1Title.innerText="Reiniciando... | TVNav",o.applyUpdate()},onUpdated:function(){h1Title.innerText="Actualizado | TVNav",setTimeout(function(){window.location.reload()},100)}})},function(e,t){var n;function o(){return"serviceWorker"in navigator&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}function i(){if(o()&&navigator.serviceWorker.getRegistration().then(function(e){if(e)return e.update()}),n)try{n.contentWindow.applicationCache.update()}catch(e){}}setInterval(i,72e5),t.install=function(e){if(e||(e={}),o()){var t=function(e){var t,n,o,a=e.installing||e.waiting;function r(){switch(a.state){case"redundant":i("onUpdateFailed"),a.onstatechange=null;break;case"installing":t||i("onUpdating");break;case"installed":n||i("onUpdateReady");break;case"activated":i("onUpdated"),a.onstatechange=null}}function s(){switch(a.state){case"redundant":a.onstatechange=null;break;case"installing":case"installed":break;case"activated":i("onInstalled"),a.onstatechange=null}}a&&!a.onstatechange&&(e.active?(r(),o=r):(s(),o=s),t=!0,e.waiting&&(n=!0),a.onstatechange=o)},i=function(t){"function"==typeof e[t]&&e[t]({source:"ServiceWorker"})};navigator.serviceWorker.register("sw.js",{}).then(function(e){e&&(t(e),e.onupdatefound=function(){t(e)})}).catch(function(e){return i("onError"),Promise.reject(e)})}else if(window.applicationCache){var a=function(){var t=document.createElement("iframe");window.addEventListener("message",function(n){if(n.source===t.contentWindow){var o=(n.data+"").match(/__offline-plugin_AppCacheEvent:(\w+)/);if(o){var i=o[1];"function"==typeof e[i]&&e[i]({source:"AppCache"})}}}),t.src="appcache/manifest.html",t.style.display="none",n=t,document.body.appendChild(t)};"complete"===document.readyState?setTimeout(a):window.addEventListener("load",a)}},t.applyUpdate=function(e,t){if(o())navigator.serviceWorker.getRegistration().then(function(n){n&&n.waiting?(n.waiting.postMessage({action:"skipWaiting"}),e&&e()):t&&t()});else if(n)try{n.contentWindow.__applyUpdate(),e&&setTimeout(e)}catch(e){t&&setTimeout(t)}},t.update=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n.n(o),a=n(28),r=(n.n(a),n(24)),s=n.n(r);window.videojs=i.a,n(111),window.zenscroll=s.a;const c=document.getElementById("videoSection"),l=document.getElementById("channelSection"),d=document.getElementById("h1Title");document.getElementById("main");let m={sourceOrder:!0,techOrder:["html5","flash"],html5:{hls:{withCredentials:!1}},flash:{hls:{withCredentials:!1}}},u=function(e){"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:e.name,artist:"TVNav",album:"Live",artwork:[{src:e.logo}]}),navigator.mediaSession.setActionHandler("play",function(){player.play()}),navigator.mediaSession.setActionHandler("pause",function(){player.pause()}),navigator.mediaSession.setActionHandler("previoustrack",function(){"channelSection"===window.previousElement.parentElement.id&&(window.selectedElement.classList.remove("selectedElement"),window.selectedElement=window.previousElement,window.selectedElement.classList.add("selectedElement"),window.nextElement=window.selectedElement.nextElementSibling,window.previousElement=window.selectedElement.previousElementSibling,window.scroller.center(window.selectedElement,480,0),window.selectedElement.click(),window.selectedElement.classList.remove("selectedElement"))}),navigator.mediaSession.setActionHandler("nexttrack",function(){"channelSection"===window.nextElement.parentElement.id&&(window.selectedElement.classList.remove("selectedElement"),window.selectedElement=window.nextElement,window.selectedElement.classList.add("selectedElement"),window.nextElement=window.selectedElement.nextElementSibling,window.previousElement=window.selectedElement.previousElementSibling,window.scroller.center(window.selectedElement,480,0),window.selectedElement.click(),window.selectedElement.classList.remove("selectedElement"))}))};window.falseTest=function(){!0===window.test&&(window.test=!1,window.clearTimeout(window.channelTestTimer)),!1==!i.a.players.videoContainer2&&(i.a.players.videoContainer2.pause(),i.a.players.videoContainer2.dispose()),window.initialVideoSection&&document.getElementById("initialVideoSection").remove()},l.addEventListener("wheel",function e(){!0===window.test&&(window.falseTest(),l.removeEventListener("wheel",e(),!1))},!1),l.addEventListener("touchstart",function e(){!0===window.test&&(window.falseTest(),l.removeEventListener("touchstart",e(),!1))},!1),window.addEventListener("resize",function(){window.player&&(window.player.width(window.innerWidth),window.player.height(window.innerHeight)),window.player2&&(window.player2.width(window.innerWidth),window.player2.height(window.innerHeight))}),window.addEventListener("orientationchange",function(){window.player&&(window.player.width(window.innerWidth),window.player.height(window.innerHeight)),window.player2&&(window.player2.width(window.innerWidth),window.player2.height(window.innerHeight))}),window.toggleChannels=function(){l.classList.toggle("inactiveChannels")},window.updateVideo=function(e){e.logo?(window.channelLogo.classList.remove("fadeIn"),window.channelLogo.classList.add("fadeOut"),setTimeout(function(){window.channelLogo.classList.remove("fadeOut"),window.channelLogo.innerHTML=`<img src="${e.logo}">`,window.channelLogo.classList.add("fadeIn")},500)):window.channelLogo.innerHTML="",!1==!window.currentElement&&window.currentElement.classList.remove("active"),!1==!i.a.players.videoContainer&&!1==!window.player&&(i.a.players.videoContainer.pause(),i.a.players.videoContainer.dispose()),!navigator.onLine||e.ustream||e.html5?navigator.onLine&&e.ustream&&!e.html5?(!1==!i.a.players.videoContainer&&!1==!window.player&&(window.currentElement.classList.remove("active"),i.a.players.videoContainer.pause(),i.a.players.videoContainer.dispose()),navigator.onLine&&(c.innerHTML=`<iframe autoplay="true" showtitle="false" allowfullscreen="false" webkitallowfullscreen="false" scrolling="no" frameborder="0"\n      width="${window.innerWidth}" height="${window.innerHeight}" id="video" src="${e.link}">\n      </iframe>\n      `,window.currentElement=document.getElementById(e.shortName),window.currentElement.classList.add("active")),document.title=e.name+" | TVNav",d.innerText=e.name+" | TVNav"):navigator.onLine&&e.html5&&(!1==!i.a.players.videoContainer&&!1==!window.player&&(window.currentElement.classList.remove("active"),i.a.players.videoContainer.pause(),i.a.players.videoContainer.dispose()),navigator.onLine&&(c.innerHTML=`<video autoplay="true" width="${window.innerWidth}" height="${window.innerHeight}" id="video" src="${e.link}">\n      </video>\n      `,window.currentElement=document.getElementById(e.shortName),window.currentElement.classList.add("active")),document.title=e.name+" | TVNav",d.innerText=e.name+" | TVNav"):(c.innerHTML=`<${e.video} controls id="videoContainer" preload="auto" autoplay muted class="video-js vjs-default-skin vjs-big-play-centered">\n    <source src=${e.link} type=${e.type} data=${e.data}>\n</${e.video}>\n`,window.player=i()("videoContainer",m,u),window.player&&(window.player.width(window.innerWidth),window.player.height(window.innerHeight),e.ustream||e.html5||setTimeout(function(){window.player.muted(!1)},200)),window.currentElement=document.getElementById(e.shortName),window.currentElement.classList.add("active"),window.scroller.center(window.currentElement,480,0)),window.selectedElement=window.currentElement,document.title=e.name+" | TVNav",d.innerText=e.name+" | TVNav",window.player.on("error",function(){const t=document.getElementById(e.shortName);setTimeout(()=>{t.classList.add("deleteChannel")},120),document.title="Eliminando: "+e.name,d.innerText="Eliminando: "+e.name,console.log("Eliminando: "+e.name),window.nextElement=window.selectedElement.nextElementSibling,window.selectedElement=window.nextElement,setTimeout(function(){Channels.delete(e),t.remove()},1001)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n.n(o),a=n(112),r=(n.n(a),n(2)),s=n.n(r);var c=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d=i.a.getComponent("Tech"),m=i.a.dom,u=i.a.url,p=i.a.createTimeRange,w=i.a.mergeOptions,h=s.a&&s.a.navigator||{},f=function(e){function t(n,o){c(this,t);var i=l(this,e.call(this,n,o));return n.source&&i.ready(function(){this.setSource(n.source)},!0),n.startTime&&i.ready(function(){this.load(),this.play(),this.currentTime(n.startTime)},!0),s.a.videojs=s.a.videojs||{},s.a.videojs.Flash=s.a.videojs.Flash||{},s.a.videojs.Flash.onReady=t.onReady,s.a.videojs.Flash.onEvent=t.onEvent,s.a.videojs.Flash.onError=t.onError,i.on("seeked",function(){this.lastSeekTarget_=void 0}),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.createEl=function(){var e=this.options_;e.swf||(e.swf="https://vjs.zencdn.net/swf/"+a.version+"/video-js.swf");var n=e.techId,o=w({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:e.autoplay,preload:e.preload,loop:e.loop,muted:e.muted},e.flashVars),i=w({wmode:"opaque",bgcolor:"#000000"},e.params),r=w({id:n,name:n,class:"vjs-tech"},e.attributes);return this.el_=t.embed(e.swf,o,i,r),this.el_.tech=this,this.el_},t.prototype.play=function(){this.ended()&&this.setCurrentTime(0),this.el_.vjs_play()},t.prototype.pause=function(){this.el_.vjs_pause()},t.prototype.src=function(e){return void 0===e?this.currentSrc():this.setSrc(e)},t.prototype.setSrc=function(e){var t=this;e=u.getAbsoluteURL(e),this.el_.vjs_src(e),this.autoplay()&&this.setTimeout(function(){return t.play()},0)},t.prototype.seeking=function(){return void 0!==this.lastSeekTarget_},t.prototype.setCurrentTime=function(t){var n=this.seekable();n.length&&(t=(t=t>n.start(0)?t:n.start(0))<n.end(n.length-1)?t:n.end(n.length-1),this.lastSeekTarget_=t,this.trigger("seeking"),this.el_.vjs_setProperty("currentTime",t),e.prototype.setCurrentTime.call(this))},t.prototype.currentTime=function(){return this.seeking()?this.lastSeekTarget_||0:this.el_.vjs_getProperty("currentTime")},t.prototype.currentSrc=function(){return this.currentSource_?this.currentSource_.src:this.el_.vjs_getProperty("currentSrc")},t.prototype.duration=function(){if(0===this.readyState())return NaN;var e=this.el_.vjs_getProperty("duration");return e>=0?e:1/0},t.prototype.load=function(){this.el_.vjs_load()},t.prototype.poster=function(){this.el_.vjs_getProperty("poster")},t.prototype.setPoster=function(){},t.prototype.seekable=function(){var e=this.duration();return 0===e?p():p(0,e)},t.prototype.buffered=function(){var e=this.el_.vjs_getProperty("buffered");return 0===e.length?p():p(e[0][0],e[0][1])},t.prototype.supportsFullScreen=function(){return!1},t.prototype.enterFullScreen=function(){return!1},t.prototype.getVideoPlaybackQuality=function(){var e=this.el_.vjs_getProperty("getVideoPlaybackQuality");return s.a.performance&&"function"==typeof s.a.performance.now?e.creationTime=s.a.performance.now():s.a.performance&&s.a.performance.timing&&"number"==typeof s.a.performance.timing.navigationStart&&(e.creationTime=s.a.Date.now()-s.a.performance.timing.navigationStart),e},t}(d),g=["rtmpConnection","rtmpStream","preload","defaultPlaybackRate","playbackRate","autoplay","loop","controls","volume","muted","defaultMuted"],v=["networkState","readyState","initialTime","startOffsetTime","paused","ended","videoWidth","videoHeight"],b=f.prototype;function y(e){var t=e.charAt(0).toUpperCase()+e.slice(1);b["set"+t]=function(t){return this.el_.vjs_setProperty(e,t)}}function E(e){b[e]=function(){return this.el_.vjs_getProperty(e)}}for(var k=0;k<g.length;k++)E(g[k]),y(g[k]);for(var x=0;x<v.length;x++)E(v[x]);f.isSupported=function(){return!!(i.a.browser.IS_CHROME&&!i.a.browser.IS_ANDROID||i.a.browser.IS_SAFARI&&!i.a.browser.IS_IOS)||f.version()[0]>=10},d.withSourceHandlers(f),f.nativeSourceHandler={},f.nativeSourceHandler.canPlayType=function(e){return e in f.formats?"maybe":""},f.nativeSourceHandler.canHandleSource=function(e,t){var n,o,i=void 0;return e.type?i=e.type.replace(/;.*/,"").toLowerCase():(n=e.src,i=(o=u.getFileExtension(n))?"video/"+o:""),f.nativeSourceHandler.canPlayType(i)},f.nativeSourceHandler.handleSource=function(e,t,n){t.setSrc(e.src)},f.nativeSourceHandler.dispose=function(){},f.registerSourceHandler(f.nativeSourceHandler),f.formats={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"},f.onReady=function(e){var t=m.$("#"+e),n=t&&t.tech;n&&n.el()&&f.checkReady(n)},f.checkReady=function(e){e.el()&&(e.el().vjs_getProperty?e.triggerReady():this.setTimeout(function(){f.checkReady(e)},50))},f.onEvent=function(e,t){var n=m.$("#"+e).tech,o=Array.prototype.slice.call(arguments,2);n.setTimeout(function(){n.trigger(t,o)},1)},f.onError=function(e,t){var n=m.$("#"+e).tech;if("srcnotfound"===t)return n.error(4);"string"==typeof t?n.error("FLASH: "+t):(t.origin="flash",n.error(t))},f.version=function(){var e="0,0,0";try{e=new s.a.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(t){try{h.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(e=(h.plugins["Shockwave Flash 2.0"]||h.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(e){}}return e.split(",")},f.embed=function(e,t,n,o){var i=f.getEmbedCode(e,t,n,o);return m.createEl("div",{innerHTML:i}).childNodes[0]},f.getEmbedCode=function(e,t,n,o){var i="",a="",r="";return t&&Object.getOwnPropertyNames(t).forEach(function(e){i+=e+"="+t[e]+"&amp;"}),n=w({movie:e,flashvars:i,allowScriptAccess:"always",allowNetworking:"all"},n),Object.getOwnPropertyNames(n).forEach(function(e){a+='<param name="'+e+'" value="'+n[e]+'" />'}),o=w({data:e,width:"100%",height:"100%"},o),Object.getOwnPropertyNames(o).forEach(function(e){r+=e+'="'+o[e]+'" '}),'<object type="application/x-shockwave-flash" '+r+">"+a+"</object>"},function(e){e.streamingFormats={"rtmp/mp4":"MP4","rtmp/flv":"FLV"},e.streamFromParts=function(e,t){return e+"&"+t},e.streamToParts=function(e){var t={connection:"",stream:""};if(!e)return t;var n=e.search(/&(?!\w+=)/),o=void 0;return-1!==n?o=n+1:0===(n=o=e.lastIndexOf("/")+1)&&(n=o=e.length),t.connection=e.substring(0,n),t.stream=e.substring(o,e.length),t},e.isStreamingType=function(t){return t in e.streamingFormats},e.RTMP_RE=/^rtmp[set]?:\/\//i,e.isStreamingSrc=function(t){return e.RTMP_RE.test(t)},e.rtmpSourceHandler={},e.rtmpSourceHandler.canPlayType=function(t){return e.isStreamingType(t)?"maybe":""},e.rtmpSourceHandler.canHandleSource=function(t,n){var o=e.rtmpSourceHandler.canPlayType(t.type);return o||(e.isStreamingSrc(t.src)?"maybe":"")},e.rtmpSourceHandler.handleSource=function(t,n,o){var i=e.streamToParts(t.src);n.setRtmpConnection(i.connection),n.setRtmpStream(i.stream)},e.registerSourceHandler(e.rtmpSourceHandler)}(f),d.getTech("Flash")?(i.a.log.warn("Not using videojs-flash as it appears to already be registered"),i.a.log.warn("videojs-flash should only be used with video.js@6 and above")):i.a.registerTech("Flash",f),f.VERSION="2.1.0",t.default=f},function(e,t){e.exports={_args:[["videojs-swf@5.4.1","D:\\TVNav"]],_development:!0,_from:"videojs-swf@5.4.1",_id:"videojs-swf@5.4.1",_inBundle:!1,_integrity:"sha1-IHfvccdJ8seCPvSbq65N0qywj4c=",_location:"/videojs-swf",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"videojs-swf@5.4.1",name:"videojs-swf",escapedName:"videojs-swf",rawSpec:"5.4.1",saveSpec:null,fetchSpec:"5.4.1"},_requiredBy:["/videojs-contrib-media-sources/video.js","/videojs-flash"],_resolved:"https://registry.npmjs.org/videojs-swf/-/videojs-swf-5.4.1.tgz",_spec:"5.4.1",_where:"D:\\TVNav",author:{name:"Brightcove"},bugs:{url:"https://github.com/videojs/video-js-swf/issues"},copyright:"Copyright 2014 Brightcove, Inc. https://github.com/videojs/video-js-swf/blob/master/LICENSE",description:"The Flash-fallback video player for video.js (http://videojs.com)",devDependencies:{async:"~0.2.9",chg:"^0.3.2","flex-sdk":"4.6.0-0",grunt:"~0.4.0","grunt-bumpup":"~0.5.0","grunt-cli":"~0.1.0","grunt-connect":"~0.2.0","grunt-contrib-jshint":"~0.4.3","grunt-contrib-qunit":"~0.2.1","grunt-contrib-watch":"~0.1.4","grunt-npm":"~0.0.2","grunt-prompt":"~0.1.2","grunt-shell":"~0.6.1","grunt-tagrelease":"~0.3.1",qunitjs:"~1.12.0","video.js":"^5.9.2"},homepage:"http://videojs.com",keywords:["flash","video","player"],name:"videojs-swf",repository:{type:"git",url:"git+https://github.com/videojs/video-js-swf.git"},scripts:{version:"chg release -y && grunt dist && git add -f dist/ && git add CHANGELOG.md"},version:"5.4.1"}},function(e,t,n){window.Channels=new Set;let o="";class i{constructor({name:e,shortName:t,link:n,type:i="application/x-mpegURL",video:a="video",data:r={},ustream:s,logo:c,country:l,html5:d}){this.name=e,this.shortName=t,this.link=n,this.type=i,this.video=a,this.logo=c,this.country=l,this.ustream=s,this.type=i,this.data=r,this.html5=d,o+=`<div onclick="window.falseTest(); window.updateVideo(${t});" class="individualChannel pointer" id=${t}>\n    <span class="channelName">\n        ${e}\n    </span>\n<div class="flagContainer">\n    <img class="countryFlag" src="${l}">\n</div>\n</div>\n`,this.element=document.getElementById(this.shortName),Channels.add(this)}}window.tsi=new i({name:"TSi",shortName:"tsi",logo:n(114),country:n(1),link:"https://trinity-lh.akamaihd.net/i/TelevicentroLive1_d@17977/master.m3u8"}),window.tn5=new i({name:"TN5",shortName:"tn5",logo:n(115),country:n(1),link:"https://trinity-lh.akamaihd.net/i/TelevicentroLive2_d@508538/master.m3u8"}),window.ten=new i({name:"TEN",shortName:"ten",logo:n(116),country:n(1),link:"http://stream.grupoabchn.com:1935/TENHD/TENLive.smil/playlist.m3u8"}),window.hch=new i({name:"HCH",shortName:"hch",logo:n(117),country:n(1),link:"http://stream.innovandote.com/hch/hch/playlist.m3u8"}),window.tele7=new i({name:"TeleCeiba",shortName:"tele7",logo:n(118),country:n(1),link:"http://190.11.224.14:8134/liveevent.m3u8"}),window.rprog=new i({name:"Radio Progreso",shortName:"rprog",link:"http://192.99.233.46:8900/;?1513336516909.mp3",logo:n(119),country:n(1),type:"audio/mpeg",video:"audio"}),window.hrn=new i({name:"HRN",shortName:"hrn",logo:n(120),country:n(1),link:"http://radios504.geucast.net:18101/radio-live",type:"audio/mpeg",video:"audio"}),window.azteca=new i({name:"Azteca",shortName:"azteca",logo:n(121),country:n(1),link:"http://aztecalive-lh.akamaihd.net/i/0dcqjxkgx_1@502208/master.m3u8"}),window.campus=new i({name:"CampusTV",shortName:"campus",logo:n(122),country:n(1),link:"http://st2.worldkast.com/8004/8004/playlist.m3u8"}),window.once=new i({name:"Canal 11",shortName:"once",logo:n(123),country:n(1),link:"http://www.miotv.hn:1935/securelive/smil:c11.smil/chunklist_w1277053248_b1304800.m3u8"}),window.seis=new i({name:"Canal 6",shortName:"seis",logo:n(124),country:n(1),link:"https://ott.streann.com/loadbalancer/services/public/channels-secure/56bd45f5e4b0ba125fe8a866/playlist.m3u8"}),window.rt=new i({name:"RT Es",shortName:"rt",logo:n(19),country:n(20),link:"https://secure-streams.akamaized.net/rt-esp/index.m3u8"}),window.rtDoc=new i({name:"RT Doc",shortName:"rtDoc",logo:n(19),country:n(20),link:"https://secure-streams.akamaized.net/rt-doc/index.m3u8"}),window.rtAm=new i({name:"RT Am",shortName:"rtAm",logo:n(19),country:n(20),link:"https://secure-streams.akamaized.net/rt-usa/index.m3u8"}),window.twitM=new i({name:"TWiT Mobile",shortName:"twitM",logo:n(125),country:n(4),link:"http://iphone-streaming.ustream.tv/uhls/1524/streams/live/iphone/playlist.m3u8",html5:!0}),window.khou=new i({name:"KHOU",shortName:"khou",logo:n(48),country:n(4),link:"http://khou-lh.akamaihd.net/i/KHOU_Shows_1@74321/master.m3u8"}),window.msnbc=new i({name:"MSNBC",shortName:"msnbc",logo:n(126),country:n(4),link:"http://tvemsnbc-lh.akamaihd.net/i/nbcmsnbc_1@122532/master.m3u8"}),window.jazeera=new i({name:" AlJazeera",shortName:"jazeera",logo:n(127),country:n(128),link:"https://english.streaming.aljazeera.net/aljazeera/english2/index783.m3u8"}),window.bbc=new i({name:"BBC",shortName:"bbc",logo:n(129),country:n(130),link:"http://hlslive.lcdn.une.net.co/v1/AUTH_HLSLIVE/BBCW/tu1_1.m3u8"}),window.dw=new i({name:"DW Es",shortName:"dw",logo:n(49),country:n(50),link:"http://dwstream3-lh.akamaihd.net/i/dwstream3_live@124409/master.m3u8?play-only=primary"}),window.dwEn=new i({name:"DW En",shortName:"dwEn",logo:n(49),country:n(50),link:"http://dwstream4-lh.akamaihd.net/i/dwstream4_live@131329/master.m3u8?play-only=primary"}),window.hispan=new i({name:"HISPANTV",shortName:"hispan",logo:n(131),country:n(132),link:"http://178.32.255.199:1935/live/hispantv/chunklist_w1542092239.m3u8"}),window.cnn=new i({name:"CNN",shortName:"cnn",logo:n(133),country:n(51),link:"http://unlimited1-us.dps.live/cnn/cnn.smil/playlist.m3u8"}),window.caracol=new i({name:"Caracol",shortName:"caracol",logo:n(134),country:n(21),link:"http://mdstrm.com/live-stream-playlist/58dc3d471cbe05ff3c8e463e.m3u8"}),window.cbsn=new i({name:"CBSN",shortName:"cbsn",logo:n(48),country:n(4),link:"http://cbsnewshd-lh.akamaihd.net/i/CBSNHD_7@199302/master.m3u8"}),window.tve=new i({name:"rtve",shortName:"tve",logo:n(135),country:n(22),link:"http://hlsackdn_gl8-lh.akamaihd.net/i/hlsdvrlive_1@81183/master.m3u8"}),window.teleSur=new i({name:"TeleSUR",shortName:"teleSur",logo:n(136),country:n(137),link:"http://cdna.telesur.ultrabase.net/mbliveMain/ngrp:mblive_all/playlist.m3u8"}),window.une=new i({name:"UNEtv",shortName:"une",logo:n(138),country:n(1),link:"http://191.103.88.30/UNETV_HD/index.m3u8"}),window.weather=new i({name:"Weather Channel",shortName:"weather",logo:n(139),country:n(4),link:"http://weather-lh.akamaihd.net/i/twc_1@92006/master.m3u8"}),window.tv45=new i({name:"45TV",shortName:"tv45",logo:n(140),country:n(1),link:"http://www.ustream.tv/embed/19421752?html5ui=1&autoplay=true&controls=false",ustream:!0}),window.azteca13=new i({name:"Azteca",shortName:"azteca13",logo:n(141),country:n(23),link:"http://aztecalive-lh.akamaihd.net/i/0qm7cjvop_1@502476/index_3_av-p.m3u8"}),window.cableNoti=new i({name:"CableNoticias",shortName:"cableNoti",logo:n(142),country:n(21),link:"http://hlslive.lcdn.une.net.co/v1/AUTH_HLSLIVE/CNOT/tu1_1.m3u8"}),window.capital=new i({name:"Canal Capital",shortName:"capital",logo:n(143),country:n(21),link:"http://mdstrm.com/live-stream-playlist/57d01d6c28b263eb73b59a5a.m3u8"}),window.choluSat=new i({name:"CholuSat",shortName:"choluSat",logo:n(144),country:n(1),link:"http://live.audiotvserver.com:1935/livemedia/cholusat/playlist.m3u8"}),window.bloomberg=new i({name:"Bloomberg",shortName:"bloomberg",logo:n(145),country:n(4),link:"https://liveproduseast.global.ssl.fastly.net/btv/desktop/us_live.m3u8"}),window.globoTV=new i({name:"GloboTV",shortName:"globoTV",logo:n(146),country:n(1),link:"http://tv.aliasdns.info:8979/live/g13/playlist.m3u8"}),window.sexta=new i({name:"la Sexta",shortName:"sexta",logo:n(147),country:n(22),link:"http://a3live-lh.akamaihd.net/i/lasexta_1@35272/master.m3u8"}),window.telpin=new i({name:"TelPin",shortName:"telpin",logo:n(148),country:n(149),link:"http://201.219.100.30:1935/telpintv/ttv.stream_720p/playlist.m3u8"}),window.mas=new i({name:"TVMas",shortName:"mas",logo:n(150),country:n(23),link:"http://50.7.98.234:1935/rtv/videortv/chunklist.m3u8"}),window.fox=new i({name:"FOX",shortName:"fox",logo:n(151),country:n(4),link:"https://api.new.livestream.com/accounts/2363281/events/1763520/live.m3u8"}),window.peru=new i({name:"TVPeru",shortName:"peru",logo:n(152),country:n(153),link:"http://cdnh15.iblups.com/hls/irtp.m3u8"}),window.ecuador=new i({name:"Ecuador TV",shortName:"ecuador",logo:n(154),country:n(155),link:"http://api.new.livestream.com/accounts/22196143/events/6576568/live.m3u8"}),window.antena3=new i({name:"Antena 3",shortName:"antena3",logo:n(156),country:n(22),link:"http://a3live-lh.akamaihd.net/i/antena3_1@35248/index_4_av-p.m3u8"}),window.chilev=new i({name:"Chilevision",shortName:"chilev",logo:n(157),country:n(51),link:"http://chv.movil.rtsp.ztreaming.com/chvmovil2/chilevision@140569/chunklist_w787114469.m3u8"}),window.nexTV=new i({name:"NexTV",shortName:"nexTV",logo:n(158),country:n(159),link:"http://198.1.117.5:1935/live/livestream/chunklist_w1290911642.m3u8"}),window.conce=new i({name:"Once",shortName:"conce",logo:n(160),country:n(23),link:"http://live.canaloncelive.tv:1935/livepkgr2/smil:internacional.smil/master.m3u8"}),window.td=new i({name:"Todo Deportes",shortName:"td",logo:n(161),country:n(1),link:"http://190.92.0.43:1935/securelive/tdtv85jd5EKL3xWq3/chunklist_w1241310319.m3u8"}),window.hondured=new i({name:"HonduRed",shortName:"hondured",logo:n(162),country:n(1),link:"http://173.236.71.62:1935/hondured/hrtv.sdp/chunklist_w172057188.m3u8"}),window.euro=new i({name:"EuroNews",shortName:"euro",logo:n(163),country:n(164),link:"http://euronews-04.ice.infomaniak.ch/euronews-04.aac",type:"audio/mpeg",video:"audio"}),window.voces=new i({name:"Cadena Voces",shortName:"voces",logo:n(165),country:n(1),link:"http://stream.latinoradiocast.com/41a8pc4gfd5tv",type:"audio/mpeg",video:"audio"}),window.rGlobo=new i({name:"Radio Globo",shortName:"rGlobo",logo:n(166),country:n(1),link:"http://aliasdns.info:8016/;stream.mp3",type:"audio/mpeg",video:"audio"}),window.patio=new i({name:"Radio El Patio",shortName:"patio",logo:n(167),country:n(1),link:"http://195.154.182.222:25730/patio",type:"audio/mpeg",video:"audio"}),window.america=new i({name:"Radio America",shortName:"america",logo:n(168),country:n(1),link:"http://17803.live.streamtheworld.com/AMERICAAAC.aac",type:"audio/mpeg",video:"audio"}),o+='<div class="individualChannel" id="donate">\n    <div class="channelName">\n        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n            <input type="hidden" name="cmd" value="_s-xclick">\n            <input type="hidden" name="hosted_button_id" value="NWT2PUFW6NFLC">\n            <input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea.">\n            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\n        </form>\n    </div>\n</div.>\n',channelSection.innerHTML=o,window.selectedElement=channelSection.firstElementChild,window.nextElement=window.selectedElement,window.scroller=window.zenscroll.createScroller(window.channelSection,500,30)},function(e,t,n){e.exports=n.p+"./img/tsi.png?bb0894469f0082d82a45354029a6e697"},function(e,t,n){e.exports=n.p+"./img/canal5.png?901d0fee86373776ea6d1f837451c6e2"},function(e,t,n){e.exports=n.p+"./img/ten.png?f0870004865c96a5feb1e213ad65dc89"},function(e,t,n){e.exports=n.p+"./img/hch.png?3c790f028df9515e716ccd938f4459d9"},function(e,t,n){e.exports=n.p+"./img/teleceiba.png?f7dd4ee2d681fbef9165d4c453f11296"},function(e,t,n){e.exports=n.p+"./img/radioProgreso.png?8a0251d810e737af0074613612af2c48"},function(e,t,n){e.exports=n.p+"./img/hrn.jpg?aed4ed07f6ce3df1edc3873a2343646b"},function(e,t,n){e.exports=n.p+"./img/azteca.png?d93a9dc3c9ff6cf0556a43ebc1ca61eb"},function(e,t,n){e.exports=n.p+"./img/campustv.png?3a1f6b63a29ec7080108797560ec11ce"},function(e,t,n){e.exports=n.p+"./img/canal11.png?25f335b9080fc3e45ecc22228e76e2e5"},function(e,t,n){e.exports=n.p+"./img/canal6.png?ba2203c087f6c06ea34ec7ee53453611"},function(e,t,n){e.exports=n.p+"./img/twit.svg?7d3dab1c552c5f2f5f5566b501b8571d"},function(e,t,n){e.exports=n.p+"./img/msnbc.png?4bca2bfeba9803d26b77ebb2687a93d9"},function(e,t,n){e.exports=n.p+"./img/jazeera.svg?1b8aefe053a072b8bfc80d08ea5d874b"},function(e,t,n){e.exports=n.p+"./img/qatar.svg?ab51fefc91b14d1c8173b3dca977745d"},function(e,t,n){e.exports=n.p+"./img/bbc.svg?15511ca386348d3e2006a87d4e042804"},function(e,t,n){e.exports=n.p+"./img/england.svg?e1fc5c82fdd9316a6114baa3f2a28f58"},function(e,t,n){e.exports=n.p+"./img/hispantv.png?29d2defce5ff995fc1e7c921c570d6ac"},function(e,t,n){e.exports=n.p+"./img/iran.svg?5445a5a1fcfccc3ea1ce748ef5d91991"},function(e,t,n){e.exports=n.p+"./img/cnnChile.svg?e9d08fb0afca3dbfdb76c03fe27bd628"},function(e,t,n){e.exports=n.p+"./img/caracol.png?8564c32db7825b7722f4fc50989e5a79"},function(e,t,n){e.exports=n.p+"./img/tve.svg?2e570e1aec597a2f9bb8e8b604563acf"},function(e,t,n){e.exports=n.p+"./img/telesur.svg?4e0d8ac6d56322ea7c52e36ef39ad9d5"},function(e,t,n){e.exports=n.p+"./img/venezuela.svg?779b8965ebcfa8bfd0724007ec269df8"},function(e,t,n){e.exports=n.p+"./img/une.jpg?d016f45bd150bd87cbd3765eea01f271"},function(e,t,n){e.exports=n.p+"./img/weather.svg?d61bd628efced925efacecd63f66dcae"},function(e,t,n){e.exports=n.p+"./img/45tv.png?5b3b058e9540ad0de5ee7a9357158814"},function(e,t,n){e.exports=n.p+"./img/azteca13.png?d4d5ac277c434e13a1bf246b77b856fc"},function(e,t,n){e.exports=n.p+"./img/cablenoticias.png?ddc5b68a4dd91a683a1cdad17fd25fad"},function(e,t,n){e.exports=n.p+"./img/capital.svg?7a02880612d5dd3c1b87a257af5b65c7"},function(e,t,n){e.exports=n.p+"./img/cholusat.png?e3aebe7f7198053c3bdae82e118aa9cc"},function(e,t,n){e.exports=n.p+"./img/bloomberg.svg?872d5e1a128916e5d9a05699474a1a05"},function(e,t,n){e.exports=n.p+"./img/globoTV.png?2b9ff6a803be42df7eb9d28d0a838488"},function(e,t,n){e.exports=n.p+"./img/sexta.svg?e3615cb727cc8dc05b8d3791fe0424ad"},function(e,t,n){e.exports=n.p+"./img/telpin.png?530b5cca14a6c45ef1c41cd88c4687b3"},function(e,t,n){e.exports=n.p+"./img/argentina.svg?3caf28344562066330e971db74f98ecb"},function(e,t,n){e.exports=n.p+"./img/tvmas.jpg?f1af0117a85c8fb9fc3f319e2c1d01c0"},function(e,t,n){e.exports=n.p+"./img/fox.svg?0c785292e638b0ec057014bc3c99b69e"},function(e,t,n){e.exports=n.p+"./img/tvperu.png?ac4d9b10e460bca48527edcc301fae58"},function(e,t,n){e.exports=n.p+"./img/peru.svg?a3855d5b76c478e227e09117957ca4cd"},function(e,t,n){e.exports=n.p+"./img/ecuadortv.png?c0e2a11f14acb62d43509b4ddbe3f091"},function(e,t,n){e.exports=n.p+"./img/ecuador.svg?8407dec6e3f02f4b76bdbe12b7bae2e3"},function(e,t,n){e.exports=n.p+"./img/antena3.svg?6ebf8fa73be74ac9b2360095a822efd9"},function(e,t,n){e.exports=n.p+"./img/chilevision.png?59bc7793183bca0a798b7f31959a2e8e"},function(e,t,n){e.exports=n.p+"./img/nex.png?f84207466d75ab43710ca3f88ab2f04b"},function(e,t,n){e.exports=n.p+"./img/panama.svg?c5c0c6dcbd8d173e2f8fb5827bfe9a1b"},function(e,t,n){e.exports=n.p+"./img/once.png?454b2b576f9bd9a228576de1b9d6810d"},function(e,t,n){e.exports=n.p+"./img/td.png?220e14ca335c67bf6b979e6a4db00b96"},function(e,t,n){e.exports=n.p+"./img/hondured.png?ecb1aaf6dec33680508c1778f6e5b2d8"},function(e,t,n){e.exports=n.p+"./img/euro.svg?6393a5dbddeee27aa80a38e0d5be5de3"},function(e,t,n){e.exports=n.p+"./img/france.svg?c6ad3636055d0b5a84bae6ba5f70ce6f"},function(e,t,n){e.exports=n.p+"./img/rcv.png?c5e626e9797e02866e9b312241b5822e"},function(e,t,n){e.exports=n.p+"./img/radioGlobo.png?32ad18d4b80f9f63a575f2fbc54167e7"},function(e,t,n){e.exports=n.p+"./img/patio.jpg?c248e7465eda97a23d13dd3c88b575af"},function(e,t,n){e.exports=n.p+"./img/radioAmerica.png?30386a0f9b95c7e930f95364450a7d9a"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(25),i=n.n(o);const a=document.getElementById("fullscreenButton"),r=document.getElementById("full");window.goFull=function(){null!==i.a.fullscreenElement?i.a.exitFullscreen():i.a.requestFullscreen(r)},a.addEventListener("click",goFull),document.addEventListener("keydown",e=>{const t=e.key;switch(!0===window.test&&window.falseTest(),window.selectedElement||(window.selectedElement=window.currentElement),null===window.currentElement&&(window.selectedElement=window.nextElement),window.nextElement=selectedElement.nextElementSibling,window.previousElement=selectedElement.previousElementSibling,t){case"Up":e.preventDefault(),e.stopPropagation(),"channelSection"===window.previousElement.parentElement.id&&(window.selectedElement.classList.remove("selectedElement"),window.selectedElement=window.previousElement,window.selectedElement.classList.add("selectedElement"),window.nextElement=selectedElement.nextElementSibling,window.previousElement=selectedElement.previousElementSibling,window.scroller.center(window.selectedElement,480,0));break;case"ArrowUp":e.preventDefault(),e.stopPropagation(),"channelSection"===window.previousElement.parentElement.id&&(window.selectedElement.classList.remove("selectedElement"),window.selectedElement=window.previousElement,window.selectedElement.classList.add("selectedElement"),window.nextElement=window.selectedElement.nextElementSibling,window.previousElement=window.selectedElement.previousElementSibling,window.scroller.center(window.selectedElement,480,0));break;case"Down":case"ArrowDown":e.preventDefault(),e.stopPropagation(),"channelSection"===window.nextElement.parentElement.id&&(window.selectedElement.classList.remove("selectedElement"),window.selectedElement=window.nextElement,window.selectedElement.classList.add("selectedElement"),window.nextElement=window.selectedElement.nextElementSibling,window.previousElement=window.selectedElement.previousElementSibling,window.scroller.center(window.selectedElement,480,0));break;case"Right":case"ArrowRight":toggleChannels();break;case"Enter":e.preventDefault(),e.stopPropagation(),window.selectedElement.click(),window.selectedElement.classList.remove("selectedElement");break;case"f":case"Left":case"ArrowLeft":e.preventDefault(),e.stopPropagation(),goFull();break;case" ":e.preventDefault(),e.stopPropagation(),player.paused()?player.play():player.pause(),window.scroller.center(window.selectedElement,480,0)}})}],[105]);
//# sourceMappingURL=app.js.map?17ca7e77b823640f5c7e