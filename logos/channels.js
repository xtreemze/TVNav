window.Channels = new Set();
window.ChannelIterator = Channels.values();
let channelList = "";

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
    channelList += `<div onclick="window.test=false; window.updateVideo(${shortName}); " class="individualChannel" id=${shortName}>${name}</div>`;
    this.element = document.getElementById(this.shortName);
    // document.addEventListener("click", this.element.scrollIntoView());
    Channels.add(this);
  }
}

window.earth = new Channel({
  name: "EarthTV",
  shortName: "earth",
  logo: require("./earthtv.png"),
  link:
    "https://cdn-liveonearth.global.ssl.fastly.net/cdnedge/smil:TWL-es.smil/playlist.m3u8?599d9478bbf047685d049e82"
});

window.tsi = new Channel({
  name: "TSi",
  shortName: "tsi",
  logo: require("./tsi.png"),
  link:
    "https://trinity-lh.akamaihd.net/i/TelevicentroLive1_d@17977/master.m3u8"
});

window.tn5 = new Channel({
  name: "TN5",
  shortName: "tn5",
  logo: require("./canal5.png"),
  link:
    "https://trinity-lh.akamaihd.net/i/TelevicentroLive2_d@508538/master.m3u8"
});

window.ten = new Channel({
  name: "TEN",
  shortName: "ten",
  logo: require("./ten.png"),
  link: "http://stream.grupoabchn.com:1935/TENHD/TENLive.smil/playlist.m3u8"
});

window.hch = new Channel({
  name: "HCH",
  shortName: "hch",
  logo: require("./hch.png"),
  link: "http://stream.innovandote.com/hch/hch/playlist.m3u8"
});

window.globoTV = new Channel({
  name: "GloboTV",
  shortName: "globoTV",
  logo: require("./globoTV.png"),
  link: "http://tv.aliasdns.info:8979/live/g13/playlist.m3u8"
});

window.tv45 = new Channel({
  name: "45TV",
  shortName: "tv45",
  logo: require("./45tv.png"),
  link: "http://www.ustream.tv/embed/19421752",
  ustream: true
});

window.tele7 = new Channel({
  name: "TeleCeiba",
  shortName: "tele7",
  logo: require("./teleceiba.png"),
  link: "http://190.11.224.14:8134/liveevent.m3u8"
});

window.once = new Channel({
  name: "Canal 11",
  shortName: "once",
  logo: require("./canal11.png"),
  link:
    "http://www.miotv.hn:1935/securelive/smil:c11.smil/chunklist_w1277053248_b1304800.m3u8"
});

window.azteca = new Channel({
  name: "Azteca",
  shortName: "azteca",
  logo: require("./azteca.png"),
  link: "http://aztecalive-lh.akamaihd.net/i/0dcqjxkgx_1@502208/master.m3u8"
});

window.campus = new Channel({
  name: "CampusTV",
  shortName: "campus",
  logo: require("./campustv.png"),
  link: "http://st2.worldkast.com/8004/8004/playlist.m3u8"
});

window.rt = new Channel({
  name: "RT",
  shortName: "rt",
  logo: require("./rt.svg"),
  link: "https://secure-streams.akamaized.net/rt-esp/index800.m3u8"
});

window.caracol = new Channel({
  name: "Caracol",
  shortName: "caracol",
  logo: require("./caracol.png"),
  link: "http://mdstrm.com/live-stream-playlist/58dc3d471cbe05ff3c8e463e.m3u8"
  // ustream: true
});

window.teleSur = new Channel({
  name: "TeleSUR",
  shortName: "teleSur",
  logo: require("./telesur.svg"),
  link:
    "blob:https://mblive.telesur.ultrabase.net/3c81c78a-d99e-49ce-b58a-961e5e4ff320"
});

window.cnn = new Channel({
  name: "CNN",
  shortName: "cnn",
  logo: require("./cnnChile.svg"),
  link: "http://unlimited1-us.dps.live/cnn/cnn.smil/playlist.m3u8"
});

window.tve = new Channel({
  name: "TVE",
  shortName: "tve",
  logo: require("./tve.svg"),
  link: "http://hlsackdn_gl8-lh.akamaihd.net/i/hlsdvrlive_1@81183/master.m3u8"
});

window.dw = new Channel({
  name: "DW",
  shortName: "dw",
  logo: require("./dw.svg"),
  link:
    "http://dwstream3-lh.akamaihd.net/i/dwstream3_live@124409/index_5_av-p.m3u8?sd=10&rebase=on"
});
window.mas = new Channel({
  name: "TVMas",
  shortName: "mas",
  logo: require("./tvmas.jpg"),
  link: "http://50.7.98.234:1935/rtv/videortv/chunklist.m3u8"
});

window.peru = new Channel({
  name: "Peru",
  shortName: "peru",
  logo: require("./tvperu.png"),
  link: "http://cdnh15.iblups.com/hls/irtp.m3u8"
});

window.ecuador = new Channel({
  name: "Ecuador TV",
  shortName: "ecuador",
  logo: require("./ecuadortv.png"),
  link:
    "http://api.new.livestream.com/accounts/22196143/events/6576568/live.m3u8"
});

window.mega = new Channel({
  name: "MEGA",
  shortName: "mega",
  logo: require("./mega.svg"),
  link:
    "http://a3live-lh.akamaihd.net/i/mghds/geomega_1@328914/index_3_av-b.m3u8"
});

window.chilev = new Channel({
  name: "Chilevision",
  shortName: "chilev",
  logo: require("./chilevision.png"),
  link:
    "http://chv.movil.rtsp.ztreaming.com/chvmovil2/chilevision@140569/chunklist_w787114469.m3u8"
});

