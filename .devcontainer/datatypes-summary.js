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

// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Ptimitive)

let myYoutubename = "srijitroydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename); 
console.log(anothername);


let userOne = {
    email : "usergoogle.com",
    upi : "useroaxis",
}

let userTwo = userOne 

userTwo.email = "srijit@google.com"

console.log(userOne.email);
console.log(userTwo.email);