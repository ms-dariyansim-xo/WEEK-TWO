//Comments in Javascript
/*
Multi-line comment
*/

console.log("Hello World");

//log a number
console.log(7);

//create and log a variable
let input = "Dariyan";
console.log(input);

//variables ckan change data types
input = 10;
console.log(input);

//log boolean variables
console.log(5<2);
console.log(10 == 10);

//create and log an array
let array = [1,2,3,4];

//can directly log an array
console.log(array);

//have a data object called a MAP
let map= {x:10, y: 20};
console.log(map);

//typeof - check the data type of the variable
console.log(typeof(input));
console.log(typeof(map));

//method that does not exist
//fakeMethod();
//any code in a js file that is not in a functions will run automatically
//HAS TO BE CALLED:
myFunction();
function myFunction(){
alert("Hello from myFunction");
}