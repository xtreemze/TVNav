// Declare Channel Class
window.Channels = new Set();
// Create Channels
let channelList = "";

class Channel {
  constructor({
    name,
    shortName,
    link,
    type = "application/x-mpegURL",
    video = "video",
    data = {},
    ustream,
    logo,
    country
  }) {
    this.name = name;
    this.shortName = shortName;
    this.link = link;
    this.type = type;
    this.video = video;
    this.logo = logo;
    this.country = country;
    this.ustream = ustream;
    this.type = type;
    this.data = data;

    channelList += `<div onclick="window.falseTest(); window.updateVideo(${
      shortName
    });" class="individualChannel pointer" id=${shortName}>
    <span class="channelName">
        ${name}
    </span>
<div class="flagContainer">
    <img class="countryFlag" src="${country}">
</div>
</div>
`;
    this.element = document.getElementById(this.shortName);
    // document.addEventListener("click", this.element.scrollIntoView());
    Channels.add(this);
  }
}

// window.earth = new Channel({
//   name: "EarthTV",
//   shortName: "earth",
//   logo: require("../img/logos/earthtv.png"),
//   country: require("../img/flags/germany.svg"),
//   // "https://cdn-liveonearth.global.ssl.fastly.net/cdnedge/smil:TWL-es.smil/playlist.m3u8?599d9478bbf047685d049e82"
//   link:
//     "http://playercdn.earthtv.com/?autoplay=true&token=599d9478bbf047685d049e82&language=es&live=true&channel=live&livesd=https://cdn-liveonearth.global.ssl.fastly.net/cdnedge/smil:TWL-es.smil/playlist.m3u8",
//   ustream: true
// });

window.tsi = new Channel({
  name: "TSi",
  shortName: "tsi",
  logo: require("../img/logos/tsi.png"),
  country: require("../img/flags/honduras.svg"),
  link:
    "https://trinity-lh.akamaihd.net/i/TelevicentroLive1_d@17977/master.m3u8"
});

window.tn5 = new Channel({
  name: "TN5",
  shortName: "tn5",
  logo: require("../img/logos/canal5.png"),
  country: require("../img/flags/honduras.svg"),
  link:
    "https://trinity-lh.akamaihd.net/i/TelevicentroLive2_d@508538/master.m3u8"
});

window.ten = new Channel({
  name: "TEN",
  shortName: "ten",
  logo: require("../img/logos/ten.png"),
  country: require("../img/flags/honduras.svg"),
  link: "http://stream.grupoabchn.com:1935/TENHD/TENLive.smil/playlist.m3u8"
});

window.hch = new Channel({
  name: "HCH",
  shortName: "hch",
  logo: require("../img/logos/hch.png"),
  country: require("../img/flags/honduras.svg"),
  link: "http://stream.innovandote.com/hch/hch/playlist.m3u8"
});

window.msnbc = new Channel({
  name: "MSNBC",
  shortName: "msnbc",
  logo: require("../img/logos/msnbc.png"),
  country: require("../img/flags/usa.svg"),
  link: "http://tvemsnbc-lh.akamaihd.net/i/nbcmsnbc_1@122532/master.m3u8"
});

window.bloomberg = new Channel({
  name: "Bloomberg",
  shortName: "bloomberg",
  logo: require("../img/logos/bloomberg.svg"),
  country: require("../img/flags/usa.svg"),
  link: "http://live-bloomberg-us-east.global.ssl.fastly.net/us/us3_live.m3u8"
});

window.tve = new Channel({
  name: "TVE",
  shortName: "tve",
  logo: require("../img/logos/tve.svg"),
  country: require("../img/flags/spain.svg"),
  link: "http://hlsackdn_gl8-lh.akamaihd.net/i/hlsdvrlive_1@81183/master.m3u8"
});

window.dw = new Channel({
  name: "DW",
  shortName: "dw",
  logo: require("../img/logos/dw.svg"),
  country: require("../img/flags/germany.svg"),
  link:
    "http://dwstream3-lh.akamaihd.net/i/dwstream3_live@124409/index_5_av-p.m3u8"
  // ?sd=10&rebase=on"
});

window.bbc = new Channel({
  name: "BBC",
  shortName: "bbc",
  logo: require("../img/logos/bbc.svg"),
  country: require("../img/flags/england.svg"),
  link: "http://hlslive.lcdn.une.net.co/v1/AUTH_HLSLIVE/BBCW/tu1_1.m3u8"
});

window.jazeera = new Channel({
  name: " AlJazeera",
  shortName: "jazeera",
  logo: require("../img/logos/jazeera.svg"),
  country: require("../img/flags/qatar.svg"),
  link:
    "https://english.streaming.aljazeera.net/aljazeera/english2/index783.m3u8"
});

