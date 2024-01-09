/*setTimeout is a JavaScript function that allows you to schedule the execution of a function after a specified amount of time has passed. It is commonly used for introducing delays in code execution or for executing a function asynchronously after a certain period. The syntax is as follows:

javascript
Copy code
setTimeout(function, delay);
function: The function to be executed after the specified delay.
delay: The time (in milliseconds) to wait before executing the function.
Here's a simple example:
*/

console.log("Hello");

setTimeout(function() {
    console.log("Delayed message");
}, 2000);

console.log("World");
/*In this example, "Hello" is logged first, then "World," and after a delay of 2000 milliseconds (2 seconds), "Delayed message" is logged. The setTimeout function allows you to introduce non-blocking delays in your code.*/







// setTimeout with closures
function x() {
    var i = 10;
    setTimeout(function() {
        console.log(i)
    }, 3000); //it will wait fpr 3000ms i.e 3s to print
}
x();
// also it is a closure since it remembers the var i that is inside x


//example
function y() {
    var j = 30;
    setTimeout(() => {
        console.log(j)
    }, 4000);
    console.log("hello world")
}
y();

// firstly, hello world will be printed because it is not bounded to any setTimeOut and then 10 becuase it has time 3 sec and then 30 becuase of 4sec


// to print 1,2,3,4,5 after 1 second each.
// function z() {
//     for (var k = 1; k <= 5; k++){
//         setTimeout(function()  {
//             console.log(k);
//         }, k*1000);
//     }
//     console.log("Values of k printing after 1 second each is :")
// }
// z();
// this program will print 6..here we have closures we have address of k and not value of k. and we are using var due to which each value of k will have same adress and hence they will not wait for setTimeout and increment to 6 and then print.



// to solve this we can use let instead of var .because let has block level scope and it will have new memory location for each k and hence it will print 1,2,3,4,5.

// function z() {
//   for (let k = 1; k <= 5; k++) {
//     setTimeout(function () {
//       console.log(k);
//     }, k * 1000);
//   }
//   console.log('Values of k printing after 1 second each is :');
// }
// z();


// how to solve this problem using var only?
/*
this can be done using let. it was not able to be done using var becuase it was referring to same memory locations.
for that we have to wrap setTimeout function in a new function so that is has to make new copy of i every time
 */


function z() {
    for (let k = 1; k <= 5; k++) {
        function wrap(l) {
           setTimeout(function () {
             console.log(l);
           }, l * 1000);
      }
   wrap(k)
  }
  console.log('Values of l printing after 1 second each is :');
}
z();
// using the wrap function we are creating copies of k and hence we are able to print each value after 1 sec delay