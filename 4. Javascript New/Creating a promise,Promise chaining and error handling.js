const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart); //this api returns orderId in a promise pr
// console.log(promise);
// pending state intially but as soon as it gets the value it changes to fulfilled state

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  // to handle errors
  //it is put on top because if some steps failed on top then it will handle them. if we put it on bottom then we will not be able to resolve other functions because of that error
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedTopayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  });
// this is known as chaining of promises

// we will create our own createOrder func
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // logic to createOrder
    // validateCart
    //orderId

    // promise either return completion or failure. resolving means returning an orderId and rejection means throwing an error.

    // dummy code to reject a promise
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    //Dummy logic for createOrder i.e resolving
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
      // after 5sec it will resolve
    }
  });
  return pr;
}

function proceedTopayment(orderId) {
  //   logic
  return new Promise(function (resolve, reject) {
    resolve("Payment successful");
  });
  // way to return a promise
}
// dummy code
function validateCart(cart) {
  return true;
  // to reject a promise
  //   return false;
}



/*Things learned


1. Promise can be created using a new Promise() constructor function.
2. This constructor function takes a callback function as argument. 
3. The callback function has 2 arguments named 'resolve' and 'reject'. Resolve and reject are the keywords provided by JS.
4. We can only resolve or reject a promise. Nothing else can be done.
5. An error can also be created using new Error('error message').
6. There is also .catch() which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.
7. .catch only handles error of .then() that are present above it. If there is any .then() below it, catch will not handle any error for that, also that ,then will get executed no matter what.
8. It can be useful in a way if we want to catch error for a particular portion of a chain.
9. We can have multiple catch based on requirement and then a general catch at the end.
10. Always remember to return a value in the promise chain for the next .then to use .
11. If it returns a value => It will be  used as an argument in next function. If it is a promise then the next .then in the promise chain is attached to the promise returned by the current callback function.
*/


// Homework (P.S This is incompete for now since i dont know how to do it properly but after sometime when i will gain confidence in js i will surely come back and update this)

// createOrder
// proceedTopayment
// showOrderSummary
// updateWallet


const Cart1=["Gowns","Salwar suit","Jewellery"];

createOrder1(Cart1).then(function(createOrder1){
    console.log(orderId1)
    return orderId1
})
.cath(function (err1) {
    console.log(err.message)
})
.then(function(orderId1){
    return proceedTopayment1(orderId1)
})
.then(function(showOrderSummary){
    return showOrderSummary(orderId1)
})

 