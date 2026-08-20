export const validateName = value => {
    return value.trim().length >= 3;
  }

export const validateIngredients = value => {
    return value.length >= 4 && value.length <= 10;
  }