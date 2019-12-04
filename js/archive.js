$(document).ready(function () {
    $("#backTop").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 50) {
                $("#backTop").fadeIn(200);
            } else {
                $("#backTop").fadeOut(200);
            }
        });
        $("#backTop").click(function () {
            $('body,html').animate({
                    scrollTop: 0
                },
                500);
            return false;
        });
    });
});

const fillHTML = function (data) {
    let $history = $("#history");
    let strHtml = "";
    $history.empty();
    $.each(data, function (i, item) {
        strHtml += "<div class='history-date'><ul>";
        strHtml += "<h2 class='" + (i === 0 ? "first" : "date02") + "'><a>" + item.year + "年</a>" + getLabelCnt(item.labelMap) + "</h2>";
        $.each(item.acts, function (j, n) {
            strHtml += "<li class='" + ((j === 0 || n.isBig) ? "green" : "") + "'><h3>" + n.date + "<span>" + item.year + "</span></h3><dl><dt>" + n.title + "<a target='_blank' href='" + n.href + "'>⇲</a><span>" + n.desc + "</span></dt></dl></li>";
        }); //end inner-each
        strHtml += "</ul></div>";
    }); // end outer-each
    $history.html(strHtml);
};

const systole = function () {
    if (!$(".history").length) {
        return;
    }
    let $wrapEle = $(".history-date");
    let $targetA = $wrapEle.find("h2 a");
    let parentH = $wrapEle.parent().height();
    $wrapEle.parent().css({"height": 59});
    let eleTop = [];
    setTimeout(function () {
        $wrapEle.find("ul").children(":not('h2:first')").each(function (idx) {
            eleTop.push($(this).position().top);
            $(this).css({"margin-top": -eleTop[idx]}).children().hide();
        }).animate({"margin-top": 0}, 1600).children().fadeIn();
        $wrapEle.parent().animate({"height": parentH}, 2600);
        $wrapEle.find("ul").children(":not('h2:first')").addClass("bounceInDown").css({
            "-webkit-animation-duration": "2s",
            "-webkit-animation-delay": "0",
            "-webkit-animation-timing-function": "ease",
            "-webkit-animation-fill-mode": "both"
        }).end().children("h2").css({"position": "relative"});
    }, 600);
    $targetA.click(function () {
        $(this).parent().css({"position": "relative"});
        $(this).parent().siblings().slideToggle();
        $wrapEle.parent().removeAttr("style");
        return false;
    });
};

const init = function () {
    $.ajax({
        url: "../archives.json",
        type: "GET",
        dataType: "json",
        success: function (res) {
            let data = [];
            $.each(res, function (i, item) {
                let labels = item.labels;
                if (!labels || !labels.length) {
                    return true;
                }
                let labelNames = [], labelMap = {}, act = {};
                for (let label of labels) {
                    labelNames.push(label.name);
                    labelMap[label.name] = 1;
                }
                act.desc = labelNames.join(" | ");
                act.href = "https://saltzmanalaric.github.io/#/posts/" + item.number;
                act.title = item.title;

                let createAt = new Date(item.created_at);
                let yy = createAt.getFullYear();
                let mm = createAt.getMonth() + 1;
                let dd = createAt.getDate();
                act.date = ("0" + mm).slice(-2) + "." + ("0" + dd).slice(-2);

                let arc = {year: yy, acts: []};
                if (!data.length) {
                    arc.labelMap = labelMap;
                    arc.acts.push(act);
                    data.push(arc);
                } else if (data[data.length - 1].year === yy) {
                    let last = data[data.length - 1];
                    for (let key in labelMap) {
                        if (last.labelMap[key]) {
                            last.labelMap[key] += labelMap[key];
                        } else {
                            last.labelMap[key] = labelMap[key];
                        }
                    }
                    last.acts.push(act);
                } else {
                    arc.labelMap = labelMap;
                    arc.acts.push(act);
                    data.push(arc);
                }
            });
            fillHTML(data);
        },
        complete: function () {
            $('#load').remove();
            systole();
        }
    });
};

const getLabelCnt = function (labelMap) {
    let desc = "";
    for (let key in labelMap) {
        desc += key + "/" + labelMap[key] + " ";
    }
    return desc;
};

init();