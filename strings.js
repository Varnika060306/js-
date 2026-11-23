const name = "varnika";
const repocount = 50;
//console.log(name + repocount + "   value")
//onsole.log(`my name is ${name} and my repo count is    ${repocount}`)

const newString = new String("varnika-147");
//console.log(newString[1])
//console.log(newString.__proto__);

/*console.log(newString.length);
console.log(newString.toUpperCase());

console.log(newString.charAt(3));
console.log(newString.indexOf('i'));*/

const string2 = newString.substring(0, 4); //no negative values for substring
console.log(string2);

const string3 = newString.slice(-8, 4); // negative values allowed for slice
console.log(string3);

const string4 = "    varnika  "
console.log(string4.trim())
const url = "varnika-116"
console.log(url.replace('116','147'))