function gcd(a, b){
    let currentDiv = b;
    while(b > 0){
        if (Number(a) % Number(currentDiv) === 0 & Number(b) % Number(currentDiv) === 0){
            return currentDiv;
        }
        else {
            currentDiv -= 1;
        }
    }
}

console.log(gcd(2154, 458))