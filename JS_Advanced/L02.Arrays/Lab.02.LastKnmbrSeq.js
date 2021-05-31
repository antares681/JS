function solve(n, k){
    let result = [1];
    for(let i = 1; i < n; i++) {
         let startIdx = Math.max(0, i-k);
         let currentElement = result.slice(startIdx, startIdx + k).reduce((acc, el) => acc + el, 0);
         result.push(currentElement);
    }
    // return result.join(" ")
    return result
}

console.log(solve(6, 3))
console.log(solve(8, 2))

// function solve(n, k) {
//     let arr = [1];
//     for (let i = 1; i < n; i++) {
//         let start = Math.max(i-k, 0);
//         let sum = arr.slice(start, i).reduce((a,b)=>a+b);
//         arr.push(sum);
//     }
//     return arr;
// }

// console.log(solve(6, 3))
// console.log(solve(8, 2))