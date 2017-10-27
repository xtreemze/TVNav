import fscreen from "fscreen";

const videoSection = document.getElementById("videoSection");
const channelSection = document.getElementById("channelSection");
let channelList = "";
const h1Title = document.getElementById("h1Title");

window.checkSupport = function() {
  let content = "";
  const types = [
    "video/ogg",
    "video/mp4",
    "video/mp3",
    "video/webm",
    "audio/mpeg",
    "audio/ogg",
    "audio/mp3",
    "audio/aac",
    "audio/mp4"
  ];
  types.forEach(function(type) {
    let vid = document.createElement("video");
    let response;
    switch (vid.canPlayType(type)) {
      case "probably":
        response = "Probably";
        break;
      case "maybe":
        response = "Maybe";
        break;
      case "":
        response = "No support";
        break;
      default:
        break;
    }
    content += type + ": " + response + "\n";
  }, this);
  console.log(content);
};
let Channels = new Set();

class Channel {
  constructor({ name, shortName, link, type, video, data, ustream }) {
    this.name = name;
    this.shortName = shortName;
    this.link = link;
    this.type = type;
    this.video = video;
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
    channelList += `<div onclick="window.updateVideo(${shortName})" class="individualChannel" id=${shortName}>${name}</div>`;
    this.element = document.getElementById(this.shortName);
    // document.addEventListener("click", this.element.scrollIntoView());
    Channels.add(this);
  }
}

window.updateVideo = function(channel) {
  if (!window.currentElement === false) {
    window.currentElement.classList.remove("active");
  }
  if (!videojs.players.videoContainer === false && !window.player === false) {
    videojs.players.videoContainer.pause();
    videojs.players.videoContainer.dispose();
  }
  // poster="https://xtreemze.github.io/TVNav/img/bars.png"
  if (navigator.onLine && !channel.ustream) {
    videoSection.innerHTML = `<${channel.video} controls id="videoContainer" preload="auto" autoplay muted class="video-js vjs-default-skin vjs-big-play-centered">
  <source src=${channel.link}
   type=${channel.type} data=${channel.data}
   >
  </${channel.video}>`;
    window.player = videojs("videoContainer", {
      techOrder: [
        "html5",
        "flash"
        //  "youtube",
      ]
    });
    if (window.player) {
      window.player.width(window.innerWidth);
      window.player.height(window.innerHeight);
      setTimeout(function() {
        window.player.muted(!"setMuted");
      }, 900);
    }
    window.currentElement = document.getElementById(channel.shortName);
    window.currentElement.classList.add("active");
  } else if (navigator.onLine && channel.ustream) {
    if (!videojs.players.videoContainer === false && !window.player === false) {
      window.currentElement.classList.remove("active");
      videojs.players.videoContainer.pause();
      videojs.players.videoContainer.dispose();
    }

    if (navigator.onLine) {
      videoSection.innerHTML = `<iframe autoplay="true" showtitle="false" allowfullscreen="false" webkitallowfullscreen="false" scrolling="no" frameborder="0" width="${window.innerWidth}" height="${window.innerHeight}" id="video"
    src="${channel.link}?html5ui=1&autoplay=true&controls=false">
    </iframe>`;
      window.addEventListener("resize", function() {
        if (window.video) {
          window.video.width = window.innerWidth;
          window.video.height = window.innerHeight;
        }
      });
      window.currentElement = document.getElementById(channel.shortName);
      window.currentElement.classList.add("active");
    }
    document.title = channel.name + " | TVNav";
    h1Title.innerText = channel.name + " | TVNav";
    // setTimeout(function() {
    //   window.video.click();
    // }, 1000);
  }
  document.title = channel.name + " | TVNav";
  h1Title.innerText = channel.name + " | TVNav";
  window.player.on("error", function() {
    let element = document.getElementById(channel.shortName);
    element.remove();
  });
};

window.toggleChannels = function() {
  channelSection.classList.toggle("inactiveChannels");
};
window.addEventListener("resize", function() {
  if (window.player) {
    window.player.width(window.innerWidth);
    window.player.height(window.innerHeight);
  }
});
window.addEventListener("orientationchange", function() {
  if (window.player) {
    window.player.width(window.innerWidth);
    window.player.height(window.innerHeight);
  }
});
const main = document.getElementById("main");

