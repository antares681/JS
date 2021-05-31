function printStars(count) {
    console.log('*'.repeat(count));
}

printStars(5)


// comment

/* 
muliline comment
*/

/** documentation to the code **/

/* === operator compare two variables only if the same type 
    == operator compares two variable of different types */
console.log(5 == '5') //TRUE
console.log(5 === '5') //FALSE


//TERNARY OPERATOR 'IF TRUE RETURN 1 : ELSE RETURN TWO'
console.log(5 > 7 ? 'NO' : 'YES') // 'NO'


//ARROW FUNCTION
let sum  = (a, b) => a + b; // short syntax  
let a = 2
let b = 3
console.log(sum(a, b)) 

// ACCESS ARRAY
let names = ['Pesho', 'Gosho', 'Ivan', 'Dragan']
let [firstName, secondName] = names;
console.log(firstName)
console.log(secondName)

//REST OPERATOR ...<name by choice>
let [firstName2, ...rest_array] = names;
console.log(firstName2);
console.log(...rest_array);

/**ARRAY METHODS*/

//SPLIT
test_string = 'Lazar Petrov ILIEV'
test_string = test_string.split(' ')
console.log(test_string)

// .pop()   identical to python
// .length  show the length of array / can change the length of array adding empty spaces
// .push()  equivalent to pytons .append and shows new length of the array
// .shift() removes first element in an array
// .unshift() adds element to idx [0] in an array
// .splice() mutabel method, removed certain elements or insertselements
//let names = ['Pesho', 'Gosho', 'Ivan', 'Dragan']
names.splice(2, 1) //from position 2 will cut 1 element return it as array and keep the rest as array
console.log(names)
names.splice(2, 0, 'Batman', 'Superman') 
console.log(names)
//.fill()  fills array with symbol in the paretheses DOESNOT creat elements in the array
//.reverse() reverses the order in the array
// .sort() sorts the value, but not as to numbers lexicografically
test_arr = [10, 2, 4, 5, 7, 8]
function compareNumbers(a, b) {
    return a - b;
}
console.log(test_arr.sort(compareNumbers))

//*ACCESSOR METHODS */

// .join()  joins array to string optionally with symbols similar to Python
// .concat   creates new array and adds elements ot the new array 
// .slice() - slices certain part of an array IMMUTABLE does not chante original
// .includes() check if data is in array
// .indexOf() returns first index with the element in question if none returs -1 error


// ITERATION METHODS

// .forEach iterates through the array
names.forEach(x => {console.log(x)})

//. filter  e.g. below returns filtered array names not starting with ...
console.log(names.filter(x => {
    return x[0] !== 'D'}))
    //short syntax below
console.log(names.filter(x => x[0] !== 'D'))

// .find()   finds an element and returs FIRST found
console.log(names.find(x => x[0] !== 'D'))

// .some()  finds bolean in accordance with matching criteria
console.log(names.some(x => x[0] !== 'D'))

// .map()   creates new symmetric array based on certain rule
let superDCU = names.map(x => x.toUpperCase())
console.log(superDCU)

// .reduce()  unifies the array to one single variable starting from 0 to the end
let numbers = [1, 4, 10, 11, 200]
let summa = numbers.reduce((accumulator, el) => accumulator + el, 0)
console.log(summa)

//ARRAYS OF ARRAYS (MATRICES)