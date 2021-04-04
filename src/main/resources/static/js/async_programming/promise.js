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

