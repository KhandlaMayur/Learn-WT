console.log("This is Promise")

let prom1 = new Promise((resolve, reject) => {
    let value = Math.random();
    if (value < 0.5) {
        reject("No randome number was not supporting you ")
    } else {
        setTimeout(() => {
            console.log("yes I am Done")
            resolve("Mayur")

        }, 3000);
    }
})
// as promise is a object which is used to handle the asynchronous code and it has three states pending, fulfilled and rejected and we can use then and catch method to handle the promise and then method is used to handle the fulfilled state and catch method is used to handle the rejected state

// prom1.then((value) => {
//     console.log(value)
// }).catch((err) =>{
//     console.log(err)
// })

// in this case first this This is Promise line execute then after this prom1 will execute and it will check the value of random number if it is less than 0.5 then it will reject the promise and it will print the error message and if it is greater than 0.5 then it will resolve the promise and it will print the success message after 3 second because of setTimeout function and this is call as asynchronous function because it will not block the main thread and it will execute the code after the setTimeout function without waiting for the setTimeout function to complete its execution. catch method is used to handle the error and it will print the error message if the promise is rejected and then method is used to handle the success and it will print the success message if the promise is resolved.


let prom2 = new Promise((resolve, reject) => {
    let value = Math.random();
    if (value < 0.5) {
        reject("No randome number was not supporting you 2")
    } else {
        setTimeout(() => {
            console.log("yes I am Done 2")
            resolve("Mayur 2")

        }, 1000);
    }
})

// let p3 = Promise.all([prom1, prom2])
// p3.then((value) =>{
//     console.log(value)
// }).catch((err) =>{
//     console.log(err)
// })


// in this case first this This is Promise line execute then after this prom1 and prom2 will execute and it will check the value of random number if it is less than 0.5 then it will reject the promise and it will print the error message and if it is greater than 0.5 then it will resolve the promise and it will print the success message after 3 second because of setTimeout function and this is call as asynchronous function because it will not block the main thread and it will execute the code after the setTimeout function without waiting for the setTimeout function to complete its execution. catch method is used to handle the error and it will print the error message if the promise is rejected and then method is used to handle the success and it will print the success message if the promise is resolved. Promise.all method is used to handle multiple promises and it will return a new promise which will be resolved when all the promises are resolved and it will be rejected when any of the promise is rejected.

// let p3 = Promise.allSettled([prom1, prom2]) //  to use to identify the status of the promise whether it is fulfilled or rejected and it will return a new promise which will be resolved when all the promises are settled and it will return an array of objects which will contain the status of the promise and the value of the promise if it is fulfilled and the reason of the promise if it is rejected.
// p3.then((value) =>{
//     console.log(value)
// }).catch((err) =>{
//     console.log(err)
// })

// let p3 = Promise.race([prom1, prom2]) // to use which one is first to resolve or reject the promise and it will return a new promise which will be resolved or rejected when any of the promise is resolved or rejected and it will return the value of the promise if it is resolved and the reason of the promise if it is rejected.
// p3.then((value) =>{
//     console.log(value)
// }).catch((err) =>{
//     console.log(err)
// })

// let p3 = Promise.any([prom1, prom2]) //  to use anyone is first to resolve the promise and it will return a new promise which will be resolved when any of the promise is resolved and it will return the value of the promise if it is resolved and it will be rejected when all the promises are rejected and it will return an array of objects which will contain the reason of the promise if it is rejected.
// p3.then((value) =>{
//     console.log(value)
// }).catch((err) =>{
//     console.log(err)
// })

// let p3 = Promise.resolve([prom1, prom2]) // resolve use to return a promise which is already resolved and it will return the value of the promise if it is resolved and it will be rejected when all the promises are rejected and it will return an array of objects which will contain the reason of the promise if it is rejected.
// p3.then((value) =>{
//     console.log(value)
// }).catch((err) =>{
//     console.log(err)
// })


let p3 = Promise.reject([prom1, prom2]) // reject use to return a promise which is already rejected and it will return the reason of the promise if it is rejected and it will be resolved when all the promises are resolved and it will return an array of objects which will contain the value of the promise if it is resolved.
p3.then((value) =>{
    console.log(value)
}).catch((err) =>{
    console.log(err)
})
