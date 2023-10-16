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