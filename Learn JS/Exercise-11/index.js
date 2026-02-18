// Using For Loop


// let n = prompt("Enter the number") 
// let sum = 1
// for (let i = 1; i <=n; i++) {
//     sum =sum * i
// }
// console.log(sum)


// Using Reduce Method 

let a = 6
function factorial(number){
    let arr=Array.from(Array(number+1).keys())  // from  = array start with, number+1 = because my array start from 1 , keys() == is the function to return all element up to n
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a,b) => {
        return a*b
    })
    console.log(c)
}

factorial(a)