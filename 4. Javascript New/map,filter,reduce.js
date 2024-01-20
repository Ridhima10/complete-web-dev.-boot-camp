// map function is used to transform an array
// transform means to transform the value in a certain way eg. double the value,triple or convert it into binary and get a new array out of it

// double-[10,2,6,4,12]
// Triple-[15,3,9,6,18]
// Binary-["101","1","11","10","110"]
const arr = [5, 1, 3, 2, 6];

// Approach 1 -creating a function and calling in map func
function double(x) {
  return x * 2;
}
const output = arr.map(double);
console.log(output);

// Approach 2- creating function inside map function (this concept of creating a func inside another is called higher order func.)
const output1 = arr.map(function triple(x) {
  return x * 3;
});
console.log(output1);

// Approach 3- using arrow function and removing return statement in approach 2
const output2 = arr.map((x) => x.toString(2));
console.log(output2);

// Filter -it is used to filter the elements needed in the output
// Example- filter odd or even elements in the array
function isOdd(x) {
  return x % 2;
}

const output3 = arr.filter(isOdd);
console.log(output3);

const output4 = arr.filter((x) => x % 2 === 0);
console.log(output4);

const output5 = arr.filter((x) => x>5);
console.log(output5);


// reduce- it return a single output obtained from the array
// example-to find the maximum element of the array or to find the sum

function findsum(arr){
    let sum=0
    for(let i=0;i< arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
console.log(findsum(arr))

// using reduce
// here acc refers to sum and curr refers to arr[i]
const output6=arr.reduce(function(acc,curr){
    acc=acc+curr
    return acc
},0)
// 0 refers to initial value of curr
console.log(output6)


// Example 2-find maximum number
const output7=arr.reduce(function(max,curr){
    if(curr>max){
        max=curr
    }
    return max
},0)
console.log(output7)


// More examples
// Example 1
const users=[
    {firstname:"ridhima" , lastname:"jain" ,age:22},
    {firstname:"janvi" , lastname:"jain" ,age:16},
    {firstname:"abhay" , lastname:"nanda" ,age:22},
    {firstname:"akshay" , lastname:"kumar" ,age:50},
];

// find the list of full name of all the users
const fullname=users.map(x=>x.firstname+ " " +x.lastname)
console.log(fullname)

// find the how many users have particular age
// {22:2,16:1,50;1}

// we are using reduce because we want 1 object from this whole list
const ageNumber=users.reduce(function(acc,curr){
   if(acc[curr.age]){
       acc[curr.age]= acc[curr.age]+1     
   }
   else{
    acc[curr.age]=1
   }
   return acc
},{})
console.log(ageNumber)


// find the firstname of people whose age is less than 30
// here we are chaining filter and map. first it is solving flter and then map is working upon the output of filter
const Age30=users.filter(x=> x.age<30).map(x=>x.firstname)
console.log(Age30)

const UsingReduce=users.reduce(function (names,users) {
    if(users.age<30){
       names.push(users.firstname)
    }
    return names
},[])
console.log(UsingReduce)

