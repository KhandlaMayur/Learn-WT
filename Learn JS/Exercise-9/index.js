/* Create Faulty Calculator 
1. Take two input from the user 
2. It perform following wrong opeations
+  ----> -
* ----> +
- ----> /
/ ---->**

*/


let random=Math.random()
console.log(random)
let a = prompt("Enter the first number")
let c = prompt("Enter the Operation you want to perform")
let b = prompt("Enter the second number")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random > 0.5){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

