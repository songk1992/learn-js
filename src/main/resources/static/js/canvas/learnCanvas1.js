
window.onload = function () {
	
var c = document.getElementById("mycanvas");
console.log(c);
var ctx = c.getContext("2d");

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

}