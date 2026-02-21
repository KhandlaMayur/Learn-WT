function createcard(title,cname,views,monthold,duration,thumbnail){
    let viewstr
    if(views<1000){
        viewstr =views
    }
    else if(views>1000000){
        viewstr =(views/1000000 ) + "M"
    }
    else{
        viewstr = views/1000 + "k"
    }
    let html = `<div class="card">
           <div class="image">
             <img src="${thumbnail}" alt="thumbnail">
             <div class="capsule">${duration}</div>
            
           </div>
           <div class="text">
            <h1>${title}</h1>
            <p>${cname} . ${viewstr} views . ${monthold} month ago</p>
           </div>

        </div>`
        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
    
}
createcard("Learn JavaScript in 1 hour","Code with Mayur",1000,"2 month old","1:00:00","https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDpdOoVMCl1Z3qDixA988oU8Cot0w")