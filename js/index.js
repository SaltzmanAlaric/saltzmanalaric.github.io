 /* 鼠标点击特效 - 7Core.CN */
var a_idx = 0;jQuery(document).ready(function($) {$("body").click(function(e) {var a = new Array("♪", "♩","♫","♬","♭","€","§","¶", "♯", "$", "Ψ" ,"¥","∮","‖","⌒","∠");var $i = $("<span/>").text(a[a_idx]);
a_idx = parseInt(Math.random()*a.length);var x = e.pageX,y = e.pageY;$i.css({"z-index": 100000000,"top": y - 20,"left": x,"position": "absolute","font-size":"1em","font-weight": "bold","color": "#ff6651"});$("body").append($i);$i.animate({"top": y - 180,"opacity": 0},1500,function() {$i.remove();});});});

  if (!/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
  	var bgs = [
      //"linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)", "linear-gradient(to right, #fff1eb 0%, #ace0f9 100%)", "linear-gradient(to bottom, #fff1eb 0%, #ace0f9 100%)", "linear-gradient(to left, #fff1eb 0%, #ace0f9 100%)"
     "url('https://tva1.sinaimg.cn/large/007X8olVly1g7yva2idhkj31hc0u078j.jpg')"
      ,
      "url('https://hpaid.cn/templates/pic/11.jpg')"
      ,
      "url('https://tva1.sinaimg.cn/large/007X8olVly1g7yva2nrqfj31hc0u0wj4.jpg')"
      ,
      "url('https://tva1.sinaimg.cn/large/007X8olVly1g7yva2tceaj31hc0u0q5n.jpg')"
      ,
      "url('https://tva1.sinaimg.cn/large/007X8olVly1g7yva34obuj31hc0u0adm.jpg')"
      ,
      "url('https://tva1.sinaimg.cn/large/007X8olVly1g7yva44w8hj30qo0f0h1r.jpg')"
      ,
      "url('https://tva1.sinaimg.cn/large/007X8olVly1g7yva4so0pj31hc0u00vr.jpg')"
      ,
      "url('https://tva1.sinaimg.cn/large/007X8olVly1g7yva537gvj31hc0u0dk7.jpg')"
      ,
      "url('https://tva1.sinaimg.cn/large/007X8olVly1g7yva5avxuj311c0l03zz.jpg')"
      ,
      "url('http://tva1.sinaimg.cn/large/007X8olVly1g7wtxcej62j31hc0u0n0r.jpg')"
      ];
      var idx = parseInt(Math.random()*10);
      $(".page").css({"background": bgs[idx], "backgroundSize": "100% 100%"});
      $('#audio')[0].src = "https://cdn.jsdelivr.net/gh/SaltzmanAlaric/weekly@v1.0.0/static/"+ idx +".mp3";
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
