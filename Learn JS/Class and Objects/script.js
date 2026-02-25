// ----------------------------------------------------------------------------------------------------------------------------------------
// let obj = {
//     a: 1,
//     b: "Mayur"
// }
// console.log(obj) // to access the object we can use console.log
// console.log(obj.a) // to access the value of a we can use dot notation
// console.log(obj["b"]) // to access the value of b we can use bracket notation

// let animal ={
//     eats : true
// };
// let rabbit = {
//     jumps : true
// };


// // rabbit
// // {jumps: true}
// // rabbit.eats
// // undefined

// rabbit.__proto__ = animal;  // it means set rabbit.[[prototype]] = animal
// // rabbit
// // {jumps: true}
// // rabbit.eats
// // true

// ----------------------------------------------------------------------------------------------------------------------------------------


class Animal {
    constructor(naam) {
        this.name = naam // this keyword is used to refer to the current object and we can use it to access the properties and methods of the class
        console.log("Animal is Created...")
    }
    eats() {
        console.log("Khaa raha hai...")
    }
    jumps() {
        console.log("Kood raha hai...")
    }
}

// let a = new Animal() // to create an object of the class we use new keyword and call the constructor function of the class
// a.jumps() // to call the method of the class we use dot notation and call the method name
// a.eats() // to call the method of the class we use dot notation and call the method name

let a = new Animal("Bunny")
console.log(a.name)


class Lion extends Animal { // to create a subclass we use extends keyword and call the parent class name
    constructor(naam) {
        super(naam) // to call the constructor of the parent class we use super keyword and pass the parameter to it and also pass the parameter to the constructor of the parent class and also pass the parameter to the constructor of the parent class
        // this.name = naam  // not use because in parent class we already use this.name = naam so we can use super keyword to call the constructor of the parent class and pass the parameter to it
        console.log("Lion is created...")
    }
     eats() {  // override the parent class method it means when we call the eats method of the lion class it will call the eats method of the lion class instead of the eats method of the animal class because we have overridden the eats method of the animal class in the lion class
        console.log("Lion Khaa raha hai...")
    }

}

let l = new Lion("Simba")
console.log(l)
console.log(l.name)
console.log(l.eats()) 



// instanceof
// l  instanceof Lion
// true
// l instanceof Animal
// true
// a instanceof Lion
// false

// in this case instanceof is used to check whether the object is an instance of the class or not and it returns true if the object is an instance of the class and it returns false if the object is not an instance of the class. in this case l is an instance of the Lion class and also an instance of the Animal class because Lion class is a subclass of the Animal class and a is an instance of the Animal class but not an instance of the Lion class because a is created using the constructor of the Animal class and not using the constructor of the Lion class.