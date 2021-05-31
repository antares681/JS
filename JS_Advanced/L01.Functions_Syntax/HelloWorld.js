// let stringVar = 'some text';
// let numberVar = 10;
// let numberBigInt;
// let booleanVar = true;
// let someVar;
// let someVar2 = null;

// console.log(numberVar);

// console.log(Number('4'))

let i = 10;

if (i < 5) {
    console.log("Yes");
} else {
    console.log("No!");
}

// FUNCTIONS

//SIMILAR TO LAMBDA FUNCTIONS

let multiply = function(a, b) {
    return a * b;
};
console.log(multiply(5, 5));

//NEW SYNTAX ARROW FUNCTIONS

let multiplyX = (a, b) => {
    return a * b;
}
console.log(multiplyX(3, 2))

let multiplyY = (a, b) => a * b;
console.log(multiplyY(5, 2))

let multiplyZ = a => a * 2;
console.log(multiplyZ(7))

function findMaxNmbr(nm1, nm2, nm3){
    let maxNmbr = Math.max(nm1, nm2, nm3)
    return maxNmbr
}

console.log(findMaxNmbr(12,2,5,))