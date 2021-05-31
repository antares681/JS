function isBigger([arg1, arg2]){
    let num1 = Number(arg1)
    let num2 = Number(arg2)
    if(num1 < num2){
        console.log(num2)
    }
    else{
        console.log(num1)
    }
}
isBigger(["5","3"])