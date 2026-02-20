console.log("Intialize the javascript file")

// let boxes = document.getElementsByClassName("box") // getElementsByClassName is method use to give the stype perticuler element, in getElementsByClassName order is not maintain
let boxes = document.querySelector(".container").children // querySelector is method use to give the stype perticuler element, in querySelector order is maintain
function getRandomColor() {
    let val1=Math.ceil(0+Math.random()*255);
    let val2=Math.ceil(0+Math.random()*255);
    let val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`

}

Array.from(boxes).forEach(e =>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})