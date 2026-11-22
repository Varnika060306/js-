let score = "33";

console.log(typeof score);

score = Number(score);
console.log(typeof score);
console.log(score);

let sc = "33abc";
sc = Number(sc);
console.log(typeof sc);
console.log(sc);

let bool = Number(true);
console.log(typeof bool);
console.log(bool);

let un = Number(undefined);
console.log(typeof un);
console.log(un);

// something to number 
//"33"=> 33
//"33abc"=> NaN
// true=> 1 ;false=>0

// something to boolean 
//1=> true
//0=> false
// "" => false 
// "var" => true

