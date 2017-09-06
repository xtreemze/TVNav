const videoSection = document.getElementById("videoSection");
const channelSection = document.getElementById("channelSection");

const channel = function(name, shortName, link, type, data) {
  this.name = name;
  this.link = link;
  if (!type) {
    this.type = "application/x-mpegURL";
  } else {
    this.type = type;
  }
  if (!data) {
    this.data = "";
  } else {
    this.data = data;
  }
  channelSection.innerHTML += `<div onclick="updateVideo(${shortName});" class="individualChannel" id=${name}>${name}</div>`;
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

window.tele7 = new channel(
  "TeleCeiba",
  "tele7",
  "http://190.11.224.14:8134/liveevent.m3u8"
);

window.hrn = new channel(
  "HRN",
  "hrn",
  "http://radios504.geucast.net:18101/radio-live"
);

window.tn8 = new channel(
  "TN8",
  "tn8",
  "https://www.youtube.com/embed/6SWOtepXrbI",
  "video/youtube"
);

window.updateVideo = function(channel) {
  if (!videojs.players.videoContainer != true) {
    videojs.players.videoContainer.dispose();
  }
  videoSection.innerHTML = `<video controls id="videoContainer" autoplay class="video-js vjs-default-skin">
    <source src=${channel.link} type=${channel.type} ${channel.data}>
    </video>`;
  //   window.videoSource = document.getElementById("videoContainer");
  player = videojs("videoContainer");
  player.width(window.innerWidth);
  player.height(window.innerHeight);
  player.play();
};
window.onresize = function() {
  player.width(window.innerWidth);
  player.height(window.innerHeight);
};
window.updateVideo(choluSat);
