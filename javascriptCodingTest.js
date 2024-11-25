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


//11 .  How to Optimize MongoDB Queries for Performance?
// Optimizing MongoDB queries involves several strategies:

// Indexes: Create appropriate indexes to support query patterns.
// Query Projections: Use projections to return only necessary fields.
// Index Hinting: Use index hints to force the query optimizer to use a specific index.
// Query Analysis: Use the explain() method to analyze query execution plans and identify bottlenecks.
// Aggregation Pipeline: Optimize the aggregation pipeline stages to minimize data processing and improve efficiency.


//12 .

// Access Tokens vs. Refresh Tokens: What’s the Difference??

// Have you ever wondered how apps keep you logged in without asking for your password again and again? It’s all thanks to Access Tokens and Refresh Tokens!

// What Are They?
// Access Token: A short-term pass to use the app (like a movie ticket).
// Refresh Token: A backup pass to get a new access token when the first one expires (like a receipt to get another ticket).

// Here’s How It Works
// 1. Login:
// - When you log in, the server gives you two tokens:
//  - Access Token (short-lived)
//  - Refresh Token (long-lived)

// 2. Store the Tokens:
//  - Keep the Access Token in memory or short-term storage (like React state).
//  - Store the Refresh Token in an HTTP-only cookie (for security).

// 3. Make API Requests:
//  - Send the Access Token in the Authorization header for every API request:
 
//  headers: { Authorization: `Bearer ${accessToken}` }

// 4. Handle Expiry:
//  - If the Access Token expires, use the Refresh Token to get a new one:

// const response = await fetch('/auth/refresh', {
//  method: 'POST',
//  credentials: 'include',
// });
// const data = await response.json();
// const newAccessToken = data.accessToken;

// 5. Logout:
// Clear both tokens when the user logs out.

// Why Do We Use Them?

// - Keeps you logged in.
// - Protects your account with short-term access.
// - No need to log in repeatedly!
// - Every time you seamlessly stay logged in to an app, thank these silent heroes working behind the scenes. 🚀

// Have you used tokens in your projects? Let’s chat in the comments!



// 10: Fibo series code and resource


// Here is an example of JavaScript code to generate the Fibonacci series up to a specified number of terms:

// javascript
// Copy code
// // Function to generate Fibonacci series
// function generateFibonacci(n) {
//     if (n <= 0) {
//         return []; // Return an empty array for non-positive inputs
//     }
//     if (n === 1) {
//         return [0]; // Return the first Fibonacci number if n is 1
//     }

//     let fibonacciSeries = [0, 1]; // Initialize the series with the first two numbers

//     for (let i = 2; i < n; i++) {
//         // Add the last two numbers in the series to get the next one
//         let nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
//         fibonacciSeries.push(nextNumber);
//     }

//     return fibonacciSeries;
// }

// // Example usage
// let terms = 10; // Change this value to get a different number of terms
// let fibonacci = generateFibonacci(terms);
// console.log(`The first ${terms} terms of the Fibonacci series are:`);
// console.log(fibonacci);
// Explanation:
// Initialization:

// The first two terms of the Fibonacci sequence are hard-coded as [0, 1].
// Iteration:

// Starting from the third term (i = 2), calculate each new term as the sum of the previous two terms and append it to the array.
// Edge Cases:

// If the input n is less than or equal to 0, return an empty array.
// If n is 1, return [0].
// You can modify the terms variable to specify how many terms of the Fibonacci series you want.






// You said:
// more waya
// ChatGPT said:
// ChatGPT
// Here are several ways to compute the Fibonacci series in JavaScript:

// 1. Using a Recursive Function
// javascript
// Copy code
// function fibonacciRecursive(n) {
//     if (n <= 1) return n;
//     return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// }

// // Generate the series
// function generateFibonacciRecursive(terms) {
//     let series = [];
//     for (let i = 0; i < terms; i++) {
//         series.push(fibonacciRecursive(i));
//     }
//     return series;
// }

// console.log(generateFibonacciRecursive(10)); // Example: First 10 terms
// Note: Recursive solutions can be inefficient for large n due to repeated calculations.

// 2. Using Iterative Method
// javascript
// Copy code
// function generateFibonacciIterative(n) {
//     if (n <= 0) return [];
//     if (n === 1) return [0];

