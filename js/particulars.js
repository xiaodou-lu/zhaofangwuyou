window.onLoad  = function(){
    var map = new AMap.Map('map');
};
var url = 'https://webapi.amap.com/maps?v=1.4.15&key=dbd629e34a5a87046621c081f93df5f1&callback=onLoad';
var jsapi = document.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);
