console.log("Hello I am to learn 3rd tutorial of JavaScript Conditional Statements")

let age = 0
// let grace = 5

// age += grace
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age % grace)
// console.log(age ** grace)

if(age >= 18 ){
    console.log("You can drive");
}
else if(age == 0){
    console.log("You are a baby, you cannot drive");
}
else{
    console.log("you cannot drive");
}

// if(age + grace > 18){
//     console.log("You can drive with grace");
// }
// else{
//     console.log("you cannot drive even with grace");
// }

let a = 10
let b = 20 
let c = a > b ? (a-b) : (b-a)
console.log(c)


/* 
This section demonstrates the use of a ternary operator in JavaScript.
The ternary operator is a shorthand way to write an if-else statement.
In this example, it checks if 'a' is greater than 'b'. If true, it calculates (a-b), otherwise (b-a).
*/