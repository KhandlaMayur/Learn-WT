let arr = [1,13,7,11,5]
let newarr = []

for(let i = 0 ; i< arr.length ; i++){
    newarr.push(arr[i] ** 2)
}
console.log(newarr) // to get the new array with the squared values of the original array

let newarr2 = arr.map((e) =>{
    return e**2
})

console.log(newarr2) // to get the new array with the squared values of the original array using map method, it takes a callback function as an argument and returns a new array with the results of calling the callback function on every element in the original array


const greaterthanseven = (e) => {
    if(e > 7){
        return true
    }
    return false
}

console.log(arr.filter(greaterthanseven)) // to get a new array with the elements that pass the test implemented by the provided function, it takes a callback function as an argument and returns a new array with the elements that pass the test implemented by the provided function

let arr3 = [1,2,3,4,5]
const red = (a,b) =>{
    return a*b
}

console.log(arr3.reduce(red)) // to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value, it takes a callback function as an argument and returns a single value that is the result of the reduction