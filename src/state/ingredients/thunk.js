import {
  requestIngredients,
  successIngredients,
  errorIngredients,
} from "./actions";

import { getIngredientList } from "api";

export const fetchIngredients = () => async (dispatch) => {
  dispatch(requestIngredients());
  try {
    const data = await getIngredientList();
    const dataWithCorrectType = data.map((item) => ({
      ...item,
      price: Number(item.price),
    }));

    dispatch(successIngredients(dataWithCorrectType));
  } catch (error) {
    dispatch(errorIngredients(error));
  }
};
