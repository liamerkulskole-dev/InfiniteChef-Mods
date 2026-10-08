// McDonald's Mod for Infinite Chef
// Adds McDonald's-style foods and recipes.

// Ingredients

addIngredient("burger_bun", {
    color: "#d99b45",
    type: "bread",
    shape: "bread"
});

addIngredient("burger_patty", {
    color: "#63351f",
    type: "meat",
    shape: "meat"
});

addIngredient("special_sauce", {
    color: "#e8b45c",
    type: "sauce"
});

addIngredient("big_mac", {
    color: "#9b5b2b",
    innerColor: "#e8c27a",
    type: "food",
    shape: "burger"
});

addIngredient("french_fries", {
    color: "#f5c542",
    type: "food",
    shape: "fries"
});

addIngredient("mcnuggets", {
    color: "#c9823b",
    type: "food",
    shape: "nugget"
});

addIngredient("apple_pie", {
    color: "#b86b32",
    innerColor: "#f5c85b",
    type: "food",
    shape: "pie"
});

addIngredient("happy_meal", {
    color: "#e32626",
    type: "food"
});

// Recipes

addRecipe("burger_bun+burger_patty+cheese+lettuce+special_sauce", "big_mac");

addRecipe("potato+oil+salt", "french_fries");

addRecipe("chicken+flour+oil", "mcnuggets");

addRecipe("apple+dough+sugar", "apple_pie");

addRecipe("big_mac+french_fries", "happy_meal");
