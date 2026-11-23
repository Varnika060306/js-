function addtwonumbers(no1, no2) {
    return `addition of ${no1} and ${no2} is, ${no1}+no2`;
}
//console.log(addtwonumbers(1, 2))

function calculator(...num1) {
    return num1;
}
//console.log(calculator(200, 300, 400))

const obj = {
    name: "varnika",
    rollno: 147,
    
}

function handleObj(obj) {
    console.log(`name is ${obj.name} and the roll no. ${obj.rollno}`)
}
handleObj(obj);

const arr = [1, 2, 3]
function myarray(arr) {
    return arr[0];
}
console.log(myarray(arr));