 /* 鼠标点击特效 - 7Core.CN */
var a_idx = 0;jQuery(document).ready(function($) {$("body").click(function(e) {var a = new Array("♪", "♩","♫","♬","♭","€","§","¶", "♯", "$", "Ψ" ,"¥","∮","‖","⌒","∠");var $i = $("<span/>").text(a[a_idx]);
a_idx = parseInt(Math.random()*a.length);var x = e.pageX,y = e.pageY;$i.css({"z-index": 100000000,"top": y - 20,"left": x,"position": "absolute","font-size":"1em","font-weight": "bold","color": "#ff6651"});$("body").append($i);$i.animate({"top": y - 180,"opacity": 0},1500,function() {$i.remove();});});});

  if (!/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
  	var bgs = [
      //"linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)", "linear-gradient(to right, #fff1eb 0%, #ace0f9 100%)", "linear-gradient(to bottom, #fff1eb 0%, #ace0f9 100%)", "linear-gradient(to left, #fff1eb 0%, #ace0f9 100%)"
        "url('https://cdn.jsdelivr.net/gh/SaltzmanAlaric/FigureBed/20191016222707.jpg')"
        ,
        "url('https://cdn.jsdelivr.net/gh/SaltzmanAlaric/FigureBed/20191016222354.jpg')"
        ,
        "url('https://cdn.jsdelivr.net/gh/SaltzmanAlaric/FigureBed/20191016221539.jpg')"
        ,
        "url('https://cdn.jsdelivr.net/gh/SaltzmanAlaric/FigureBed/20191016221651.jpg')"
        ,
        "url('https://cdn.jsdelivr.net/gh/SaltzmanAlaric/FigureBed/20191016221836.jpg')"
        ,
        "url('https://cdn.jsdelivr.net/gh/SaltzmanAlaric/FigureBed/20191016221307.jpg')"
      ];
      var random = Math.random();
      $(".page").css({"background": bgs[parseInt(random*bgs.length)], "backgroundSize": "100% 100%"});
      $('#audio')[0].src = "https://cdn.jsdelivr.net/gh/SaltzmanAlaric/weekly@v1.0.0/static/"+ parseInt(random*10) +".mp3";
  } else {
    $("#audio").remove();
  }
  var ctl = false;
  $('#musicBtn').click(function(){
    if(!$('#audio')[0].src.endsWith("static/zzz.mp3")) {
      $('#audio')[0].src = "https://cdn.jsdelivr.net/gh/SaltzmanAlaric/weekly@v1.0.0/static/zzz.mp3";
      $('.sitev span').bumpyText();
    }
    $('#audio')[0].loop=true;
    if(ctl){
      $('#audio')[0].pause();
      this.innerText = "🔇";
    } else {
      $('#audio')[0].play();
      this.innerText = "💎";
    }
    ctl = !ctl;
  });
