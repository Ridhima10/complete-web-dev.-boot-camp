// Q1 What is async?
// Answer- Async is a keyword used to create async functions

// Note:It always returns a PROMISE. if you return it on your own then its obvious otherwise if you return a value then it will wrap it inside a promise and return a PROMISE

// creating a promise
// const p = new Promise((resolve, reject) => {
//   resolve("Promise resolved");
// });

// async function getData() {
// returning a value (here it is wrapped inside a promise)
//   return "This is a async function";

// returning a promise (here it will not be wrapped inside another promise)
//   return p;
// }

// const dataPromise = getData();
// this will return a promise
// console.log(dataPromise);

// this will log actual data
// dataPromise.then((res) => console.log(res));

// async and await combo is used to handle promises
// How do we used to handle promises before async and await?
// const p = new Promise((resolve, reject) => {
//     resolve("Promise resolved");
//   });

// function getData(){
//     p.then(res=>console.log(res))
// }
// getData()

// But why do we need async await?
// Await is a keyword that can only be used inside a async function
// const p = new Promise((resolve, reject) => {
//     resolve("Promise resolved!!!");
//   });

// async function handlePromise(){
// here val will store value of promise and await is always written before promise name
//     const val=await p
//     console.log(val)
// }
// handlePromise()

// difference between handling promises in traditional way or using async await
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!!!");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!!!");
  }, 20000);
});

//   function getData(){
//     p.then((res)=>console.log(res))
//     console.log("Hey there")
//   }
// getData()
// in this traditional method function getData() will print first and then wait for 5s to resolve the promise

// In this it prints line by line whether it has to wait or not
// firstly it will wait for 5s then "async func" will print and then "promise resolved"
async function handlePromise() {
  // if we have a console log at top then it will print it immediately and then wait for promise and then goes to async func
  console.log("hey there");
  const val = await p;
  console.log("Async func");
  console.log(val);

  //   if we call promise 2 times then it will wait for total 5s and call it only once
  // firstly it will print "hey there" then wait for 5s and then print everything
  const val2 = await p2;
  console.log("Async func 2");
  console.log(val2);
}
handlePromise();

// what if we have 2 promises now and first has more time than second? will it print the second one with less time? or wait for 10s to get over and print everything?
// answer- since it prints according line by line so it will firs print "hey there" then it will wait for 10s . till then second promise time also got over so it will print everything after 10s

// Now what if first promises time is 5s and secons promise timing is 10sec?
// In this case firslty "hey there " will be printed then p1 will print after 5s then after some time p2 will print.

// Real world example of async await using fetch()
// fetch returns a response

// let us fetch the content of an api

// "user_url": "https://api.github.com/users/{user}",
const API_url = "https://api.github.com/users/Ridhima10";
async function handlePromise2() {
  // try {
    const data = await fetch(API_url);
    const jsonValue = await data.json();
     console.log(jsonValue)
     //  or
     //  fetch().then(res=>res.json()).then(res=>console.log(jsonValue))
  // } catch (err) {
// if the api is invalid then this will execute
    // console.log(err);
  // }
}
handlePromise2().catch(err=>console.log(err));

// Error handling-whenever you have async, await in your code wrap it inside try catch block

//we can also use the old method that is .catch


// Interview questions

//what is Async await?
// Async is a keyword that is used ny functions and async function are different thing.
//  await can only be used inside async function to handle promises and these promises are async


// 'async await' and 'then' both are same its just the way of writting is different