let mydate = new Date();
console.log(mydate);
console.log(mydate.getHours());
console.log(mydate.getMonth());
console.log(mydate.getDate());
console.log(mydate.getTime());
console.log(mydate.getMinutes());
console.log(mydate.getDay());
console.log(mydate.getFullYear());
console.log(Date.now())

// let newdate = new Date("2029-06-27");
let newdate = new Date(3020,4,6,9,3,2,34);
console.log(newdate);


newdate.setDate(15);
console.log(newdate);


newdate.setDate(35); //since 35 is not a date..it autocorrects.
console.log(newdate);
