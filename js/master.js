const videoSection = document.getElementById("videoSection");
const channel = function(name, link) {
  this.name = name;
  this.link = link;
};
window.tn5 = new channel(
  "TN5",
  "https://trinity-lh.akamaihd.net/i/TelevicentroLive2_d@508538/index_800_av-p.m3u8"
);

window.tele7 = new channel(
  "TeleCeiba",
  "http://190.11.224.14:8134/liveevent.m3u8"
);

window.hch = new channel(
  "HCH",
  "https://5997ea093ae04.streamlock.net/hch/hch/playlist.m3u8"
);
window.updateVideo = function updateVideo(newChannel) {
  if (!videojs.players.videoContainer === false) {
    videojs.players.videoContainer.dispose();
  }
  videoSection.innerHTML = `<video controls id="videoContainer" crossorigin autoplay class="video-js vjs-default-skin">
    <source src=${newChannel} type="application/x-mpegURL">
    </video>`;
  const videoSource = document.getElementById("videoContainer");
  const player = videojs("videoContainer");
  player.width(window.innerWidth);
  player.height(window.innerHeight);
  player.play();
};
window.updateVideo(tn5.link);
