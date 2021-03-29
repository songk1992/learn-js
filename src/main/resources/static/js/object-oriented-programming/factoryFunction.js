
function Ninja(name, weapon){
	this.name = name;
	this.weapon = weapon;
}

Ninja.prototype.attack = function() {
		return 'attack with' + this.weapon
	}

const gamja = new Ninja('감자', '칼')
console.log(gamja.attack())
const goguma = new Ninja('고구마', '도끼')
console.log(goguma.attack())