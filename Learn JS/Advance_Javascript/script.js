async function sleep() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("Hello I am Resolved after 1 second")
            
        }, 1000);
    })
    
}
// imidately invoke the async function 

// let a = await sleep()
// let b = await sleep()

// in this case we can not use await keyword outside the async function because await keyword is used to wait for the promise to resolve and it can only be used inside the async function because async function returns a promise and we can use await keyword to wait for the promise to resolve and get the value of the promise and also we can use await keyword to handle the error of the promise using try catch block.

// now this error solve have one way is imidately invoke the async function 

// (async function main() {
    
//     let a = await sleep()
//     console.log(a)
//     let b = await sleep()
//     console.log(b)
// })()

// Deconstructing 

function sum(a,b,c){
    return a+b+c;

}

(async function main() {

    console.log(a1)
    
    let [a , b] = [5,7] // in this withour squre bracket we can get the undefined variable but using square bracket we can get the value of a and b 
    console.log(a,b)

    let [x,y,...rest] = [13,13,5,6,8,9,4,0,] // here ...rest represent to store without x and y value 
    console.log(x,y,rest)

    let obj ={ // here we can identify the perticular value from the object 
        p:1,
        q:2,
        r:3
    }
    let {p,q}=obj
    console.log(p,q)

    let arr =[1,4,3]
    console.log(arr[0]+arr[1]+arr[2])  //  here do sum manually it means sum with perticular index
    console.log(sum(arr[0],arr[1],arr[2])) // here sum using sum function which is i was created and to take the value of each index and return sum  
    console.log(sum(...arr))  // here sum using sum function but ...arr it means our arr is splited and sum
    
    var a1 = 13

    // in this case var ni a1 value interpreter dwara upar jase jya apade console.log(a1) lakhelu chhe tya jase etale console.log(a1) ni upar var a1 define thase tyar bad console.log(a1) run thase pan var a1 = 13 ma 13 ni value upar nai jay etale output apanane error nai parantu undefined seen thase parantu apade agar jo let use karu hot to error avet kem k let ma pehala define karavu pade chhe ne tyar bad apade use kari sakiye chhiye jyare var ne kyay pan define karu hase chalase pan value show nai kare etale k var ne jo function ma define karu hase to te function mate j available hase function ni bare available nai hoy aa process ne hoising kahe chhe 

    // let and const ma hoisting thatu nathi 
})()

