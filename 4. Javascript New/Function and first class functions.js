//What is Function statement (also called function declaration)?
function a(){
    console.log("a called")
}
a();

//What is Function Expression?
//Anwer- it means assigning function to a variable
var b=function() {
    console.log("b called")
}
b();

// what is the difference between function statement and function expression?
// Answer- Hoisting , because when we call both functions before declaration a() will log the output but b() will give typeError that b is not a function since we have assigned it to a var and it is acting like a variable and hence function b() is not found

a();
b();

function a(){
    console.log("a called")
}

var b=function() {
    console.log("b called")
}


//What is Function declaration?
// Answer- Function statement is also called as Function declaration.

//What is Anonymous Function?
//Answer- A func without a name. They does not have their own identity. They are used when functions are used as values.
var x=function(){

}

// Named function expression
var x=function xyz(){
 console.log("hii, i am inside function x")
 console.log(xyz) 
 //we can access the func here
}
x();
// xyz(); if we call xyz it will throw an error because here xyz is assigned to a variable and will behave like a variable. to access it we can call it using x() 
// xyz is a local var here so to access it we have to log inside it. not in global scope


// Difference between arguments and parameters?
var b=function(param1,param2) { //param1 and param2 are the parameters
    console.log("b called")
}
b(1,2); //here 1 and 2 are the arguments


// First Class Functions
//Answer- The ability to use functions as values is called as first class functions. They are also called as first class citizens
// we can pass function inside another function as an arguement
var b=function(param1) { 
    console.log(param1)
}
b(function(){

});
// or like this named function
var b=function(param1) { 
    console.log(param1)
}
b(function xyz(){

});

// we can also return a function from a function
var b=function(param1) { 
   return function(){

   }
}
console.log(b())

// or like this naming function
var b=function(param1) { 
    return function abc(){
 
    }
 }
 console.log(b())


//  if we use let and const here it will behave the same way they behave during let and const as variables. here function is behaving like a value