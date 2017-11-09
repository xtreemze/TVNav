window.logoList = function() {
  //   let content = "";
  let html = "";
  Channels.forEach(function(channel) {
    if (channel.logo) {
      //   content += `"${channel.logo}",\n`;
      html += `<img src="${channel.logo}">\n`;
    }
  }, this);
  //   console.log(content);
  //   console.log(html);
  window.logos.innerHTML = html;
  setTimeout(function() {
    window.logos.remove();
  }, 4000);
};
logoList();

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

const initVideo = function(channel) {
  if (navigator.onLine && !channel.ustream) {
    initialVideoSection.innerHTML = `<${channel.video} controls id="videoContainer2" preload="auto" autoplay muted class="video-js vjs-default-skin">
  <source src=${channel.link} type=${channel.type} data=${channel.data}>
</${channel.video}>
`;
    window.player2 = videojs("videoContainer2", video.option, function() {
      video.mediaSession;
      if (window.player2) {
        window.player2.width(window.innerWidth);
        window.player2.height(window.innerHeight);
        if (!channel.ustream) {
          setTimeout(function() {
            window.player2.muted(!"setMuted");
          }, 1001);
        }
      }
    });
  }
};

window.addEventListener("load", function() {
  // videojs.players.videoContainer2.dispose();
  // falseTest();
  // setTimeout(function() {
  // updateVideo(earth);
  // }, 500);
  // initVideo(earth);
  // channelTest(1);
  // toggleChannels();
  // updateVideo(tsi);
});
