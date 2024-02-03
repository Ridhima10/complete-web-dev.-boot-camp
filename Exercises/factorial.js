// Find the factorial of a number using reduce and for loop

// let inp=prompt("Enter the number")
// fact=1
// for (let index = 1; index <=inp; index++) {
//     fact=fact*index  
// }
// alert(`The factorial is ${fact}`)


// let a=prompt("Enter the number")
let a=5 //reduce should have an initial value
function factorial(num){
    let arr=Array.from(Array(num+1).keys())
    let c=arr.slice(1,).reduce((a,b)=>a*b)
    return c
}
alert(factorial(a))