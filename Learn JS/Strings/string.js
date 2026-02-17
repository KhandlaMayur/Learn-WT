console.log("this is a string")

let a = "    Mayur Khandla    "
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a[7])
console.log(a[8])
console.log(a[9])
console.log(a[10])
console.log(a[11])
console.log(a[12])
console.log(a.length)

let myname="Mayur Khandla"
let myfriendname="Karan Khandla"
console.log(myname + " is a friend of " + myfriendname)
// string interpolation = when insert a variable in a string then it is called string interpolation and we can do it in two ways one is using + operator and another is using template literals
console.log(`${myname} is friend of ${myfriendname}`)    // template literals because above line is very long and hard to read so we can use template literals to make it more readable and easier to write


//Escape Sequences in JavaScript
// \n = new line
// \t = tab
// \\ = backslash
// \' = single quote
// \" = double quote

let str = "Hello World"
console.log(str)
let str2 = "Hello\nWorld"
console.log(str2)
let str3 = "Hello\tWorld"
console.log(str3)
let str4 = "Hello\\World"
console.log(str4)   
let str5 = "Hello\'World"
console.log(str5)
let str6 = "Hello\"World\""
console.log(str6)
let str7 = "Hello'World"
console.log(str7)
let str8 = `Hello"World`
console.log(str8)


let b = "mayurmayur"
console.log(b.toLowerCase()) // function to convert a string to lowercase
console.log(b.toUpperCase()) // function to convert a string to uppercase
console.log(b.length) // property to find the length of a string
console.log(b.slice(1,4)) // function to slice a string from index 1 to index 4 (not including index 4)
console.log(b.replace("mayur","khandla")) // function to replace a string with another string but it only replaces the first occurrence of the string
console.log(b.includes("ayur")) // function to check if a string includes another string
console.log(b.startsWith("ma")) // function to check if a string starts with another string
console.log(b.endsWith("ur")) // function to check if a string ends with another string
console.log(b.concat(a,"mahek","")) // function to concatenate two or more strings and it returns a new string but it does not change the original string
console.log(a.trim()) // function to remove the whitespace from both ends of a string but it does not change the original string
console.log(a.trimStart()) // function to remove the whitespace from the start of a string but it does not change the original string
console.log(a.trimEnd()) // function to remove the whitespace from the end of a string but it does not change the original string
console.log(a.trim().toUpperCase()) // function to remove the whitespace from both ends of a string and convert it to uppercase but it does not change the original string
console.log(b.charAt(2)) // function to find the character at a specific index in a string
console.log(b.indexOf("y")) // function to find the index of the first occurrence of a string in a string
console.log(b.lastIndexOf("y")) // function to find the index of the last occurrence of a string in a string
console.log(b.split("y")) // function to split a string into an array of strings based on a specific separator and it returns an array of strings but it does not change the original string
