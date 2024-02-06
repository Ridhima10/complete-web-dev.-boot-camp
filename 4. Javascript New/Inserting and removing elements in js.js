console.log(document.querySelector(".box"))


// it will log the html inside the class 
console.log(document.querySelector(".box").innerHTML)
console.log(document.querySelector(".container").innerHTML)



// it will log the text inside the class 
console.log(document.querySelector(".container").innerText)



// it log the given class as well as the html inside it
console.log(document.querySelector(".container").outerHTML)
console.log(document.querySelector(".box").outerHTML)


// They will log the name of the tag.
// Tagname is applicable for elements only and nodename includes text ,comments also.
console.log(document.querySelector(".box").tagName)
console.log(document.querySelector(".box").nodeName)



// text inside the content
console.log(document.querySelector(".box").textContent)



// hidden
// console.log(document.querySelector(".box").hidden)
// to hide
// document.querySelector(".container").hidden =true


// to change innerHTML
document.querySelector(".box").innerHTML ="Changed HTML"


// has attribute










