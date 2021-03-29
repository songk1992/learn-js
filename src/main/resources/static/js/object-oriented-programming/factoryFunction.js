const ninjaFunction = {
	attack(){
		return 'attack with' + this.weapon
	}
}

function createNinja(name, weapon){
	let newNinja = Object.create(ninjaFunction)
	newNinja.name = name;
	newNinja.weapon = weapon;
	return newNinja;
}

const gamja = createNinja('감자', '칼')
console.log(gamja.attack())
const goguma = createNinja('고구마', '도끼')
console.log(goguma.attack())