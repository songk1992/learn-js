(async function(){
	try
	{
		await Promise.reject('실수')
	}
	catch (err)
	{
		console.log(err)	
	}
	
	console.log('흐음~')
	
})()