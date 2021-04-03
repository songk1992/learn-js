
class Character{
	#age ="";
	constructor(name, weapon){
		this.name = name;
		this.weapon = weapon;
		}
	
	attack(){
		return 'attack with' + this.weapon
		}
	
	getAge(){
		return this.#age;
	}	
	setAge(age){
		this.#age = age;
	}
}

class Human extends Character {
	constructor(name, weapon, type){
		super(name, weapon);
		this.type = type;
	}
}

class Elf extends Character {
	constructor(name, weapon, color){
		super(name, weapon);
		this.color = color;
	}
	makeTreeHouse(){
		return '나무위에 트리하우스가 보인다';
	}
  	attack(){
    console.log(super.attack());
    return `I am ${this.color} elf! my name is ${this.name} `
  }
}


const gamja = new Human('감자', '칼', '한국인');
console.log(gamja);
console.log(gamja.attack());

const elfie = new Elf('산타의엘프', '단도', '검정');
console.log(elfie);
console.log(elfie.attack());
console.log(elfie.makeTreeHouse());

// private 이여서 접근 불가
console.log(elfie.age);

// private 이여서 접근 불가
elfie.setAge(1000);
console.log(elfie.getAge());

