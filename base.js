//获取屏幕宽度计算并设置rem基准值；
var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
var htmlDom = document.getElementsByTagName("html")[0];
htmlDom.style.fontSize = htmlWidth/10+"px";
window.addEventListener("resize",function(){
	htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
	htmlDom.style.fontSize = htmlWidth / 10 +"px";
});