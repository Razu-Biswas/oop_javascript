class Human {
    constructor() {
        this.name = "sk";
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
        this.cute = true;
    }
    cry() {
        return `waa waa!`
    }
}