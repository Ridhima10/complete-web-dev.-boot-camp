// Before Hoisting
// var x = 7;
// function getName() {
//     console.log("Hello world");
// }
// getName();
// console.log(x)
// console.log(getName)


// Note: In case of variable it gives it value of undefined in execution context phase 1, but in case of function it gives the whole function.

// After Hoisting
// getName(); //it will print the value of func
// console.log(getName) //it will print the whole function
// console.log(x) //undefined
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



/*
Things learned:
1. Hoisting in JavaScript is a process in which all the Variables, Functions and Class defination are declared BEFORE execution of the code 
3. Variables are initialised to UNDEFINED when they are declared and Function defination is stored AS IT IS.
4. They are declared in Memory Allocation Phase in the Memory Component of Execution Context, so we can use them even BEFORE they are declared.
5. UNDEFINED means Variable has been declared but value is not ASSIGNED but NOT DEFINED means Variables is NOT DECLARED.
6. When we assign Variable to a Function defination, we CAN NOT call this Variable as Function BEFORE declaration as it will behave as Variable with UNDEFINED value.


*/