// when an api depends upon other we wrap it inside a function using callback function.
// const cart=["shoes","pants","kurta"]
// createOrder(cart,function(orderId){
//     proceedToPayment(orderId);
// })
// firstly CreateOrder will create an order and then call proceedToPayment which wil generate an unique id for every order.
// but this has an issue of inversion of control

// it will not take a callback function, only cart details and it will return a promise in the variable "promise"
// const promise=createOrder(cart);

// promise is referred as an empty object with some data in it.
// {data : object}
// here createOrder api performs async operation.we dont know how much time it will take
// {data:undefined} it will return this first and after some time it will fill this with some values

// To fetch id from proceedTo Payment api it will use a "then" keyword which is available with promise and then attach a callback func with it

// const promise=createOrder(cart);

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// })

// another way
// const promise=createOrder(cart).then(function(orderId){
//     proceedToPayment(orderId);
// })

// when this will be called it will automatically return and fill the data object with actual values in it

// promises are much better than previous approach because in that approach we were passing a function to another func and we were trusting it blindly and there is no gurantee but here in promises we are attaching the callback func to a promise object and when it does its job then we have the control.so this is more secure because it only calls once.

// fetch()-  it is used to make external calls

const GITHUB_API = "https://api.github.com/users/Ridhima10";
const user = fetch(GITHUB_API);
// we are passing the user details to a promise "user"
// at first the user will be undefined but when it will be executed then it will be filed with some values. Initially it will be in a "pending state" and once we got the data it changes to "fulfilled state"
// State of a promise- there are 3 types of state i.e pending state, fulfilled state and rejected
// result -whatever fetch will return  it will store the data
console.log(user);
// when it is executed firstly it is in pending state because promise is an async operation and js wait for none it just moves on to next statement. after some time data is pushed into the promise and then it goes to fulfilled state
// and result has all the data

user,
  then(function (data) {
    console.log(data);
  });
// this is how we attach a callback func to a promise and it logs the data

// What is a promise?
// for understanding (it is like a placeholder which is filled after sometime with data values)
// In mdn docs- A promise is an object representing the eventual completion or failure of an async operation.

// promise objects are immutable (it means that once a promise object is created, you cannot change its value or content. It stays the same throughout its lifetime. It's like saying a promise, once made, cannot be altered or broken.)

// we also had an issue of callback hell which is handled by promise chaining
// const promise = createOrder(cart)
//   .then(function (orderId) {
//    return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     return OrderSummary(paymentInfo);
//   })
//   .then(function (paymentInfp) {
//     return WalletBalance(paymentInfp);
//   });
// we can chain callback func in this way
// it does not flow horizontally, it follows a vertical flow

// In terms of arrow func
createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => OrderSummary(paymentInfo))
  .then((paymentInfo) => WalletBalance(paymentInfo));



/*
Thing learned:
1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
2. Inversion of control is overcome by using promise.
  2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
  2.2) A promise has 3 states: pending | fulfilled | rejected.
  2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
  2.4) A promise resolves only once and it is immutable. 
  2.5) Using .then() we can control when we call the cb(callback) function.

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()


*/
