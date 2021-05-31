function personalData(firstName, lastName, years, location){
    let fn = firstName;
    let ln = lastName;
    let age = years;
    let town = location;
    
    console.log(`You are ${fn} ${ln}, a ${age}-years old person from ${town}.`);
}

personalData('Lazar', 'Iliev', 40, 'Sofia')