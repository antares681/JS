function smallest(data){
    // data = data.sort(compare(a, b){return a - b})
    data = data.sort((a, b) => a - b); //compare function returns the smallest of 'a' 'b'
    return [data[0], data[1]].join(' ')
}
console.log(smallest([30, 15, 50, 5]))