window.teleProg = new Channel({
  name: "TeleProgreso",
  shortName: "teleProg",
  logo: require("../img/logos/teleprogreso.png"),
  country: require("../img/flags/honduras.svg"),
  link: "blob:http://ott.streann.com/66e83bc8-5541-4c81-8c32-96e0004dd730"
});

window.rtv = new Channel({
  name: "RTV",
  shortName: "rtv",
  logo: require("../img/logos/rtv.png"),
  country: require("../img/flags/honduras.svg"),
  link: "http://www.ustream.tv/embed/18502457",
  ustream: true
});

window.globoTV = new Channel({
  name: "GloboTV",
  shortName: "globoTV",
  logo: require("../img/logos/globoTV.png"),
  country: require("../img/flags/honduras.svg"),
  link: "http://tv.aliasdns.info:8979/live/g13/playlist.m3u8"
});

window.tv45 = new Channel({
  name: "45TV",
  shortName: "tv45",
  logo: require("../img/logos/45tv.png"),
  country: require("../img/flags/honduras.svg"),
  link: "http://www.ustream.tv/embed/19421752",
  ustream: true
});

window.tele7 = new Channel({
  name: "TeleCeiba",
  shortName: "tele7",
  logo: require("../img/logos/teleceiba.png"),
  country: require("../img/flags/honduras.svg"),
  link: "http://190.11.224.14:8134/liveevent.m3u8"
});

window.once = new Channel({
  name: "Canal 11",
  shortName: "once",
  logo: require("../img/logos/canal11.png"),
  country: require("../img/flags/honduras.svg"),
  link:
    "http://www.miotv.hn:1935/securelive/smil:c11.smil/chunklist_w1277053248_b1304800.m3u8"
});

window.azteca = new Channel({
  name: "Azteca",
  shortName: "azteca",
  logo: require("../img/logos/azteca.png"),
  country: require("../img/flags/honduras.svg"),
  link: "http://aztecalive-lh.akamaihd.net/i/0dcqjxkgx_1@502208/master.m3u8"
});

window.campus = new Channel({
  name: "CampusTV",
  shortName: "campus",
  logo: require("../img/logos/campustv.png"),
  country: require("../img/flags/honduras.svg"),
  link: "http://st2.worldkast.com/8004/8004/playlist.m3u8"
});

window.rt = new Channel({
  name: "RT",
  shortName: "rt",
  logo: require("../img/logos/rt.svg"),
  country: require("../img/flags/russia.svg"),
  link: "https://secure-streams.akamaized.net/rt-esp/index800.m3u8"
});

window.caracol = new Channel({
  name: "Caracol",
  shortName: "caracol",
  logo: require("../img/logos/caracol.png"),
  country: require("../img/flags/colombia.svg"),
  link: "http://mdstrm.com/live-stream-playlist/58dc3d471cbe05ff3c8e463e.m3u8"
  // ustream: true
});

window.teleSur = new Channel({
  name: "TeleSUR",
  shortName: "teleSur",
  logo: require("../img/logos/telesur.svg"),
  country: require("../img/flags/venezuela.svg"),
  link:
    "http://cdna.telesur.ultrabase.net/mbliveMain/ngrp:mblive_all/playlist.m3u8"
});

window.telpin = new Channel({
  name: "TelPin",
  shortName: "telpin",
  logo: require("../img/logos/telpin.png"),
  country: require("../img/flags/argentina.svg"),
  link: "http://201.219.100.30:1935/telpintv/ttv.stream_720p/playlist.m3u8"
});

window.sexta = new Channel({
  name: "la Sexta",
  shortName: "sexta",
  logo: require("../img/logos/sexta.svg"),
  country: require("../img/flags/spain.svg"),
  link: "http://a3live-lh.akamaihd.net/i/lasexta_1@35272/master.m3u8"
});

window.neox = new Channel({
  name: "neox",
  shortName: "neox",
  logo: require("../img/logos/neox.jpg"),
  country: require("../img/flags/spain.svg"),
  link: "http://a3live-lh.akamaihd.net/i/nxhds/geoneox_1@35261/master.m3u8"
});

window.nova = new Channel({
  name: "nova",
  shortName: "nova",
  logo: require("../img/logos/nova.png"),
  country: require("../img/flags/spain.svg"),
  link:
    "http://a3live-lh.akamaihd.net/i/nvhds/geonova_1@379404/index_4_av-b.m3u8"
  // ?sd=10&rebase=on"
});

window.cnn = new Channel({
  name: "CNN",
  shortName: "cnn",
  logo: require("../img/logos/cnnChile.svg"),
  country: require("../img/flags/chile.svg"),
  link: "http://unlimited1-us.dps.live/cnn/cnn.smil/playlist.m3u8"
});

