function solve(data) {
    let new_arr = []
    for (let i = 1; i < data.length; i+=2) {
        new_arr.push(data[i]*2);
    }
    return new_arr.reverse();
}
console.log(solve([10, 15, 20, 25]))