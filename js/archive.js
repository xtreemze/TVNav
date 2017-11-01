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
