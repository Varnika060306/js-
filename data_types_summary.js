//primitive- pass by copy
//7-number , string, null, undefined,bool, bigint, symbol

let num = 13
const st = "13"
let v = null
let score; //undefined by default
let bool = false
let bigNumber = 5555555555555555n //n makes it bigint
console.log(typeof (bigNumber))

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2) //not the same even though same value

//non-primitive= pass by reference 
//arrays, objects, functions 
const heros = ["shaktiman", "ben10"]
let myObj = {
    name: "varnika",
    age: 20,

}
const myFunction = function(){
    console.log("hello world");
}