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


// has attribute- checks existence of an element
 console.log(document.querySelector(".box").hasAttribute("style")) //returns boolean


console.log(document.querySelector(".box").getAttribute("style")) //returns value


// changes the attribute
console.log(document.querySelector(".box").setAttribute("style","color:red")) //returns value


// to fetch all attributes
console.log(document.querySelector(".box").attributes)


// removes the atttribute targetted css
console.log(document.querySelector(".box").removeAttribute("style"))


// console.log(document.designMode="on")


// data attributes
console.log(document.querySelector(".box").dataset)



// deletion methods
document.querySelector(".box").remove() //removes first .box

// logs the whole line
console.log(document.querySelector(".container"))
console.log(document.querySelector(".container").classList) //list of classes
console.log(document.querySelector(".container").className) //name of classes
console.log(document.querySelector(".container").classList.add("pink")) //add new class
console.log(document.querySelector(".container").classList.remove("pink")) //remove a class
console.log(document.querySelector(".container").classList.toggle("pink")) //if class is there, then it will remove it and vice versa










