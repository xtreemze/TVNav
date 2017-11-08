webpackJsonp([1],{

/***/ "+mm6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/colombia.14d012867c7fab9aa745e9b9420cbd0d.svg";

/***/ }),

/***/ "/6a/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/hondured.10aa8bd1b6399cc8bca7075694f6c30b.png";

/***/ }),

/***/ "/OK1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/qatar.ab51fefc91b14d1c8173b3dca977745d.svg";

/***/ }),

/***/ "/QXh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime__ = __webpack_require__("t8iB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_video_js__ = __webpack_require__("Dia2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_video_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_video_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_videojs_contrib_hls__ = __webpack_require__("Jg0P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_videojs_contrib_hls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_videojs_contrib_hls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_zenscroll__ = __webpack_require__("k9Ba");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_zenscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_zenscroll__);


__WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime__["install"]({
  onInstalled: function() {
    h1Title.innerText = "Actualizado | TVNav";
  },

  onUpdating: function() {
    h1Title.innerText = "Actualizando... | TVNav";
  },

  onUpdateReady: function() {
    OfflinePlugin.applyUpdate();
  },
  onUpdated: function() {
    h1Title.innerText = "Reiniciando";
    setTimeout(function() {
      window.location.reload();
    }, 10000);
  }
});


__webpack_require__("4CPX");
// import "videojs-contrib-hls";
window.videojs = __WEBPACK_IMPORTED_MODULE_1_video_js___default.a;


// require("!style-loader!css-loader!video.js/dist/video-js.css");

window.zenscroll = __WEBPACK_IMPORTED_MODULE_3_zenscroll___default.a;
// import videojs-flash from "videojs-flash";
// import video-contrib-hls from "videojs-contrib-hls";
__webpack_require__("5kpA");
// require("smoothscroll-polyfill").polyfill();
const videoSection = document.getElementById("videoSection");
const channelSection = document.getElementById("channelSection");
const h1Title = document.getElementById("h1Title");
const main = document.getElementById("main");

window.falseTest = function() {
  if (window.test === true) {
    window.test = false;
    window.clearTimeout(window.channelTestTimer);
  }
  if (!__WEBPACK_IMPORTED_MODULE_1_video_js___default.a.players.videoContainer2 === false) {
    __WEBPACK_IMPORTED_MODULE_1_video_js___default.a.players.videoContainer2.pause();
    __WEBPACK_IMPORTED_MODULE_1_video_js___default.a.players.videoContainer2.dispose();
  }
  if (window.initialVideoSection) {
    document.getElementById("initialVideoSection").remove();
    updateVideo(earth);
  }
};

channelSection.addEventListener(
  "wheel",
  function wheel() {
    if (window.test === true) {
      window.falseTest();
    }
    channelSection.removeEventListener("wheel", wheel(), false);
  },
  false
);

channelSection.addEventListener(
  "touchstart",
  function touchstart() {
    if (window.test === true) {
      window.falseTest();
    }
    channelSection.removeEventListener("touchstart", touchstart(), false);
  },
  false
);

window.addEventListener("resize", function() {
  if (window.player) {
    window.player.width(window.innerWidth);
    window.player.height(window.innerHeight);
  }
  if (window.player2) {
    window.player2.width(window.innerWidth);
    window.player2.height(window.innerHeight);
  }
});
window.addEventListener("orientationchange", function() {
  if (window.player) {
    window.player.width(window.innerWidth);
    window.player.height(window.innerHeight);
  }
  if (window.player2) {
    window.player2.width(window.innerWidth);
    window.player2.height(window.innerHeight);
  }
});
window.toggleChannels = function() {
  channelSection.classList.toggle("inactiveChannels");
};

window.updateVideo = function(channel) {
  if (channel.logo) {
    window.channelLogo.classList.remove("fadeIn");
    window.channelLogo.classList.add("fadeOut");
    setTimeout(function() {
      window.channelLogo.classList.remove("fadeOut");
      window.channelLogo.innerHTML = `<img src="${channel.logo}">`;
      window.channelLogo.classList.add("fadeIn");
    }, 500);
  } else {
    window.channelLogo.innerHTML = ``;
  }
  if (!window.currentElement === false) {
    window.currentElement.classList.remove("active");
  }
  if (!__WEBPACK_IMPORTED_MODULE_1_video_js___default.a.players.videoContainer === false && !window.player === false) {
    __WEBPACK_IMPORTED_MODULE_1_video_js___default.a.players.videoContainer.pause();
    __WEBPACK_IMPORTED_MODULE_1_video_js___default.a.players.videoContainer.dispose();
  }
  // poster="../img/bars.png"
  if (navigator.onLine && !channel.ustream) {
    videoSection.innerHTML = `<${channel.video} controls id="videoContainer" preload="auto" autoplay muted class="video-js vjs-default-skin vjs-big-play-centered">
    <source src=${channel.link} type=${channel.type} data=${channel.data}>
</${channel.video}>
`;
    window.player = __WEBPACK_IMPORTED_MODULE_1_video_js___default()("videoContainer", {
      sourceOrder: true,
      techOrder: ["html5", "flash"],
      html5: {
        hls: {
          withCredentials: false
        }
      },
      flash: {
        hls: {
          withCredentials: false
        }
      }
    });
    if (window.player) {
      window.player.width(window.innerWidth);
      window.player.height(window.innerHeight);
      if (!channel.ustream) {
        setTimeout(function() {
          window.player.muted(!"setMuted");
        }, 200);
      }
    }
    window.currentElement = document.getElementById(channel.shortName);
    window.currentElement.classList.add("active");
    window.scroller.center(window.currentElement, 480, 0);
    // window.currentElement.scrollIntoView({
    //   block: "center",
    //   inline: "nearest",
    //   behavior: "smooth"
    // });
  } else if (navigator.onLine && channel.ustream) {
    if (!__WEBPACK_IMPORTED_MODULE_1_video_js___default.a.players.videoContainer === false && !window.player === false) {
      window.currentElement.classList.remove("active");
      __WEBPACK_IMPORTED_MODULE_1_video_js___default.a.players.videoContainer.pause();
      __WEBPACK_IMPORTED_MODULE_1_video_js___default.a.players.videoContainer.dispose();
    }

    if (navigator.onLine) {
      videoSection.innerHTML = `<iframe autoplay="true" showtitle="false" allowfullscreen="false" webkitallowfullscreen="false" scrolling="no" frameborder="0"
      width="${window.innerWidth}" height="${window.innerHeight}" id="video" src="${channel.link}?html5ui=1&autoplay=true&controls=false">
      </iframe>
      `;
      // window.addEventListener("resize", function() {
      //   if (window.video) {
      //     window.video.width = window.innerWidth;
      //     window.video.height = window.innerHeight;
      //   }
      // });
      window.currentElement = document.getElementById(channel.shortName);
      window.currentElement.classList.add("active");
    }
    document.title = channel.name + " | TVNav";
    h1Title.innerText = channel.name + " | TVNav";
    // setTimeout(function() {
    //   window.video.click();
    // }, 1000);
  }

  window.selectedElement = window.currentElement;
  document.title = channel.name + " | TVNav";
  h1Title.innerText = channel.name + " | TVNav";
  window.player.on("error", function() {
    let element = document.getElementById(channel.shortName);

    element.classList.add("deleteChannel");
    document.title = "Eliminando: " + channel.name;
    h1Title.innerText = "Eliminando: " + channel.name;
    Channels.delete(channel);
    console.log("Eliminando: " + channel.name);
    window.selectedElement = window.nextElement;
    window.selectedElement.classList.add("selectedElement");
    setTimeout(function() {
      element.remove();
    }, 1001);
  });
};

const channelTest = function(pass) {
  if (navigator.onLine) {
    window.test = true;
    let timer = 1200;
    if (pass) {
      Channels.forEach(function(channel) {
        timer += 480;
        window.channelTestTimer = window.setTimeout(function() {
          if (window.test === true && !channel.ustream) {
            if (channel.logo) {
              setTimeout(function() {
                window.channelLogo.innerHTML = `<img src="${channel.logo}">`;
              }, 5);
            } else {
              window.channelLogo.innerHTML = ``;
            }
            if (!window.currentElement === false) {
              window.currentElement.classList.remove("active");
            }
            if (
              !__WEBPACK_IMPORTED_MODULE_1_video_js___default.a.players.videoContainer === false &&
              !window.player === false
            ) {
              __WEBPACK_IMPORTED_MODULE_1_video_js___default.a.players.videoContainer.pause();
              __WEBPACK_IMPORTED_MODULE_1_video_js___default.a.players.videoContainer.dispose();
            }
            // poster="../img/bars.png"
            if (navigator.onLine && !channel.ustream) {
              videoSection.innerHTML = `<${channel.video} controls id="videoContainer" preload="auto" autoplay muted class="video-js vjs-default-skin">
            <source src=${channel.link} type=${channel.type} data=${channel.data}>
        </${channel.video}>
        `;
              window.player = __WEBPACK_IMPORTED_MODULE_1_video_js___default()(
                "videoContainer",
                {
                  sourceOrder: true,
                  techOrder: ["html5", "flash"],
                  html5: {
                    hls: {
                      withCredentials: false
                    }
                  },
                  flash: {
                    hls: {
                      withCredentials: false
                    }
                  }
                },
                function() {
                  if (window.player) {
                    window.player.width(window.innerWidth);
                    window.player.height(window.innerHeight);
                    if (!channel.ustream) {
                      setTimeout(function() {
                        window.player.muted(!"setMuted");
                      }, 250);
                    }
                  }
                }
              );
              window.currentElement = document.getElementById(
                channel.shortName
              );
              window.currentElement.classList.add("active");
              window.scroller.center(window.currentElement, 260, 0);
              // window.currentElement.scrollIntoView({
              //   block: "center",
              //   inline: "nearest",
              //   behavior: "smooth"
              // });
            }
            // document.title = "Revisando: " + channel.name;
            h1Title.innerText = "Revisando: " + channel.name;
          } else if (window.test === true && channel.ustream) {
            if (channel.logo) {
              window.channelLogo.innerHTML = `<img src="${channel.logo}">`;
            } else {
              window.channelLogo.innerHTML = ``;
            }
            if (!window.currentElement === false) {
              window.currentElement.classList.remove("active");
            }
            window.currentElement = document.getElementById(channel.shortName);
            window.currentElement.classList.add("active");
            window.scroller.center(window.currentElement, 260, 0);
            // window.currentElement.scrollIntoView({
            //   block: "center",
            //   inline: "nearest",
            //   behavior: "smooth"
            // });
            // document.title = "Revisando: " + channel.name;
            // h1Title.innerText = "Revisando: " + channel.name;
          } else if (window.test === false) {
            window.clearTimeout(window.finalVideo);
          }
        }, timer);
      }, this);
    }
    if (pass > 1) {
      Channels.forEach(function(channel) {
        timer += 1001;
        window.channelTestTimer = window.setTimeout(function() {
          if (window.test === true && !channel.ustream) {
            updateVideo(channel);
            // window.player.width(0);
            // window.player.height(0);
            document.title = "Revisando: " + channel.name;
            h1Title.innerText = "Revisando: " + channel.name;
          } else if (window.test === true && channel.ustream) {
            if (channel.logo) {
              window.channelLogo.classList.remove("fadeIn");
              window.channelLogo.classList.add("fadeOut");
              setTimeout(function() {
                window.channelLogo.classList.remove("fadeOut");
                window.channelLogo.innerHTML = `<img src="${channel.logo}">`;
                window.channelLogo.classList.add("fadeIn");
              }, 500);
            } else {
              window.channelLogo.innerHTML = ``;
            }
            if (!window.currentElement === false) {
              window.currentElement.classList.remove("active");
            }
            window.currentElement = document.getElementById(channel.shortName);

            window.currentElement.classList.add("active");
            window.scroller.center(window.currentElement, 480, 0);
            // window.currentElement.scrollIntoView({
            //   block: "center",
            //   inline: "nearest",
            //   behavior: "smooth"
            // });
            // window.player.width(0);
            // window.player.height(0);
            // document.title = "Revisando: " + channel.name;
            h1Title.innerText = "Revisando: " + channel.name;
          } else if (window.test === false) {
            window.clearTimeout(window.finalVideo);
          }
        }, timer);
      }, this);
    }
    window.finalVideo = setTimeout(function() {
      window.channelLogo.classList.remove("fadeIn");
      window.channelLogo.classList.add("fadeOut");
      setTimeout(function() {
        window.channelLogo.classList.remove("fadeOut");
        window.channelLogo.innerHTML = `<img src="${earth.logo}">`;
        window.channelLogo.classList.add("fadeIn");
      }, 500);

      if (!window.currentElement === false) {
        window.currentElement.classList.remove("active");
      }
      if (
        !__WEBPACK_IMPORTED_MODULE_1_video_js___default.a.players.videoContainer === false &&
        !window.player === false
      ) {
        __WEBPACK_IMPORTED_MODULE_1_video_js___default.a.players.videoContainer.pause();
        __WEBPACK_IMPORTED_MODULE_1_video_js___default.a.players.videoContainer.dispose();
      }
      window.currentElement = document.getElementById(earth.shortName);
      window.selectedElement = window.currentElement;
      document.title = earth.name + " | TVNav";
      h1Title.innerText = earth.name + " | TVNav";
      window.currentElement.classList.add("active");
      window.scroller.center(window.currentElement, 480, 0);
      // window.currentElement.scrollIntoView({
      //   block: "center",
      //   inline: "nearest",
      //   behavior: "smooth"
      // });
      setTimeout(function() {
        // Functions after testing ends
        toggleChannels();
        window.falseTest();
      }, 1005);
    }, timer + 1001);
  }
};

