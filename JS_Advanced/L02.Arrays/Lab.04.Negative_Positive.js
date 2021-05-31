function arr_analyzer(data){
    let new_arr =[];
    for (let i=0; i < data.length; i++){
        if (data[i] < 0){
            new_arr.unshift(data[i]);
        }else{
            new_arr.push(data[i]);
        }
    }
    return new_arr;
}

console.log(arr_analyzer([7, -2, 8, 9]))
console.log(arr_analyzer([3, -2, 0, -1]))