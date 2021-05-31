function pies(arr, startPie, endPie){
    const idxStart = arr.indexOf(startPie);
    const idxEnd = arr.indexOf(endPie);
    return arr.slice(idxStart, idxEnd+1)
}

console.log(pies(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'], 'Key Lime Pie', 'Lemon Meringue Pie'))