//     let series = [0, 1];
//     for (let i = 2; i < n; i++) {
//         series.push(series[i - 1] + series[i - 2]);
//     }
//     return series;
// }

// console.log(generateFibonacciIterative(10)); // Example: First 10 terms
// 3. Using a While Loop
// javascript
// Copy code
// function generateFibonacciWhile(n) {
//     let series = [];
//     let a = 0, b = 1;
//     let count = 0;

//     while (count < n) {
//         series.push(a);
//         let temp = a + b;
//         a = b;
//         b = temp;
//         count++;
//     }
//     return series;
// }

// console.log(generateFibonacciWhile(10)); // Example: First 10 terms
// 4. Using Array Reduce
// javascript
// Copy code
// function generateFibonacciReduce(n) {
//     return Array.from({ length: n }).reduce((acc, _, i) => {
//         acc.push(i < 2 ? i : acc[i - 1] + acc[i - 2]);
//         return acc;
//     }, []);
// }

// console.log(generateFibonacciReduce(10)); // Example: First 10 terms
// 5. Using a Generator Function
// A generator function allows you to generate Fibonacci numbers on-demand.

// javascript
// Copy code
// function* fibonacciGenerator() {
//     let a = 0, b = 1;
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }

// // Generate the series
// function generateFibonacciGenerator(n) {
//     const fibGen = fibonacciGenerator();
//     return Array.from({ length: n }, () => fibGen.next().value);
// }

// console.log(generateFibonacciGenerator(10)); // Example: First 10 terms
// 6. Using Dynamic Programming
// javascript
// Copy code
// function generateFibonacciDP(n) {
//     if (n <= 0) return [];
//     if (n === 1) return [0];

//     let dp = [0, 1];
//     for (let i = 2; i < n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2];
//     }
//     return dp;
// }

// console.log(generateFibonacciDP(10)); // Example: First 10 terms
// 7. Using a Single Loop with Constant Space
// javascript
// Copy code
// function generateFibonacciSpaceOptimized(n) {
//     if (n <= 0) return [];
//     if (n === 1) return [0];

//     let series = [];
//     let a = 0, b = 1;

//     for (let i = 0; i < n; i++) {
//         series.push(a);
//         [a, b] = [b, a + b];
//     }

//     return series;
// }

// console.log(generateFibonacciSpaceOptimized(10)); // Example: First 10 terms
// Choose Based on Your Needs:
// Small Series: Recursive or Reduce methods are elegant.
// Large Series: Iterative, While Loop, or Space-Optimized methods are more efficient.
// Dynamic Output: Use a Generator.





// You said:
// another waya
// ChatGPT said:
// ChatGPT
// Here are a few additional unique ways to calculate the Fibonacci series in JavaScript:

// 8. Using a Map Object
// You can use a Map to cache computed values for efficiency, especially for larger Fibonacci calculations.

// javascript
// Copy code
// function generateFibonacciMap(n) {
//     let fibMap = new Map();
//     fibMap.set(0, 0);
//     fibMap.set(1, 1);

//     for (let i = 2; i < n; i++) {
//         fibMap.set(i, fibMap.get(i - 1) + fibMap.get(i - 2));
//     }

//     return Array.from(fibMap.values()).slice(0, n);
// }

// console.log(generateFibonacciMap(10)); // Example: First 10 terms
​
 
// javascript
// Copy code
// function generateFibonacciFormula(n) {
//     const sqrt5 = Math.sqrt(5);
//     const phi = (1 + sqrt5) / 2;
//     const psi = (1 - sqrt5) / 2;

//     let series = [];
//     for (let i = 0; i < n; i++) {
//         let fib = Math.round((Math.pow(phi, i) - Math.pow(psi, i)) / sqrt5);
//         series.push(fib);
//     }

//     return series;
// }

// console.log(generateFibonacciFormula(10)); // Example: First 10 terms
// 10. Using Recursion with Memoization
// Memoization avoids redundant calculations, making recursion more efficient.

// javascript
// Copy code
// function fibonacciMemo(n, memo = {}) {
//     if (n in memo) return memo[n];
//     if (n <= 1) return n;

//     memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
//     return memo[n];
// }

