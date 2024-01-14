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



//More questions
/*
1. When does the event loop actually start? - Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. It's always running and doing its job. ❤️
2.  Are only asynchronous web API callbacks are registered in the web API environment? - YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered in the Web API environment. It's just those async callback functions that go through all this.
3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue? - Yes, the callback functions are stored, and a reference is scheduled in the queues. Moreover, in the case of event listeners(for example click handlers), the original callbacks stay in the web API environment forever, that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.
4. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait? 
No, there are trust issues with setTimeout() . The callback function needs to wait until the Call Stack is empty. So the 0 ms callback might have to wait for 100ms also if the stack is busy.


*/

/*
Things learned:
1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, fetch, local storage.
2. Async Callback functions and event handlers are first stored in Web API environment and then transferred to callback queue.
3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
4. Event loop continuously observes call stack and when it is empty it transfers task to call stack.
5. Micro task is given priority over callback tasks.
6. Too many micro tasks generated can cause Starvation (not giving time to callback tasks to execute).
*/
