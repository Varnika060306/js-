const myno = [1, 2, 3]
const hisno = [3, 4, 5]
//myno.push(hisno)
//console.log(myno)

const no2 = myno.concat(hisno)
//console.log(no2)
const no3 = [...myno, ...hisno]
//console.log(no3);
const array3 = [1, 2, 3, 4, 5, [5, 6, 7, [2, 3]]]
const array4 = array3.flat(Infinity)
//console.log(array4)

console.log(Array.isArray("array4"))
console.log(Array.from("array4"));
console.log(Array.of("me","i","us"))
