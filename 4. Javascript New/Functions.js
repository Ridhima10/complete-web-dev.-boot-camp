function sum(a, b) {
    var sum = a + b;
    return sum;
    //this line will never execute because return stops the program.
    //console.log("ok bye"); (unreachable code)
}
var returnVal = sum(2, 3);
// document.write(returnVal);
console.log(returnVal)


//Quiz
function numbers(num1, num2) {
    if (num1 > num2) {
        console.log("Num1 is greater than num2");
    }
    else if (num1 == num2) {
        console.log("Both are equal");
    }
    else {
        console.log("num2 is greater than num1");
    }
}
let num1 = 20, num2 = 20;
numbers(num1, num2);

function sum(a,b,c=10){
    // document.write(a+b+c) 
    console.log(a+b+c)
}
sum(10,2)
sum(10,2,3)
sum(10,2,1)