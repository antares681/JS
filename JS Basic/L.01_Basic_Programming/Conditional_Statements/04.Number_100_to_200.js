function numChecker([arg1]){
    let num = Number(arg1)
    if (num < 100){
        console.log('Less than 100')
    }
    else if (100 <= num <= 200){
        console.log('Between 100 and 200')
    }
    else if (num < 200){
        console.log('Greater than 200')
    }
}

numChecker(["95"])