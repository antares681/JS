data = ['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000',]


//VARAN 2
// const result = {}
// for (let el in data){
//     const parsedData = data[el].split(" <-> ");
//     if (result[parsedData[0]]) {    // is the same as !== undefined or false 
//         result[parsedData[0]] += Number(parsedData[1])
//     }else{
//         result[parsedData[0]] = Number(parsedData[1]);
//     }
// }

// VARIANT 2
result = {}
data.forEach((entry) => {const[key, value] = entry.split(' <-> '); 
    if (result[key]) {
        result[key] += Number(value);
    }else{
        result[key] = Number(value)
    }
})
console.log(result)