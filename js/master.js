const videoSection = document.getElementById("videoSection");
const channelSection = document.getElementById("channelSection");

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

window.tn5 = new channel(
  "TN5",
  "tn5",
  "https://trinity-lh.akamaihd.net/i/TelevicentroLive2_d@508538/index_800_av-p.m3u8"
);

window.tsi = new channel(
  "TSi",
  "tsi",
  "https://trinity-lh.akamaihd.net/i/TelevicentroLive1_d@17977/index_800_av-p.m3u8"
);

window.tn8 = new channel(
  "TN8",
  "tn8",
  "https://www.youtube.com/embed/6SWOtepXrbI",
  "video/youtube"
);

// window.ten = new channel(
//   "TEN",
//   "ten",
//   "rtmp://stream.grupoabchn.com:1935/TENHD/TENLIVEHD_2",
//   "rtmp/mp4",
//   "video"`data-setup='{"techOrder": ["flash", "html5"]}'`
// );

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

window.globo = new channel(
  "GloboTV",
  "globo",
  "http://tv.aliasdns.info:8979/live/g13/playlist.m3u8"
  // "video/flash"
);

window.tele7 = new channel(
  "TeleCeiba",
  "tele7",
  "http://190.11.224.14:8134/liveevent.m3u8"
);

window.prog = new channel(
  "TeleProg",
  "prog",
  "http://streannlive-lh.akamaihd.net/i/teleprogreso_1@372779/index_3_av-p.m3u8?sd=10&set-segment-duration=smoothest&rebase=on&hdntl=exp=1504818729~acl=%2f*~data=hdntl~hmac=3193f9a3a3ffbb7e4421fae3798785724aa25340fbbdf18e452f6a3f058d1876"
);

window.hrn = new channel(
  "HRN",
  "hrn",
  "http://radios504.geucast.net:18101/radio-live",
  "audio/mpeg",
  "audio"
);

window.america = new channel(
  "America",
  "america",
  "http://17803.live.streamtheworld.com/AMERICAAAC.aac",
  "audio/mpeg",
  "audio"
);

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
  if (videojs.players.videoContainer) {
    window.currentElement.classList.remove("active");
    videojs.players.videoContainer.dispose();
  }
  videoSection.innerHTML = `<${channel.video} controls id="videoContainer" autoplay muted class="video-js vjs-default-skin vjs-big-play-centered">
    <source src=${channel.link} type=${channel.type} ${channel.data}>
    </${channel.video}>`;
  //   window.videoSource = document.getElementById("videoContainer");
  player = videojs("videoContainer", {
    techOrder: ["flash", "youtube", "html5"]
  });
  player.width(window.innerWidth);
  player.height(window.innerHeight);
  window.currentElement = document.getElementById(channel.shortName);
  window.currentElement.classList.add("active");
  setTimeout(function() {
    player.muted(!"setMuted");
    // player.play();
    setTimeout(function() {
      // videoContainer.player.muted(!"setMuted");
      player.play();
    }, 200);
  }, 900);
};
window.toggleChannels = function() {
  channelSection.classList.toggle("inactiveChannels");
};
window.onresize = function() {
  player.width(window.innerWidth);
  player.height(window.innerHeight);
};
window.updateVideo(tsi);
