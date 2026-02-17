let arr = [1,5,6,8,2,3,4,9,7]
console.log(arr)

console.log(arr[0])
console.log(arr[8])
console.log(arr[5])

console.log(arr.length) // to get the length of the array
console.log(arr.toString())  // to convert the array into string
console.log(arr.join(" -> ")) // to join the array elements with a separator

console.log(arr.pop()) // to remove the last element of the array and return it
console.log(arr.push(100)) // to add an element at the end of the array and return the new length of the array
console.log(arr.shift()) // to remove the first element of the array and return it
console.log(arr)


console.log(arr.unshift(200)) // to add an element at the beginning of the array and return the new length of the array
console.log(arr)
delete arr[2] // to delete an element at a specific index and return true if the element was deleted successfully
console.log(arr)  // deleting an element does not change the length of the array, it just sets the element to undefined it means in memory is allocated but have no value 

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [7,8,9]
console.log(arr1.concat(arr2,arr3)) // to concatenate two or more arrays and return a new array

let m = [7,8,9,5,2,3,4,6,1]
console.log(m.sort()) // to sort the elements of the array in ascending order


let x = [1,2,3,4,5]
console.log(x.splice(1,2)) // to remove elements from the array and return the removed elements, it takes two arguments, the first one is the index from where to start removing and the second one is the number of elements to remove
console.log(x) // the original array is modified after using splice method

let y = [1,2,3,4,5]
console.log(y.splice(1,2,100,200)) // to remove elements from the array and add new elements at the same index, it takes three arguments, the first one is the index from where to start removing and adding, the second one is the number of elements to remove and the third one is the new elements to add
console.log(y) // the original array is modified after using splice method


let z = [1,2,3,4,5]
console.log(z.slice(1,4)) // to get a portion of the array and return a new array, it takes two arguments, the first one is the index from where to start slicing and the second one is the index where to end slicing but it does not include the end index
console.log(z) // the original array is not modified after using slice method

console.log(z.reverse()) // to reverse the elements of the array and return the reversed array