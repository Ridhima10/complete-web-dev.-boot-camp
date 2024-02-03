// Arrays in js can store data of different datatypes
let arr=[1,2,3,4,5]
console.log(arr)
console.log(arr.length)
console.log(typeof arr) //object

// arrays are mutable which means after performing operations the value of privious array will be updated . Unlinks strings(immutable) because they will remain same inspite of performing new operations on them.

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5]) //it will print undefined and will not throw error

arr[0]=55
console.log(arr) //new array has been updated

str="hello"
console.log(str[0])
str[0]="s"
console.log(str) //we cannot update strings


// To convert array into string
console.log(arr.toString())

//Join- It will join the values of array with the given parameter
console.log(arr.join(" and "))


// pop- deletes the last element of array
console.log(arr.pop())

// push- insert the element as last
console.log(arr.push(20)) //it returns the length
console.log(arr)
console.log(arr.push("Ridhii"))
console.log(arr)


// shift - removes the first element and returns it.
// Shift and pop both removes the element the only diff is pop removes from last and shift removes from start
console.log(arr.shift())
console.log(arr)

// unshift- add in the start
// Unshift and push both inserts the element the only diff is push inserts from last and unshift inserts from start
console.log(arr.unshift("Hello"))
console.log(arr)

// del- it deletes the element
console.log(delete arr[3])
console.log(arr) //it will show empty on that index
console.log(arr.length)//length will still be the same
console.log(arr[3]) //undefined (memory has been allocated but we dont have any value in it)


// concat()- used to join arrays to the given array
let a1=[1,2,3]
let a2=[4,5,6]
let a3=[9,8,7]

b=a1.concat(a2,a3)
console.log(b) 
console.log(a1) //it does not change the existing array



// Sort()-sorts the array alphabetically
let a=[4,2,20] // 2 20 4
let c=[4,2,10] //10 2 4
console.log(a.sort(),c.sort())


// splice() - it deletes the number in the given range and also add the numbers
let numbers=[1,2,3,4,5]
console.log(numbers.splice(1,2)) //returns splice numbers
console.log(numbers) //returns the updated array



console.log(numbers.splice(1,2,33,44))
// 1 - position to add ; 2- no. ofelements to remove ; rest- no to add
console.log(numbers)


// slice()- slices out a piece from an array . it creates a new array

const num=[20,30,40,50]
console.log(num.slice(2))// it will start from 2 index and slice till end

console.log(num.slice(1,3)) // include 1 but not 3

console.log(num.reverse()) //reverses the source array


// array using loops
let arr1=[1,56,3,67,3]
for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    console.log(element)
}


arr1.forEach((value,i,arr1)=>{
    console.log(value,i,arr1)
})
// it will print each value, index and array


let obj={
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }
}

// directly for array
for (const iterator of arr1) {
    console.log(iterator)
}


// Map, filter and reduce

// 1. MAP
let arr2=[22,3,5,7,11]
// element,index,array
let newArr=arr2.map(element=>{
    return element**2
})
console.log(newArr)


// 2. FILTER
// eg. we only want elements greater than 7

const greaterThanSeven=(element)=>{
    if (element>7){
        return true
    }
    return false
}
console.log(arr2.filter(greaterThanSeven))


// REDUCE- returns final value
let arr4=[1,2,3,4,5,6]
const mult=(a,b)=>{
    return a*b
}
console.log(arr4.reduce(mult))


// Array.from- used to create an array from any other object or string

console.log(Array.from("Ridhi"))








