const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: []
}

// 카트에 아이템을 추가한다
function addItem(arr){
	user.cart = [...user.cart, ...arr]
	user.cart = deleteDuplicate(user.cart);
	console.log("카트안에 있는 아이템 : " + user.cart);
}

// 객체가 배열이 아닌 경우 중복값 제거
function deleteDuplicate(arr){
	return [...new Set(arr)];
}

// 아이템
var stock = [
	{name: "바나나", price: 1000, count :1},
	{name: "감자", price: 500, count :1},
	{name: "고구마", price: 2000, count :3},
]

// add 5% tax
function addTax(arr){
for(i=0;i<arr.length;i++){
	arr[i]['price'] = arr[i]['price'] * 1.05;
	console.log(arr[i]['name'] + arr[i]['price']);
}
}

// Buy item
function Buy(){
	user.purchases = [...user.cart];
	user.cart = [];
	console.log(user.cart);
	console.log(user.purchases);
}


addItem(stock);
addTax(user.cart);
 Buy();











//Indempotence:
// 
function notGood(num){
	return Math.random();
}

console.log(notGood(5));