window.weather = new Channel({
  name: "Weather Channel",
  shortName: "weather",
  logo: require("../img/logos/weather.svg"),
  country: require("../img/flags/usa.svg"),
  link: "http://weather-lh.akamaihd.net/i/twc_1@92006/master.m3u8"
});
window.twit = new Channel({
  name: "TWiT",
  shortName: "twit",
  logo: require("../img/logos/twit.svg"),
  country: require("../img/flags/usa.svg"),
  link: "https://www.ustream.tv/embed/1524",
  ustream: true
});

window.cbsn = new Channel({
  name: "CBSN",
  shortName: "cbsn",
  logo: require("../img/logos/cbs.svg"),
  country: require("../img/flags/usa.svg"),
  link: "http://cbsnewshd-lh.akamaihd.net/i/CBSNHD_7@199302/master.m3u8"
});

window.nbc = new Channel({
  name: "NBC",
  shortName: "nbc",
  logo: require("../img/logos/nbc.svg"),
  country: require("../img/flags/usa.svg"),
  link: "https://wrclive-f.akamaihd.net/i/wrcb1_1@46880/master.m3u8"
});

window.fox = new Channel({
  name: "FOX",
  shortName: "fox",
  logo: require("../img/logos/fox.svg"),
  country: require("../img/flags/usa.svg"),
  link:
    "https://api.new.livestream.com/accounts/2363281/events/1763520/live.m3u8"
});

window.mas = new Channel({
  name: "TVMas",
  shortName: "mas",
  logo: require("../img/logos/tvmas.jpg"),
  country: require("../img/flags/mexico.svg"),
  link: "http://50.7.98.234:1935/rtv/videortv/chunklist.m3u8"
});

window.azteca13 = new Channel({
  name: "Azteca",
  shortName: "azteca13",
  logo: require("../img/logos/azteca13.png"),
  country: require("../img/flags/mexico.svg"),
  link:
    "http://aztecalive-lh.akamaihd.net/i/0qm7cjvop_1@502476/index_3_av-p.m3u8"
  // ?sd=10&rebase=on"
});

window.peru = new Channel({
  name: "TVPeru",
  shortName: "peru",
  logo: require("../img/logos/tvperu.png"),
  country: require("../img/flags/peru.svg"),
  link: "http://cdnh15.iblups.com/hls/irtp.m3u8"
});

window.ecuador = new Channel({
  name: "Ecuador TV",
  shortName: "ecuador",
  logo: require("../img/logos/ecuadortv.png"),
  country: require("../img/flags/ecuador.svg"),
  link:
    "http://api.new.livestream.com/accounts/22196143/events/6576568/live.m3u8"
});

window.antena3 = new Channel({
  name: "Antena 3",
  shortName: "antena3",
  logo: require("../img/logos/antena3.svg"),
  country: require("../img/flags/spain.svg"),
  link: "http://a3live-lh.akamaihd.net/i/antena3_1@35248/index_4_av-p.m3u8"
});

window.mega = new Channel({
  name: "MEGA",
  shortName: "mega",
  logo: require("../img/logos/mega.svg"),
  country: require("../img/flags/spain.svg"),
  link:
    "http://a3live-lh.akamaihd.net/i/mghds/geomega_1@328914/index_3_av-b.m3u8"
});

window.chilev = new Channel({
  name: "Chilevision",
  shortName: "chilev",
  logo: require("../img/logos/chilevision.png"),
  country: require("../img/flags/chile.svg"),
  link:
    "http://chv.movil.rtsp.ztreaming.com/chvmovil2/chilevision@140569/chunklist_w787114469.m3u8"
});

window.cableNoti = new Channel({
  name: "CableNoticias",
  shortName: "cableNoti",
  logo: require("../img/logos/cablenoticias.png"),
  country: require("../img/flags/colombia.svg"),
  link: "http://hlslive.lcdn.une.net.co/v1/AUTH_HLSLIVE/CNOT/tu1_1.m3u8"
});

window.capital = new Channel({
  name: "Canal Capital",
  shortName: "capital",
  logo: require("../img/logos/capital.svg"),
  country: require("../img/flags/colombia.svg"),
  link:
    "http://us-b2-p-e-sx6.cdn.mdstrm.com/live-stream/57d01d6c28b263eb73b59a5a/publish/media_500.m3u8"
  // ?dnt=true&es=us-b2-p-e-sx6.cdn.mdstrm.com&ote=1506105524968&ot=PhcZX6iEf6naqlTvLiSrJA&proto=http"
});

window.nexTV = new Channel({
  name: "NexTV",
  shortName: "nexTV",
  logo: require("../img/logos/nex.png"),
  country: require("../img/flags/panama.svg"),
  link: "http://198.1.117.5:1935/live/livestream/chunklist_w1290911642.m3u8"
});

window.conce = new Channel({
  name: "Once",
  shortName: "conce",
  logo: require("../img/logos/once.png"),
  country: require("../img/flags/mexico.svg"),
  link:
    "http://live.canaloncelive.tv:1935/livepkgr2/smil:internacional.smil/master.m3u8"
});

