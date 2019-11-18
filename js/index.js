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
      $('#audio')[0].src = "https://cdn.jsdelivr.net/gh/SaltzmanAlaric/weekly@v1.0.6/static/"+ parseInt(random*10) +".mp3";
  } else {
    $("#audio").remove();
  }
  var ctl = false;
  $('#musicBtn').click(function(){
    if(!$('#audio')[0].src.endsWith("static/zzz.mp3")) {
      $('#audio')[0].src = "https://cdn.jsdelivr.net/gh/SaltzmanAlaric/weekly@v1.0.6/static/zzz.mp3";
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

 var a = function() {
     var c = document.getElementById("timeProcess");//找到 <canvas> 元素:
     var ctx = c.getContext("2d");  //创建context对象
     var circ = Math.PI * 2;
     var quart = Math.PI / 2;
     var circ = Math.PI * 2;
     var quart = Math.PI / 2;
     var myCanvas_rect = c.getBoundingClientRect();
     var widths = myCanvas_rect.width;
     var heights = myCanvas_rect.height;

     // 清除画布
     ctx.clearRect(0, 0, widths, heights);
     ctx.beginPath();
     ctx.strokeStyle = '#FF4500';
     ctx.lineCap = 'square';
     ctx.closePath();
     ctx.fill();
     ctx.lineWidth = 4.0;

     var imd = ctx.getImageData(0, 0, widths, heights);

     function draw(current) {
         ctx.putImageData(imd, 0, 0);
         ctx.beginPath();
         ctx.arc(55, 55, 50, -(quart), ((circ) * current) - quart, false);
         ctx.stroke();
     }

     //draw(0.6);
     var t = 0;
     var timer = null;

     function loadCanvas(now) {
         timer = setInterval(function () {
             if (t > now) {
                 draw(now);//最后一次绘制
                 clearInterval(timer);
             } else {
                 draw(t);
                 t += 0.01;
             }
         }, 20);
     }

     var now = new Date();
     var spendRate = (now.getTime() - new Date(now.getFullYear() + '-01-01 00:00:00').getTime()) / (new Date(now.getFullYear() + '-12-31 23:59:59').getTime() - new Date(now.getFullYear() + '-01-01 00:00:00').getTime());
     loadCanvas(spendRate);
     timer = null;
 }

  // 剪贴板带上文档信息
 function addLink() {
     var body_element = document.body;
     var blogName = window.config.title;
     var author = window.config.authors;
     var selection = window.getSelection() ? window.getSelection() : document.selection.createRange().text;
     var pagelink ="<br/><br/>---------------------转载请注明出处---------------------<br/>本文来源："+blogName+"<br/>本文作者："+author+"<br/>原文链接："+document.location.href+"";
     var copyText = selection + pagelink;
     if (window.clipboardData) {
         window.clipboardData.setData ("Text", copyText);
         return false;
     } else {
         var newDiv = document.createElement('div');
         newDiv.style.position ='absolute';
         newDiv.style.left ='-99999px';
         body_element.appendChild(newDiv);
         newDiv.innerHTML = copyText;
         selection.selectAllChildren(newDiv);
         window.setTimeout(function() {
             body_element.removeChild(newDiv);
         },0);
     }
 }
 //document.oncopy = addLink;