const initVideo = function(channel) {
  if (navigator.onLine && !channel.ustream) {
    initialVideoSection.innerHTML = `<${channel.video} controls id="videoContainer2" preload="auto" autoplay muted class="video-js vjs-default-skin">
  <source src=${channel.link} type=${channel.type} data=${channel.data}>
</${channel.video}>
`;
    window.player2 = __WEBPACK_IMPORTED_MODULE_1_video_js___default()(
      "videoContainer2",
      {
        sourceOrder: true,
        techOrder: ["html5", "flash"],
        html5: {
          hls: {
            withCredentials: false
          }
        },
        flash: {
          hls: {
            withCredentials: false
          }
        }
      },
      function() {
        if (window.player2) {
          window.player2.width(window.innerWidth);
          window.player2.height(window.innerHeight);
          if (!channel.ustream) {
            setTimeout(function() {
              window.player2.muted(!"setMuted");
            }, 1001);
          }
        }
      }
    );
  }
};
window.addEventListener("load", function() {
  // videojs.players.videoContainer2.dispose();
  // falseTest();
  // setTimeout(function() {
  // updateVideo(earth);
  // }, 500);
  initVideo(earth);
  channelTest(1);

  // toggleChannels();
  // updateVideo(tsi);
});
__webpack_require__("2q9H");


/***/ }),

/***/ "/VK1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/vtv.109531fba3fc426e7e8e0d3df3fca9c1.png";

/***/ }),

/***/ "/y8H":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("GCRd");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("MTIv")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!./master.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!./master.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "1Kep":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/rtv.0b734d9589d1dfca1fa1507303198e2f.png";

/***/ }),

/***/ "1y2w":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/russia.14814a48e7284c087eaa9c44fb581302.svg";

/***/ }),

/***/ "2O6T":
/***/ (function(module, exports, __webpack_require__) {

// require("./js/keyboard.js");
// require("./logos/channels.js");
// require("./indexB.html");
// require("./css/video-js.min.css");
// require("./node_modules/video.js/dist/video-js.css");
__webpack_require__("g3Gj");
__webpack_require__("/y8H");
__webpack_require__("/QXh");


/***/ }),

/***/ "2q9H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fscreen__ = __webpack_require__("g6R2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fscreen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fscreen__);

// import zenscroll from "zenscroll";
// require("smoothscroll-polyfill").polyfill();

const fullscreenButton = document.getElementById("fullscreenButton");
const full = document.getElementById("full");
window.goFull = function() {
  if (__WEBPACK_IMPORTED_MODULE_0_fscreen___default.a.fullscreenElement !== null) {
    __WEBPACK_IMPORTED_MODULE_0_fscreen___default.a.exitFullscreen();
    // channelSection.classList.remove("inactiveChannels");
  } else {
    __WEBPACK_IMPORTED_MODULE_0_fscreen___default.a.requestFullscreen(full);
    // channelSection.classList.add("inactiveChannels");
  }
  // if (window.player) {
  //   window.player.width(window.innerWidth);
  //   window.player.height(window.innerHeight);
  // }
  // if (window.player2) {
  //   window.player2.width(window.innerWidth);
  //   window.player2.height(window.innerHeight);
  // }
};
fullscreenButton.addEventListener("click", goFull);
// Keyboard commands
document.addEventListener("keydown", event => {
  const keyName = event.key;
  if (window.test === true) {
    window.falseTest();
  }
  // console.log(keyName);
  // console.log(event);
  if (!window.selectedElement) {
    window.selectedElement = window.currentElement;
  }
  if (window.currentElement === null) {
    window.selectedElement = window.nextElement;
  }
  window.nextElement = selectedElement.nextElementSibling;
  window.previousElement = selectedElement.previousElementSibling;
  switch (keyName) {
    case "Up":
      event.preventDefault();
      event.stopPropagation();
      if (window.previousElement.parentElement.id === "channelSection") {
        window.selectedElement.classList.remove("selectedElement");
        window.selectedElement = window.previousElement;
        window.selectedElement.classList.add("selectedElement");
        window.nextElement = selectedElement.nextElementSibling;
        window.previousElement = selectedElement.previousElementSibling;
        window.scroller.center(window.selectedElement, 480, 0);
        // window.selectedElement.scrollIntoView({
        //   block: "center",
        //   inline: "nearest",
        //   behavior: "smooth"
        // });
      }

      break;
    case "ArrowUp":
      event.preventDefault();
      event.stopPropagation();
      if (window.previousElement.parentElement.id === "channelSection") {
        window.selectedElement.classList.remove("selectedElement");
        window.selectedElement = window.previousElement;
        window.selectedElement.classList.add("selectedElement");
        window.nextElement = window.selectedElement.nextElementSibling;
        window.previousElement = window.selectedElement.previousElementSibling;
        window.scroller.center(window.selectedElement, 480, 0);
        // window.selectedElement.scrollIntoView({
        //   block: "center",
        //   inline: "nearest",
        //   behavior: "smooth"
        // });
      }

      break;
    case "Down":
      event.preventDefault();
      event.stopPropagation();
      if (window.nextElement.parentElement.id === "channelSection") {
        window.selectedElement.classList.remove("selectedElement");
        window.selectedElement = window.nextElement;
        window.selectedElement.classList.add("selectedElement");
        window.nextElement = window.selectedElement.nextElementSibling;
        window.previousElement = window.selectedElement.previousElementSibling;
        window.scroller.center(window.selectedElement, 480, 0);
        // window.selectedElement.scrollIntoView({
        //   block: "center",
        //   inline: "nearest",
        //   behavior: "smooth"
        // });
      }
      break;
    case "ArrowDown":
      event.preventDefault();
      event.stopPropagation();
      if (window.nextElement.parentElement.id === "channelSection") {
        window.selectedElement.classList.remove("selectedElement");
        window.selectedElement = window.nextElement;
        window.selectedElement.classList.add("selectedElement");
        window.nextElement = window.selectedElement.nextElementSibling;
        window.previousElement = window.selectedElement.previousElementSibling;
        window.scroller.center(window.selectedElement, 480, 0);
        // window.selectedElement.scrollIntoView({
        //   block: "center",
        //   inline: "nearest",
        //   behavior: "smooth"
        // });
      }
      break;
    case "Right":
      toggleChannels();
      break;
    case "ArrowRight":
      toggleChannels();
      break;
    case "Enter":
      event.preventDefault();
      event.stopPropagation();
      window.selectedElement.click();
      window.selectedElement.classList.remove("selectedElement");
      break;
    case "f":
      event.preventDefault();
      event.stopPropagation();
      goFull();
      break;
    case "Left":
      event.preventDefault();
      event.stopPropagation();
      goFull();
      break;
    case "ArrowLeft":
      event.preventDefault();
      event.stopPropagation();
      goFull();
      break;
    case " ":
      event.preventDefault();
      event.stopPropagation();
      if (player.paused()) {
        player.play();
      } else {
        player.pause();
      }
      window.scroller.center(window.selectedElement, 480, 0);
      // window.selectedElement.scrollIntoView({
      //   block: "center",
      //   inline: "nearest",
      //   behavior: "smooth"
      // });
      break;
    default:
      break;
  }
});


/***/ }),

/***/ "34sM":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/euro.6393a5dbddeee27aa80a38e0d5be5de3.svg";

/***/ }),

/***/ "3ItY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/patio.d2effa51b08b77f63f6e66d209bcea97.jpg";

/***/ }),

/***/ "3M2x":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/argentina.3caf28344562066330e971db74f98ecb.svg";

/***/ }),

/***/ "4bjr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/azteca.5814f825e479774d179174f898839c82.png";

/***/ }),

/***/ "5ZtY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/spain.48f5989c7f98c3cabae7cadd8c9e5da8.svg";

/***/ }),

/***/ "5eGp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/cablenoticias.8e808f375424d8413f98037e021492f0.png";

/***/ }),

