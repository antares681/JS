function nmbrs(nmbr){
    let numString = String(nmbr);
    let summ = Number(numString[0])
    let is_same = true
    for (let i = 0; i < numString.length-1; i++) {
        if (numString[i] !== numString[i+1]){
            is_same = false;
            summ += Number(numString[i+1])
            continue
        }
        summ += Number(numString[i+1])}
    
    console.log(is_same)
    console.log(summ)
}

nmbrs('1234')

