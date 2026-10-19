import type { Ingredient } from "../types/ingredient";

const INGREDIENT_PRICE = 5;
const PIZZA_PRICE = 85.5;

export const calculateIngredientPrice = (
  ingredients: Ingredient[]
): number => {
  const selectedIngredientCount = ingredients.filter(
    (ingredient) => ingredient.isChecked
  ).length;

  return selectedIngredientCount * INGREDIENT_PRICE;
};

export const calculateTotalPrice = (
  ingredients: Ingredient[],
  quantity: number
): number => {
  const ingredientPrice = calculateIngredientPrice(ingredients);

  return ingredientPrice + PIZZA_PRICE * quantity;
};