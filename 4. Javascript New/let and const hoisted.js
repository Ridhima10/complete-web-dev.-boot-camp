// let- updation , no-redeclaration and local scope

// let x=10;
// x=20
// console.log(x)
// function func(){
//     let p=40
//     console.log(p)
// }
// console.log(p)
// func()


// var - updation, re-declaration amd global scope and functional scope
// var p=20;
// p=4
// console.log(p)

// var p=40
// function fun(){
//     var p=409
//     console.log(p)
// }
// console.log(p)
// fun()



// const is the strictest among all.let is less then const and least is the var
// const- cant be changed, no updation, no re-declaration, functional and global scope

// const a=34
// console.log(a)
// const a=40
// function fun(){
//   const b=45
//   console.log(b)
//   console.log(a)
// }
// fun()


// var is hoisted
// console.log(a)
// var a = 10;

// but in case of let and const it throws an error, it means they are in temporal dead zone
// temporal dead zone refers to the time since the variable was hoisted till the time it has initialized some value

// console.log(a)
// let a = 100; //throws reference error


// correct way to log let variable
// let a = 10;
// console.log(a)


// we can access var using this and window but in case of let and const it gives undefined because var has global scope
// window.a and this.a


// we cant redeclare let , not even with var
// let a = 10;
// let a = 1000;
// var a = 20;  throws syntax error



// in case of const , we have to initialize while declaring but in let we can first declare and then initialize later.
// let a;
// const b = 100;
// a = 1000;
// console.log(a)
// console.log(b)

// const a;
// a = 1000;
// console.log(a) throws syntax error

// also cannot redeclare in const
// const a = 10;
// a = 30;
// console.log(a) //throws type error



/*
Things learned:
1. let and const are hoisted but its memory is allocated at other place than window which cannot be accessed before initialisation.
2. Temporal Dead Zone exists until variable is declared and assigned a value.
3. window.variable OR this.variable will not give value of variable defined using let or const.
4. We cannot redeclare the same variable with let/const(even with using var the second time).
5. const variable declaration and initialisation must be done on the same line.
6. There are three types of error: [1] referenceError {given where variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.
*/




