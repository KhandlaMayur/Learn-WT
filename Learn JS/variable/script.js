console.log("Welcome to JavaScript Variables")

var a = 5  // gloal variable, can be accessed anywhere in the code
var b = 10
var c = "Mayur"

// var 55a = 20 // Not Allowed because variable name cannot start with a number
console.log(a+b+8)
console.log(typeof a, typeof b, typeof c)

const pi = 3.14
console.log(pi)
// pi = pi +  1   // Not Allowed because pi is a constant

let x = 20 
console.log(x)

{
    let x = 30  // box varable, only accessible within this block
    console.log(x)
}
console.log(x)


let p = 10 
let q = 3.44
let r = "Mayur"
let s = true
let t = null // null is object type in JavaScript, it represents the intentional absence of any object value becasue of a bug in JavaScript, it is not a primitive type
let u = undefined
console.log(p, q, r, s, t, u)
console.log(typeof p, typeof q, typeof r, typeof s, typeof t, typeof u)


let o = {
    name : "Mayur",  // we can write without quotes but it is recommended to write with quotes
    "job code" : 12345,  // we have to write with quotes because it contains space
    "isStudent" : true
}
console.log(o)
o.salary = "100cr"
console.log(o)
