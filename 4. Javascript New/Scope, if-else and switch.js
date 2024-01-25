// var has global Scope and can be re-declared
var str= 'this is a string';
console.log(str);
var str= 'this is not a string';
console.log(str);


// let has local Scope
let a='heloooo'; 
console.log(a);
//This will show an error because let has local scope
// let a=' heloooo';
// console.log(a);
{
//   but if we write here..it will not show an error because here it is treated as a new variable
let a='heloo'; 
console.log(a);
}

//const refers to constant value. it cannot be changed
const b='hi there';
// b='hi';  //if we remove this statement, then it will print the first one. otherwise it will throw an error. 
console.log(b);


// if-else statement 
let age=12;        
    if (age==18) {
        console.log("Age is equal to 18");
    }       
    else if(age==50) {
        console.log("Age is equal to 18 50");       
    }
    else if (age==1) {
        console.log("Age is equal to 1");           
    }
    else{
        console.log("Get lost");
    }       


//switch case
const week=10;
//week=6; //Const stores a fixed value so it cannot be changed. Thus, throws an error.
switch (week) {
    case 1:
        console.log("\n Monday :)");
        break; //breaks helps to stops the specific statement after printing. Otherwise all the cases will be printed.
    case 2:
        console.log("\n Tuesday :)");
        break;
    case 3:
        console.log("\n Wednesday :)");
        break;
    case 4:
        console.log("\n Thursday :)");
        break;
    case 5:
        console.log("\n Friday :)");
        break;
    case 6:
        console.log("\n Saturday :)");
        break;
    case 7:
        console.log("\n Sunday :)");
        break;

    default:
        console.log("Invalid case");
        break;
}
// == and === operator
// console.log(3);
// console.log(3===3);
// console.log(3="3")
// console.log(3==3)



// Ternary operator
let x=10
let y=40
x>y? x-y:y-x
