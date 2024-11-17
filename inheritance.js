class Human {
    constructor(name) {
        this.name = name;
        this.ares = 2;
        this.legs = 2;
    }
}



// class Baby {
//     constructor(){
//         this.name = "sk";
//         this.ares = 2;
//         this.legs = 2;
//         th

//         cry(){
//             return`waa waa`
//         }
// }




class Baby extends Human {
    constructor(name) {
        super()
        this.cute = true;
    }
    cry() {
        return `waa waa!`
    }
}


const monti = new Human("Monti")


console.log(monti)
















// Base class (Parent)
class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    play() {
        return `${this.name} is playing at level ${this.level}.`;
    }
}

// Derived class (Child)
class FootballPlayer extends Player {
    constructor(name, level, position) {
        super(name, level); // Call the parent class constructor
        this.position = position;
    }

    play() {
        return `${this.name}, a level ${this.level} football player, plays as a ${this.position}.`;
    }
}

// Another Derived class (Child)
class BasketballPlayer extends Player {
    constructor(name, level, team) {
        super(name, level); // Call the parent class constructor
        this.team = team;
    }

    play() {
        return `${this.name}, a level ${this.level} basketball player, plays for the ${this.team} team.`;
    }
}

// Creating instances of each class
const footballPlayer = new FootballPlayer("Lionel", 99, "Forward");
const basketballPlayer = new BasketballPlayer("LeBron", 97, "Lakers");

// Using the play method
console.log(footballPlayer.play()); // Output: Lionel, a level 99 football player, plays as a Forward.
console.log(basketballPlayer.play()); // Output: LeBron, a level 97 basketball player, plays for the Lakers team.
