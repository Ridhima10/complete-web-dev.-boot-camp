// A function which takes another function as an argument or returns a function from it is called higher order function
function x() {
    console.log("Hii console")
}
 
function y(x) {
    x();
}
// here y is the higher order function and x is the callback function.


// Write program to calculate area , circumference and diameter of a circle.

// approach 1(write but not an effective way)
// const radius=[3,1,2,4]

// const calculateArea= function(radius){
//     const output=[]
//     for(i=0;i<=radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i])
//     }
//     return output;
// }
// console.log(calculateArea(radius))

// const calculateCircumference=function(radius){
//     const output=[]
//     for(i=0;i<=radius.length;i++){
//         output.push(2*Math.PI*radius[i])
//     }
//     return output;
// }
// console.log(calculateCircumference(radius))

// const calculateDiameter=function(radius){
//     const output=[]
//     for(i=0;i<=radius.length;i++){
//         output.push(2*radius[i]);
//     }
//     return output;
// };
// console.log(calculateDiameter(radius));




// Approach 2 (Effective way)
const radius=[3,1,2,4]

// const area= function(radius){
//     return Math.PI*radius*radius  
// }
// const Circumference= function(radius){
//     return 2*Math.PI*radius
// }
// const Diameter= function(radius){
//     return 2*radius 
// }

// const calculate=function(radius,logic){
//     output=[]
//     for(i=0;i<=radius.length;i++){
//         output.push(logic(radius[i]))
//     }
//     return output;
// }
// console.log(calculate(radius,area))
// console.log(calculate(radius,Circumference))
// console.log(calculate(radius,Diameter))


// this function is quite similar to map
// we can access it using map
// console.log(radius.map(area))


// we literally made a logic of map function but the way we are accesing our function is different right? for that we need to do some minor changes.

const area= function(radius){
    return Math.PI*radius*radius  
}
Array.prototype.calculate=function(logic){
    const output=[]
    for(let i=0;i<=this.length;i++){
        output.push(logic(this[i]))
    }
    return output;
}
console.log(radius.calculate(area))

/*
Things learned:
1. Follow DRY(Don't Repeat Yourself) principle while coding.
2. Use function to stop writing repeating line of codes.
3. Function that takes another function as argument(callback function) is known as Higher order functions.
4. It is this ability that function can be stored, passed and returned,  they are called first class citizens.
5. If we use Array.property.function-name. This function is accessible to any array in your code.
*/
