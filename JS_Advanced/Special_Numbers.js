function specialNumber(number) {
    arr = []
    for (let i = 1; i <= number; i++) {      
        arr.push(i)
    }
    arr.forEach((el) => {
        console.log(`${el} -> ${(el===5||el===7||el===11) ? `True` : `False`}`)
        isSpecial = false
    })
}
 
specialNumber(15);