window.td = new Channel({
  name: "Todo Deportes",
  shortName: "td",
  logo: require("../img/logos/td.png"),
  country: require("../img/flags/honduras.svg"),
  link:
    "http://190.92.0.43:1935/securelive/tdtv85jd5EKL3xWq3/chunklist_w1241310319.m3u8"
});

window.hondured = new Channel({
  name: "HonduRed",
  shortName: "hondured",
  logo: require("../img/logos/hondured.png"),
  country: require("../img/flags/honduras.svg"),
  link: "http://173.236.71.62:1935/hondured/hrtv.sdp/chunklist_w172057188.m3u8"
});

window.hispan = new Channel({
  name: "HISPANTV",
  shortName: "hispan",
  logo: require("../img/logos/hispantv.png"),
  country: require("../img/flags/iran.svg"),
  link: "http://178.32.255.199:1935/live/hispantv/chunklist_w1542092239.m3u8"
});

window.seis = new Channel({
  name: "Canal 6",
  shortName: "seis",
  logo: require("../img/logos/canal6.png"),
  country: require("../img/flags/honduras.svg"),
  link:
    "https://ott.streann.com/loadbalancer/services/public/channels-secure/56bd45f5e4b0ba125fe8a866/playlist.m3u8"
});

window.choluSat = new Channel({
  name: "CholuSat",
  shortName: "choluSat",
  logo: require("../img/logos/cholusat.png"),
  country: require("../img/flags/honduras.svg"),
  link: "http://live.audiotvserver.com:1935/livemedia/cholusat/playlist.m3u8"
});

// window.metro = new Channel({
//   name: "MetroTV",
//   shortName: "metro",
//   country: require("../img/flags/honduras.svg"),
//   link: "http://servicioamerica.net:1935/8404/8404/playlist.m3u8"
// });

// window.vtv = new Channel({
//   name: "VTV",
//   shortName: "vtv",
//   logo: require("../img/logos/vtv.png"),
//   country: require("../img/flags/honduras.svg"),
//   link: "http://d3bus2b3f32oks.cloudfront.net/hn//smil:vtv.smil/playlist.m3u8"
// });

window.hrn = new Channel({
  name: "HRN",
  shortName: "hrn",
  logo: require("../img/logos/hrn.jpg"),
  country: require("../img/flags/honduras.svg"),
  link: "http://radios504.geucast.net:18101/radio-live",
  type: "audio/mpeg",
  video: "audio"
});

window.euro = new Channel({
  name: "EuroNews",
  shortName: "euro",
  logo: require("../img/logos/euro.svg"),
  country: require("../img/flags/france.svg"),
  link: "http://euronews-04.ice.infomaniak.ch/euronews-04.aac",
  type: "audio/mpeg",
  video: "audio"
});

window.voces = new Channel({
  name: "Cadena Voces",
  shortName: "voces",
  logo: require("../img/logos/rcv.png"),
  country: require("../img/flags/honduras.svg"),
  link: "http://stream.latinoradiocast.com/41a8pc4gfd5tv",
  type: "audio/mpeg",
  video: "audio"
});

window.rGlobo = new Channel({
  name: "Radio Globo",
  shortName: "rGlobo",
  logo: require("../img/logos/radioGlobo.png"),
  country: require("../img/flags/honduras.svg"),
  link: "http://aliasdns.info:8016/;stream.mp3",
  type: "audio/mpeg",
  video: "audio"
});

window.patio = new Channel({
  name: "Radio El Patio",
  shortName: "patio",
  logo: require("../img/logos/patio.jpg"),
  country: require("../img/flags/honduras.svg"),
  link: "http://195.154.182.222:25730/patio",
  type: "audio/mpeg",
  video: "audio"
});

window.america = new Channel({
  name: "Radio America",
  shortName: "america",
  logo: require("../img/logos/radioAmerica.png"),
  country: require("../img/flags/honduras.svg"),
  link: "http://17803.live.streamtheworld.com/AMERICAAAC.aac",
  type: "audio/mpeg",
  video: "audio"
});

window.rnh = new Channel({
  name: "Radio Nacional",
  shortName: "rnh",
  logo: require("../img/logos/radioNacional.jpg"),
  country: require("../img/flags/honduras.svg"),
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
channelList += `<div class="individualChannel" id="donate">
    <div class="channelName">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="NWT2PUFW6NFLC">
            <input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea.">
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>
    </div>
</div.>
`;
// Send Channels to DOM
channelSection.innerHTML = channelList;
window.selectedElement = channelSection.firstElementChild;
window.nextElement = window.selectedElement;
window.scroller = window.zenscroll.createScroller(
  window.channelSection,
  500,
  30
);
