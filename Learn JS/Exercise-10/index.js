/* Create a business name generator by combining list of adjectives and shop name and other word without using array use only string and string methods and functions.

Adjectives:
Crazy
Amazing
Fire

Shope Names:
Engine
Foods 
Garments 

Another Words:
Bros
Limited
Hub
*/

let adjectives = "Crazy Amazing Fire"
// let adjectives2 = "Amazing"
// let adjectives3 = "Fire"
let shopname = "Engine Foods Garments"
// let shopname2 = "Foods"
// let shopname3 = "Garments"
let anotherword = "Bros Limited Hub"
// let anotherword2 = "Limited"
// let anotherword3 = "Hub"

console.log(adjectives.slice(0,6) + " " + shopname.slice(7,13) + " " + anotherword.slice(13,17))
console.log(adjectives.slice(6,14) + " " + shopname.slice(13,22) + " " + anotherword.slice(13,17))
