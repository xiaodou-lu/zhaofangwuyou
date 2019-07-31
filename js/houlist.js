var $h2 = $(".title h2");
var $nav = $(".nav_box>nav");
$.each($h2, function (index) {
    $($h2[index]).on("tap", function () {
        // 颜色
        $($h2[index]).css("color", "#ff8a00");
        $($h2[index]).siblings().css("color", "#898787");
        //标题后面的小三角
        $($h2[index]).find("span").html("▲").css("color", "#ff8a00");
        $($h2[index]).siblings().find("span").html("▼").css("color", "#898787");
        // 下拉菜单显示隐藏
        $($nav[index]).css("display", "block");
        $($nav[index]).siblings().css("display", "none");
        $(".mask").css("display", "block");
    });
    //点击蒙版
    $(".mask").on("tap", function () {
        $($nav[index]).siblings().css("display", "none");
        $(".mask").css("display", "none");
    })
});

