
class Ninja{
	constructor(name, weapon){
		this.name = name;
		this.weapon = weapon;
		}
	
	attack = function() {
		return 'attack with' + this.weapon
		}
}


const gamja = new Ninja('감자', '칼')
console.log(gamja.attack())
console.log(gamja instanceof Ninja)
const goguma = new Ninja('고구마', '도끼')
console.log(goguma.attack())