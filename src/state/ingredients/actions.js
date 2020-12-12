export const requestIngredients = () => ({
  type: "ingredients/request",
});

export const successIngredients = (payload) => ({
  type: "ingredients/success",
  payload,
});

export const errorIngredients = (payload) => ({
  type: "ingredients/error",
  payload,
});
