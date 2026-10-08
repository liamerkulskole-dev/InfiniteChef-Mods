// McDonald's Mod for Infinite Chef

// Ingredients
addIngredient("mcdonalds", {
    color: "#ffc72c",
    type: "food"
});

addIngredient("big_mac", {
    color: "#8b4513",
    innerColor: "#e6c27a",
    type: "mcdonalds",
    shape: "burger"
});

addIngredient("french_fries", {
    color: "#ffd21f",
    type: "mcdonalds",
    shape: "fries"
});

addIngredient("mcnuggets", {
    color: "#c9823b",
    type: "mcdonalds",
    shape: "nugget"
});

addIngredient("mcdonalds_bun", {
    color: "#d99b45",
    type: "bread"
});

addIngredient("burger_patty", {
    color: "#5c321c",
    type: "meat"
});

addIngredient("special_sauce", {
    color: "#f0b35a",
    type: "sauce"
});

addIngredient("apple_pie", {
    color: "#c98235",
    innerColor: "#f5c85b",
    type: "pie"
});

addIngredient("happy_meal", {
    color: "#e32626",
    type: "mcdonalds"
});

// Recipes
addRecipe("mcdonalds_bun+burger_patty+cheese+lettuce+special_sauce", "big_mac");
addRecipe("potato+oil+salt", "french_fries");
addRecipe("chicken+flour+oil", "mcnuggets");
addRecipe("apple+dough+sugar", "apple_pie");

addRecipe("big_mac+french_fries+mcnuggets", "happy_meal");
addRecipe("big_mac+french_fries", "mcdonalds meal");
