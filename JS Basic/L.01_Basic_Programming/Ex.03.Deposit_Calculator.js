function solve([arg1, arg2, arg3]){
    let deposit_amount = Number(arg1)
    let deposit_time = Number(arg2)
    let interest = Number(arg3)
    let result = deposit_amount + deposit_time * ((deposit_amount * interest/100)/12)
    console.log(result.toFixed(2))
}
solve(["200", "3", "5.7"])