console.log("Mayur")
let boxes = document.getElementsByClassName("box") // getElementsByClassName is method use to give the stype perticuler element, in getElementsByClassName order is not maintain
console.log(boxes)
boxes[2].style.backgroundColor = "red" 

document.getElementById("redbox").style.backgroundColor = "lightgreen"   // getElementById is method use to give the stype perticular elemnent getElementById order is maintain


document.querySelector(".box").style.backgroundColor = "green"   // .box means to style the first class only 

// when we want to style all element then we use querySelectorAll

// whenever we apply querySelectorAll method then this method override the style
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "lightblue"
})

// getElementbyTagName  =   to show all tage of div 

// document.getElementsByTagName("div")
// HTMLCollection(7) [div.container, div.box, div.box, div.box, div#redbox.box, div.box, div.box, redbox: div#redbox.box]


// matches = to check current box is exist with given id or classes or parent

// e[4].matches("redbox")
// false
// e[3].matches("redbox")
// false
// e[2].matches("redbox")
// false
// e[1].matches("redbox")
// false
// e[5].matches("redbox")
// false
// e[3].matches("#redbox")
// false
// e[4].matches("#redbox")
// true


//closest = to check current box is closest with given id or classes or parent 
// e[4].closest("#redbox")
// <div id=​"redbox" class=​"box" style=​"background-color:​ lightblue;​">​Mayur Khandla 3​</div>​
// e[3].closest("#redbox")
// null


//contains = it means is contain the element 1 == element 2 or element 1 inside the element 2

// document.querySelector(".container").contains(e[4])
// true
// document.querySelector(".container").contains(e[0])
// true
// document.querySelector(".container").contains(document.querySelector("body"))
// false