/***/ "5kpA":
/***/ (function(module, exports, __webpack_require__) {

// Declare Channel Class
window.Channels = new Set();
// Create Channels
let channelList = "";

class Channel {
  constructor({
    name,
    shortName,
    link,
    type,
    video,
    data,
    ustream,
    logo,
    country
  }) {
    this.name = name;
    this.shortName = shortName;
    this.link = link;
    this.type = type;
    this.video = video;
    this.logo = logo;
    this.country = country;
    this.ustream = ustream;
    if (!type) {
      this.type = "application/x-mpegURL";
    } else {
      this.type = type;
    }
    if (!video) {
      this.video = "video";
    } else {
      this.video = "audio";
    }
    if (data == "undefined") {
      this.data = "{}";
    } else if (!data === false) {
      this.data = data;
    }
    channelList += `<div onclick="window.falseTest(); window.updateVideo(${shortName});" class="individualChannel pointer" id=${shortName}>
    <span class="channelName">
        ${name}
    </span>
<div class="flagContainer">
    <img class="countryFlag" src="${country}">
</div>
</div>
`;
    this.element = document.getElementById(this.shortName);
    // document.addEventListener("click", this.element.scrollIntoView());
    Channels.add(this);
  }
}

window.earth = new Channel({
  name: "EarthTV",
  shortName: "earth",
  logo: __webpack_require__("N7Tp"),
  country: __webpack_require__("wqWJ"),
  link:
    "https://cdn-liveonearth.global.ssl.fastly.net/cdnedge/smil:TWL-es.smil/playlist.m3u8"
  // ?599d9478bbf047685d049e82"
});

window.tsi = new Channel({
  name: "TSi",
  shortName: "tsi",
  logo: __webpack_require__("dqZP"),
  country: __webpack_require__("Itf3"),
  link:
    "https://trinity-lh.akamaihd.net/i/TelevicentroLive1_d@17977/master.m3u8"
});

window.tn5 = new Channel({
  name: "TN5",
  shortName: "tn5",
  logo: __webpack_require__("Y8D2"),
  country: __webpack_require__("Itf3"),
  link:
    "https://trinity-lh.akamaihd.net/i/TelevicentroLive2_d@508538/master.m3u8"
});

window.ten = new Channel({
  name: "TEN",
  shortName: "ten",
  logo: __webpack_require__("tH8T"),
  country: __webpack_require__("Itf3"),
  link: "http://stream.grupoabchn.com:1935/TENHD/TENLive.smil/playlist.m3u8"
});

window.hch = new Channel({
  name: "HCH",
  shortName: "hch",
  logo: __webpack_require__("62vH"),
  country: __webpack_require__("Itf3"),
  link: "http://stream.innovandote.com/hch/hch/playlist.m3u8"
});

window.globoTV = new Channel({
  name: "GloboTV",
  shortName: "globoTV",
  logo: __webpack_require__("bFJS"),
  country: __webpack_require__("Itf3"),
  link: "http://tv.aliasdns.info:8979/live/g13/playlist.m3u8"
});

window.tv45 = new Channel({
  name: "45TV",
  shortName: "tv45",
  logo: __webpack_require__("TDdq"),
  country: __webpack_require__("Itf3"),
  link: "http://www.ustream.tv/embed/19421752",
  ustream: true
});

window.tele7 = new Channel({
  name: "TeleCeiba",
  shortName: "tele7",
  logo: __webpack_require__("vnoX"),
  country: __webpack_require__("Itf3"),
  link: "http://190.11.224.14:8134/liveevent.m3u8"
});

window.once = new Channel({
  name: "Canal 11",
  shortName: "once",
  logo: __webpack_require__("YtPL"),
  country: __webpack_require__("Itf3"),
  link:
    "http://www.miotv.hn:1935/securelive/smil:c11.smil/chunklist_w1277053248_b1304800.m3u8"
});

window.azteca = new Channel({
  name: "Azteca",
  shortName: "azteca",
  logo: __webpack_require__("4bjr"),
  country: __webpack_require__("Itf3"),
  link: "http://aztecalive-lh.akamaihd.net/i/0dcqjxkgx_1@502208/master.m3u8"
});

window.campus = new Channel({
  name: "CampusTV",
  shortName: "campus",
  logo: __webpack_require__("ruwY"),
  country: __webpack_require__("Itf3"),
  link: "http://st2.worldkast.com/8004/8004/playlist.m3u8"
});

window.rt = new Channel({
  name: "RT",
  shortName: "rt",
  logo: __webpack_require__("g7ap"),
  country: __webpack_require__("1y2w"),
  link: "https://secure-streams.akamaized.net/rt-esp/index800.m3u8"
});

window.caracol = new Channel({
  name: "Caracol",
  shortName: "caracol",
  logo: __webpack_require__("udDS"),
  country: __webpack_require__("+mm6"),
  link: "http://mdstrm.com/live-stream-playlist/58dc3d471cbe05ff3c8e463e.m3u8"
  // ustream: true
});

window.teleSur = new Channel({
  name: "TeleSUR",
  shortName: "teleSur",
  logo: __webpack_require__("z301"),
  country: __webpack_require__("mb/G"),
  link:
    "http://cdna.telesur.ultrabase.net/mbliveMain/ngrp:mblive_all/playlist.m3u8"
});

window.telpin = new Channel({
  name: "TelPin",
  shortName: "telpin",
  logo: __webpack_require__("QS4G"),
  country: __webpack_require__("3M2x"),
  link: "http://201.219.100.30:1935/telpintv/ttv.stream_720p/playlist.m3u8"
});

window.sexta = new Channel({
  name: "la Sexta",
  shortName: "sexta",
  logo: __webpack_require__("6QUT"),
  country: __webpack_require__("5ZtY"),
  link: "http://a3live-lh.akamaihd.net/i/lasexta_1@35272/master.m3u8"
});

window.neox = new Channel({
  name: "neox",
  shortName: "neox",
  logo: __webpack_require__("h0at"),
  country: __webpack_require__("5ZtY"),
  link: "http://a3live-lh.akamaihd.net/i/nxhds/geoneox_1@35261/master.m3u8"
});

window.nova = new Channel({
  name: "nova",
  shortName: "nova",
  logo: __webpack_require__("zOEH"),
  country: __webpack_require__("5ZtY"),
  link:
    "http://a3live-lh.akamaihd.net/i/nvhds/geonova_1@379404/index_4_av-b.m3u8"
  // ?sd=10&rebase=on"
});

window.cnn = new Channel({
  name: "CNN",
  shortName: "cnn",
  logo: __webpack_require__("rz5r"),
  country: __webpack_require__("WTv4"),
  link: "http://unlimited1-us.dps.live/cnn/cnn.smil/playlist.m3u8"
});

window.tve = new Channel({
  name: "TVE",
  shortName: "tve",
  logo: __webpack_require__("PlOX"),
  country: __webpack_require__("5ZtY"),
  link: "http://hlsackdn_gl8-lh.akamaihd.net/i/hlsdvrlive_1@81183/master.m3u8"
});

window.dw = new Channel({
  name: "DW",
  shortName: "dw",
  logo: __webpack_require__("SU8/"),
  country: __webpack_require__("wqWJ"),
  link:
    "http://dwstream3-lh.akamaihd.net/i/dwstream3_live@124409/index_5_av-p.m3u8"
  // ?sd=10&rebase=on"
});

window.msnbc = new Channel({
  name: "MSNBC",
  shortName: "msnbc",
  logo: __webpack_require__("WP2S"),
  country: __webpack_require__("ayjR"),
  link: "http://tvemsnbc-lh.akamaihd.net/i/nbcmsnbc_1@122532/master.m3u8"
});

window.bloomberg = new Channel({
  name: "Bloomberg",
  shortName: "bloomberg",
  logo: __webpack_require__("HVs3"),
  country: __webpack_require__("ayjR"),
  link: "http://live-bloomberg-us-east.global.ssl.fastly.net/us/us3_live.m3u8"
});

window.jazeera = new Channel({
  name: " AlJazeera",
  shortName: "jazeera",
  logo: __webpack_require__("XLot"),
  country: __webpack_require__("/OK1"),
  link:
    "https://english.streaming.aljazeera.net/aljazeera/english2/index783.m3u8"
});

window.twit = new Channel({
  name: "TWiT",
  shortName: "twit",
  logo: __webpack_require__("KC5n"),
  country: __webpack_require__("ayjR"),
  link: "https://www.ustream.tv/embed/1524",
  ustream: true
});

window.cbsn = new Channel({
  name: "CBSN",
  shortName: "cbsn",
  logo: __webpack_require__("s2fN"),
  country: __webpack_require__("ayjR"),
  link: "http://cbsnewshd-lh.akamaihd.net/i/CBSNHD_7@199302/master.m3u8"
});

window.nbc = new Channel({
  name: "NBC",
  shortName: "nbc",
  logo: __webpack_require__("p4kA"),
  country: __webpack_require__("ayjR"),
  link: "https://wrclive-f.akamaihd.net/i/wrcb1_1@46880/master.m3u8"
});

window.fox = new Channel({
  name: "FOX",
  shortName: "fox",
  logo: __webpack_require__("R4vH"),
  country: __webpack_require__("ayjR"),
  link:
    "https://api.new.livestream.com/accounts/2363281/events/1763520/live.m3u8"
});

window.mas = new Channel({
  name: "TVMas",
  shortName: "mas",
  logo: __webpack_require__("Hg5e"),
  country: __webpack_require__("KgRj"),
  link: "http://50.7.98.234:1935/rtv/videortv/chunklist.m3u8"
});

window.azteca13 = new Channel({
  name: "Azteca",
  shortName: "azteca13",
  logo: __webpack_require__("rA6G"),
  country: __webpack_require__("KgRj"),
  link:
    "http://aztecalive-lh.akamaihd.net/i/0qm7cjvop_1@502476/index_3_av-p.m3u8"
  // ?sd=10&rebase=on"
});

window.peru = new Channel({
  name: "TVPeru",
  shortName: "peru",
  logo: __webpack_require__("nNBb"),
  country: __webpack_require__("sx/8"),
  link: "http://cdnh15.iblups.com/hls/irtp.m3u8"
});

window.ecuador = new Channel({
  name: "Ecuador TV",
  shortName: "ecuador",
  logo: __webpack_require__("glMR"),
  country: __webpack_require__("mXzH"),
  link:
    "http://api.new.livestream.com/accounts/22196143/events/6576568/live.m3u8"
});

window.mega = new Channel({
  name: "MEGA",
  shortName: "mega",
  logo: __webpack_require__("Smtr"),
  country: __webpack_require__("5ZtY"),
  link:
    "http://a3live-lh.akamaihd.net/i/mghds/geomega_1@328914/index_3_av-b.m3u8"
});

window.chilev = new Channel({
  name: "Chilevision",
  shortName: "chilev",
  logo: __webpack_require__("TgpJ"),
  country: __webpack_require__("WTv4"),
  link:
    "http://chv.movil.rtsp.ztreaming.com/chvmovil2/chilevision@140569/chunklist_w787114469.m3u8"
});

window.cableNoti = new Channel({
  name: "CableNoticias",
  shortName: "cableNoti",
  logo: __webpack_require__("5eGp"),
  country: __webpack_require__("+mm6"),
  link: "http://hlslive.lcdn.une.net.co/v1/AUTH_HLSLIVE/CNOT/tu1_1.m3u8"
});
window.capital = new Channel({
  name: "Canal Capital",
  shortName: "capital",
  logo: __webpack_require__("asNl"),
  country: __webpack_require__("+mm6"),
  link:
    "http://us-b2-p-e-sx6.cdn.mdstrm.com/live-stream/57d01d6c28b263eb73b59a5a/publish/media_500.m3u8"
  // ?dnt=true&es=us-b2-p-e-sx6.cdn.mdstrm.com&ote=1506105524968&ot=PhcZX6iEf6naqlTvLiSrJA&proto=http"
});

window.nexTV = new Channel({
  name: "NexTV",
  shortName: "nexTV",
  logo: __webpack_require__("LPH4"),
  country: __webpack_require__("LWRF"),
  link: "http://198.1.117.5:1935/live/livestream/chunklist_w1290911642.m3u8"
});

window.conce = new Channel({
  name: "Once",
  shortName: "conce",
  logo: __webpack_require__("CjOH"),
  country: __webpack_require__("KgRj"),
  link:
    "http://live.canaloncelive.tv:1935/livepkgr2/smil:internacional.smil/master.m3u8"
});

window.td = new Channel({
  name: "Todo Deportes",
  shortName: "td",
  logo: __webpack_require__("c6z9"),
  country: __webpack_require__("Itf3"),
  link:
    "http://190.92.0.43:1935/securelive/tdtv85jd5EKL3xWq3/chunklist_w1241310319.m3u8"
});

window.teleProg = new Channel({
  name: "TeleProgreso",
  shortName: "teleProg",
  logo: __webpack_require__("zNme"),
  country: __webpack_require__("Itf3"),
  link: "blob:http://ott.streann.com/66e83bc8-5541-4c81-8c32-96e0004dd730"
});

window.rtv = new Channel({
  name: "RTV",
  shortName: "rtv",
  logo: __webpack_require__("1Kep"),
  country: __webpack_require__("Itf3"),
  link: "http://www.ustream.tv/embed/18502457",
  ustream: true
});

window.hondured = new Channel({
  name: "HonduRed",
  shortName: "hondured",
  logo: __webpack_require__("/6a/"),
  country: __webpack_require__("Itf3"),
  link: "http://173.236.71.62:1935/hondured/hrtv.sdp/chunklist_w172057188.m3u8"
});

window.hispan = new Channel({
  name: "HISPANTV",
  shortName: "hispan",
  logo: __webpack_require__("qRKG"),
  country: __webpack_require__("wk+E"),
  link: "http://178.32.255.199:1935/live/hispantv/chunklist_w1542092239.m3u8"
});

window.seis = new Channel({
  name: "Canal 6",
  shortName: "seis",
  logo: __webpack_require__("aO60"),
  country: __webpack_require__("Itf3"),
  link:
    "https://ott.streann.com/loadbalancer/services/public/channels-secure/56bd45f5e4b0ba125fe8a866/playlist.m3u8"
});

window.choluSat = new Channel({
  name: "CholuSat",
  shortName: "choluSat",
  logo: __webpack_require__("e4Q9"),
  country: __webpack_require__("Itf3"),
  link: "http://live.audiotvserver.com:1935/livemedia/cholusat/playlist.m3u8"
});

window.metro = new Channel({
  name: "MetroTV",
  shortName: "metro",
  country: __webpack_require__("Itf3"),
  link: "http://servicioamerica.net:1935/8404/8404/playlist.m3u8"
});

window.vtv = new Channel({
  name: "VTV",
  shortName: "vtv",
  logo: __webpack_require__("/VK1"),
  country: __webpack_require__("Itf3"),
  link: "http://d3bus2b3f32oks.cloudfront.net/hn//smil:vtv.smil/playlist.m3u8"
});

window.hrn = new Channel({
  name: "HRN",
  shortName: "hrn",
  logo: __webpack_require__("ze//"),
  country: __webpack_require__("Itf3"),
  link: "http://radios504.geucast.net:18101/radio-live",
  type: "audio/mpeg",
  video: "audio"
});

window.euro = new Channel({
  name: "EuroNews",
  shortName: "euro",
  logo: __webpack_require__("34sM"),
  country: __webpack_require__("bgvX"),
  link: "http://euronews-04.ice.infomaniak.ch/euronews-04.aac",
  type: "audio/mpeg",
  video: "audio"
});

window.voces = new Channel({
  name: "Cadena Voces",
  shortName: "voces",
  logo: __webpack_require__("78Wj"),
  country: __webpack_require__("Itf3"),
  link: "http://stream.latinoradiocast.com/41a8pc4gfd5tv",
  type: "audio/mpeg",
  video: "audio"
});

window.rGlobo = new Channel({
  name: "Radio Globo",
  shortName: "rGlobo",
  logo: __webpack_require__("r8LE"),
  country: __webpack_require__("Itf3"),
  link: "http://aliasdns.info:8016/;stream.mp3",
  type: "audio/mpeg",
  video: "audio"
});

window.patio = new Channel({
  name: "Radio El Patio",
  shortName: "patio",
  logo: __webpack_require__("3ItY"),
  country: __webpack_require__("Itf3"),
  link: "http://195.154.182.222:25730/patio",
  type: "audio/mpeg",
  video: "audio"
});

window.america = new Channel({
  name: "Radio America",
  shortName: "america",
  logo: __webpack_require__("k3vx"),
  country: __webpack_require__("Itf3"),
  link: "http://17803.live.streamtheworld.com/AMERICAAAC.aac",
  type: "audio/mpeg",
  video: "audio"
});

window.rnh = new Channel({
  name: "Radio Nacional",
  shortName: "rnh",
  logo: __webpack_require__("tTIp"),
  country: __webpack_require__("Itf3"),
  link: "http://stream.playerlive.info:8049//rnh.aac",
  type: "audio/aac",
  video: "audio"
});

// window.rprog = new Channel({
//   name: "Radio Progreso",
//   shortName: "rprog",
//   link: "http://noasrv.caster.fm:10194/stream?1504792373090.mp3",
//   type: "audio/mpeg",
//   video: "audio"
// });

// Donate
channelList += `<div class="individualChannel" id="donate">
    <div class="channelName">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="NWT2PUFW6NFLC">
            <input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea.">
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>
    </div>
</div.>
`;
// Send Channels to DOM
channelSection.innerHTML = channelList;
window.scroller = window.zenscroll.createScroller(
  window.channelSection,
  500,
  30
);


/***/ }),

