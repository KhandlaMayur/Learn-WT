let rand = Math.random()
console.log(rand)

// Adjectives:
if(rand < 0.33){
    first = "Crazy"
}
else if (rand < 0.66 && rand > 0.33){
    first = "Amazing"
}
else{

    first = "Fire"
}

// Shope Names:
if(rand < 0.33){
    second = "Engine"
}
else if (rand < 0.66 && rand > 0.33){
    second = "Foods"
}
else{

    second = "Garments"
}


// Another Words:
if(rand < 0.33){
    third = "Bros"
}
else if (rand < 0.66 && rand > 0.33){
    third = "Limited"
}
else{

    third = "Hub"
}


console.log(`${first} ${second} ${third}`)