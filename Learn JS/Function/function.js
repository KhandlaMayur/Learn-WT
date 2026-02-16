// function student(name) {
//     console.log("Hello " + name + " I am to learn 5th tutorial of JavaScript Functions")
//     console.log(name + " looks like a good name")
//     console.log(name + " is a good man ")
    
// }
// student("Mahek")
// student("Mayur")

// function sum(a,b , c=30) {  // a and b are parameters and c is also a parameter with default value 500 it means c is default parameter and if we not pass the value of c then it will take the default value 500
//     // console.log("The sum of " + a + " and " + b + " is " + (a+b))
//     return a + b + c // we use return keyword because we not direct pass the value to console.log() but we want to store the value in variable and then pass it to console.log()
    
// }
// result1= sum(10,20)
// result2= sum(50,80)
// result3= sum(70,60,-10) // here we pass the value of c as -10 so it will override the default value of c which is 30 and it will take the value of c as -10
//  console.log("The sum of two numbers is :" + result1)
//  console.log("The sum of two numbers is :" + result2)
//  console.log("The sum of two numbers is :" + result3)


// arrow function
 const func1 = (x) => {
    console.log("The square of " + x + " is " + (x*x))

 }
 func1(5)
 func1(10)
 func1(15)
 func1(20)