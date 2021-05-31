// function solve(data){
//     data = data.sort((a, b) => a - b);
//     let startIdx = Math.floor(data.length / 2)
//     let endIdx = data.length - 1
//     return (data.slice(startIdx, endIdx+1))
// }

// console.log(solve([4, 7, 2, 5]))
// console.log(solve([3, 19, 14, 7, 2, 19, 6]))

// SOLUTION 2
function solve(data){
    data = data.sort((a, b) => a - b);
    return data.slice((Math.floor(data.length / 2)), data.length);
}
console.log(solve([4, 7, 2, 5]))
console.log(solve([3, 19, 14, 7, 2, 19, 6]))

// //SOLUTION 3
// function solve(arr) {
//     arr = arr.sort((a, b) => a - b);
//     arr.length % 2 === 1 ? arr = arr.slice(-arr.length / 2 - 1):arr = arr.slice(-arr.length / 2)
//     return arr;
// }
// console.log(solve([4, 7, 2, 5]))
// console.log(solve([3, 19, 14, 7, 2, 19, 6]))



