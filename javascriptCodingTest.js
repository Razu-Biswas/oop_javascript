// 1.Remove duplicate elements from array and

const array = [1, 24, 5, 6, 767, 8, 8, 8, 8, 6, 6]

const uniqueElements = array.filter((element, index) => {
    console.log(element, index)
    return array.indexOf(element) === index;
})


console.log(uniqueElements)


// 2. super array objects

const aob =
    [
        { framework: 'React.JS', website: 'Paypal' },
        { framework: 'React.JS', website: 'Tesla' },
        { framework: 'Angular', website: 'Google' },
        { framework: 'Vue.JS', website: 'Vue' },
        { framework: 'JavaScript', website: 'inblack67' },
    ]
const superAob = (data, victim) => {

    const obj = {};

    data.forEach((data) => {
        if (data.hasOwnProperty(victim)) {
            if (obj[data[victim]]) {
                obj[data[victim]]++;
            }
            else {
                obj[data[victim]] = 1;
            }
        }
    })

    let superArrayOfObjects = [];

    for (const key in obj) {
        superArrayOfObjects = [...superArrayOfObjects, { victim: key, count: obj[key] }];
    }

    return superArrayOfObjects;
}

console.log(superAob(aob, 'framework'));




//3.Event lop-order

function main() {
    console.log('A');
    setTimeout(
        function print() { console.log('B'); }
        , 0);
    console.log('C');
}
main();

// A,C and B

// 4. function arrow context

function User(name, age) {
    this.name = name;
    this.age = age;

    this.getProfile = function () {
        // Outer function context
        console.log(this.constructor.name); // User
        return () => {
            // Inner function context
            console.log(this.constructor.name); // User(Get it from the outer context)
            console.log("I'm " + this.name + ", " + this.age + " yrs old");
        };
    }
}

// let user = new User('John', 25);
// let profile = user.getProfile();
// profile(); //I'm John, 25 yrs old

// 5. function context

function User(name, age) {
    this.name = name;
    this.age = age;

    this.getProfile = function () {
        // Outer function context
        console.log(this.constructor.name); // User
        return function () {
            // Inner function context
            console.log(this.constructor.name); // Window
            console.log("I'm " + this.name + ", " + this.age + " yrs old");
        };
    }
}

// var user = new User('John', 25);
// var profile = user.getProfile();
// profile(); //I'm , undefined yrs old


// 6 . function expression

var y = 1;
if (function f() { }) {
    y += typeof f;
}
console.log(y);

// 6 . function hoisted

var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}


// 6. class - multiple- constructor

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    constructor(width) {
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(20, 30);

console.log(square.area); // Uncaught SyntaxError: A class may only have one constructor\

// 7.
// function fibonacciSeries(number) {
//     let fibo = [0, 1]
//     for (var i = 2; i <= number; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }
// console.log(fibonacciSeries(10))
//Output: [ 0, 1,  1,  2,  3,5, 8, 13, 21, 34, 55]


// fibonacci series in javascript
// const fibonacciSeries = (num) => {
//     let arr = [];
//     for(let i = 0; i <= num; i++) {
//       if(i == 0 || i == 1){
//         arr[i] = i;
//       }else{
//         arr[i] = arr[i - 1] + arr[i - 2];
//       }
//     }
//     return arr;
// }
// console.log(fibonacciSeries(6)) //[ 0, 1,  1,  2,  3, 5, 8];


// 8.  what is the advantage of arrow function in javascript

// Some of the benefits of using arrow functions in JavaScript are as follows: Arrow functions have shorter syntax than regular function expressions. Arrow functions have implicit return statements. Arrow functions increase readability.



// 9. What is a prototype chain
//Answer :  Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. i.e, When you create an object using a constructor function or a class, the created object inherits properties from a prototype object.

// The prototype on object instance is available through Object.getPrototypeOf(object) or __proto__ property whereas prototype on constructor function is available through Object.prototype.


//9. What is JSON and its common operations
// JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. It is useful when you want to transmit data across a network. It is basically just a text file with an extension of .json, and a MIME type of application/json

// Parsing: Converting a string to a native object

// JSON.parse(text);
// Stringification: Converting a native object to a string so that it can be transmitted across the network

// JSON.stringify(object);


//10 . What is an Aggregation Pipeline in mongodb?
// An aggregation pipeline consists of one or more stages that process documents:

// Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values.
// The documents that are output from a stage are passed to the next stage.
// An aggregation pipeline can return results for groups of documents. For example, return the total, average, maximum, and minimum values.