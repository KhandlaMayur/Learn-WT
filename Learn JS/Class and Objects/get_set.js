class User {
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name; // _name is used to store the value of the name property of the class and we can use it to access the name property of the class and also to set the name property of the class because if we use this.name then it will call the get name method of the class and it will return the value of the name property of the class and if we use this._name then it will return the value of the _name property of the class which is used to store the value of the name property of the class.
    }

    set name(value){
        if(value.length < 10){
            console.log("Name is too short!");
            return;
        }
        else{
            this._name =value;
        }
    }
}

let user = new User ("Mayur")
console.log(user.name);  // Mayur

// user.name = "Mayur" // Name is too short!
// console.log(user)


// in this case get and set are used to access the properties of the class and also to set the properties of the class. get is used to access the properties of the class and set is used to set the properties of the class. get and set are also used to validate the data before setting the properties of the class. in this case we have used set to validate the name property of the class and if the name is less than 10 characters then it will show an error message and if the name is greater than or equal to 10 characters then it will set the name property of the class.