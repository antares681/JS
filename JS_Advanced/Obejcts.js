//** CREATE AND OBJECT */

const person = {
    name: 'Peter',
    age: 21,
    ['job-title']: 'Trainer'   //[] required when special char like '-', '.' or similar are in the name
}

delete person.age; //REMOVE CERTAIN PROPERTY FROM OBJECT
//console.log(person.name, person.["job-title"])  //TODO ????????????????????????

//CREATE AND OBJECT

const city = {
    name: 'Tortuga',
    population: 7000,
    treasury: 15000,
};

for (const key in city) {
    console.log(key, city[key])
}

//** ASSOCIATIVE ARRAY */
//anything could be key, any element can be changed, element mix is possible/ 
//similar to DICTIONARY in PYTHON

let test_arr = ['a', 'b', 'c', 'd']
test_arr['alabala'] = 5;
console.log(test_arr)

//looping ASS. ARRAY loop
//for index
for (const key in test_arr){
    console.log(key) //cal value
    console.log(test_arr[key]) //call value by key
}
//ARRAY OF TUPLES   ASS. ARRAY CAN BE TRANSFORMED INTO ARRAY OF TUPLES
const test = Object.entries(city)
console.log(test)
test.forEach((el) => {
    const [name, population] = el;
    console.log(name, population)
})
    

let personaA = {
    firstName: 'Peter',
    lastName: 'IVANOV',
    age: 25,
    location: 'Sofia',
    printName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(personaA.printName())


let personaB = {
    firstName: 'Peter',
    lastName: 'IVANOV',
    location: 'Sofia',
    age: function(25){
        return `My age is: ${this.age}`
    }
}
console.log(personaB.age(myAge))