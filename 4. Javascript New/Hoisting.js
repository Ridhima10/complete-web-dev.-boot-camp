// Before Hoisting
var x = 7;
function getName() {
    console.log("Hello world");
}
getName();
console.log(x)
console.log(getName)


// Note: In case of variable it gives it value of undefined in execution context phase 1, but in case of function it gives the whole function.

// After Hoisting
// getName(); //it will print the value of func
// console.log(getName) //it will print the whole function
// console.log(x)
// var x= 7;
// function getName() {
//     console.log("Hello world");
// }


// It will throw an error because we did not declared x
// getName();
// console.log(x)

// function getName() {
//     console.log("Hello world");
// }



// Note: if we use arrow function then it will treat that function as a variable and acquire its properties

// var x= 7;
// getName();
// console.log(x)
// var getName=()=> {
//     console.log("Hello world");
// }
// it will give error because we are calling getName and getName is not a function anymore


// console.log(getName);
// var getName = () => {
//   console.log('Hello world');
// };
// it will give output undefined



// console.log(getName);
// var getName = function() {
//   console.log('Hello world');
// };
// it will give output undefined