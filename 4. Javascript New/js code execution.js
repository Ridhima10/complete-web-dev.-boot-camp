var n = 2
function square(num) {
    ans = num * num
    return ans
}
var square2=square(n)
var square3=square(4)

/*
Summary of this video - As we have already discussed in the last video that everything happens in javascript in the execution environment. So the entire execution happens in two phases as follows
1. Memory allocation phase- all the variables  and functions get their memory allocated in the memory with undefined and the entire code  respectively. 
2. Code execution phase - in this phase  thread execution happens and all the variables get their actual values which were assigned to them and as function is invoked, a new execution environment gets created in the code part, and again there are two phases, memory allocation phase and code execution phase. And the cycle repeats.
*/