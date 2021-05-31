let nmbrs = []; //empty array
nmbrs[10] = 'Pesho' // arr[empty x 10, 'Pesho'] sparse array
nmbrs[undefined, undefined, 'Pesho'] //dense array 
nmbrs['BMW', 'Opel', 'Skoda']  //call it like see below
nmbrs[nmbrs.length-1] // -> 'Skoda'

//** FOR OF loop */
//ITERATE THROUGH ALL THE ELEMENT WITHOUT INDEX
for(let car of nmbrs){
    console.log(car)
}

//** FOR IN loop */

//* SORTING ARRAY with function

function smallest(data){
    data = data.sort(function(a, b){return a - b})
    return [data[0], data[1]].join(' ')
}
console.log(smallest([30, 15, 50, 5]))

cars = ['BMW', 'Opel', 'Skoda', 'Audi'] 
//INCLUDE check if el in array /optionally after 3 place
cars.includes('BMW', -3) //check if is samo of the last 3 cars

//.forEach() method for every el in array 
function printCar(car){
    console.log(car);    
}
cars.forEach(printCar)
//OR USE
cars.forEach(car => {console.log(car)})
console.log('******************')

//.some() method returns TRUE or FALSE
let carWithO = cars.some((car) => {return car[0] == 'O'})
console.log(carWithO)
console.log('******************')

//.find() finds an element and prints it all
let carWithA = cars.find((car) => {return car[0] == 'A'})
console.log(carWithA)

//******************************** */
