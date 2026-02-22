let button = document.getElementById("btn")

// button.addEventListener("click", ()=>{  // click event is use to perform the action when we click on the button
//     // alert("Button Clicked")
//     document.querySelector(".box").innerHTML = "<b> I am Fine</b> I hope You Are also fine"
// })

// button.addEventListener("dblclick", ()=>{  // dblclick event is use to perform the action when we double click on the button
//     document.querySelector(".box").innerHTML = "<b> I am Fine</b> I hope You Are also fine"
// })

// button.addEventListener("contextmenu", ()=>{  // contextmenu event is use to perform the action when we right click on the button
//     alert("Right Clicke Please")
// })

// button.addEventListener("keydown", (e)=>{  // keydown event is use to perform the action when we press any key on the keyboard
document.addEventListener("keydown", (e)=>{
//    console.log(e)
   console.log(e, e.key,e.code)


// only e function printed

//    KeyboardEvent {isTrusted: true, key: 'c', code: 'KeyC', location: 0, ctrlKey: false, …}
// script.js:17 KeyboardEvent {isTrusted: true, key: 's', code: 'KeyS', location: 0, ctrlKey: false, …}
// script.js:17 KeyboardEvent {isTrusted: true, key: 'w', code: 'KeyW', location: 0, ctrlKey: false, …}


// key and keycode
// m KeyM
// script.js:19 a KeyA
// script.js:19 y KeyY
// script.js:19 u KeyU
// script.js:19 r KeyR
// script.js:19 m KeyM
// script.js:19 a KeyA
// script.js:19 h KeyH
// script.js:19 e KeyE
// script.js:19 k KeyK
})