/***/ "62vH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/hch.fc1764313348c39195d270fc2710d546.png";

/***/ }),

/***/ "6QUT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/sexta.e3615cb727cc8dc05b8d3791fe0424ad.svg";

/***/ }),

/***/ "78Wj":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/rcv.9470941311a6233e3501cb55547e14b9.png";

/***/ }),

/***/ "Bta1":
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBEwEUARUBFgEXARgBGQEaARsBHAEdAR4BHwRwbGF5C3BsYXktY2lyY2xlBXBhdXNlC3ZvbHVtZS1tdXRlCnZvbHVtZS1sb3cKdm9sdW1lLW1pZAt2b2x1bWUtaGlnaBBmdWxsc2NyZWVuLWVudGVyD2Z1bGxzY3JlZW4tZXhpdAZzcXVhcmUHc3Bpbm5lcglzdWJ0aXRsZXMIY2FwdGlvbnMIY2hhcHRlcnMFc2hhcmUDY29nBmNpcmNsZQ5jaXJjbGUtb3V0bGluZRNjaXJjbGUtaW5uZXItY2lyY2xlAmhkBmNhbmNlbAZyZXBsYXkIZmFjZWJvb2sFZ3BsdXMIbGlua2VkaW4HdHdpdHRlcgZ0dW1ibHIJcGludGVyZXN0EWF1ZGlvLWRlc2NyaXB0aW9uBWF1ZGlvAAAAAAA="

/***/ }),

/***/ "CjOH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/once.d358a9c8dacd48c38ee67032ddd2d49f.png";

/***/ }),

/***/ "FZ+f":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "GCRd":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(undefined);
// imports


// module
exports.push([module.i, ".active {\n  background-color: rgba(112, 112, 112, 0.911) !important;\n}\n\n.flagContainer {\n  position: relative;\n  height: 3rem;\n  top: 0.1rem;\n  left: 6.5rem;\n  width: 3rem;\n  overflow: hidden;\n  border-radius: 0.1rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.countryFlag {\n  height: 100%;\n  position: relative;\n  opacity: 0.5;\n}\n\n.channelName {\n  position: relative;\n  left: 0.6rem;\n  top: 3rem;\n  color: #ddd;\n  cursor: pointer;\n  font-family: Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif;\n  font-size: 0.8rem;\n  font-weight: 800;\n  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.58);\n}\n.individualChannel {\n  background-color: rgba(19, 19, 19, 0.822);\n  height: 5rem;\n  border-radius: 1rem 0 0 1rem;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  -webkit-highlight: rgba(255, 255, 255, 0);\n  border: 0.1rem solid rgba(56, 56, 56, 0.08);\n  margin: 0.2rem 0 0;\n  overflow: hidden;\n}\n\n.deleteChannel {\n  -webkit-animation: slideRight 1s ease-in-out forwards;\n          animation: slideRight 1s ease-in-out forwards;\n  height: 5rem;\n  margin: 0.1rem 0 0;\n  -webkit-transform: translateZ(0) translateX(0rem) scale(1);\n          transform: translateZ(0) translateX(0rem) scale(1);\n  background: rgba(255, 0, 0, 0.466) !important;\n  border: 0.1rem solid rgba(56, 56, 56, 0.08);\n}\n\n@-webkit-keyframes slideRight {\n  50% {\n    -webkit-transform: translateZ(0) translateX(12rem) scale(1);\n            transform: translateZ(0) translateX(12rem) scale(1);\n    height: 5em;\n    margin: 0.2rem 0 0;\n    border: 0.1rem solid rgba(56, 56, 56, 0.08);\n  }\n}\n\n@keyframes slideRight {\n  50% {\n    -webkit-transform: translateZ(0) translateX(12rem) scale(1);\n            transform: translateZ(0) translateX(12rem) scale(1);\n    height: 5em;\n    margin: 0.2rem 0 0;\n    border: 0.1rem solid rgba(56, 56, 56, 0.08);\n  }\n}\n\n@-webkit-keyframes slideRight {\n  100% {\n    -webkit-transform: translateZ(0) translateX(12rem) scale(0);\n            transform: translateZ(0) translateX(12rem) scale(0);\n    height: 0;\n    margin: 0;\n    border: 0px solid rgba(0, 0, 0, 0);\n  }\n}\n\n@keyframes slideRight {\n  100% {\n    -webkit-transform: translateZ(0) translateX(12rem) scale(0);\n            transform: translateZ(0) translateX(12rem) scale(0);\n    height: 0;\n    margin: 0;\n    border: 0px solid rgba(0, 0, 0, 0);\n  }\n}\n\n.fadeOut {\n  -webkit-animation: fadeOut 0.5s ease-in-out forwards;\n          animation: fadeOut 0.5s ease-in-out forwards;\n  opacity: 1;\n}\n\n@-webkit-keyframes fadeOut {\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  50% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeOut {\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  100% {\n    opacity: 0;\n  }\n}\n\n.fadeIn {\n  -webkit-animation: fadeIn 0.5s ease-in-out forwards;\n          animation: fadeIn 0.5s ease-in-out forwards;\n  opacity: 0;\n}\n\n@-webkit-keyframes fadeIn {\n  50% {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeIn {\n  50% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  100% {\n    opacity: 1;\n  }\n}\n\n.vjs-control-bar {\n  z-index: 902;\n  -webkit-transform: scale(2);\n          transform: scale(2);\n  max-width: 50vw;\n  -webkit-transform-origin: left bottom;\n          transform-origin: left bottom;\n}\n\n.vjs-big-play-centered .vjs-big-play-button {\n  z-index: 501;\n}\n\n#PlayerOne.ui-enabled .playScreen.component .play-icon {\n  z-index: 1002;\n}\n\n.pointer {\n  cursor: pointer;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n}\n\n.video-js .vjs-fullscreen-control {\n  display: none;\n}\n\n#channelSection {\n  position: absolute;\n  width: 11em;\n  z-index: 620;\n  top: 0;\n  right: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: 100vh;\n  scroll-behavior: smooth;\n  -webkit-transition: -webkit-transform 1s ease-in-out;\n  transition: -webkit-transform 1s ease-in-out;\n  transition: transform 1s ease-in-out;\n  transition: transform 1s ease-in-out, -webkit-transform 1s ease-in-out;\n}\n\n.toggle {\n  width: 70%;\n  height: 90vh;\n  position: absolute;\n  right: 0;\n  bottom: 10vh;\n  z-index: 500;\n  cursor: ew-resize;\n}\n\n#fullscreenButtonPath {\n  opacity: 0.5;\n  fill: white;\n}\n\n#fullscreenButtonSVG {\n  height: 4.2rem;\n  right: 1.9rem;\n  position: absolute;\n  -webkit-transform: scale(1.7);\n          transform: scale(1.7);\n}\n\n.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  opacity: 0.05;\n}\n\n.inactiveChannels {\n  -webkit-transform: translateZ(0) translateX(10.8rem);\n          transform: translateZ(0) translateX(10.8rem);\n}\n\n#fullscreenButton {\n  cursor: -webkit-zoom-in;\n  cursor: zoom-in;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  height: 4rem;\n  width: 11rem;\n  z-index: 1000;\n}\n\n#initialVideoSection {\n  z-index: 499;\n}\n\n.video-js {\n  background-color: rgba(0, 0, 0, 0) !important;\n}\n\n.vjs-modal-dialog .vjs-modal-dialog-content {\n  padding: 10% 20%;\n  display: none;\n}\n\n.selectedElement {\n  border: 0.1rem dashed rgba(245, 245, 245, 0.78);\n  border-right: 0;\n}\n\n::-webkit-scrollbar {\n  width: 3px;\n  height: 3px;\n}\n::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px;\n}\n::-webkit-scrollbar-thumb {\n  background: #808080;\n  border: 0px none #ffffff;\n  border-radius: 1px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #808080;\n}\n::-webkit-scrollbar-thumb:active {\n  background: #8f8f8f;\n}\n::-webkit-scrollbar-track {\n  background: #242424;\n  border: 0px none #ffffff;\n  border-radius: 1px;\n}\n::-webkit-scrollbar-track:hover {\n  background: #333333;\n}\n::-webkit-scrollbar-track:active {\n  background: #333333;\n}\n::-webkit-scrollbar-corner {\n  background: transparent;\n}\n\n.logos {\n  width: 1px;\n  height: 0px;\n  overflow: hidden;\n  position: absolute;\n}\n\n.title {\n  text-align: left;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 900;\n}\n\nh1 {\n  font-weight: 600;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  font-size: 0.9rem;\n  color: rgb(215, 215, 215);\n  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.58);\n  float: left;\n  margin-left: 0.5rem;\n}\n\n#channelLogo {\n  max-width: 5rem;\n  height: 5.5rem;\n  position: absolute;\n  top: 2.4rem;\n  left: 0.5rem;\n}\n\n#channelLogo img {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "HVs3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/bloomberg.7d529cdb6eaccc93c290ba27cad1f79e.svg";

/***/ }),

/***/ "Hg5e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/tvmas.523e5c4fd8bb284924459e392aa199ae.jpg";

/***/ }),

/***/ "Itf3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/honduras.8d0121bb08ccd5044a21e4b74e90d303.svg";

/***/ }),

/***/ "KC5n":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/twit.7d3dab1c552c5f2f5f5566b501b8571d.svg";

/***/ }),

