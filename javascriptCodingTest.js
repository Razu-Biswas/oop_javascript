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

console.log(square.area); // Uncaught SyntaxError: A class may only have one constructor