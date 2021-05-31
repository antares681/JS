// SOLUTION 50%
function solve(data){
    let concat_arr = []
    for (let i = 0; i < data.length; i++){
        for (let j = 0; j < data[i].length; j++){
            concat_arr.push(Number(data[i][j]))
        }
    }
    return Math.max(...concat_arr)
}

console.log(solve([[20, 50, 10], 
                   [8, 33, 145]]))




// function solve(data){
//     let concat_arr = []
//     for (let i = 0; i <= data.length; i++){
//         for (let j = 0; j <= data[i].length; j++){
//             concat_arr.push(Number(data[i][j]))
//         }
//     }
//     return Math.max(...concat_arr)
// }

// console.log(solve([[20, 50, 10], 
//                    [8, 33, 145]]
//                    ))