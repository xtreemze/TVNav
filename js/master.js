import * as OfflinePluginRuntime from "offline-plugin/runtime";

OfflinePluginRuntime.install({
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

import videojs from "video.js";
require("videojs-flash");
// import "videojs-contrib-hls";
window.videojs = videojs;

import * as HLS from "videojs-contrib-hls";
// require("!style-loader!css-loader!video.js/dist/video-js.css");
import zenscroll from "zenscroll";
window.zenscroll = zenscroll;
// import videojs-flash from "videojs-flash";
// import video-contrib-hls from "videojs-contrib-hls";
require("../logos/channels.js");
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
  if (!videojs.players.videoContainer2 === false) {
    videojs.players.videoContainer2.pause();
    videojs.players.videoContainer2.dispose();
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
  if (!videojs.players.videoContainer === false && !window.player === false) {
    videojs.players.videoContainer.pause();
    videojs.players.videoContainer.dispose();
  }
  // poster="../img/bars.png"
  if (navigator.onLine && !channel.ustream) {
    videoSection.innerHTML = `<${channel.video} controls id="videoContainer" preload="auto" autoplay muted class="video-js vjs-default-skin vjs-big-play-centered">
    <source src=${channel.link} type=${channel.type} data=${channel.data}>
</${channel.video}>
`;
    window.player = videojs("videoContainer", {
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
    if (!videojs.players.videoContainer === false && !window.player === false) {
      window.currentElement.classList.remove("active");
      videojs.players.videoContainer.pause();
      videojs.players.videoContainer.dispose();
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
              !videojs.players.videoContainer === false &&
              !window.player === false
            ) {
              videojs.players.videoContainer.pause();
              videojs.players.videoContainer.dispose();
            }
            // poster="../img/bars.png"
            if (navigator.onLine && !channel.ustream) {
              videoSection.innerHTML = `<${channel.video} controls id="videoContainer" preload="auto" autoplay muted class="video-js vjs-default-skin">
            <source src=${channel.link} type=${channel.type} data=${channel.data}>
        </${channel.video}>
        `;
              window.player = videojs(
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
        !videojs.players.videoContainer === false &&
        !window.player === false
      ) {
        videojs.players.videoContainer.pause();
        videojs.players.videoContainer.dispose();
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
    window.player2 = videojs(
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
require("../js/keyboard.js");
