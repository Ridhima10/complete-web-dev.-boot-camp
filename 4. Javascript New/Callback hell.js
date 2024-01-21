/*The two Problems with callbacks
1) Callback Hell: Callbacks are useful when we want to perfrom some extra functionality with our already existing function for example passing an error handling callback to our already created function, BUT when callbacks within themselves start taking in other functions as callbacks then that mess that you are left with is known as the Callback Hell leading to unreadable code, hence unmaintanable code. In simple words, When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 


2) Inversion Of Control: when we pass a function to other function as a callback we are giving the called function the control of whether to even call it or not or maybe call it in a wrong context. For example a success callback is called when an error occours inside a called function (maybe due to human error while writing the code  for called function), this type of giving up of control over our functions is known as inversion of control. In simple words, invertion of control is  we giving the control to the another nested call back funtion and it increases the dependencies of code to other
*/


// we know js is a single threaded synchronous language that means it executes line by line but to make it asynchonous we use callback function

console.log("hii")
setTimeout(function(){
    console.log("javascript")
}, 5000);


// real world example
const cart=["shoes", "kurta","pants"]

// if we have access to two backend API
// first we will create order and then pay for it. so payment is dependent upon create API. so we will make it callback func of Create Api

// api.CreateOrder(cart,function(){
//     api.ProceedToPayment()
// })
// now it is responsibilty of create order api to create and order and then call back proceed to payment api.

// suppose we have more such api
// api.ShowOrderSummary - it will execute after the payment so lets make it callback func
// api.UpdateWallet-it will execute after the ShowOrderSummary so lets make it callback func


api.CreateOrder(cart,function(){
        api.ProceedToPayment(function () {
            api.ShowOrderSummary(function (){
                api.UpdateWallet()
            })
        })
    })


// this structure is known as Pyramid of Doom. this is also called as callback hell because it is too tough to manage
// all the api are dependent on another api and mainly on the CreateOrder but we dont know if CreateOrder has any bugs or not. what if it calls payment 2 times instead of one. so losing control over api's can cause several issues .This is called as Inversion of control
