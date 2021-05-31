function solve([rad]){
    let radians = Number(rad)
    let degree = radians * (180 / Math.PI)
    console.log(degree.toFixed(0))
    }
    solve(["3.1416"])