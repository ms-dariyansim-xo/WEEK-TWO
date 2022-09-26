//Javascript Variables can be made with 3 keywords

//LET, VAR, and CONST
var text = "This is the console";
console.log(text);

//LET vs VAR
//VAR is globally scoped, LET is locally scoped
for(var i = 0; i < 5; i++){
    console.log("Inside the var loop " + i);
}
for(let j = 0; j < 5; j++){
    console.log("Inside the let loop");
}
console.log("Outside of the loops");
console.log("i - var is " + i);
//console.log("j - let is " + j);

//Variables names - camelCase. They can contain numbers, letters, _ or $

//CONST--
const firstName = "Dariyan";
console.log(firstName);
//CONSTANTS cannot be reassigned but doesn't mean they can't change

const numbers = [ 0,1,2,3,4];
console.log(numbers);

//Cannot reassign numbers
//numbers =[0,1,2,3,4];
numbers[4]=5;
console.log(numbers);

//Arrays are awesome in JavaScript
numbers.push(6);
console.log(numbers);

//Can add items that are NOT numbers to the array
numbers.push("Pizza");
console.log(numbers);

//Reference vs Value
let x = 2;
let y = x;
console.log("x is " + x);
console.log("y is " + y);

x+= 5;
console.log("x is " + x);
console.log("y is " + y);

//Reference Type
let numbers2 = numbers;
console.log(numbers);
console.log(numbers2);

//Input from user comes in as a "string" beore we can do math with it
//we woul dhave to parse()
//You can use parseInt() fro whole numbers parseFloat() for decimal 
//Number()
let input = "3.14";
console.log(input + 2);

//We are parsing to a number
input = Number(input);

//Now we can do math
console.log(input + 2);