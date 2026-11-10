import { Ingredient } from "../types/ingredient";
import { ValidatableField } from "../types/orderForm";

export const validateName = (value: string): boolean => {
  return value.trim().length >= 3;
}

export const validateIngredients = (value: Ingredient[]): boolean => {
  return value.length >= 4 && value.length <= 10;
}

export const validateField = (
  name: ValidatableField,
  value: string | Ingredient[]
): boolean => {
  if (name === "isim" && typeof value === "string") {
    return validateName(value);
  }

  if (name === "malzeme" && Array.isArray(value)) {
    return validateIngredients(value);
  }

  return false;
};