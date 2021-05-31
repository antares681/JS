function fruits_budget(fruit, kg, price_kg){
    console.log(`I need $${(kg * price_kg/1000).toFixed(2)} to buy ${(kg/1000).toFixed(2)} kilograms ${fruit}.`)
}
fruits_budget('orange', 2500, 1.80)
