function circle_area(radius){
    let type = typeof(radius);
    if (type === 'number') {
        return (Math.PI * radius **2).toFixed(2)
    } else {
        return `We can not calculate the circle area, because we receive a ${type}.`
    }
    
}

console.log(circle_area(4))