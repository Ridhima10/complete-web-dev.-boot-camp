// block ; also known as compound statement
// {
//   var a = 10;
//   console.log(a);
// }


// if (true) console.log("hiii")
// we use compound statement like this.. if statement expects one statement after expression and here we use compund statement as one statement
// if (true) {
//     var b = 10;
//     console.log(b);
// }


// Block-scope
// {
//   var x = 10; //in global scope
//   let y = 100; //in block scope
//   const z = 102; //in block scope
//   console.log(x);
//   console.log(y);
//   console.log(z); // here b and c are stored in different memory locations
// }

// Example of block scope
// {
//   var a1 = 10;
//   let b1 = 20;
//   const c1 = 30;
//   console.log(a1);
//   console.log(b1);
//   console.log(c1);
// }
//  console.log(a1);
//  console.log(b1); //it will throw error
//  console.log(c1); //it will throw error


// Shadowing
// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }


// In case of Var
// var a = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a); //value of a is updated to 10 because both has global scope  and stored on same memory location


// In case of Let
// let b = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(b); //value of b  are stored on different memory location


// In case of const
// const c = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(c); //value of c  are stored on different memory location


// shadowing also works on function.
// const c = 100
// function x() {
//     const c = 10;
//     console.log(c)
// }
// x();
// console.log(c)


// Illegal Shadowing

// possibility in shadowing
// var a = 20;
// {
//     var a = 10;
// }

// let b = 20;
// {
//     let b = 10;
// }

// var c = 20;
// {
//     let c = 10;
// }

// const d = 20;
// {
//   const d = 10;
// }

// not possible
// let e = 20;
// {
//   var e = 10;
// }

// but in case of functions it is possible
// let e = 20;
// function x(){
//   var e = 10;
// }

// Block scope also follows lexicl scope
// nearest a will be printed
// const a = 10;
// {
//     const a = 20;
//     {
//         const a = 30;
//         console.log(a)
//     }
    
// }


// const a = 10;
// {
//   const a = 20;
//   {
//     const a = 30;
// }
// console.log(a);
// }

// const a = 10;
// {
//   const a = 20;
//   {
//     const a = 30;
// }
// }
// console.log(a);

/*
Things learned:
1. Code inside curly bracket is called block.
2. Multiple statements are grouped inside a block so it can be written where JS expects single statements like in if, else, loop, function etc.  If function is defined using the "function" keyword, then "{}" are a part of its syntax. If we miss that we will get error. But in case of arrow functions, it is fine when we have just one statement in it, we can opt out "{}".
3. Block values are stored inside separate memory than global. They are stored in block. (the reason let and const are called block scope)
4. Shadowing of variables using var, let and const.
5. The shadow should not cross the scope of original otherwise it will give error.
6. shadowing let with var is illegal shadowing and gives error.
7. var value is stored in nearest outer function or global scope not directly to global and hence can be accessed outside block as well whereas same is not the case with let and const.  
*/


