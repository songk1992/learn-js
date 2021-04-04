const promise = new Promise((ok, reject) => {
	if(true){
		ok('성공');
	}
	else{
		reject('에러')
	}
})



promise
.then(result =>  result + ' + 1차 result 성공 ')
.catch(() => console.log('1차 error'))
.then(result2 => result2 + ' + 2차 result 성공 ')
.catch(() => console.log('2차 error'))
.then(result3 => {
	throw Error;
	console.log(result3 +  + ' + 3차 result 성공 ');
})
.catch(() => console.log('3차 error'))


/////////////////////////////// 방법 1
/*
const urls = [
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/todos',
	'https://jsonplaceholder.typicode.com/photos'
]

Promise.all(urls.map(url =>{
	return fetch(url).then(resp=> resp.json())
})).then(results =>{
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
}).catch(() => console.log('error'))
*/

//////////////////////////////////////// 방법2 Async Await (방법1 보다 최신 방법)

// 하나
async function fetchUsers(){
	const resp = await fetch('http://jsonplaceholder.typicode.com/posts')
	const data = await resp.json();
	console.log(data);
}

fetchUsers();

// 둘
const urls = [
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/todos',
	'https://jsonplaceholder.typicode.com/photos'
]

const getData = async function(){
	
	try{
		const [posts, todos, photos] = await Promise.all(urls.map(url => fetch(url).then(resp=> resp.json()) ))
		console.log('posts', posts)
		console.log('todos', todos)
		console.log('photos', photos)
	} catch(error){
		console.log('error in async function', error)
	}

}

getData();