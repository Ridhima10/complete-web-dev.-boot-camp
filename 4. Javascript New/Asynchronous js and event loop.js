// Web API's
/*
A web API is like a waiter in a restaurant. You (the client) are at the table (your application), and you want food (data or services) from the kitchen (the server). Instead of going to the kitchen yourself, you ask the waiter (API) to bring you the dish (data) you need.

In this analogy:

You (Client): Your application or program.
Waiter (API): The Web API that takes your requests and brings back the data.
Kitchen (Server): The system or database that has the information you want.
Dish (Data): The specific information or service you're requesting.
So, a web API is like a helpful intermediary that allows different applications to communicate and share data, just like a waiter facilitates your interaction with the kitchen in a restaurant.


These are not a part of js. these are like superpowers which  are provided by browsers.browsers give access to js engine to use these super powers 
1. setTimeout() 
2. DOM API
3. fetch()- it give access to make connections with other servers (external servers) . we get it inside call stack because of the global object
4. Local storage
5. console
6.Location


What is global object?
Answer- window
if we want to access these superpowers then we have to use window along with it. 
example- window.setTimeout


but when we access these superpowers  we use it without window because both window and these superpowers are present inside the global scope or global object
Browser wraps these web API's inside the global object and give access to js engine
*/

// console.log("Hello") //it uses console api
// setTimeout(function cb(){ //setTimeout api
//     console.log("Callback")
// }, 5000);
// console.log("Bye")

// What is Callback Queue?
//Answer- when the timer expires the function cb() goes into the call stack, but it does not goes directly into the call stack.it goes to the callback through the callback queue. It is also known as Task queue

// What is event loop?
// the job of event loop is to check the callback queue and put the function into the call stack. it acts like a gate keeper and check if the callstack is empty or not. and if it has something then it puts it into the call stack

// Examples
// console.log("Start")
// //document. = DOM API
// document.getElementById("btn").addEventListener  ("click",function cb() {
//     console.log("Callback")
// });
// console.log("End");

// when the user clicks on the button then the callback function cb moves to the callback queue and then withthe help of event loop it goes into the callstack and then executes

// Why do we need a callback queue?
// suppose a user clicks a button 4-5 times. then the callback fuction cb() goes into the callback queue 4-5 times. then one by one cb() goes into the call stack and executes. also when the callstack executes then cb() also pops out from the callback queue one by one
// in short- due to this every func gets the chance to executes one by one

// example-
console.log("Start");
setTimeout(function cbT() {
  console.log("CB Timeout");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
});
console.log("End");
/*
output-
Start
End
CB Netflix
CB Timeout
*/
// Microtask queue- it is same as callback queue but it has higher priority.
// cbF will go into microtask queue and cbT will go into callback queue

// what can come inside microtask queue?
// All the callback func that comes through promises  and there is something called as mutation observer. mutation observer keeps on checking whether there is something mutation in the DOM tree or not. If yes then it can executes some callback func.
// but all callback func comes from DOM, setTimeout goes into callback queue

// first all the func from microtask queue executes(means it should be empty first) then only callback queue gets the chance to execute
// the situation is called as Starvation of the callback queue when it never gets the cahnce to execute 
