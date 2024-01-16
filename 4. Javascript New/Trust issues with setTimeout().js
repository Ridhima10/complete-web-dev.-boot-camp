// console.log("Start")
// setTimeout(function xyz() {
//     console.log("hi console")
// }, 5000);
// console.log("End")


// here we have given timer of 5s but it will not exactly log after 5s becuase if we have millions of lines after this callback function then it will first execute them ,till then the setTimeout func might have expired because it was ready to execute after 5s only .lets say it took 10s to execute. after that the GEC will be poped out of the call stack and only then this setTimeout func will get a chance to execute. so total time taken-10s. This process is also called as concurrency model in javascript


// examples
// let startDate=new Date().getTime();
// let endDate=startDate
// while(endDate<startDate+10000){
//     endDate=new Date().getTime();
// }
// console.log("While expires")

/*
output- 
Start
End
While expires
hi console
*/


// what if we give the value of timer 0?
console.log("Start")
setTimeout(function xyz() {
    console.log("hi console")
}, 0);
console.log("End")
// it will still logged at the last becuase first the call stack will be empty only then it will be pushed into the call stack.
// use case- if any func is least priority then we can use this. or we want to execute it later in the code
