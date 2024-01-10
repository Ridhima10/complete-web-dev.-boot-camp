// What is a closure
/*
a function along with a reference to its outer environment together forms a closure.
In other words you can say closure is a combination of a function  and its lexical scope bundled together.
its like each function in javascript has access to its outer lexical environment means access to its parents variable and functions
so even when this function is executed in some other scope not in its original scope, it still remembers its outer lexical environment where it was originally present in the code
*/

function outer(){
    var a=10;
    function inner(){ //inner has access to a var
        console.log(a)
    }
    inner();
}
outer();

// two other ways to invoke a function with closure

function outer(){
    var a=10;
    function inner(){ //inner has access to a var
        console.log(a)
    }
    return inner;
}
result=outer();
result();

function outer(){
    var a=10;
    function inner(){ //inner has access to a var
        console.log(a)
    }
    return inner;
}
outer()();

//what is ()() prenthesis
// ()() means "call the function immediately after getting its result."

// In the provided code outer()();:

// outer() returns a function.
// () immediately calls the returned function.
// So, outer()(); is a way to quickly call the inner function that was returned by the outer function.

// will this still be a closure?
function outer(){
    function inner(){ //inner has access to a var
        console.log(a)
    }
    var a=10;
    return inner;
}
result=outer();
result();
//  answer: yes it will be still a closure becuase closure can access var and function of its outer function anywhere , inspite of there position or sequence inside their parent

// what if we change var to let in this program?
function outer() {
  function inner() {
// inner has access to a var
    console.log(a);
  }
  let a = 10;
  return inner;
}
result = outer();
result();
// it will still print 10 because it still will be available to inner function

// what if we have extra parameter 'b' in outer
function outer(b) {
  function inner() {
    //inner has access to a var
    console.log(a, b);
  }
  let a = 10;
  return inner;
}
result = outer("hello world");
result();

// this will still behave the same way and print values of a and b. because inner function forms  a closure with outer environment and b is also part of outer enviroment .it will work the same way as above

// what if outer function is nested inside another function . will inner have access to that function also?
function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      //inner has access to a var
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
result = outest()("hello world");
result();

// yes it will still behave the same way

// why it is printing 10 hello world 20? what is the line 103 doing?
// when outest() is called it wll return outer function i.e 10 so it will be like outer(helloworld) then it will call outer and print hello worlf first and then 20 which is carried by inner function

// what if we have global variable with a conflicting name?
function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      //inner has access to a var
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
var a = 100;
result = outest()("hello world");
result();
// it will still print a =10 becuase it will first try to access local variable. if we dont have var a=10 then it will print global variable i.e 100 and if we dont even have global var a=100 then it will give reference error: a is not defined.

// Advantages of closures:
/*
most beautiful part of js
module pattern
function currying
in some higher order func: memoize, once
helps in data hiding and encapsulation*/

// what is data hiding and encapsulation?
// data hiding is like suppose we have a var and want to have data privacy over it then other func and pieces of code cannot access it.that is called data hiding or we can say we have encapsulated it so that other piece of data cannot have access to it

// simple defination and example:
/*Data hiding in JavaScript means keeping certain information or variables private inside an object or function, so they cannot be directly accessed from outside.

Encapsulation is like wrapping up related data and functions together, and only exposing what's necessary. It's like putting things in a box and allowing controlled access.

Imagine a TV remote control:

Data hiding: The internal circuits and buttons are hidden inside the remote. You can press buttons to change channels, but you don't need to know the internal workings.

Encapsulation: All the channel-changing functionality is encapsulated in the remote. You don't need to understand how the buttons work internally; you just use the remote to interact with the TV.

In JavaScript, objects and functions can be designed similarly, with some details hidden and functionalities encapsulated. This helps in organizing and managing code more effectively. */

// example of data hidign with closure:
var counter=0
function incrementCounter(){
    counter++;
}
// problem in this prog is anyone can access counter since it outer the function. to correct this we can wrap it inside a closure
function counter() {
  var count = 0;
  function incrementCounter() {
    count++;
  }
}
console.log(count);
// now we cannot simply access count we have to return this func so that it forms a closure and return

function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}
var counter1 = counter();
counter1();
counter1();

// what will happen if we again call counter?

function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}
var counter1 = counter();
counter1();
counter1();

var counter2 = counter();
counter1();
counter1();
counter1(); 

// it will print from 1 all over again and is a fresh counter. it will not interefere in previous counter.

// is this a good way to make a counter? is this code scalable?what should we do if we have to make a decrement function too?


//Answer: this is not a good way to make this scalable we can use constructor function and we can have 2 different functions for increment and decrement.
function Counter() {//in constructors it is  good practice of start with captial letter
    var count = 0; 
    this.incrementCounter=function() {
      count++;
      console.log(count);
    };
    this.decrementCounter=function() {
      count--;
      console.log(count);
    };
  }
  var Counter1=new Counter() //while creating constructors we need to use new keyword
  Counter1.incrementCounter();
  Counter1.incrementCounter();
  Counter1.decrementCounter();
  Counter1.decrementCounter();
  

//Disadvantages of closures:
// over consumption of memory
// closed over var are not garbage collected and accumulate lot of memory if we create lot of closures because they are not garbage collected till the prog expires and if not handled properly they can create memory leaks


// What is a garbage collector and what does it do?
// it is lik a prog in the browser or in the javascript engine which freeze the unutilize memory.
// js is a high level programming lang. 
// in other high level lang like c ,c++ generally it is upto developer how we allocate and deallocate memory but in js this work it done by js engine. js has its own garbage collector. whenever there is some unused variables , it takes it out of memory

// how cosures and garbage collector are related to each other?
function all(){
    var x=200
    return function b(){
        console.log(x)
    }
}
var z=all();
z();
// some of the modern browsers have smart garbage collector mechanism which collects the unused variables itself

function all(){
    var x=200,y=2000;
    return function b(){
        console.log(x)
    }
}
var z=all();
z();
// when  the function b is return it forms closure with x only because here z is not being used so its memory has been collected by the garbage collector 
// if we log y in console it will give error


/*
Things learned:
1. An inner function can be directly called using two parenthesis ()().
2. Even parameters can be passed this way (Remember that the function needs to be returned to do this)
3. Closures can also be used for data hiding and encapsulation. So other code cannot access this value.
4. Unused variables are automatically deleted in High Level Programming language by garbage collector. Closures allocate a lot of memory which cannot be deleted so this acts as a disadvantage.
5. Some browsers now have smart garbage collectors that automatically deletes variables that are not used outside closures.
*/