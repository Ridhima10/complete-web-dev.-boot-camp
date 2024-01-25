// There are 4 promise API
/*
1. Promise.all() -It is used to make parallel API calls.
In this API an array is stored in the parameter and lets say we have Promise.all([p1,p2,p3]) and p1,p2,p3 take 3s,1s and 2s to execute then after total 3s this promise will execute and give results as success. But in this scenario if one of the  item fails due to certain reason then it won't wait for other items to execute and it will throw an error. For eg if p1 is executed succefully in 1s but p2 fails then it collectively throws an error inspite of anyone's success. And it will not let p2 execute because it is of no use then.
Note: It take array as a parameter and  also return an ARRAY.
Also known as FAIL FAST


2. Promise.allSettled()- This api is same as Promise.all() api. The only difference between both of them is Promise.allSettled let execute or settle each and every time despite of their success or failure then it returns the arrays with certain messages.
For example we have Promise.allSettled([p1,p2,p3]) and p1,p2,p3 executes in 3s,1s and 2s. and suppose  p2 at 1s fails. Then it will wait for other to settle and then will return object as [val1,err2,val3]



3. Promise.race()-In this promise api, the first item to get execute whether it gets success or failure will be returned as a VALUE. It will not wait for others to settle.
If we take above example, lets say p2 has the least time among all with 1s. Wheter it gets fulfilled or rejected it will return the value (val2) or (ERROR p3)
NOTE: Always use the word SETTLE in interview



4. Promise.any()- This is same as Promise.race() the only difference is Promise.any() waits for first success.
Suppose we take above example then we have three cases:
1. If p2 with 1sec got fulfilled(success) then it will execute. 
2. If p2 fails and next item p3 with 2s got fulfilled then it will ignore p2 and execute p3 only as a VALUE
3. If all of them fails then it will throw an array of AGGREGATE ERROR which will be the collection of all errors in an array
[err1, err2, err3]
*/

// CODE IMPLEMENTATION


const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Success"), 3000);
  setTimeout(() => reject("P1 Fails"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P2 Fails"), 1000);
//   setTimeout(() => resolve("P2 success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P3 Fails"), 2000);
//   setTimeout(() => resolve("P3 Success"), 2000);
});

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });



// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });


// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });


Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });

/*  Lingo

-settled-> got the result(either succes or failure)
-Once a promise get settled it can get into 2 states i.e fulfilled/resolve)/success or rejected / failure

 */