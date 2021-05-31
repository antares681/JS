// FALSE AND TRUE

if (true) {
    console.log(`it's true`)
}   else if (false) {
    console.log(`it's false`)
}   else {
        console.log(`it's false`)
}

//FALSY TRUTHY
//TRUTHY A VALUE THAT COERS TO TRUE WHEN EVALUATED IN A BOOLEAN CONTEXT
console.log(parseFloat('4.4afdgfsfds'))
console.log(parseInt('4.4afdgfsfds'))

//FALSY ARE: false, null, undefined, NaN,0, 0n,""




// LOGICAL OPERATORS
/** logical AND returns the leftmost 'falsy' value or the last truthy value if all TRUE */
const val = 'yes' && null && false // 'yes' && 5 && 'word'  -> 'word'

// || logical OR 
// ! logical NOT