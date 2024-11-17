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