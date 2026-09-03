import { Ingredient } from "../types/ingredient";

export const validateName = (value: string): boolean => {
  return value.trim().length >= 3;
}

export const validateIngredients = (value: Ingredient[]): boolean => {
  return value.length >= 4 && value.length <= 10;
}