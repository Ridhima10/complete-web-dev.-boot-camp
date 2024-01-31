"use strict";
// We write "use strict" to enter strict mode

// this in global space
console.log(this)
// this keyword in global space points to global object
// it will log the window object
// js can run on various platforms and everywhere its runtime environment is different so in case of browsers it points to window

// NOTE: this keyword works differently in strict and non strict mode


// this inside a function
function x() {
    console.log(this)
    // this inside function is different from global because
    // in non strict mode- window
    // in strict mode- undefined
}
x();//in strict mode it will return undefined
// if the function is called directly without any reference of an object then it gives undefined


// this value depends on HOW THE FUNCTION IS CALLED
window.x() //in strict mode it will return window


// this in non-strict mode -(this substitution) 


// what is value of "this"
// value of this keyword is undefined but because js has this substitution so value becomes equal to global object if not use strict mode


// this inside a obj's method
// method- function inside an object
const obj={
    a:10,
    x:function(){
        console.log(this) //log the obj
        console.log(this.a) //log value of a
    },
}
obj.x()
// x()


// this inside arrow function
// arrow func dont have this binding associate with it. 
// It retains the this value of the enclosing lexical context

const obj1={
    a:10,
    x:()=>{
        console.log(this);
    },
}
obj1.x()
// the lexical env is global obj so the value of window obj will be printed


const obj2={
    a:10,
    x:function(){
        const y=()=>{
            console.log(this);
        };
        y()
    },
}
obj2.x()
// here this will be lexically enclosed within obj2


// this inside DOM elements- reference to its HTML element
