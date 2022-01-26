import { data } from "../data/data";
import {
  CHANGE_INGREDIENTS,
  CLEAR_ALL_INGREDIENTS,
  DELETE_INGREDIENTS,
} from "./Actions";

//Extracting unique ingredients from data

let ingredientsList = data.map((item) => item.ingredients);

let ingds = ingredientsList.flat();

let modIng = ingds.map((item) => item.trim().toLowerCase());

let uniqueIng = [...new Set(modIng)];

const initialStore = {
  allIngredients: uniqueIng,
  selectIngredients: [],
};

function dishSuggestReducer(state = initialStore, action) {
  switch (action.type) {
    case CHANGE_INGREDIENTS: {
      let { data } = action.payload;

      return {
        ...state,
        selectIngredients: [...new Set([...state.selectIngredients, data])],
      };
    }
    case CLEAR_ALL_INGREDIENTS: {
      return { ...state, selectIngredients: [] };
    }
    case DELETE_INGREDIENTS: {
      let { data } = action.payload;
      let newIngList = state.selectIngredients.filter(
        (ingred) => data !== ingred
      );
      return { ...state, selectIngredients: newIngList };
    }
    default:
      return state;
  }
}

export default dishSuggestReducer;
