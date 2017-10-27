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
  constructor({ name, shortName, link, type, video, data, ustream, logo }) {
    this.name = name;
    this.shortName = shortName;
    this.link = link;
    this.type = type;
    this.video = video;
    this.logo = logo;
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
  if (channel.logo) {
    window.channelLogo.innerHTML = `<img src="${channel.logo}">`;
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
    document.title = "Canal eliminado: " + channel.name;
    h1Title.innerText = "Canal eliminado: " + channel.name;
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
    logo: "./logos/tsi.png",
    link:
      "https://trinity-lh.akamaihd.net/i/TelevicentroLive1_d@17977/master.m3u8"
  });

  window.tn5 = new Channel({
    name: "TN5",
    shortName: "tn5",
    logo: "./logos/canal5.png",
    link:
      "https://trinity-lh.akamaihd.net/i/TelevicentroLive2_d@508538/master.m3u8"
  });

  window.ten = new Channel({
    name: "TEN",
    shortName: "ten",
    logo: "./logos/ten.png",
    link: "http://stream.grupoabchn.com:1935/TENHD/TENLive.smil/playlist.m3u8"
  });

  window.hch = new Channel({
    name: "HCH",
    shortName: "hch",
    logo: "./logos/hch.png",
    link: "http://stream.innovandote.com/hch/hch/playlist.m3u8"
  });

  window.choluSat = new Channel({
    name: "CholuSat",
    shortName: "choluSat",
    logo: "./logos/cholusat.png",
    link: "http://live.audiotvserver.com:1935/livemedia/cholusat/playlist.m3u8"
  });

  window.globoTV = new Channel({
    name: "GloboTV",
    shortName: "globoTV",
    logo: "./logos/globoTV.png",
    link: "http://tv.aliasdns.info:8979/live/g13/playlist.m3u8"
  });

  window.tv45 = new Channel({
    name: "45TV",
    shortName: "tv45",
    logo: "./logos/45tv.png",
    link: "http://www.ustream.tv/embed/19421752",
    ustream: true
  });

  window.tele7 = new Channel({
    name: "TeleCeiba",
    shortName: "tele7",
    logo: "./logos/teleceiba.png",
    link: "http://190.11.224.14:8134/liveevent.m3u8"
  });

  window.teleProg = new Channel({
    name: "TeleProgreso",
    shortName: "teleProg",
    logo: "./logos/teleprogreso.png",
    link: "blob:http://ott.streann.com/66e83bc8-5541-4c81-8c32-96e0004dd730"
  });

  window.rtv = new Channel({
    name: "RTV",
    shortName: "rtv",
    logo: "./logos/rtv.png",
    link: "http://www.ustream.tv/embed/18502457",
    ustream: true
  });

  window.seis = new Channel({
    name: "Canal 6",
    shortName: "seis",
    logo: "./logos/canal6.png",
    link:
      "https://ott.streann.com/loadbalancer/services/public/channels-secure/56bd45f5e4b0ba125fe8a866/playlist.m3u8"
  });

  window.once = new Channel({
    name: "Canal 11",
    shortName: "once",
    logo: "./logos/canal11.png",
    link:
      "http://www.miotv.hn:1935/securelive/smil:c11.smil/chunklist_w1277053248_b1304800.m3u8"
  });

  window.azteca = new Channel({
    name: "Azteca",
    shortName: "azteca",
    logo: "./logos/azteca.png",
    link: "http://aztecalive-lh.akamaihd.net/i/0dcqjxkgx_1@502208/master.m3u8"
  });

  window.td = new Channel({
    name: "Todo Deportes",
    shortName: "td",
    logo: "./logos/td.png",
    link:
      "http://190.92.0.43:1935/securelive/tdtv85jd5EKL3xWq3/chunklist_w1241310319.m3u8"
  });

  window.metro = new Channel({
    name: "MetroTV",
    shortName: "metro",
    link: "http://servicioamerica.net:1935/8404/8404/playlist.m3u8"
  });

  window.vtv = new Channel({
    name: "VTV",
    shortName: "vtv",
    logo: "./logos/vtv.png",
    link: "http://d3bus2b3f32oks.cloudfront.net/hn//smil:vtv.smil/playlist.m3u8"
  });

  window.campus = new Channel({
    name: "CampusTV",
    shortName: "campus",
    logo: "./logos/campustv.png",
    link: "http://st2.worldkast.com/8004/8004/playlist.m3u8"
  });

  window.hondured = new Channel({
    name: "HonduRed",
    shortName: "hondured",
    logo: "./logos/hondured.png",
    link:
      "http://173.236.71.62:1935/hondured/hrtv.sdp/chunklist_w172057188.m3u8"
  });

  window.rt = new Channel({
    name: "RT",
    shortName: "rt",
    logo: "./logos/rt.svg",
    link: "https://secure-streams.akamaized.net/rt-esp/index800.m3u8"
  });

  window.hispan = new Channel({
    name: "HISPANTV",
    shortName: "hispan",
    logo: "./logos/hispantv.png",
    link: "http://178.32.255.199:1935/live/hispantv/chunklist_w1542092239.m3u8"
  });

  window.caracol = new Channel({
    name: "Caracol",
    shortName: "caracol",
    logo: "./logos/caracol.png",
    link: "http://mdstrm.com/live-stream-playlist/58dc3d471cbe05ff3c8e463e.m3u8"
    // ustream: true
  });

  window.teleSur = new Channel({
    name: "TeleSUR",
    shortName: "teleSur",
    logo: "./logos/telesur.svg",
    link:
      "blob:https://mblive.telesur.ultrabase.net/3c81c78a-d99e-49ce-b58a-961e5e4ff320"
  });

  window.cnn = new Channel({
    name: "CNN",
    shortName: "cnn",
    logo: "./logos/cnnChile.svg",
    link: "http://unlimited1-us.dps.live/cnn/cnn.smil/playlist.m3u8"
  });

  window.hrn = new Channel({
    name: "HRN",
    shortName: "hrn",
    logo: "./logos/hrn.jpg",
    link: "http://radios504.geucast.net:18101/radio-live",
    type: "audio/mpeg",
    video: "audio"
  });

  window.rhch = new Channel({
    name: "Radio HCH",
    shortName: "rhch",
    logo: "./logos/hch.png",
    link: "http://media.innovandote.com:8006/mountpoint",
    type: "audio/mpeg",
    video: "audio"
  });

  window.rGlobo = new Channel({
    name: "Radio Globo",
    shortName: "rGlobo",
    logo: "./logos/radioGlobo.png",
    link: "http://aliasdns.info:8016/;stream.mp3",
    type: "audio/mpeg",
    video: "audio"
  });

  window.patio = new Channel({
    name: "Radio El Patio",
    shortName: "patio",
    logo: "./logos/patio.jpg",
    link: "http://195.154.182.222:25730/patio",
    type: "audio/mpeg",
    video: "audio"
  });

  window.america = new Channel({
    name: "Radio America",
    shortName: "america",
    logo: "./logos/radioAmerica.png",
    link: "http://17803.live.streamtheworld.com/AMERICAAAC.aac",
    type: "audio/mpeg",
    video: "audio"
  });

  window.rnh = new Channel({
    name: "Radio Nacional",
    shortName: "rnh",
    logo: "./logos/radioNacional.jpg",
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
  <input type="hidden" name="hosted_button_id" value="NWT2PUFW6NFLC">
  <input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea.">
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
        document.title = "Revisando canal: " + channel.name;
        h1Title.innerText = "Revisando canal: " + channel.name;
      }, timer);
    }, this);
    setTimeout(function() {
      updateVideo(tsi);
    }, timer + 500);
  }
};
