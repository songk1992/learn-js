const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: []
}

// 파이프와 compose는 방향만 반대

const pipe = (f,g) => (...args) => g(f(...args));
purchaseItem(
	addItemToCart,
	applyTaxToItems,
	buyItem,
	emtyCart,
)(user, {name: '사과', price: 200})


function purchaseItem(...fns) {
	return fns.reduce(pipe)
} 

function addItemToCart(user, item){
	const updateCart = user.cart.concat(item)
	return Object.assign({}, user, {cart:updateCart })
}

function applyTaxToItems(user){
	const {cart} = user;
	const taxRate = 1.15;
	const updatedCart = cart.map(item => {
		return {
			name: item.name,
			price: item.price * taxRate
		}
	})
	return Object.assign({},user,{cart:updatedCart})
}

function buyItem(user){
	return Object.assign({},user,{purchases:user.cart})
}

function emtyCart(user){
	return Object.assign({},user,{cart:[]})
}


console.log(
purchaseItem(
	addItemToCart,
	applyTaxToItems,
	buyItem,
	emtyCart,
)(user, {name: '사과', price: 200})
)

///////////////////////////////








//Indempotence:
// 
function notGood(num){
	return Math.random();
}

console.log(notGood(5));

//Imperative Declartive
for(let i=0; i< 5; i++){
	console.log(i);
}
[1,2,3,4,5].forEach(item => console.log(item));

//Immutability
const obj = {name: 'Kim'}
function clone(obj) {
	return {...obj};
}

function updateName(obj) {
	const obj2 = clone(obj);
	obj2.name = 'Sim'
	return obj2
}

updateName(obj);
console.log(obj);

const updatedObj = updateName(obj);
console.log(updatedObj);

// currying
const multiply = (a, b) => a*b;
const curriedMultiply = (a) => (b) => a * b;
const curriedMultiply5 = curriedMultiply(5);

console.log(curriedMultiply(5)(3));
console.log(curriedMultiply5(3));

//partial application
const multiply2 = (a, b,c) => a*b*c;
const partialMulitplyBy5 = multiply2.bind(null, 5)
console.log(partialMulitplyBy5(4, 10));

