// What is a callback function?
// func are first class citizen i.e you can take a func and pass into another func. the function that you pass inside another function is called as callback func
// we know js is synchronous single threaded language that means it can do only one thing at a time in a specific order. but due to callbacks we can do async things inside javascript.

// function x(y) {}
// x(function y() {}); //here y is the callback function
// we call this function somewhere else in the code. it is passed in x so now x has the responsibility to call it.



// how it is used in asyncronous tasks?
// let us take example of setTimeout.
// setTimeout(function () {
//   console.log("timer");
// }, 5000);
// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// });
// here function is the callback func because it is passed to setTimeout
// first it will print x, then y, then timer
// callback func are async due to which it will not wait for 5s and hold other functions


//What is Blocking the main thread?
// js has one call stack and we call it main thread
//everything will be executed through call stack only. So if we run any function , callback func etc if any operation blocks the call stack that is called blocking the main thread.

// if we didn't have callbacks, then we won't be able to do async operations



// Deep dive into event listeners
// document.getElementById("clickMe").addEventListener("click", function xyz(){
//    console.log("Button clicked")
// });
// here xyz is a callback function
// whenever we will click button it will automatically comes in call stack


// closure along with event listener
// count how many times the button is clicked

// one way is this but it is not the best practice because we rae using global var
// let count=0
// document.getElementById("clickMe").addEventListener("click", function xyz(){
//   console.log("Button clicked",++count)
// });



// another way would be closures, w will wrap it inside another function to make it data hiding

function attachEventListeners(){
  let count=0
document.getElementById("clickMe").addEventListener("click", function xyz(){
  console.log("Button clicked",++count)
});
}
attachEventListeners()
// here the callback func xyz is forming a closure with outer scope, so i we call attachEventListeners, it will remember where count is present


// why do we need to remove eventlisteners
// they are heavy which means they consume memory.whenever we make eventListeners it forms a closure..and even when callstack is empty but still the program does not free its memory . That is the reason we remove them when we dont need them. when we remove, then all the variable are collected by garbage collector

