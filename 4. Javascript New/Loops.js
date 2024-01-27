console.log("Loops practice");

// For loop
let a = 1;
for (let i = 0; i <= 10; i++) {
  console.log(a+i);
}


let obj={
    Name:"Ridhi",
    "Roll no":290920,
    Subject:"Js"
}

// For in
for (const key in obj) {
        console.log(key,obj[key])
}

// For of
for (const c of "Ridhi") {
    console.log(c)
}

// While loop
let j=2
while(j<=5){
    console.log(j)
    j++
}


//While loop in js
let k=0;
while(k<4){
    console.log(`${k} is less than 4`);
    k++;
}

//Do-While loop in js
        //it will print once for sure even if the value is greater than 0.
        let x=0;
        do{
            console.log(`${x} is less than 4`);
            x++;
        }while(x<4);