// function generateFibonacciMemoized(terms) {
//     let series = [];
//     for (let i = 0; i < terms; i++) {
//         series.push(fibonacciMemo(i));
//     }
//     return series;
// }

// console.log(generateFibonacciMemoized(10)); // Example: First 10 terms
// 11. Using a Reverse Approach
// Instead of building the Fibonacci series from the start, calculate it backward.

// javascript
// Copy code
// function generateFibonacciReverse(n) {
//     if (n <= 0) return [];
//     if (n === 1) return [0];

//     let series = new Array(n).fill(0);
//     series[n - 1] = 1;
//     series[n - 2] = 1;

//     for (let i = n - 3; i >= 0; i--) {
//         series[i] = series[i + 1] + series[i + 2];
//     }

//     return series;
// }


 
// javascript
// Copy code
// function matrixMultiply(a, b) {
//     return [
//         [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
//         [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]],
//     ];
// }

// function matrixPower(matrix, n) {
//     if (n === 1) return matrix;
//     if (n % 2 === 0) {
//         let half = matrixPower(matrix, n / 2);
//         return matrixMultiply(half, half);
//     }
//     return matrixMultiply(matrix, matrixPower(matrix, n - 1));
// }

// function generateFibonacciMatrix(n) {
//     if (n === 0) return [0];
//     const baseMatrix = [
//         [1, 1],
//         [1, 0],
//     ];
//     const resultMatrix = matrixPower(baseMatrix, n - 1);
//     return resultMatrix[0][0];
// }

// // Generate series
// function generateFibonacciSeriesMatrix(terms) {
//     let series = [];
//     for (let i = 0; i < terms; i++) {
//         series.push(generateFibonacciMatrix(i));
//     }
//     return series;
// }

// console.log(generateFibonacciSeriesMatrix(10)); // Example: First 10 terms
// 13. Using Functional Programming
// If you're familiar with functional programming paradigms, here's a concise implementation using higher-order functions:

// javascript
// Copy code
// function generateFibonacciFunctional(n) {
//     return [...Array(n)].reduce(
//         (acc, _, i) => acc.concat(i < 2 ? i : acc[i - 1] + acc[i - 2]),
//         []
//     );
// }

// console.log(generateFibonacciFunctional(10)); // Example: First 10 terms
// Conclusion:
// Each approach is unique and has its use cases:

// For Mathematically Elegant Solutions: Formula or Matrix methods.
// For Learning Purposes: Recursive or Map-based methods.
// For Performance: Iterative, Memoization, or Space-Optimized methods.





// You said:
// more 
// ChatGPT said:
// ChatGPT
// Here are even more creative ways to generate the Fibonacci series in JavaScript:

// 14. Using Dynamic Array Expansion
// This method directly appends Fibonacci numbers to an array dynamically as the loop progresses.

// javascript
// Copy code
// function generateFibonacciDynamicArray(n) {
//     let fib = [0, 1];
//     while (fib.length < n) {
//         fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//     }
//     return fib.slice(0, n);
// }

// console.log(generateFibonacciDynamicArray(10)); // Example: First 10 terms
// 15. Using Tail Recursion
// Tail recursion is optimized by JavaScript engines to avoid stack overflow, making it efficient for generating Fibonacci numbers.

// javascript
// Copy code
// function fibonacciTailRec(n, a = 0, b = 1, series = []) {
//     if (n === 0) return series;
//     return fibonacciTailRec(n - 1, b, a + b, [...series, a]);
// }

// console.log(fibonacciTailRec(10)); // Example: First 10 terms
// 16. Using Event Emitters (for Streaming Fibonacci)
// This creative approach uses Node.js EventEmitter to emit Fibonacci numbers one by one.

// javascript
// Copy code
// const EventEmitter = require('events');

// class FibonacciEmitter extends EventEmitter {
//     generate(n) {
//         let a = 0, b = 1;
//         for (let i = 0; i < n; i++) {
//             this.emit('data', a);
//             [a, b] = [b, a + b];
//         }
//         this.emit('end');
//     }
// }

// const fibEmitter = new FibonacciEmitter();
// fibEmitter.on('data', (num) => console.log(num));
// fibEmitter.on('end', () => console.log('Fibonacci sequence ended.'));

