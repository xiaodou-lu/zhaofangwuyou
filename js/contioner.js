//字体
function fn() {
    var client = document.documentElement.clientWidth || document.body.clientWidth;
    var width = 320;
    var font = (client / width) * 100;
    document.documentElement.style.fontSize = font + "px";
}

fn();

//页面加载完执行
window.onload = function () {
    fn();
};
//窗口发生改变触发事件
window.onresize = function () {
    fn();
};