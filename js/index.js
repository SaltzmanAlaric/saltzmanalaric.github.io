/* 鼠标点击特效 - 7Core.CN */
var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("♪", "♩", "♫", "♬", "♭", "€", "§", "¶", "♯", "$", "Ψ", "¥", "∮", "‖", "⌒", "∠");
        var idx = parseInt(Math.random() * a.length);
        var $i = $("<span/>").text(a[idx]);
        var x = e.pageX, y = e.pageY;
        $i.css({
            "z-index": 100000000,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-size": "1em",
            "font-weight": "bold",
            "color": "#ff6651"
        });
        $("body").append($i);
        $i.animate({"top": y - 180, "opacity": 0}, 1500, function () {
            $i.remove();
        });
    });
});

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
        ,
        "url('https://cdn.jsdelivr.net/gh/SaltzmanAlaric/FigureBed/20191128132319.jpg')"
    ];
    var random = Math.random();
    $(".page").css({"background": bgs[parseInt(random * bgs.length)], "backgroundSize": "100% 100%"});
    $('#audio')[0].src = "https://cdn.jsdelivr.net/gh/SaltzmanAlaric/weekly@v2.1/static/" + parseInt(random * 10) + ".mp3";
    $('#audio')[0].volume = 0.3;
} else {
    $("#audio").remove();
}
var ctl = false;
$('#musicBtn').click(function () {
    if (!$('#audio')[0].src.endsWith("static/zzz.mp3")) {
        $('#audio')[0].src = "https://cdn.jsdelivr.net/gh/SaltzmanAlaric/weekly@v2.1/static/zzz.mp3";
        $('.sitev span').bumpyText();
    }
    $('#audio')[0].volume = 0.3;
    $('#audio')[0].loop = true;
    if (ctl) {
        $('#audio')[0].pause();
        this.innerText = "🔇";
    } else {
        $('#audio')[0].play();
        this.innerText = "💎";
    }
    ctl = !ctl;
});

// 剪贴板带上文档信息
function addLink() {
    var body_element = document.body;
    var blogName = window.config.title;
    var author = window.config.authors;
    var selection = window.getSelection() ? window.getSelection() : document.selection.createRange().text;
    var pagelink = "<br/><br/>---------------------转载请注明出处---------------------<br/>本文来源：" + blogName + "<br/>本文作者：" + author + "<br/>原文链接：" + document.location.href + "";
    var copyText = selection + pagelink;
    if (window.clipboardData) {
        window.clipboardData.setData("Text", copyText);
        return false;
    } else {
        var newDiv = document.createElement('div');
        newDiv.style.position = 'absolute';
        newDiv.style.left = '-99999px';
        body_element.appendChild(newDiv);
        newDiv.innerHTML = copyText;
        selection.selectAllChildren(newDiv);
        window.setTimeout(function () {
            body_element.removeChild(newDiv);
        }, 0);
    }
}

//document.oncopy = addLink;

//禁止f12
document.onkeydown = function (e) {
    var event = e || window.event;
    var currKey = 0;
    if (event.key !== undefined) {
        currKey = event.key;
    } else if (event.keyCode !== undefined) {
        currKey = event.keyCode;
    } else if (event.which !== undefined) {
        currKey = event.which;
    } else if (event.charCode !== undefined) {
        currKey = event.charCode;
    }
    if (currKey === 'F12' || currKey === 123) {
        window.event.cancelBubble = true;
        window.event.returnValue = false;
    }
};

//阻止鼠标右键事件
$(document).ready(function () {
    $(document).bind("contextmenu", function (e) {
        return false;
    });

    setInterval(function () {
        let runTime = new Date().getTime() - 1559716896000;
        if (runTime > 0) {
            runTime /= 1000;
            let day = Math.floor(runTime/86400);
            runTime %= 86400;
            let hour = Math.floor(runTime / 3600);
            runTime %= 3600;
            let minute = Math.floor(runTime / 60);
            let second = Math.floor(runTime % 60);
            $('.page-current #yx').html('该网站已运行：' + day + '天' + ('0'+hour).slice(-2) + '时' + ('0'+minute).slice(-2) + '分' + ('0'+second).slice(-2) + '秒');
        }
    }, 1000);
});