/***/ "KVKL":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(undefined);
// imports


// module
exports.push([module.i, ".video-js .vjs-big-play-button .vjs-icon-placeholder:before, .vjs-button > .vjs-icon-placeholder:before, .video-js .vjs-modal-dialog, .vjs-modal-dialog .vjs-modal-dialog-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.video-js .vjs-big-play-button .vjs-icon-placeholder:before, .vjs-button > .vjs-icon-placeholder:before {\n  text-align: center; }\n\n@font-face {\n  font-family: VideoJS;\n  src: url(" + __webpack_require__("Bta1") + "?#iefix) format(\"eot\"); }\n\n@font-face {\n  font-family: VideoJS;\n  src: url(data:application/font-woff;charset=utf-8;base64,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) format(\"woff\"), url(data:application/x-font-ttf;charset=utf-8;base64,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FjY3PgE3LgEnIwYfAR4BFw4BBTM/ARUzESMGAyUVJwMchM2UWwgNq4JHrQgBAapUaAoJcWMBfiIhDiMrAQJLMB0BBAokNAIBPmMiIQ4iLAECSzAeAQUKJDQBP2MiIQ4iLAECSzAeAQUKJDQBAT75g+5B4arNLNIBJ44ByQL9BQ9mvYCKwA8FBQMDwwJVTGdzBf6VB8IHNR08lld9uT4LCRA/qGNxvUwHNR08lld9uT4LCRA/qGNxvUwHNR08lld9uT4LCRA/qGNxvVJkAWUDDEf+tYP5AQAAAAEAAAAABiAGtgAbAAABBAADER4BFzMRITU2ADcWABcVIREzPgE3EQIAA4D+4v6FBwJ/X+D+1QYBJ97eAScG/tXgX38CB/6FBrUH/oX+4v32X38CAlWV3gEnBgb+2d6V/asCf18CCgEeAXsAAAAAEADGAAEAAAAAAAEABwAAAAEAAAAAAAIABwAHAAEAAAAAAAMABwAOAAEAAAAAAAQABwAVAAEAAAAAAAUACwAcAAEAAAAAAAYABwAnAAEAAAAAAAoAKwAuAAEAAAAAAAsAEwBZAAMAAQQJAAEADgBsAAMAAQQJAAIADgB6AAMAAQQJAAMADgCIAAMAAQQJAAQADgCWAAMAAQQJAAUAFgCkAAMAAQQJAAYADgC6AAMAAQQJAAoAVgDIAAMAAQQJAAsAJgEeVmlkZW9KU1JlZ3VsYXJWaWRlb0pTVmlkZW9KU1ZlcnNpb24gMS4wVmlkZW9KU0dlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAFYAaQBkAGUAbwBKAFMAUgBlAGcAdQBsAGEAcgBWAGkAZABlAG8ASgBTAFYAaQBkAGUAbwBKAFMAVgBlAHIAcwBpAG8AbgAgADEALgAwAFYAaQBkAGUAbwBKAFMARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAgAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAABAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8EcGxheQtwbGF5LWNpcmNsZQVwYXVzZQt2b2x1bWUtbXV0ZQp2b2x1bWUtbG93CnZvbHVtZS1taWQLdm9sdW1lLWhpZ2gQZnVsbHNjcmVlbi1lbnRlcg9mdWxsc2NyZWVuLWV4aXQGc3F1YXJlB3NwaW5uZXIJc3VidGl0bGVzCGNhcHRpb25zCGNoYXB0ZXJzBXNoYXJlA2NvZwZjaXJjbGUOY2lyY2xlLW91dGxpbmUTY2lyY2xlLWlubmVyLWNpcmNsZQJoZAZjYW5jZWwGcmVwbGF5CGZhY2Vib29rBWdwbHVzCGxpbmtlZGluB3R3aXR0ZXIGdHVtYmxyCXBpbnRlcmVzdBFhdWRpby1kZXNjcmlwdGlvbgVhdWRpbwAAAAAA) format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n.vjs-icon-play, .video-js .vjs-big-play-button .vjs-icon-placeholder:before, .video-js .vjs-play-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-play:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before, .video-js .vjs-play-control .vjs-icon-placeholder:before {\n    content: \"\\F101\"; }\n\n.vjs-icon-play-circle {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-play-circle:before {\n    content: \"\\F102\"; }\n\n.vjs-icon-pause, .video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-pause:before, .video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before {\n    content: \"\\F103\"; }\n\n.vjs-icon-volume-mute, .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-volume-mute:before, .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before {\n    content: \"\\F104\"; }\n\n.vjs-icon-volume-low, .video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-volume-low:before, .video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before {\n    content: \"\\F105\"; }\n\n.vjs-icon-volume-mid, .video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-volume-mid:before, .video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before {\n    content: \"\\F106\"; }\n\n.vjs-icon-volume-high, .video-js .vjs-mute-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-volume-high:before, .video-js .vjs-mute-control .vjs-icon-placeholder:before {\n    content: \"\\F107\"; }\n\n.vjs-icon-fullscreen-enter, .video-js .vjs-fullscreen-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-fullscreen-enter:before, .video-js .vjs-fullscreen-control .vjs-icon-placeholder:before {\n    content: \"\\F108\"; }\n\n.vjs-icon-fullscreen-exit, .video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-fullscreen-exit:before, .video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before {\n    content: \"\\F109\"; }\n\n.vjs-icon-square {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-square:before {\n    content: \"\\F10A\"; }\n\n.vjs-icon-spinner {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-spinner:before {\n    content: \"\\F10B\"; }\n\n.vjs-icon-subtitles, .video-js .vjs-subtitles-button .vjs-icon-placeholder, .video-js .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-subtitles:before, .video-js .vjs-subtitles-button .vjs-icon-placeholder:before, .video-js .vjs-subs-caps-button .vjs-icon-placeholder:before,\n  .video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n  .video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n  .video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n  .video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder:before {\n    content: \"\\F10C\"; }\n\n.vjs-icon-captions, .video-js .vjs-captions-button .vjs-icon-placeholder, .video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-captions:before, .video-js .vjs-captions-button .vjs-icon-placeholder:before, .video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n  .video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder:before {\n    content: \"\\F10D\"; }\n\n.vjs-icon-chapters, .video-js .vjs-chapters-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-chapters:before, .video-js .vjs-chapters-button .vjs-icon-placeholder:before {\n    content: \"\\F10E\"; }\n\n.vjs-icon-share {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-share:before {\n    content: \"\\F10F\"; }\n\n.vjs-icon-cog {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-cog:before {\n    content: \"\\F110\"; }\n\n.vjs-icon-circle, .video-js .vjs-play-progress, .video-js .vjs-volume-level {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-circle:before, .video-js .vjs-play-progress:before, .video-js .vjs-volume-level:before {\n    content: \"\\F111\"; }\n\n.vjs-icon-circle-outline {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-circle-outline:before {\n    content: \"\\F112\"; }\n\n.vjs-icon-circle-inner-circle {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-circle-inner-circle:before {\n    content: \"\\F113\"; }\n\n.vjs-icon-hd {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-hd:before {\n    content: \"\\F114\"; }\n\n.vjs-icon-cancel, .video-js .vjs-control.vjs-close-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-cancel:before, .video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before {\n    content: \"\\F115\"; }\n\n.vjs-icon-replay, .video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-replay:before, .video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before {\n    content: \"\\F116\"; }\n\n.vjs-icon-facebook {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-facebook:before {\n    content: \"\\F117\"; }\n\n.vjs-icon-gplus {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-gplus:before {\n    content: \"\\F118\"; }\n\n.vjs-icon-linkedin {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-linkedin:before {\n    content: \"\\F119\"; }\n\n.vjs-icon-twitter {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-twitter:before {\n    content: \"\\F11A\"; }\n\n.vjs-icon-tumblr {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-tumblr:before {\n    content: \"\\F11B\"; }\n\n.vjs-icon-pinterest {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-pinterest:before {\n    content: \"\\F11C\"; }\n\n.vjs-icon-audio-description, .video-js .vjs-descriptions-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-audio-description:before, .video-js .vjs-descriptions-button .vjs-icon-placeholder:before {\n    content: \"\\F11D\"; }\n\n.vjs-icon-audio, .video-js .vjs-audio-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal; }\n  .vjs-icon-audio:before, .video-js .vjs-audio-button .vjs-icon-placeholder:before {\n    content: \"\\F11E\"; }\n\n.video-js {\n  display: block;\n  vertical-align: top;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  background-color: #000;\n  position: relative;\n  padding: 0;\n  font-size: 10px;\n  line-height: 1;\n  font-weight: normal;\n  font-style: normal;\n  font-family: Arial, Helvetica, sans-serif; }\n  .video-js:-moz-full-screen {\n    position: absolute; }\n  .video-js:-webkit-full-screen {\n    width: 100% !important;\n    height: 100% !important; }\n\n.video-js[tabindex=\"-1\"] {\n  outline: none; }\n\n.video-js *,\n.video-js *:before,\n.video-js *:after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit; }\n\n.video-js ul {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  list-style-position: outside;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.video-js.vjs-fluid,\n.video-js.vjs-16-9,\n.video-js.vjs-4-3 {\n  width: 100%;\n  max-width: 100%;\n  height: 0; }\n\n.video-js.vjs-16-9 {\n  padding-top: 56.25%; }\n\n.video-js.vjs-4-3 {\n  padding-top: 75%; }\n\n.video-js.vjs-fill {\n  width: 100%;\n  height: 100%; }\n\n.video-js .vjs-tech {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\nbody.vjs-full-window {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  overflow-y: auto; }\n\n.vjs-full-window .video-js.vjs-fullscreen {\n  position: fixed;\n  overflow: hidden;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0; }\n\n.video-js.vjs-fullscreen {\n  width: 100% !important;\n  height: 100% !important;\n  padding-top: 0 !important; }\n\n.video-js.vjs-fullscreen.vjs-user-inactive {\n  cursor: none; }\n\n.vjs-hidden {\n  display: none !important; }\n\n.vjs-disabled {\n  opacity: 0.5;\n  cursor: default; }\n\n.video-js .vjs-offscreen {\n  height: 1px;\n  left: -9999px;\n  position: absolute;\n  top: 0;\n  width: 1px; }\n\n.vjs-lock-showing {\n  display: block !important;\n  opacity: 1;\n  visibility: visible; }\n\n.vjs-no-js {\n  padding: 20px;\n  color: #fff;\n  background-color: #000;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  width: 300px;\n  height: 150px;\n  margin: 0px auto; }\n\n.vjs-no-js a,\n.vjs-no-js a:visited {\n  color: #66A8CC; }\n\n.video-js .vjs-big-play-button {\n  font-size: 3em;\n  line-height: 1.5em;\n  height: 1.5em;\n  width: 3em;\n  display: block;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 0;\n  cursor: pointer;\n  opacity: 1;\n  border: 0.06666em solid #fff;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  border-radius: 0.3em;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.vjs-big-play-centered .vjs-big-play-button {\n  top: 50%;\n  left: 50%;\n  margin-top: -0.75em;\n  margin-left: -1.5em; }\n\n.video-js:hover .vjs-big-play-button,\n.video-js .vjs-big-play-button:focus {\n  border-color: #fff;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n  -webkit-transition: all 0s;\n  transition: all 0s; }\n\n.vjs-controls-disabled .vjs-big-play-button,\n.vjs-has-started .vjs-big-play-button,\n.vjs-using-native-controls .vjs-big-play-button,\n.vjs-error .vjs-big-play-button {\n  display: none; }\n\n.vjs-has-started.vjs-paused.vjs-show-big-play-button-on-pause .vjs-big-play-button {\n  display: block; }\n\n.video-js button {\n  background: none;\n  border: none;\n  color: inherit;\n  display: inline-block;\n  overflow: visible;\n  font-size: inherit;\n  line-height: inherit;\n  text-transform: none;\n  text-decoration: none;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.vjs-control .vjs-button {\n  width: 100%;\n  height: 100%; }\n\n.video-js .vjs-control.vjs-close-button {\n  cursor: pointer;\n  height: 3em;\n  position: absolute;\n  right: 0;\n  top: 0.5em;\n  z-index: 2; }\n\n.video-js .vjs-modal-dialog {\n  background: rgba(0, 0, 0, 0.8);\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.8)), to(rgba(255, 255, 255, 0)));\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0));\n  overflow: auto;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n\n.video-js .vjs-modal-dialog > * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.vjs-modal-dialog .vjs-modal-dialog-content {\n  font-size: 1.2em;\n  line-height: 1.5;\n  padding: 20px 24px;\n  z-index: 1; }\n\n.vjs-menu-button {\n  cursor: pointer; }\n\n.vjs-menu-button.vjs-disabled {\n  cursor: default; }\n\n.vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu {\n  display: none; }\n\n.vjs-menu .vjs-menu-content {\n  display: block;\n  padding: 0;\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  overflow: auto;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n\n.vjs-menu .vjs-menu-content > * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.vjs-scrubbing .vjs-menu-button:hover .vjs-menu {\n  display: none; }\n\n.vjs-menu li {\n  list-style: none;\n  margin: 0;\n  padding: 0.2em 0;\n  line-height: 1.4em;\n  font-size: 1.2em;\n  text-align: center;\n  text-transform: lowercase; }\n\n.vjs-menu li.vjs-menu-item:focus,\n.vjs-menu li.vjs-menu-item:hover {\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5); }\n\n.vjs-menu li.vjs-selected,\n.vjs-menu li.vjs-selected:focus,\n.vjs-menu li.vjs-selected:hover {\n  background-color: #fff;\n  color: #2B333F; }\n\n.vjs-menu li.vjs-menu-title {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1em;\n  line-height: 2em;\n  padding: 0;\n  margin: 0 0 0.3em 0;\n  font-weight: bold;\n  cursor: default; }\n\n.vjs-menu-button-popup .vjs-menu {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  width: 10em;\n  left: -3em;\n  height: 0em;\n  margin-bottom: 1.5em;\n  border-top-color: rgba(43, 51, 63, 0.7); }\n\n.vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  position: absolute;\n  width: 100%;\n  bottom: 1.5em;\n  max-height: 15em; }\n\n.vjs-workinghover .vjs-menu-button-popup:hover .vjs-menu,\n.vjs-menu-button-popup .vjs-menu.vjs-lock-showing {\n  display: block; }\n\n.video-js .vjs-menu-button-inline {\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n  overflow: hidden; }\n\n.video-js .vjs-menu-button-inline:before {\n  width: 2.222222222em; }\n\n.video-js .vjs-menu-button-inline:hover,\n.video-js .vjs-menu-button-inline:focus,\n.video-js .vjs-menu-button-inline.vjs-slider-active,\n.video-js.vjs-no-flex .vjs-menu-button-inline {\n  width: 12em; }\n\n.vjs-menu-button-inline .vjs-menu {\n  opacity: 0;\n  height: 100%;\n  width: auto;\n  position: absolute;\n  left: 4em;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.vjs-menu-button-inline:hover .vjs-menu,\n.vjs-menu-button-inline:focus .vjs-menu,\n.vjs-menu-button-inline.vjs-slider-active .vjs-menu {\n  display: block;\n  opacity: 1; }\n\n.vjs-no-flex .vjs-menu-button-inline .vjs-menu {\n  display: block;\n  opacity: 1;\n  position: relative;\n  width: auto; }\n\n.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu,\n.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,\n.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu {\n  width: auto; }\n\n.vjs-menu-button-inline .vjs-menu-content {\n  width: auto;\n  height: 100%;\n  margin: 0;\n  overflow: hidden; }\n\n.video-js .vjs-control-bar {\n  display: none;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 3.0em;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7); }\n\n.vjs-has-started .vjs-control-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  visibility: visible;\n  opacity: 1;\n  -webkit-transition: visibility 0.1s, opacity 0.1s;\n  transition: visibility 0.1s, opacity 0.1s; }\n\n.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  visibility: visible;\n  opacity: 0;\n  -webkit-transition: visibility 1s, opacity 1s;\n  transition: visibility 1s, opacity 1s; }\n\n.vjs-controls-disabled .vjs-control-bar,\n.vjs-using-native-controls .vjs-control-bar,\n.vjs-error .vjs-control-bar {\n  display: none !important; }\n\n.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  opacity: 1;\n  visibility: visible; }\n\n.vjs-has-started.vjs-no-flex .vjs-control-bar {\n  display: table; }\n\n.video-js .vjs-control {\n  position: relative;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 4em;\n  -webkit-box-flex: none;\n  -ms-flex: none;\n  flex: none; }\n\n.vjs-button > .vjs-icon-placeholder:before {\n  font-size: 1.8em;\n  line-height: 1.67; }\n\n.video-js .vjs-control:focus:before,\n.video-js .vjs-control:hover:before,\n.video-js .vjs-control:focus {\n  text-shadow: 0em 0em 1em white; }\n\n.video-js .vjs-control-text {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.vjs-no-flex .vjs-control {\n  display: table-cell;\n  vertical-align: middle; }\n\n.video-js .vjs-custom-control-spacer {\n  display: none; }\n\n.video-js .vjs-progress-control {\n  cursor: pointer;\n  -webkit-box-flex: auto;\n  -ms-flex: auto;\n  flex: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  min-width: 4em; }\n\n.video-js .vjs-progress-control.disabled {\n  cursor: default; }\n\n.vjs-live .vjs-progress-control {\n  display: none; }\n\n.vjs-no-flex .vjs-progress-control {\n  width: auto; }\n\n.video-js .vjs-progress-holder {\n  -webkit-box-flex: auto;\n  -ms-flex: auto;\n  flex: auto;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  height: 0.3em; }\n\n.video-js .vjs-progress-control .vjs-progress-holder {\n  margin: 0 10px; }\n\n.video-js .vjs-progress-control:hover .vjs-progress-holder {\n  font-size: 1.666666666666666666em; }\n\n.video-js .vjs-progress-control:hover .vjs-progress-holder.disabled {\n  font-size: 1em; }\n\n.video-js .vjs-progress-holder .vjs-play-progress,\n.video-js .vjs-progress-holder .vjs-load-progress,\n.video-js .vjs-progress-holder .vjs-load-progress div {\n  position: absolute;\n  display: block;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  width: 0;\n  left: 0;\n  top: 0; }\n\n.video-js .vjs-play-progress {\n  background-color: #fff; }\n  .video-js .vjs-play-progress:before {\n    font-size: 0.9em;\n    position: absolute;\n    right: -0.5em;\n    top: -0.333333333333333em;\n    z-index: 1; }\n\n.video-js .vjs-load-progress {\n  background: #bfc7d3;\n  background: rgba(115, 133, 159, 0.5); }\n\n.video-js .vjs-load-progress div {\n  background: white;\n  background: rgba(115, 133, 159, 0.75); }\n\n.video-js .vjs-time-tooltip {\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 0.3em;\n  color: #000;\n  float: right;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  padding: 6px 8px 8px 8px;\n  pointer-events: none;\n  position: relative;\n  top: -3.4em;\n  visibility: hidden;\n  z-index: 1; }\n\n.video-js .vjs-progress-holder:focus .vjs-time-tooltip {\n  display: none; }\n\n.video-js .vjs-progress-control:hover .vjs-time-tooltip,\n.video-js .vjs-progress-control:hover .vjs-progress-holder:focus .vjs-time-tooltip {\n  display: block;\n  font-size: 0.6em;\n  visibility: visible; }\n\n.video-js .vjs-progress-control.disabled:hover .vjs-time-tooltip {\n  font-size: 1em; }\n\n.video-js .vjs-progress-control .vjs-mouse-display {\n  display: none;\n  position: absolute;\n  width: 1px;\n  height: 100%;\n  background-color: #000;\n  z-index: 1; }\n\n.vjs-no-flex .vjs-progress-control .vjs-mouse-display {\n  z-index: 0; }\n\n.video-js .vjs-progress-control:hover .vjs-mouse-display {\n  display: block; }\n\n.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 1s, opacity 1s;\n  transition: visibility 1s, opacity 1s; }\n\n.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display {\n  display: none; }\n\n.vjs-mouse-display .vjs-time-tooltip {\n  color: #fff;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.8); }\n\n.video-js .vjs-slider {\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n  margin: 0 0.45em 0 0.45em;\n  /* iOS Safari */\n  -webkit-touch-callout: none;\n  /* Safari */\n  -webkit-user-select: none;\n  /* Konqueror HTML */\n  /* Firefox */\n  -moz-user-select: none;\n  /* Internet Explorer/Edge */\n  -ms-user-select: none;\n  /* Non-prefixed version, currently supported by Chrome and Opera */\n  user-select: none;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5); }\n\n.video-js .vjs-slider.disabled {\n  cursor: default; }\n\n.video-js .vjs-slider:focus {\n  text-shadow: 0em 0em 1em white;\n  -webkit-box-shadow: 0 0 1em #fff;\n  box-shadow: 0 0 1em #fff; }\n\n.video-js .vjs-mute-control {\n  cursor: pointer;\n  -webkit-box-flex: none;\n  -ms-flex: none;\n  flex: none;\n  padding-left: 2em;\n  padding-right: 2em;\n  padding-bottom: 3em; }\n\n.video-js .vjs-volume-control {\n  cursor: pointer;\n  margin-right: 1em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.video-js .vjs-volume-control.vjs-volume-horizontal {\n  width: 5em; }\n\n.video-js .vjs-volume-panel .vjs-volume-control {\n  visibility: visible;\n  opacity: 0;\n  width: 1px;\n  height: 1px;\n  margin-left: -1px; }\n\n.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\"; }\n  .vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,\n  .vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical .vjs-volume-level {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\"; }\n\n.video-js .vjs-volume-panel {\n  -webkit-transition: width 1s;\n  transition: width 1s; }\n  .video-js .vjs-volume-panel:hover .vjs-volume-control,\n  .video-js .vjs-volume-panel:active .vjs-volume-control,\n  .video-js .vjs-volume-panel:focus .vjs-volume-control,\n  .video-js .vjs-volume-panel .vjs-volume-control:hover,\n  .video-js .vjs-volume-panel .vjs-volume-control:active,\n  .video-js .vjs-volume-panel .vjs-volume-control:focus,\n  .video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control,\n  .video-js .vjs-volume-panel .vjs-mute-control:active ~ .vjs-volume-control,\n  .video-js .vjs-volume-panel .vjs-mute-control:focus ~ .vjs-volume-control,\n  .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active {\n    visibility: visible;\n    opacity: 1;\n    position: relative;\n    -webkit-transition: visibility 0.1s, opacity 0.1s, height 0.1s, width 0.1s, left 0s, top 0s;\n    transition: visibility 0.1s, opacity 0.1s, height 0.1s, width 0.1s, left 0s, top 0s; }\n    .video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-horizontal,\n    .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal,\n    .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal,\n    .video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-horizontal,\n    .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-horizontal,\n    .video-js .vjs-volume-panel .vjs-volume-control:focus.vjs-volume-horizontal,\n    .video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control.vjs-volume-horizontal,\n    .video-js .vjs-volume-panel .vjs-mute-control:active ~ .vjs-volume-control.vjs-volume-horizontal,\n    .video-js .vjs-volume-panel .vjs-mute-control:focus ~ .vjs-volume-control.vjs-volume-horizontal,\n    .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-horizontal {\n      width: 5em;\n      height: 3em; }\n    .video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-vertical,\n    .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical,\n    .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical,\n    .video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-vertical,\n    .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical,\n    .video-js .vjs-volume-panel .vjs-volume-control:focus.vjs-volume-vertical,\n    .video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control.vjs-volume-vertical,\n    .video-js .vjs-volume-panel .vjs-mute-control:active ~ .vjs-volume-control.vjs-volume-vertical,\n    .video-js .vjs-volume-panel .vjs-mute-control:focus ~ .vjs-volume-control.vjs-volume-vertical,\n    .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical {\n      -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\"; }\n      .video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,\n      .video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,\n      .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,\n      .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,\n      .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,\n      .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,\n      .video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-vertical .vjs-volume-bar,\n      .video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-vertical .vjs-volume-level,\n      .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical .vjs-volume-bar,\n      .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical .vjs-volume-level,\n      .video-js .vjs-volume-panel .vjs-volume-control:focus.vjs-volume-vertical .vjs-volume-bar,\n      .video-js .vjs-volume-panel .vjs-volume-control:focus.vjs-volume-vertical .vjs-volume-level,\n      .video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,\n      .video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,\n      .video-js .vjs-volume-panel .vjs-mute-control:active ~ .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,\n      .video-js .vjs-volume-panel .vjs-mute-control:active ~ .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,\n      .video-js .vjs-volume-panel .vjs-mute-control:focus ~ .vjs-volume-control.vjs-volume-vertical .vjs-volume-bar,\n      .video-js .vjs-volume-panel .vjs-mute-control:focus ~ .vjs-volume-control.vjs-volume-vertical .vjs-volume-level,\n      .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical .vjs-volume-bar,\n      .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical .vjs-volume-level {\n        -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\"; }\n  .video-js .vjs-volume-panel.vjs-volume-panel-horizontal:hover, .video-js .vjs-volume-panel.vjs-volume-panel-horizontal:focus, .video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active {\n    width: 9em;\n    -webkit-transition: width 0.1s;\n    transition: width 0.1s; }\n\n.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {\n  height: 8em;\n  width: 3em;\n  left: -3.5em;\n  -webkit-transition: visibility 1s, opacity 1s, height 1s 1s, width 1s 1s, left 1s 1s, top 1s 1s;\n  transition: visibility 1s, opacity 1s, height 1s 1s, width 1s 1s, left 1s 1s, top 1s 1s; }\n\n.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {\n  -webkit-transition: visibility 1s, opacity 1s, height 1s 1s, width 1s, left 1s 1s, top 1s 1s;\n  transition: visibility 1s, opacity 1s, height 1s 1s, width 1s, left 1s 1s, top 1s 1s; }\n\n.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {\n  width: 5em;\n  height: 3em;\n  visibility: visible;\n  opacity: 1;\n  position: relative;\n  -webkit-transition: none;\n  transition: none; }\n\n.video-js.vjs-no-flex .vjs-volume-control.vjs-volume-vertical,\n.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {\n  position: absolute;\n  bottom: 3em;\n  left: 0.5em; }\n\n.video-js .vjs-volume-panel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.video-js .vjs-volume-bar {\n  margin: 1.35em 0.45em; }\n\n.vjs-volume-bar.vjs-slider-horizontal {\n  width: 5em;\n  height: 0.3em; }\n\n.vjs-volume-bar.vjs-slider-vertical {\n  width: 0.3em;\n  height: 5em;\n  margin: 1.35em auto; }\n\n.video-js .vjs-volume-level {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: #fff; }\n  .video-js .vjs-volume-level:before {\n    position: absolute;\n    font-size: 0.9em; }\n\n.vjs-slider-vertical .vjs-volume-level {\n  width: 0.3em; }\n  .vjs-slider-vertical .vjs-volume-level:before {\n    top: -0.5em;\n    left: -0.3em; }\n\n.vjs-slider-horizontal .vjs-volume-level {\n  height: 0.3em; }\n  .vjs-slider-horizontal .vjs-volume-level:before {\n    top: -0.3em;\n    right: -0.5em; }\n\n.video-js .vjs-volume-panel.vjs-volume-panel-vertical {\n  width: 4em; }\n\n.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level {\n  height: 100%; }\n\n.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level {\n  width: 100%; }\n\n.video-js .vjs-volume-vertical {\n  width: 3em;\n  height: 8em;\n  bottom: 8em;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7); }\n\n.video-js .vjs-volume-horizontal .vjs-menu {\n  left: -2em; }\n\n.vjs-poster {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: contain;\n  background-color: #000000;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%; }\n\n.vjs-poster img {\n  display: block;\n  vertical-align: middle;\n  margin: 0 auto;\n  max-height: 100%;\n  padding: 0;\n  width: 100%; }\n\n.vjs-has-started .vjs-poster {\n  display: none; }\n\n.vjs-audio.vjs-has-started .vjs-poster {\n  display: block; }\n\n.vjs-using-native-controls .vjs-poster {\n  display: none; }\n\n.video-js .vjs-live-control {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-flex: auto;\n  -ms-flex: auto;\n  flex: auto;\n  font-size: 1em;\n  line-height: 3em; }\n\n.vjs-no-flex .vjs-live-control {\n  display: table-cell;\n  width: auto;\n  text-align: left; }\n\n.video-js .vjs-time-control {\n  -webkit-box-flex: none;\n  -ms-flex: none;\n  flex: none;\n  font-size: 1em;\n  line-height: 3em;\n  min-width: 2em;\n  width: auto;\n  padding-left: 1em;\n  padding-right: 1em; }\n\n.vjs-live .vjs-time-control {\n  display: none; }\n\n.video-js .vjs-current-time,\n.vjs-no-flex .vjs-current-time {\n  display: none; }\n\n.vjs-no-flex .vjs-remaining-time.vjs-time-control.vjs-control {\n  width: 0px !important;\n  white-space: nowrap; }\n\n.video-js .vjs-duration,\n.vjs-no-flex .vjs-duration {\n  display: none; }\n\n.vjs-time-divider {\n  display: none;\n  line-height: 3em; }\n\n.vjs-live .vjs-time-divider {\n  display: none; }\n\n.video-js .vjs-play-control .vjs-icon-placeholder {\n  cursor: pointer;\n  -webkit-box-flex: none;\n  -ms-flex: none;\n  flex: none; }\n\n.vjs-text-track-display {\n  position: absolute;\n  bottom: 3em;\n  left: 0;\n  right: 0;\n  top: 0;\n  pointer-events: none; }\n\n.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display {\n  bottom: 1em; }\n\n.video-js .vjs-text-track {\n  font-size: 1.4em;\n  text-align: center;\n  margin-bottom: 0.1em;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.vjs-subtitles {\n  color: #fff; }\n\n.vjs-captions {\n  color: #fc6; }\n\n.vjs-tt-cue {\n  display: block; }\n\nvideo::-webkit-media-text-track-display {\n  -webkit-transform: translateY(-3em);\n  transform: translateY(-3em); }\n\n.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display {\n  -webkit-transform: translateY(-1.5em);\n  transform: translateY(-1.5em); }\n\n.video-js .vjs-fullscreen-control {\n  cursor: pointer;\n  -webkit-box-flex: none;\n  -ms-flex: none;\n  flex: none; }\n\n.vjs-playback-rate > .vjs-menu-button,\n.vjs-playback-rate .vjs-playback-rate-value {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.vjs-playback-rate .vjs-playback-rate-value {\n  pointer-events: none;\n  font-size: 1.5em;\n  line-height: 2;\n  text-align: center; }\n\n.vjs-playback-rate .vjs-menu {\n  width: 4em;\n  left: 0em; }\n\n.vjs-error .vjs-error-display .vjs-modal-dialog-content {\n  font-size: 1.4em;\n  text-align: center; }\n\n.vjs-error .vjs-error-display:before {\n  color: #fff;\n  content: 'X';\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 4em;\n  left: 0;\n  line-height: 1;\n  margin-top: -0.5em;\n  position: absolute;\n  text-shadow: 0.05em 0.05em 0.1em #000;\n  text-align: center;\n  top: 50%;\n  vertical-align: middle;\n  width: 100%; }\n\n.vjs-loading-spinner {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -25px 0 0 -25px;\n  opacity: 0.85;\n  text-align: left;\n  border: 6px solid rgba(43, 51, 63, 0.7);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-clip: padding-box;\n  width: 50px;\n  height: 50px;\n  border-radius: 25px; }\n\n.vjs-seeking .vjs-loading-spinner,\n.vjs-waiting .vjs-loading-spinner {\n  display: block; }\n\n.vjs-loading-spinner:before,\n.vjs-loading-spinner:after {\n  content: \"\";\n  position: absolute;\n  margin: -6px;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  width: inherit;\n  height: inherit;\n  border-radius: inherit;\n  opacity: 1;\n  border: inherit;\n  border-color: transparent;\n  border-top-color: white; }\n\n.vjs-seeking .vjs-loading-spinner:before,\n.vjs-seeking .vjs-loading-spinner:after,\n.vjs-waiting .vjs-loading-spinner:before,\n.vjs-waiting .vjs-loading-spinner:after {\n  -webkit-animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite;\n  animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite; }\n\n.vjs-seeking .vjs-loading-spinner:before,\n.vjs-waiting .vjs-loading-spinner:before {\n  border-top-color: white; }\n\n.vjs-seeking .vjs-loading-spinner:after,\n.vjs-waiting .vjs-loading-spinner:after {\n  border-top-color: white;\n  -webkit-animation-delay: 0.44s;\n  animation-delay: 0.44s; }\n\n@keyframes vjs-spinner-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@-webkit-keyframes vjs-spinner-spin {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes vjs-spinner-fade {\n  0% {\n    border-top-color: #73859f; }\n  20% {\n    border-top-color: #73859f; }\n  35% {\n    border-top-color: white; }\n  60% {\n    border-top-color: #73859f; }\n  100% {\n    border-top-color: #73859f; } }\n\n@-webkit-keyframes vjs-spinner-fade {\n  0% {\n    border-top-color: #73859f; }\n  20% {\n    border-top-color: #73859f; }\n  35% {\n    border-top-color: white; }\n  60% {\n    border-top-color: #73859f; }\n  100% {\n    border-top-color: #73859f; } }\n\n.vjs-chapters-button .vjs-menu ul {\n  width: 24em; }\n\n.video-js .vjs-subs-caps-button + .vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder {\n  position: absolute; }\n\n.video-js .vjs-subs-caps-button + .vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {\n  font-family: VideoJS;\n  content: \"\\F10D\";\n  font-size: 1.5em;\n  line-height: inherit; }\n\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-custom-control-spacer {\n  -webkit-box-flex: auto;\n  -ms-flex: auto;\n  flex: auto; }\n\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen).vjs-no-flex .vjs-custom-control-spacer {\n  width: auto; }\n\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-current-time, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-time-divider, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-duration, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-remaining-time,\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-playback-rate, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-progress-control,\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-mute-control, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-volume-control,\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-chapters-button, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-descriptions-button, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-captions-button,\n.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-subtitles-button, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-audio-button {\n  display: none; }\n\n.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-current-time, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-time-divider, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-duration, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-remaining-time,\n.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-playback-rate,\n.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-mute-control, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-volume-control,\n.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-chapters-button, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-descriptions-button, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-captions-button,\n.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-subtitles-button, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-audio-button {\n  display: none; }\n\n.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-current-time, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-time-divider, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-duration, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-remaining-time,\n.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-playback-rate,\n.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-mute-control, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-volume-control,\n.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-chapters-button, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-descriptions-button, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-captions-button,\n.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-subtitles-button .vjs-audio-button {\n  display: none; }\n\n.vjs-modal-dialog.vjs-text-track-settings {\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.75);\n  color: #fff;\n  height: 70%; }\n\n.vjs-text-track-settings .vjs-modal-dialog-content {\n  display: table; }\n\n.vjs-text-track-settings .vjs-track-settings-colors,\n.vjs-text-track-settings .vjs-track-settings-font,\n.vjs-text-track-settings .vjs-track-settings-controls {\n  display: table-cell; }\n\n.vjs-text-track-settings .vjs-track-settings-controls {\n  text-align: right;\n  vertical-align: bottom; }\n\n.vjs-text-track-settings fieldset {\n  margin: 5px;\n  padding: 3px;\n  border: none; }\n\n.vjs-text-track-settings fieldset span {\n  display: inline-block;\n  margin-left: 5px; }\n\n.vjs-text-track-settings legend {\n  color: #fff;\n  margin: 0 0 5px 0; }\n\n.vjs-text-track-settings .vjs-label {\n  position: absolute;\n  clip: rect(1px 1px 1px 1px);\n  clip: rect(1px, 1px, 1px, 1px);\n  display: block;\n  margin: 0 0 5px 0;\n  padding: 0;\n  border: 0;\n  height: 1px;\n  width: 1px;\n  overflow: hidden; }\n\n.vjs-track-settings-controls button:focus,\n.vjs-track-settings-controls button:active {\n  outline-style: solid;\n  outline-width: medium;\n  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(88%, #fff), to(#73859f));\n  background-image: linear-gradient(0deg, #fff 88%, #73859f 100%); }\n\n.vjs-track-settings-controls button:hover {\n  color: rgba(43, 51, 63, 0.75); }\n\n.vjs-track-settings-controls button {\n  background-color: #fff;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(88%, #fff), to(#73859f));\n  background-image: linear-gradient(-180deg, #fff 88%, #73859f 100%);\n  color: #2B333F;\n  cursor: pointer;\n  border-radius: 2px; }\n\n.vjs-track-settings-controls .vjs-default-button {\n  margin-right: 1em; }\n\n@media print {\n  .video-js > *:not(.vjs-tech):not(.vjs-poster) {\n    visibility: hidden; } }\n\n@media \\0screen {\n  .vjs-user-inactive.vjs-playing .vjs-control-bar :before {\n    content: \"\";\n  }\n}\n\n@media \\0screen {\n  .vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n    visibility: hidden;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "KgRj":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/mexico.f1ba522e8e48091b7eca97a81d2097f2.svg";

/***/ }),