// fibEmitter.generate(10); // Example: First 10 terms
// 17. Using a Linked List
// A linked list can be used to dynamically store and compute Fibonacci numbers.

// javascript
// Copy code
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// function generateFibonacciLinkedList(n) {
//     if (n === 0) return null;
//     let head = new Node(0);
//     if (n === 1) return head;

//     let second = new Node(1);
//     head.next = second;
//     let current = second;

//     for (let i = 2; i < n; i++) {
//         let newNode = new Node(current.value + head.value);
//         current.next = newNode;
//         head = current;
//         current = newNode;
//     }

//     // Convert linked list to array for easier output
//     let result = [];
//     current = second;
//     while (current) {
//         result.push(current.value);
//         current = current.next;
//     }
//     return [0, ...result];
// }

// console.log(generateFibonacciLinkedList(10)); // Example: First 10 terms
// 18. Using Precomputed Values (Cache Table)
// Precomputing Fibonacci numbers in an array and retrieving them directly is useful for constant-time lookups.

// javascript
// Copy code
// function precomputeFibonacci(n) {
//     const fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib;
// }

// const fibonacciCache = precomputeFibonacci(100); // Precompute up to 100 terms
// console.log(fibonacciCache.slice(0, 10)); // Retrieve the first 10 terms
// 19. Using Binary Operations (Bitwise)
// Although a bit unconventional, binary manipulations can be applied creatively to simulate Fibonacci sequences for some specific cases.

// javascript
// Copy code
// function generateFibonacciBinary(n) {
//     let a = 0, b = 1, series = [];
//     for (let i = 0; i < n; i++) {
//         series.push(a);
//         let temp = (a + b) >>> 0; // Unsigned right shift for safe addition
//         a = b;
//         b = temp;
//     }
//     return series;
// }

// console.log(generateFibonacciBinary(10)); // Example: First 10 terms
// 20. Using String Manipulations
// This method is more of a fun twist, treating numbers as strings and performing manual addition.

// javascript
// Copy code
// function addStrings(num1, num2) {
//     let carry = 0, result = '';
//     let i = num1.length - 1, j = num2.length - 1;

//     while (i >= 0 || j >= 0 || carry > 0) {
//         let sum = (parseInt(num1[i] || '0') + parseInt(num2[j] || '0') + carry);
//         carry = Math.floor(sum / 10);
//         result = (sum % 10) + result;
//         i--; j--;
//     }

//     return result;
// }

// function generateFibonacciString(n) {
//     let a = '0', b = '1', series = [a];
//     for (let i = 1; i < n; i++) {
//         let next = addStrings(a, b);
//         series.push(next);
//         a = b;
//         b = next;
//     }
//     return series;
// }

// console.log(generateFibonacciString(10)); // Example: First 10 terms
// 21. Using Circular Buffers
// A circular buffer is a fixed-size data structure that can hold two elements and compute the next Fibonacci number.

// javascript
// Copy code
// function generateFibonacciCircularBuffer(n) {
//     let buffer = [0, 1], series = [];
//     for (let i = 0; i < n; i++) {
//         series.push(buffer[0]);
//         let next = buffer[0] + buffer[1];
//         buffer[0] = buffer[1];
//         buffer[1] = next;
//     }
//     return series;
// }

// console.log(generateFibonacciCircularBuffer(10)); // Example: First 10 terms
// 22. Using Functional Composition
// Compose functions to calculate Fibonacci numbers in a modular and reusable way.

// javascript
// Copy code
// const fibNext = ([a, b]) => [b, a + b];
// const take = (n, fn) => Array.from({ length: n }, (_, i) => fn(i));

// function generateFibonacciFunctionalCompose(n) {
//     let state = [0, 1];
//     return take(n, () => {
//         const [current, nextState] = state;
//         state = fibNext(state);
//         return current;
//     });
// }

// console.log(generateFibonacciFunctionalCompose(10)); // Example: First 10 terms
// Choose the Right Method
// For Performance: Use Dynamic Programming, Matrix Exponentiation, or Tail Recursion.
// For Creative Use: Try Event Emitters, Linked Lists, or String Manipulations.
// For Learning: Experiment with Recursive, Binary, or Functional methods.