const foodInfo = require("./food.js");

// list all the food items
function listAllFoodItems() {
    return foodInfo;
}
console.log(listAllFoodItems());


// list all the food items with category vegetables
function listByCategoryVegetables() {
    return foodInfo.filter((food) => food.category === "Vegetable");
}
console.log(listByCategoryVegetables());


// list all the food items with category fruit
function listByCategoryFruit() {
    return foodInfo.filter((food) => food.category === "Fruit");
}
console.log(listByCategoryFruit());


// list all the food items with category protien
function listByCategoryProtein() {
    return foodInfo.filter((food) => food.category === "Protein")
}
console.log(listByCategoryProtein())


// list all the food items with category nuts
function listByCategoryNuts() {
    return foodInfo.filter((food) => food.category === "Nuts")
}
console.log(listByCategoryNuts())


// list all the food items with category grains
function listByCategoryGrains() {
    return foodInfo.filter((food) => food.category === "Grains")
}
console.log(listByCategoryGrains())


// list all the food items with category dairy
function listByCategoryDairy() {
    return foodInfo.filter((food) => food.category === "Dairy")
}
console.log(listByCategoryDairy())


// list all the food items with calorie above 100
function listByAboveCalorie() {    
    return foodInfo.filter((food) => food.calorie > 100)
}
console.log(listByAboveCalorie())


// list all the food items with calorie below 100
function listByBelowCalorie() {    
    return foodInfo.filter((food) => food.calorie < 100)
}
console.log(listByBelowCalorie())


// list all the food items with highest protien content to lowest
function listByProtein() {
    return foodInfo.sort((a, b) => b.protiens - a.protiens)
}
console.log(listByProtein())


// list all the food items with lowest cab content to highest
function listByCab() {
    return foodInfo.sort((a, b) => a.cab - b.cab)
}
console.log(listByCab())