/***/ "LPH4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/nex.f84207466d75ab43710ca3f88ab2f04b.png";

/***/ }),

/***/ "LWRF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/panama.c5c0c6dcbd8d173e2f8fb5827bfe9a1b.svg";

/***/ }),

/***/ "MTIv":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("mJPh");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "N7Tp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/earthtv.4e969b8aeb25cdbb6389242a4d72025d.png";

/***/ }),

/***/ "PlOX":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/tve.b83e1cb709cb5a43a0a41c635885d35a.svg";

/***/ }),

/***/ "QS4G":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/telpin.ef0e08f1490fcbe5867dfb7400525578.png";

/***/ }),

/***/ "R4vH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/fox.0c785292e638b0ec057014bc3c99b69e.svg";

/***/ }),

/***/ "SU8/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/dw.33e0ea4d61d6bc83d9967f104aaf3aad.svg";

/***/ }),

/***/ "Smtr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/mega.8ccde67f6d309c57e20dec82243718d8.svg";

/***/ }),

/***/ "TDdq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/45tv.4612db5a718fe0a9d52c3ba790b80424.png";

/***/ }),

/***/ "TgpJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/chilevision.8d7fba976e44f5db6d5d0ae789f94931.png";

/***/ }),

/***/ "WP2S":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/msnbc.009b5832226ead16506cf33a9c35f1da.png";