window.cableNoti = new Channel({
  name: "CableNoticias",
  shortName: "cableNoti",
  logo: require("./cablenoticias.png"),
  link: "http://hlslive.lcdn.une.net.co/v1/AUTH_HLSLIVE/CNOT/tu1_1.m3u8"
});

window.td = new Channel({
  name: "Todo Deportes",
  shortName: "td",
  logo: require("./td.png"),
  link:
    "http://190.92.0.43:1935/securelive/tdtv85jd5EKL3xWq3/chunklist_w1241310319.m3u8"
});
window.teleProg = new Channel({
  name: "TeleProgreso",
  shortName: "teleProg",
  logo: require("./teleprogreso.png"),
  link: "blob:http://ott.streann.com/66e83bc8-5541-4c81-8c32-96e0004dd730"
});

window.rtv = new Channel({
  name: "RTV",
  shortName: "rtv",
  logo: require("./rtv.png"),
  link: "http://www.ustream.tv/embed/18502457",
  ustream: true
});
window.hondured = new Channel({
  name: "HonduRed",
  shortName: "hondured",
  logo: require("./hondured.png"),
  link: "http://173.236.71.62:1935/hondured/hrtv.sdp/chunklist_w172057188.m3u8"
});
window.hispan = new Channel({
  name: "HISPANTV",
  shortName: "hispan",
  logo: require("./hispantv.png"),
  link: "http://178.32.255.199:1935/live/hispantv/chunklist_w1542092239.m3u8"
});

window.seis = new Channel({
  name: "Canal 6",
  shortName: "seis",
  logo: require("./canal6.png"),
  link:
    "https://ott.streann.com/loadbalancer/services/public/channels-secure/56bd45f5e4b0ba125fe8a866/playlist.m3u8"
});
window.choluSat = new Channel({
  name: "CholuSat",
  shortName: "choluSat",
  logo: require("./cholusat.png"),
  link: "http://live.audiotvserver.com:1935/livemedia/cholusat/playlist.m3u8"
});
window.metro = new Channel({
  name: "MetroTV",
  shortName: "metro",
  link: "http://servicioamerica.net:1935/8404/8404/playlist.m3u8"
});

window.vtv = new Channel({
  name: "VTV",
  shortName: "vtv",
  logo: require("./vtv.png"),
  link: "http://d3bus2b3f32oks.cloudfront.net/hn//smil:vtv.smil/playlist.m3u8"
});

window.capital = new Channel({
  name: "Canal Capital",
  shortName: "capital",
  logo: require("./capital.svg"),
  link:
    "http://us-b2-p-e-sx6.cdn.mdstrm.com/live-stream/57d01d6c28b263eb73b59a5a/publish/media_500.m3u8?dnt=true&es=us-b2-p-e-sx6.cdn.mdstrm.com&ote=1506105524968&ot=PhcZX6iEf6naqlTvLiSrJA&proto=http"
});

window.nexTV = new Channel({
  name: "NexTV",
  shortName: "nexTV",
  logo: require("./nex.png"),
  link: "http://198.1.117.5:1935/live/livestream/chunklist_w1290911642.m3u8"
});

window.nqn = new Channel({
  name: "NQN",
  shortName: "nqn",
  // logo: require("./tve.svg"),
  link: "http://142.4.208.146:1935/cn247/cn247/playlist.m3u8"
});

window.once = new Channel({
  name: "Once",
  shortName: "once",
  // logo: require("./tve.svg"),
  link:
    "http://live.canaloncelive.tv:1935/livepkgr2/smil:internacional.smil/master.m3u8"
});

window.hrn = new Channel({
  name: "HRN",
  shortName: "hrn",
  logo: require("./hrn.jpg"),
  link: "http://radios504.geucast.net:18101/radio-live",
  type: "audio/mpeg",
  video: "audio"
});

window.euro = new Channel({
  name: "EuroNews",
  shortName: "euro",
  logo: require("./euro.svg"),
  link: "http://euronews-04.ice.infomaniak.ch/euronews-04.aac",
  type: "audio/mpeg",
  video: "audio"
});

window.voces = new Channel({
  name: "Radio Cadena Voces",
  shortName: "voces",
  logo: require("./rcv.png"),
  link: "http://stream.latinoradiocast.com/41a8pc4gfd5tv",
  type: "audio/mpeg",
  video: "audio"
});

window.rGlobo = new Channel({
  name: "Radio Globo",
  shortName: "rGlobo",
  logo: require("./radioGlobo.png"),
  link: "http://aliasdns.info:8016/;stream.mp3",
  type: "audio/mpeg",
  video: "audio"
});

window.patio = new Channel({
  name: "Radio El Patio",
  shortName: "patio",
  logo: require("./patio.jpg"),
  link: "http://195.154.182.222:25730/patio",
  type: "audio/mpeg",
  video: "audio"
});

window.america = new Channel({
  name: "Radio America",
  shortName: "america",
  logo: require("./radioAmerica.png"),
  link: "http://17803.live.streamtheworld.com/AMERICAAAC.aac",
  type: "audio/mpeg",
  video: "audio"
});

window.rnh = new Channel({
  name: "Radio Nacional",
  shortName: "rnh",
  logo: require("./radioNacional.jpg"),
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

// window.logoList = function() {
//   //   let content = "";
//   let html = "";
//   Channels.forEach(function(channel) {
//     if (channel.logo) {
//       //   content += `"${channel.logo}",\n`;
//       html += `<img src="${channel.logo}">\n`;
//     }
//   }, this);
//   //   console.log(content);
//   //   console.log(html);
//   window.logos.innerHTML = html;
//   setTimeout(function() {
//     window.logos.remove();
//   }, 4000);
// };
// logoList();