window.addEventListener("load", function() {
  window.tsi = new Channel({
    name: "TSi",
    shortName: "tsi",
    link:
      "https://trinity-lh.akamaihd.net/i/TelevicentroLive1_d@17977/master.m3u8"
  });

  window.hrn = new Channel({
    name: "HRN",
    shortName: "hrn",
    link: "http://radios504.geucast.net:18101/radio-live",
    type: "audio/mpeg",
    video: "audio"
  });

  window.tn5 = new Channel({
    name: "TN5",
    shortName: "tn5",
    link:
      "https://trinity-lh.akamaihd.net/i/TelevicentroLive2_d@508538/master.m3u8"
  });

  window.ten = new Channel({
    name: "TEN",
    shortName: "ten",
    link: "http://stream.grupoabchn.com:1935/TENHD/TENLive.smil/playlist.m3u8"
  });

  window.hch = new Channel({
    name: "HCH",
    shortName: "hch",
    link: "http://stream.innovandote.com/hch/hch/playlist.m3u8"
  });

  window.rhch = new Channel({
    name: "Radio HCH",
    shortName: "rhch",
    link: "http://media.innovandote.com:8006/mountpoint",
    type: "audio/mpeg",
    video: "audio"
  });

  window.choluSat = new Channel({
    name: "CholuSat",
    shortName: "choluSat",
    link: "http://live.audiotvserver.com:1935/livemedia/cholusat/playlist.m3u8"
  });

  window.globoTV = new Channel({
    name: "GloboTV",
    shortName: "globoTV",
    link: "http://tv.aliasdns.info:8979/live/g13/playlist.m3u8"
  });

  window.rGlobo = new Channel({
    name: "Radio Globo",
    shortName: "rGlobo",
    link: "http://aliasdns.info:8016/;stream.mp3",
    type: "audio/mpeg",
    video: "audio"
  });

  window.patio = new Channel({
    name: "Radio El Patio",
    shortName: "patio",
    link: "http://195.154.182.222:25730/patio",
    type: "audio/mpeg",
    video: "audio"
  });
  window.tv45 = new Channel({
    name: "45TV",
    shortName: "tv45",
    link: "http://www.ustream.tv/embed/19421752",
    ustream: true
  });

  window.tele7 = new Channel({
    name: "TeleCeiba",
    shortName: "tele7",
    link: "http://190.11.224.14:8134/liveevent.m3u8"
  });

  window.teleProg = new Channel({
    name: "TeleProgreso",
    shortName: "teleProg",
    link: "blob:http://ott.streann.com/66e83bc8-5541-4c81-8c32-96e0004dd730"
  });

  window.rtv = new Channel({
    name: "RTV",
    shortName: "rtv",
    link: "http://www.ustream.tv/embed/18502457",
    ustream: true
  });

  window.campus = new Channel({
    name: "CampusTV",
    shortName: "campus",
    link: "http://st2.worldkast.com/8004/8004/playlist.m3u8"
  });

  window.rt = new Channel({
    name: "RT",
    shortName: "rt",
    link: "https://secure-streams.akamaized.net/rt-esp/index800.m3u8"
  });

  window.teleSur = new Channel({
    name: "TeleSur",
    shortName: "teleSur",
    link:
      "blob:https://mblive.telesur.ultrabase.net/3c81c78a-d99e-49ce-b58a-961e5e4ff320"
  });

  window.america = new Channel({
    name: "Radio America",
    shortName: "america",
    link: "http://17803.live.streamtheworld.com/AMERICAAAC.aac",
    type: "audio/mpeg",
    video: "audio"
  });

  window.rnh = new Channel({
    name: "Radio Nacional",
    shortName: "rnh",
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
  channelList += `<div class="individualChannel" id="donate"><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick">
  <input type="hidden" name="hosted_but
  ton_id" value="NWT2PUFW6NFLC">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form></div>`;

  channelSection.innerHTML = channelList;

  const fullscreenButton = document.getElementById("fullscreenButton");
  fullscreenButton.addEventListener("click", function() {
    if (fscreen.fullscreenElement !== null) {
      fscreen.exitFullscreen();
    } else {
      channelSection.classList.add("inactiveChannels");
      fscreen.requestFullscreen(main);
    }
  });
  channelTest();
  // updateVideo(tv45);
});

const channelTest = function() {
  if (navigator.onLine) {
    let timer = 100;
    Channels.forEach(function(channel) {
      timer += 500;
      setTimeout(function() {
        updateVideo(channel);
        // window.player.width(0);
        window.player.height(0);
      }, timer);
    }, this);
    setTimeout(function() {
      updateVideo(tsi);
    }, timer + 500);
  }
};
