// Accessing boxes through Class 

// let boxes=document.getElementsByClassName("box")
// console.log(boxes)

// boxes[3].style.backgroundColor="pink"
// boxes[2].style.border="2px solid red"
// boxes[1].style.color="blue"



// Accessing boxes through Id 
// document.getElementById("box-3").style.backgroundColor="green"


// Query selector
// it will tagret the first element with this class
document.querySelector(".box").style.backgroundColor="yellow"


// To target all using query selector
// this will return array so we have to use for loop to access each element
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green"
})


// by tag name and name
let e=document.getElementsByTagName("div")
console.log(e)
console.log(document.getElementsByName("div"))


// matches
console.log(e[4].matches("#box-3"))
console.log(e[3].matches("#box-3"))


// closest-to look for nearest ancestors that matches the given css selector
console.log(e[2].closest("#box-3")) //does not match
console.log(e[3].closest(".container")) //match


// conatins- returns true if element B is inside element A or when element A== element B
console.log(document.querySelector(".container").contains(e[2]))
console.log(document.querySelector(".container").contains(e[6]))
console.log(document.querySelector(".container").contains(document.querySelector("body")))
 

