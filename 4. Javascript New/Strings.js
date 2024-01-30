let a="Ridhi"
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[3])
console.log(a[5]) //non existing index will log undefined
console.log(a[-1])
console.log(a.length)

name1="Ridhima"
name2="Nidhi"
// 2 ways to concatenate the strings
console.log(name1+" " +"and"+ " " +name2+" " +"are friends")
console.log(`${name1} and ${name2} are friends`)

let b="ShivamSh"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,5))
console.log(b.slice(1))
// console.log(b.repeat("sh",7))if the string has 2 or more occurances then only first occurance will be replaced

console.log(b.concat(a))
console.log(b.concat(a,"Janvi"))
console.log(b) //strings are immutable means although we have performed various operations but the original string has not changed








