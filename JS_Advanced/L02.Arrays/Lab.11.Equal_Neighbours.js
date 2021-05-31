function solve(mx){
    const cols = Number(mx[0].length)
    const rows = Number(mx.length)
    let counter = 0
    for (let i=0; i < rows; i++){
        for (let j=0; j < cols; j++){
            if (i < rows-1 && j < cols){
                if (mx[i][j] === mx[i][j+1]||mx[i][j] === mx[i+1][j]){
                    counter ++
                } 
            }else if(i == rows && j < cols){
                if (mx[i][j] === mx[i][j+1]){
                    counter ++
                }               
            }else if(i < rows && j == cols){
                if (mx[i][j] === mx[i+1][j]){
                    counter ++
                }
            } 
        }     
    }
    console.log(counter)
}


solve([[2, 2, 5, 7, 4],
       [4, 0, 5, 3, 4],
       [2, 5, 5, 4, 2],])


// solve([['2', '3', '4', '7', '0'],
//        ['4', '0', '5', '3', '4'],
//        ['2', '3', '5', '4', '2'],
//        ['9', '8', '7', '5', '4'],])
