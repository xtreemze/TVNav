import fscreen from "fscreen";

const videoSection = document.getElementById("videoSection");
const channelSection = document.getElementById("channelSection");

/**
 * Channel Factory
 * @param {string} name 
 * @param {string} shortName 
 * @param {string} link 
 * @param {string} type 
 * @param {string} video 
 * @param {string} data 
 */
const channel = function(name, shortName, link, type, video, data) {
  this.name = name;
  this.shortName = shortName;
  this.link = link;
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
  this.data = data;
  channelSection.innerHTML += `<div onclick="updateVideo(${shortName});" class="individualChannel" id=${shortName}>${name}</div>`;
};

window.tsi = new channel(
  "TSi",
  "tsi",
  // "https://trinity-lh.akamaihd.net/i/TelevicentroLive1_d@17977/index_800_av-p.m3u8?sd=10&rebase=on"
  "https://trinity-lh.akamaihd.net/i/TelevicentroLive1_d@17977/master.m3u8"
);

window.hrn = new channel(
  "HRN",
  "hrn",
  "http://radios504.geucast.net:18101/radio-live",
  "audio/mpeg",
  "audio"
);

window.tn5 = new channel(
  "TN5",
  "tn5",
  // "https://trinity-lh.akamaihd.net/i/TelevicentroLive2_d@508538/index_800_av-p.m3u8?sd=10&rebase=on"
  "https://trinity-lh.akamaihd.net/i/TelevicentroLive2_d@508538/master.m3u8"
);

// window.tn8 = new channel(
//   "TN8",
//   "tn8",
//   "https://www.youtube.com/embed/6SWOtepXrbI",
//   "video/youtube"
// );

window.ten = new channel(
  "TEN",
  "ten",
  "http://stream.grupoabchn.com:1935/TENHD/TENLive.smil/playlist.m3u8"
  // "rtmp/mp4",
  // "video"`data-setup='{"techOrder": ["flash", "html5"]}'`
);

window.hch = new channel(
  "HCH",
  "hch",
  "https://5997ea093ae04.streamlock.net/hch/hch/playlist.m3u8"
);

window.choluSat = new channel(
  "CholuSat",
  "choluSat",
  "http://live.audiotvserver.com:1935/livemedia/cholusat/playlist.m3u8"
);

window.globoTV = new channel(
  "GloboTV",
  "globoTV",
  "http://tv.aliasdns.info:8979/live/g13/playlist.m3u8"
  // "video/flash"
);

window.rGlobo = new channel(
  "Radio Globo",
  "rGlobo",
  "http://aliasdns.info:8016/;stream.mp3",
  "audio/mpeg",
  "audio"
);

window.tele7 = new channel(
  "TeleCeiba",
  "tele7",
  "http://190.11.224.14:8134/liveevent.m3u8"
  // "http://190.11.224.14:8134/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8"
);

window.prog = new channel(
  "TeleProgreso",
  "prog",
  "http://streannlive-lh.akamaihd.net/i/teleprogreso_1@372779/index_3_av-p.m3u8?sd=10&set-segment-duration=smoothest&rebase=on&hdntl=exp=1504818729~acl=%2f*~data=hdntl~hmac=3193f9a3a3ffbb7e4421fae3798785724aa25340fbbdf18e452f6a3f058d1876"
);

window.campus = new channel(
  "CampusTV",
  "campus",
  "http://st2.worldkast.com/8004/8004/playlist.m3u8"
);

window.america = new channel(
  "Radio America",
  "america",
  "http://17803.live.streamtheworld.com/AMERICAAAC.aac",
  "audio/mpeg",
  "audio"
);

window.patio = new channel(
  "Radio El Patio",
  "patio",
  "http://195.154.182.222:25730/patio",
  "audio/mpeg",
  "audio"
);

window.rnh = new channel(
  "Radio Nacional",
  "rnh",
  "http://stream.playerlive.info:8049//rnh.aac",
  "audio/aac",
  "audio"
);

window.rprog = new channel(
  "Radio Progreso",
  "rprog",
  "http://noasrv.caster.fm:10194/stream?1504792373090.mp3",
  "audio/mpeg",
  "audio"
);

// Donate
channelSection.innerHTML += `<div class="individualChannel" id="donate"><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_but
ton_id" value="NWT2PUFW6NFLC">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form></div>`;
// window.fox = new channel(
//   "FOX LA",
//   "fox",
//   "http://144.217.85.216/streams/src1/lk.m3u8?mxg=U2FsdGVkX1%2BuHQO2E1H%2BP7sAXOhxjrCNPA xGoGomRPhceDWuRB7Lp5qQB4flInWlPDUGBxRXQX6rJhiSl4qq TQ"
//   // "video/mp4"
// );

// window.nbc = new channel(
//   "NBC LA",
//   "nbc",
//   "http://144.217.85.216/streams/src1/lk.m3u8?mxg=U2FsdGVkX193DVxSGtLXvtuWqictwICfXqcxQS jZrwqqwBqcogKAXGq7O7srH1sRvK%2FlzIyeySBj5Oull%2Bz1 5A%3D%3D"
//   // "video/mp4"
// );
// window.rtv = new channel(
//   "RTV",
//   "rtv",
//   `http://www.ustream.tv/embed/18502457`
//   // "video/flash"
// );

window.updateVideo = function(channel) {
  if (videojs.players.videoContainer && window.player) {
    window.currentElement.classList.remove("active");
    videojs.players.videoContainer.dispose();
  }
  videoSection.innerHTML = `<${channel.video} controls id="videoContainer" preload="auto" poster="https://xtreemze.github.io/TVNav/img/test.jpg" autoplay muted class="video-js vjs-default-skin vjs-big-play-centered">
  <source src=${channel.link} type=${channel.type} ${channel.data}>
  </${channel.video}>`;
  window.player = videojs(
    "videoContainer"
    // , {
    //   techOrder: [
    //     // "flash", "youtube",
    //    "html5"]
    // }
  );
  window.player.width(window.innerWidth);
  window.player.height(window.innerHeight);
  window.currentElement = document.getElementById(channel.shortName);
  window.currentElement.classList.add("active");
  document.title = channel.name + " | TVNav";
  setTimeout(function() {
    window.player.muted(!"setMuted");
    setTimeout(function() {
      window.player.play();
    }, 200);
  }, 900);
};
window.toggleChannels = function() {
  channelSection.classList.toggle("inactiveChannels");
};
window.addEventListener("resize", function() {
  window.player.width(window.innerWidth);
  window.player.height(window.innerHeight);
});
window.addEventListener("orientationchange", function() {
  window.player.width(window.innerWidth);
  window.player.height(window.innerHeight);
});
const main = document.getElementById("main");
const fullscreenButton = document.getElementById("fullscreenButton");
fullscreenButton.addEventListener("click", function() {
  if (fscreen.fullscreenElement !== null) {
    fscreen.exitFullscreen();
  } else {
    channelSection.classList.add("inactiveChannels");
    fscreen.requestFullscreen(main);
  }
});
window.addEventListener("load", function() {
  window.updateVideo(tsi);
});
