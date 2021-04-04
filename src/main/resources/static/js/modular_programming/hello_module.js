//IIFE
// 모듈 패턴
var helloModule = (function(){

var localVal = "global에서는 접근 불가";

function hello(){
	return "hello";
}

return{
	hello: hello
}


})()
