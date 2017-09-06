const videoSection = document.getElementById("videoSection");
const channelSection = document.getElementById("channelSection");

const channel = function(name, link) {
  this.name = name;
  this.link = link;
  channelSection.innerHTML += `<div onclick="updateVideo('${link}');" class="individualChannel" id=${name}>${name}</div>`;
};

window.tn5 = new channel(
  "TN5",
  "https://trinity-lh.akamaihd.net/i/TelevicentroLive2_d@508538/index_800_av-p.m3u8"
);

window.tsi = new channel(
  "TSi",
  "https://trinity-lh.akamaihd.net/i/TelevicentroLive1_d@17977/index_800_av-p.m3u8"
);

window.hch = new channel(
  "HCH",
  "https://5997ea093ae04.streamlock.net/hch/hch/playlist.m3u8"
);

window.choluSat = new channel(
  "CholuSat Sur",
  "http://live.audiotvserver.com:1935/livemedia/cholusat/playlist.m3u8"
);

window.tele7 = new channel(
  "TeleCeiba",
  "http://190.11.224.14:8134/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8"
  //   "http://190.11.224.14:8134/liveevent.m3u8"
);

window.updateVideo = function(newChannel) {
  if (!videojs.players.videoContainer != true) {
    videojs.players.videoContainer.dispose();
  }
  videoSection.innerHTML = `<video controls id="videoContainer" autoplay class="video-js vjs-default-skin">
    <source src=${newChannel} type="application/x-mpegURL">
    </video>`;
  //   window.videoSource = document.getElementById("videoContainer");
  player = videojs("videoContainer");
  player.width(window.innerWidth);
  player.height(window.innerHeight);
  player.play();
};
window.updateVideo(choluSat.link);
