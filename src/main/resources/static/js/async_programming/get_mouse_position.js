setTimeout(()=>{
let elem = document.getElementById('para');
	
elem.addEventListener("click", event => {
	console.log(event.pageX, event.pageY);
});
	
var pageX = document.getElementById("x");
var pageY = document.getElementById("y");

elem.addEventListener('mousemove', event => {
  pageX.innerText = event.pageX;
  pageY.innerText = event.pageY;
});


}, 0);
