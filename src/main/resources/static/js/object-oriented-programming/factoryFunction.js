
function createNinja(name, weapon){
	return{
		name: name,
		weapon: weapon,
		attack(){
			return 'attack with ' + weapon
		}
	}
}

const gamja = createNinja('gamja', '칼')
console.log(gamja.attack())