/***/ }),

/***/ "WTv4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/chile.4e9ff41f7c822ef9a7b2bc728bde3c52.svg";

/***/ }),

/***/ "XLot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/jazeera.1b8aefe053a072b8bfc80d08ea5d874b.svg";

/***/ }),

/***/ "Y8D2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/canal5.7baf93d617c9501b729cac477759ac36.png";

/***/ }),

/***/ "YtPL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/canal11.904b5b4d62c1475293e9a16a1dd8cefe.png";

/***/ }),

/***/ "aO60":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/canal6.e6eadb53f45780ef01a158d5eab4df8b.png";

/***/ }),

/***/ "asNl":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/capital.43885826e18f6e8b4bb9d00ad868a0e3.svg";

/***/ }),

/***/ "ayjR":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/usa.eda1e03f9e8b1f80866c26eefcf4c63a.svg";

/***/ }),

/***/ "bFJS":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/globoTV.c76a5ad9b215dba6f7dfa176e0235a4b.png";

/***/ }),

/***/ "bgvX":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/france.c6ad3636055d0b5a84bae6ba5f70ce6f.svg";

/***/ }),

/***/ "c6z9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/td.a0c820608172a0bc6d963e6748228802.png";

/***/ }),

/***/ "dqZP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/tsi.b658103c2d1be43f3b13713a5fdad596.png";

