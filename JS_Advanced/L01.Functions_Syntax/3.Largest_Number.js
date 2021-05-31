//SOLUTION 1
function solve(arg1, arg2, arg3) {
    max = Math.max(arg1, arg2, arg3);
    console.log(`The largest number is ${max}.`);
}


//SOLUTION 2
function solve(arg1, arg2, arg3) {
    max = Math.max(arg1, arg2, arg3);
    return `The largest number is ${max}.`
}

console.log()

solve(1, 2, 3)
console.log(solve(1, 2, 3))