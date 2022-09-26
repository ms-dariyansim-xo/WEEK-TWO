//PRIMITIVE Data Types
//STRING

let firstName = "Dariyan Sim";
console.log(typeof(firstName));

//Number
let number = 45;
console.log(typeof(number));

//Boolean
let isPrime = false;
console.log(typeof(isPrime));

//undefined
let x;
console.log(typeof(x));

//symbol
let symbol = Symbol();
console.log(typeof(symbol));

//REFERENCE TYPES--

//array
let numbers = [1,2,3];
console.log(typeof(numbers));
console.log(numbers);

//Oject Literal
let student = {
    firstName: "Gianni",
    lastName: "Marquez",
    age: 24
};

//Maps
let student2 = new Map();
student2.set('firstName', 'Josh');
student2.set('lastName', 'Cram');
student2.set('age', 35);
console.log(typeof(student2));
console.log(student2);

//null
let y = null;
console.log(y);

//Date
let today = new Date();
console.log(typeof(today));
console.log(today);