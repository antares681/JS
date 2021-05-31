function petShopAnalyzer([dogs, others]){
    let nmbr_dogs = Number(dogs)
    let nmbr_others = Number(others)
    let dog_food_price = 2.50
    let others_food_price = 4.00
    let total_costs = nmbr_dogs * dog_food_price + nmbr_others * others_food_price
    console.log(`${total_costs} lv.`)
}

petShopAnalyzer(["5", "4"])