
window.onload = function () {
	
var c = document.getElementById("mycanvas");
console.log(c);
var ctx = c.getContext("2d");

/*
var image = new Image();
image.onload = function() {
	console.log("Loaded image");
	ctx.drawImage(image, 0, 0, c.width, c.height);
	var savedImage = c.toDataURL();
	window.open(savedImage);
}


var rootPath = window.location.protocol + "//" + window.location.host + "/";
var path = window.location.pathname;
rootPath = rootPath + "images/"
let imagePath =  rootPath + "jesus.png"
image.src = imagePath;
*/

ctx.fillStyle = "blue";
ctx.fillRect(0,0,50,50);

// Save state with blue fill
ctx.save();
ctx.fillStyle = "green";
ctx.strokeStyle= "#33CC33";
ctx.strokeRect(100,100,30,30);
ctx.fillRect(100,100,10,10);
// Restore to blue fill
ctx.restore();

ctx.fillRect(200,10,20,20);

ctx.strokeText("감자 고구마 둘다 맛있다", 50, 10);
ctx.fillText("감자 고구마 둘다 맛있다", 50, 10);
}