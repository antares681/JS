function solve(mx){
    let cols = Number(mx[0].length)
    let rows = Number(mx.length)
    let counter = 0
    for (i=0; i < rows; i++){
        for (j = 0; j < cols; j++){
            if (i != rows && j != cols){
                if (mx[i][j] === mx[i][j+1]||mx[i][j] === mx[i+1][j]){
                    counter +=1
                } 
            }else if(i == rows && j != cols){
                if (mx[i][j] === mx[i][j+1]){
                    counter +=1
                }               
            }else if(i != rows && j == cols){
                if (mx[i][j] === mx[i+1][j]){
                    counter +=1
                }
            } 
            // console.log(mx[i][j])
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
