import { data } from "../data/data";

//Extracting unique ingredients from data

let ingredientsList = data.map((item) => item.ingredients);

let ingds = ingredientsList.flat();

let modIng = ingds.map((item) => item.trim().toLowerCase());

let uniqueIng = [...new Set(modIng)];

const initialStore = {
  allIngredients: uniqueIng,
};

function dishSuggestReducer(state = initialStore, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default dishSuggestReducer;
