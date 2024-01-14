// Shortest js program- empty file
// a GEC is still created and window is created and js engine still creates the GEC and also set the memory space

// Js engine creates "window" and it has some func and objects which we can access anywhere in the program
// Js engine also creates "this" keyword. At global level, this points to the window object

var a = 10;
function demo() {
    var x = 20;
}
// all three are same..they points to global variable
console.log(window.a)
console.log(a)
console.log(this.a)

// meaning of window and global object is same in case of browsers. also meaning of this and window is same.
console.log(window===this)


// Summary

// 1. Shortest Program in JS: Empty file. Still, browsers make global EC and global space along with Window object.
// 2. Global Space: Anything that is not in a function, is in the global space.
// 3. Variables present in a global space can be accessed by a "window" object. (like window.a)
// 4. In global space, (this === window) object.

