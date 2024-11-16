class Player {
    constructor(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }

    sayHello() {
        return `Hi, i am ${this.name} - ${this.skill}`
    }
}


const mas = new Player("mas", 34, "bowler");
const sk = new Player("sk", 36, "all-rounder");
const ms = new Player("ms", 38, "wk");

console.log(mas.age, sk, ms)

console.log(sk.sayHello())
