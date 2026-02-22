console.log("Mayur Is a Good Man")
console.log("Smit  Is a Good also Man")

setTimeout(() => {
    console.log("Hello")
    
}, 1000);

console.log("The End")


// in this case first this Mayur Is a Good Man line execute then after this Smit  Is a Good also Man line execute then this The End line execute and at the last Hello will execute because this in Hello have some timeout so it means javascript delay and first execute the end then after the one second Hello will execute its call asynscronous function 


// callback function 
// callback function is a function passed into another function as an argument which is then involved inside the after outer function to complete an function 


const fn =() => {
    console.log("Nothing")
}
const callback  = (arg) => {
    console.log(arg)
    fn()

  
}

const loadscript = (src , callback)  => {
    let sc = document.createElement("script");
    sc.src =src;
    sc.onload = callback("Script has been loaded",fn);
    document.head.append(sc)
  
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", callback)