/***/ }),

/***/ "e4Q9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/cholusat.a68ac6da848cb823d3d05cc536dbc978.png";

/***/ }),

/***/ "g3Gj":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("KVKL");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("MTIv")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!../../postcss-loader/lib/index.js!./video-js.css", function() {
			var newContent = require("!!../../css-loader/index.js!../../postcss-loader/lib/index.js!./video-js.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "g7ap":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/rt.2bd2b49e5b2b985c1c0bf028aff64913.svg";

/***/ }),

/***/ "glMR":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/ecuadortv.b2a9da0ffef1ee5c730a26c10ebb66b0.png";

/***/ }),

/***/ "h0at":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/neox.2058ce1330793cfec70f4cc5d601cd11.jpg";

/***/ }),

/***/ "k3vx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/radioAmerica.879ae28ffeaea4f1ed7dbe2154cdbf2c.png";

/***/ }),

/***/ "mJPh":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "mXzH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/ecuador.8407dec6e3f02f4b76bdbe12b7bae2e3.svg";

/***/ }),

/***/ "mb/G":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/venezuela.779b8965ebcfa8bfd0724007ec269df8.svg";

/***/ }),

/***/ "nNBb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/tvperu.b188635343a62d5a5b839570e911f1da.png";

/***/ }),

/***/ "p4kA":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/nbc.e6b3fe76d94afcc49ee57d40cd800daf.svg";

/***/ }),

/***/ "qRKG":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/hispantv.ee9228c4f553167ae808b81b57c7ec7f.png";

/***/ }),

/***/ "r8LE":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/radioGlobo.84ab820a93e25f0d507613b9c7f7ef06.png";

/***/ }),

/***/ "rA6G":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/azteca13.f41dc02257e590d6607a9a1d80353203.png";

/***/ }),

/***/ "ruwY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/campustv.8712880b0e84ef04fce778b2eb23bbbe.png";

/***/ }),

/***/ "rz5r":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/cnnChile.750999d9fa6a3b75431980f7bd18b8e9.svg";

/***/ }),

/***/ "s2fN":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/cbs.711b99cc510c7573075a52443730d13b.svg";

/***/ }),

/***/ "sx/8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/peru.a3855d5b76c478e227e09117957ca4cd.svg";

/***/ }),

/***/ "t8iB":
/***/ (function(module, exports) {

var appCacheIframe;

function hasSW() {
  return 'serviceWorker' in navigator &&
    // This is how I block Chrome 40 and detect Chrome 41, because first has
    // bugs with history.pustState and/or hashchange
    (window.fetch || 'imageRendering' in document.documentElement.style) &&
    (window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname.indexOf('127.') === 0)
}

function install(options) {
  options || (options = {});

  
    if (hasSW()) {
      var registration = navigator.serviceWorker
        .register(
          "sw.js"
          
        );

      
        var handleUpdating = function(registration) {
          var sw = registration.installing || registration.waiting;
          var ignoreInstalling;
          var ignoreWaiting;

          // No SW or already handled
          if (!sw || sw.onstatechange) return;

          var stateChangeHandler;

          // Already has SW
          if (registration.active) {
            onUpdateStateChange();
            stateChangeHandler = onUpdateStateChange;
          } else {
            onInstallStateChange();
            stateChangeHandler = onInstallStateChange;
          }

          ignoreInstalling = true;
          if (registration.waiting) {
            ignoreWaiting = true;
          }

          sw.onstatechange = stateChangeHandler;

          function onUpdateStateChange() {
            switch (sw.state) {
              case 'redundant': {
                sendEvent('onUpdateFailed');
                sw.onstatechange = null;
              } break;

              case 'installing': {
                if (!ignoreInstalling) {
                  sendEvent('onUpdating');
                }
              } break;

              case 'installed': {
                if (!ignoreWaiting) {
                  sendEvent('onUpdateReady');
                }
              } break;

              case 'activated': {
                sendEvent('onUpdated');
                sw.onstatechange = null;
              } break;
            }
          }

          function onInstallStateChange() {
            switch (sw.state) {
              case 'redundant': {
                // Failed to install, ignore
                sw.onstatechange = null;
              } break;

              case 'installing': {
                // Installing, ignore
              } break;

              case 'installed': {
                // Installed, wait activation
              } break;

              case 'activated': {
                sendEvent('onInstalled');
                sw.onstatechange = null;
              } break;
            }
          }
        };

        var sendEvent = function(event) {
          if (typeof options[event] === 'function') {
            options[event]({
              source: 'ServiceWorker'
            });
          }
        };

        registration.then(function(reg) {
          // WTF no reg?
          if (!reg) return;

          // Installed but Shift-Reloaded (page is not controller by SW),
          // update might be ready at this point (more than one tab opened).
          // Anyway, if page is hard-reloaded, then it probably already have latest version
          // but it's not controlled by SW yet. Applying update will claim this page
          // to be controlled by SW. Maybe set flag to not reload it?
          // if (!navigator.serviceWorker.controller) return;

          handleUpdating(reg);
          reg.onupdatefound = function() {
            handleUpdating(reg);
          };
        }).catch(function(err) {
          sendEvent('onError');
          return Promise.reject(err);
        });
      

      return;
    }
  

  
    if (window.applicationCache) {
      var directory = "appcache/";
      var name = "manifest";

      var doLoad = function() {
        var page = directory + name + '.html';
        var iframe = document.createElement('iframe');

        
          window.addEventListener('message', function(e) {
            if (e.source !== iframe.contentWindow) return;

            var match = (e.data + '').match(/__offline-plugin_AppCacheEvent:(\w+)/);
            if (!match) return;
            var event = match[1];

            if (typeof options[event] === 'function') {
              options[event]({
                source: 'AppCache'
              });
            }
          });
        

        iframe.src = page;
        iframe.style.display = 'none';

        appCacheIframe = iframe;
        document.body.appendChild(iframe);
      };

      if (document.readyState === 'complete') {
        setTimeout(doLoad);
      } else {
        window.addEventListener('load', doLoad);
      }

      return;
    }
  
}

function applyUpdate(callback, errback) {
  
    if (hasSW()) {
      navigator.serviceWorker.getRegistration().then(function(registration) {
        if (!registration || !registration.waiting) {
          errback && errback();
          return;
        }

        registration.waiting.postMessage({
          action: 'skipWaiting'
        });

        callback && callback();
      });

      return;
    }
  

  
    if (appCacheIframe) {
      try {
        appCacheIframe.contentWindow.__applyUpdate();
        callback && setTimeout(callback);
      } catch (e) {
        errback && setTimeout(errback);
      }
    }
  
}

function update() {
  
    if (hasSW()) {
      navigator.serviceWorker.getRegistration().then(function(registration) {
        if (!registration) return;
        return registration.update();
      });
    }
  

  
    if (appCacheIframe) {
      try {
        appCacheIframe.contentWindow.applicationCache.update();
      } catch (e) {}
    }
  
}


  setInterval(update, 7200000);


exports.install = install;
exports.applyUpdate = applyUpdate;
exports.update = update;


/***/ }),

/***/ "tH8T":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/ten.a78dac6ed8551874899ba9452fcd25d7.png";

/***/ }),

/***/ "tTIp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/radioNacional.cffb05ddd0b1ecae364803b8db68424f.jpg";

/***/ }),

/***/ "udDS":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/caracol.d2da03f489c103d0a5543d038940e3b9.png";

/***/ }),

/***/ "vnoX":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/teleceiba.cc6b336b56d02bb177b0c30808b99284.png";

/***/ }),

/***/ "wk+E":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/iran.5445a5a1fcfccc3ea1ce748ef5d91991.svg";

/***/ }),

/***/ "wqWJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/germany.68a51090190055f8e34d670ea0296f9c.svg";

/***/ }),

/***/ "z301":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/telesur.46ec1d41b608d446873d0a6963906f99.svg";

/***/ }),

/***/ "zNme":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/teleprogreso.a98dbc55a8efb8f7c7fd6e8073d26b8c.png";

/***/ }),

/***/ "zOEH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/nova.b794d28cbe11e4a50800bd0bcc030e67.png";

/***/ }),

/***/ "ze//":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/hrn.e8dc0686dfd0438bf18b040fa2a9ea00.jpg";

/***/ })

},["2O6T"]);
//# sourceMappingURL=app.bundle.33a922094dbda56ab4ae.js.map