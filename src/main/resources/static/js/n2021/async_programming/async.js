// JS -> Web APIs -> callback Que -> event Loop

console.log(1);
setTimeout(()=>{
	console.log(2);
}, 0);
console.log(3);

////////////////////////////////////////////////
// https://www.youtube.com/watch?v=aoQSOZfz3vQ

// async
async function fetchNumber() {
	return 's';
}

const user = fetchNubmer();
console.log(user);
const user = fetchUser

// await
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
	await delay(3000);
	return 'apple';
}

async function getBanana(){
	await delay(3000);
	return 'banana';
}

// 너무 복잡
function pickFruits(){
	return getApple()
	.then(apple =>{
		return getBanana().then(banana => `${apple} + ${banana}`);
	});
}

pickFruits().then(console.log);



// 개선 
async function pickFruits2(){
	const apple = await getApple();
	const banana = await getBanana();
	return `${apple} + ${banana}`;
}

pickFruits2().then(console.log);


// 개선 2 병렬실행
async function pickFruits3(){
	const applePromise = getApple();
	const bananaPromise = getBanana();
		
	const apple = await applePromise;
	const banana = await bananaPromise;
	return `${apple} + ${banana}`;
}

pickFruits2().then(console.log);

// 개선 3 API 사용해서 개선2 개선
function pickAllFruits(){
	return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);

// 먼저 값을 리턴하는 값을 가짐
function pickOnlyOne(){
	return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);






// https://www.youtube.com/watch?v=s1vpVCrT8f4
// 콜백 지옥 예시
class UserStorage {
	loginUser(id, password, onSuccess, onError){
		setTimeout(() => {
			if(
				(id === 'song' && password === '비밀') ||
				(id === '코딩' && password === '천재')
			) {
				onSuccess(id);
			} else{
				onError(new Error('not found'));
			}
		}, 2000);
	}
	
	getRoles(user, onSuccess, onError){
		 setTimeout(()=> {
			if(user === 'ellie'){
				onSuccess({name: 'song', role: 'admin'});
			} else {
				onError(new Error ("no access"));
			}
			
		})
	}
}


// https://www.youtube.com/watch?v=JB_yU6Oe2eE
// Promise 예시

// 새로운 프로미스가 만들어지면 바로 자동 실행됨
const promise = new Promise((resolve, reject) => {
	console.log('doing something');
	setTimeout(() => {
		resolve('이값전달');
		// reject(new Error('no network'));
	}, 2000);
});

promise.then((value) => {
	console.log(value);
})
.catch(error =>{
	console.log(error);
})
.finally(() =>{
	console.log('끝');
});

// 3. promise 체인닝
const fetchNumber = new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num *2)
.then(num => num *3)
.then(num => {
	return new Promise((resolve, reject) => {
		setTimeout(()=> resolve(num - 1), 1000);
	});
})
.then(num => console.log(num));


////////////////////////////////////////////////////////
// 콜백 지옥 프로미스로 개선
class UserStorage {
	loginUser(id, password){
		return new Promise((resolve, reject) =>{
		setTimeout(() => {
			if(
				(id === 'song' && password === '비밀') ||
				(id === '코딩' && password === '천재')
			) {
				onSuccess(id);
			} else{
				reject(new Error('not found'));
			}
		}, 2000);
		})
		
		

	}
	
	getRoles(user){
		return new Promise((resolve, reject) =>{
		 setTimeout(()=> {
			if(user === 'ellie'){
				onSuccess({name: 'song', role: 'admin'});
			} else {
				onError(new Error ("no access"));
			}
			
		}, 1000);
		})
	}
}


