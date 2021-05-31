function summer(n, m){
    let res = 0
    for (i = parseFloat(n); i <= parseFloat(m); i++){
        res += i;
    }
    return res;
}

console.log(summer('1','5'))