let random=Math.random()
let a=prompt("Enter 1st number")
let c=prompt("Enter operation")
let b=prompt("Enter 2nd number")

const obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
console.log(random)
if (random>0.1){
    console.log(`The value is ${eval(`${a} ${c} ${b}`)}`) //eval act as a calculator
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
    alert(`The value is ${eval(`${a} ${c} ${b}`)}`)
}

