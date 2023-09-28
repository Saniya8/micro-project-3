const foodInfo = require("./food.js");

// list all the food items
function listAllFoodItems() {
    return foodInfo;
}
console.log(listAllFoodItems());

// list all the food items by category
function listByCategory(category) {
    return foodInfo.filter((food) => food.category === category);
}
console.log(listByCategory("Vegetable"));
console.log(listByCategory("Fruit"));
console.log(listByCategory("Protein"));
console.log(listByCategory("Nuts"));
console.log(listByCategory("Grains"));
console.log(listByCategory("Dairy"));

// list all the food items by calorie
function listByCalorie(calorie, above) {
    if (above) {
        return foodInfo.filter((food) => food.calorie > calorie);
    }
    else {
        return foodInfo.filter((food) => food.calorie < calorie);
    }
}
console.log(listByCalorie(100, true));
console.log(listByCalorie(100, false));

// list all the food items by order
function sortByCount(food, order) {
    if (order == "asc") {
        return foodInfo.sort((a, b) => a[food] - b[food])
    }
    else if (order == "desc") {
        return foodInfo.sort((a, b) => b[food] - a[food])
    }
}
console.log(sortByCount("cab", "asc"));
console.log(sortByCount("protiens", "desc"));