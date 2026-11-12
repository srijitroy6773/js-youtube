// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 85209632155456416n

// Refrences (Non Primitive)

// Array, Objects, Functions

const heros = ["Ironman", "Spiderman", "Superman"]  //Array

let myObj = {
    name : "Srijit",     //Object
    age : 22,
}

const myFunction = function (){
    console.log("Hello World");        // Function
    
}


console.log(typeof bigNumber);
