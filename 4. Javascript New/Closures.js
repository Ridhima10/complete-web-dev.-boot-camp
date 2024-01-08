// Closure is a function along with its lexical scope
// function x() {
//     var a = 10;
//     function y() {
//         console.log(a)
//     }
//     y();
// }
// x();


// we can assign a function to a variable
// function x() {
//   var a = 10;
//   var y = function() {
//     console.log(a);
//   };
//   y();
// }
// x();


// we can also return a whole function which is inside another function
function x() {
  var a = 10;
  /*return*/ function y() {
    console.log(a);
    }
    a = 100; //if we assign another value of a then it will print 100 because here a is address.so it will find the nearest and print
    return y; //instead of returning here we can aso write return function y() in line 26
}
var z = x();
console.log(z)

// when we will call function z it will print value of a i.e 100 because inspite of losing the function x() it still remembers its varibles because of closure.
z();



// example
// function c(){
//     var value1 = 90;
//     function d() {
//         var value2 = 80;
//         function e() {
//             console.log(value1, value2);
//         }
//         e();
//     }
//     d();
// }
// c();
// here e() forms a closure with d(){parent} and c(){parent's parent}  because they are with their lexical scope



function c(){
    var value1 = 90;
    function d() {
        var value2 = 80;
        function e() {
            console.log(value1, value2);
        }
        return e;
    }
    return d;
}
var f = c();

console.log(f); // This will log the function definition of d()
var g = f(); // g is now the function e()
g(); // This will log the values of value1 and value2

/*
To print value1 and value2, you need to invoke the function returned by d()
Now, when you run f(), it returns the function e(), and calling g() subsequently logs the values of value1 and value2.
*/


/*
Uses of closure:
- Module Design Pattern
-Currying
-Functions like 'once' (they run only one time)
-memoize
-maintaining state in async world
-setTimeouts
-Iterators
-and many more...




Things Learned:

1.  Function bundled with its lexical environment is known as a closure. 
2.  Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its   not just that function alone it returns but the entire closure and that's where it becomes interesting.

A closure in JavaScript is when a function remembers the variables from its outer scope, even after that outer function has finished executing. It's like the function carries with it a little "snapshot" of the environment in which it was created.


example:
Imagine you have a box with some toys, and you give it a name like "box1." Now, you have a magical ability: you can create a smaller box, put it inside "box1," and give it a name like "box2." This smaller box can see and use the toys in "box1," even if you close "box1."

In JavaScript terms:

The big box is like a function.
The toys inside the big box are like variables defined in that function.
The smaller box is like a function inside the big function (a closure).
The closure can still use the variables from the big function even after the big function has finished running.
*/



















