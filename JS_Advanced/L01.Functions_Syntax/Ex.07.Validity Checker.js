function validityChecker(x1, y1, x2, y2){
    let distance_1 = Math.sqrt((x1-0)**2+(y1-0)**2);
    let distance_2 = Math.sqrt((x2-0)**2+(y2-0)**2);
    let distance_3 = Math.sqrt((x2-x1)**2+(y2-y1)**2);
    
    if (distance_1  - Math.trunc(distance_1) != 0) {
        set_1_status = 'invalid';
    }else {
        set_1_status = 'valid';
    }
    if (distance_2  - Math.trunc(distance_2) != 0) {
        set_2_status = 'invalid';
    }else {
        set_2_status = 'valid';
    }
    
    if (distance_3 - Math.trunc(distance_3) != 0) {
        set_3_status = 'invalid';
    }else {
        set_3_status = 'valid';
    }

    console.log (`{${x1}, ${y1}} to {0, 0} is ${set_1_status}`);
    console.log (`{${x2}, ${y2}} to {0, 0} is ${set_2_status}`);
    console.log (`{${x1}, ${y1}} to {${x2}, ${y2}} is ${set_3_status}`);
}

validityChecker(3, 0, 0, 4)
console.log('')
validityChecker(2, 1, 1, 1)
