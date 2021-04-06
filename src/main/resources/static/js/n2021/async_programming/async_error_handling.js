Promise.resolve('ayncfail')
	.then(response =>{
		Promise.resolve().then(()=> {
		}).catch(console.log)
		return 4
	})
	.then(response =>{
		throw new Error('# fail')
		console.log(response)
	})
	.catch(err => {
		console.log('에러 발생', err)
	})