export const getIngredients = (state) => state.ingredients;

export const getIngredientsByCategory = (category) => (state) => {
  if (getIsLoading(state)) {
    return [];
  }

  return state.ingredients.filter((i) => i.category === category);
};

export const getIsLoading = (state) => {
  return state.ingredients === "loading";
};
