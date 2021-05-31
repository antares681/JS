function EvenPositionElement(data){
    let result = ''
    for (let i = 0; i < data.length; i++) {
        if (i % 2 == 0){
            result += data[i] + ' ';
        }
    }
    console.log(result);

}

EvenPositionElement(['20', '30', '40', '50', '60'])
console.log('')
EvenPositionElement(['20', '30', '40'])