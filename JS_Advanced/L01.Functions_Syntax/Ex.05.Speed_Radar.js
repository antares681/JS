function speedRadar(...args){
    let motorwayLimit = 130;
    let instestateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;
    let speedLimit = 0;
    let area = args[1]
    let currentSpeed = args[0]

    switch (area) {
        case 'motorway': speedLimit = motorwayLimit; break;
        case 'interstate': speedLimit = instestateLimit; break;
        case 'city': speedLimit = cityLimit; break;
        case 'residential': speedLimit = residentialLimit; break;
    }

    if (Number(currentSpeed) > speedLimit) {
        let speedingLevel = Number(currentSpeed - speedLimit );
        if (speedingLevel <= 20){
            status = 'speeding';
        }else if (speedingLevel <=40){
            status = 'excessive speeding';
        }else {
            status = 'reckless driving';
        }
        return `The speed is ${Number(args[0]) - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`; 
    }
    return `Driving ${args[0]} km/h in a ${speedLimit} zone`;
}

console.log(speedRadar(40, 'city'))
console.log(speedRadar(21, 'residential'))
console.log(speedRadar(120, 'interstate'))
console.log(speedRadar(200, 'motorway'))