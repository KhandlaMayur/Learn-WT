let a =prompt("Enter the Value of a")
let b =prompt("Enter the Value of b")
// let sum = a + b // in this case not sum of both number but in this case both number will be concatenated because prompt function returns a string and when we add two strings it will concatenate them. To get the sum of both number we need to convert the string to number using parseInt or parseFloat function.

if(isNaN(a) || isNaN(b)){ // if we fill string then java script bydefault show the nan value but we can handle this error using is NaN function with throw keyword to handle the error by user not by javascript
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main(){
    let x = 1;

    try {
        console.log(sum * x) // if x is not defined then javascript first show the output like x is not declaired but we can first to try the this error if not handled then show the error message like error aa gaya bhai and whatever 
        return true
    }catch(error){
        console.log("Error aa gaya bhai")
        return false
        
    }
    finally{

        console.log("files are being closed and db connection is being closed")
    }
}
let c = main()


// in this case finally used  jyare apane try and catch block ma run thaya pachhi j kai value return thay ane apade ek var return thaya pachhi no code pan execute karavo hoy tyare finally no use kariye chhiye finally mainly function ma used thay chhe kem k function ma ek vakhat value return thaya pachhi agad no code execute thato nathi parantu apade agad no code exeute karava mangiye chhiye etale finally no use kariye chhiye agar apade finally use na kariye to apanane value return thay pachhi no code execute thato nathi .