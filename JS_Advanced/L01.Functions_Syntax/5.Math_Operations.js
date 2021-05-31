function solve(num1, num2, operator){
    switch(operator){
        case'+': return num1 + num2
        case'-': return num1 - num2
        case'/': return num1 / num2
        case'*': return num1 * num2
        case'%': return num1 % num2
        case'**': return num1 ** num2
        default: return 'error'
    }
}


console.log(solve(5,6,'+'))