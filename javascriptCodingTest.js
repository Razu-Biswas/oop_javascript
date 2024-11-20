// Remove duplicate elements from array and

const array = [1, 24, 5, 6, 767, 8, 8, 8, 8, 6, 6]

const uniqueElements = array.filter((element, index) => {
    console.log(element, index)
    return array.indexOf(element) === index;
})


console.log(uniqueElements)


//super array objects

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




//Event lop-order

function main() {
    console.log('A');
    setTimeout(
        function print() { console.log('B'); }
        , 0);
    console.log('C');
}
main();

// A,C and B

//function arrow context

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

let user = new User('John', 25);
let profile = user.getProfile();
profile(); //I'm John, 25 yrs old

