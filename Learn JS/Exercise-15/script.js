let play = true;

while(play){
    // Ask user input
    let user = prompt("Enter S for Snake, W for Water, G for Gun").toLowerCase();

     // Validate input
    if(user !== "s" && user !== "w" && user !== "g"){
        alert("Invalid input! Please enter only S, W or G.");
        continue;
    }

    // Computer choice
    let choose = ["s", "w", "g"];
    let computer = choose[Math.floor(Math.random()*3)];

    alert("Computer chose: " + computer.toUpperCase());

     // Game logic
     let result = "";

     if(user === computer){
        result = "Match Draw!";
     }
     else if((user === "s" && computer === "w") || (user === "w" && computer === "g") ||(user === "g" && computer === "s")){
        result = "You are Win";
     }else{
        result = "Computer Win";
     }

     alert(result);

    // Ask to play again
    playAgain = confirm("Do you want to play again?");
}

alert("Thanks for playing!");