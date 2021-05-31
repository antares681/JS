function solve([yard_size]){
    let sqrm_price = 7.61
    let area = Number(yard_size)
    let discount = sqrm_price * area * 0.18 
    let price = sqrm_price * area * 0.82
    console.log(`The final price is: ${price} lv.`)
    console.log(`The disount is: ${discount} lv.`)
}
solve(["550"])