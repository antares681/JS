///ITERATIONS


//.filter() method TEST all el in array and put them in new arr CREATES new arraye
cars_1 = ['BMW', 'Opel', 'Skoda', 'Audi'] 
let filtered_cars = cars_1.filter((car) => {return !car.startsWith('B')})
console.log(filtered_cars)

//.map() method CREATES new el in the new array CHANGED in accordance with rule
cars_2 = ['BMW', 'Opel', 'Skoda', 'Audi'] 
let mapped_cars = cars_2.map((car) => {return car.toLowerCase()});
console.log(mapped_cars)


//.reduce() TAKE array and reduce it to simpler value

let nmbrs = [10, 12, 8, 24, 34, 5]

//SUM WITH REDUCE
let reduce_sum = nmbrs.reduce((acc, el) => {return acc + el,0});
console.log(reduce_sum)

//OR 
function sumNmbrs(acc, el){return acc + el}
console.log(nmbrs.reduce(sumNmbrs, 0)) //'0' el idx to start with 

//OR 
let reduce_sum_3 = nmbrs.reduce((acc, el) => acc + el, 0);
console.log(reduce_sum_3)


//AVG WITH REDUCE
let reduce_sum_4 = nmbrs.reduce((acc, el, curr_idx, theArr) => {return acc + (el/theArr.length)}, 0);
console.log(reduce_sum_4.toFixed(2))

//FILTER WITH REDUCE

// let oddNmbrs = arr.reduce((acc, ))