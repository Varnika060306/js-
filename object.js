/*object literals 
const sym=Symbol(123)
const js = {
    name: "varnika",
    [sym]: 145,
    "rollno": 147,
}
console.log(js.name)
console.log(js["name"])
console.log(js.rollno)
js.email = "varnika34@gmail.com"
//Object.freeze(js)
js.email = "faiz34@gmail.com"


js.greetings = function () {
    console.log("hello");
}
js.greetingtwo = function () {
  console.log(`hello js user ${this.name}`);
};
console.log(js);
console.log(js.greetings());
console.log(js.greetingtwo());
*/

//const tinderUser = new Object()
//console.log(tinderUser)

/*const tinderUser = {}
tinderUser.name = 'faiz'
tinderUser.id = 123
tinderUser.loggedIn = false
console.log(tinderUser);
*/
const regular = {
    name: {
        fullname: 'mohd',
        lastname: 'faiz',
    }
}
//console.log(regular.name.fullname)

const obj1 = { 1: 1, 2: 2 }
const obj2 = { 3: 3, 4: 4 };
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 }
//console.log(obj3)

//console.log(Object.keys(regular))
//console.log(Object.values(regular));
console.log(regular.hasOwnProperty("name"))