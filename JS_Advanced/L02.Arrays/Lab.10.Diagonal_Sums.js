function calcus(mx){
    let prim_diag = 0 
    let secon_diag = 0
    let diags =[]
    for(let i = 0; i < mx.length; i++){
        prim_diag += mx[i][i]
    }
    let k = 0
    for(let j = mx.length-1; j >= 0; j--){
        secon_diag += mx[j][k]
        k+=1
    }
    return [prim_diag, secon_diag].join(' ')

}

console.log(calcus([[20, 40], 
                    [10, 60],]))