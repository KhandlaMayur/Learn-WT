// async function getdata() {
//     //simulatting getting data from server and it will take 3.5 second to get the data and then it will return the data
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve(455)
            
//         }, 3500);
       
//     })
    
// }

// settle means resolve or reject
// resolve means promise has settled sucessfully
// resolve means promise has not settled sucessfully

async function getdata() {
    let x = fetch('https://jsonplaceholder.typicode.com/todos/1') // to get the data from the server and it will return a promise which will be resolved when the data is fetched from the server and it will return the response object if the data is fetched successfully and it will be rejected when there is an error in fetching the data from the server and it will return the error message if there is an error in fetching the data from the server.

    // let data =  (await x).text  // to give the data in text format 
    let data =  (await x).json //  to pars the data and it will return a promise which will be resolved when the data is parsed successfully and it will return the parsed data if the data is parsed successfully and it will be rejected when there is an error in parsing the data and it will return the error message if there is an error in parsing the data.
    console.log(data) 
}


// fetch api is to return the fetch promise and then we can pars the data using json method and it will return a promise which will be resolved when the data is parsed successfully and it will return the parsed data if the data is parsed successfully and it will be rejected when there is an error in parsing the data and it will return the error message if there is an error in parsing the data. In this case first this loading Modules line execute then after this Do Something Else line execute then after this Load Data line execute then after this getdata function will execute and it will return a promise which will be resolved when the data is fetched from the server and it will return the response object if the data is fetched successfully and it will be rejected when there is an error in fetching the data from the server and it will return the error message if there is an error in fetching the data from the server and then it will pars the data using json method and it will return a promise which will be resolved when the data is parsed successfully and it will return the parsed data if the data is parsed successfully and it will be rejected when there is an error in parsing the data and it will return the error message if there is an error in parsing the data and then it will print the parsed data and then it will print the Process Data line and then it will print the task 2 line.

async function main() {
    console.log("loading Modules")
    console.log("Do Something Else")
    console.log("Load Data")
    let data = await getdata()
    console.log(data)
    console.log("Process Data")
    console.log("task 2")
    
}
main()

// async function is a function which is declared with the async keyword and it will return a promise and it will be resolved when the function is executed and it will be rejected when there is an error in the function. await keyword is used to wait for the promise to be resolved or rejected and it can only be used inside an async function. In this case first this loading Modules line execute then after this Do Something Else line execute then after this Load Data line execute then after this getdata function will execute and it will return a promise which will be resolved after 3.5 second because of setTimeout function and it will return the value 455 and then it will print the value 455 and then it will print the Process Data line and then it will print the task 2 line.