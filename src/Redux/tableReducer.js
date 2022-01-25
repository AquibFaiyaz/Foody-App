import { data } from "../data/data";
import { ROW_CLICKED, SEARCH_ITEM_CLICKED } from "./Actions";

const initialStore = {
  data,
  rowData: {},
};

function tableReducer(state = initialStore, action) {
  switch (action.type) {
    case ROW_CLICKED: {
      let { data } = action.payload;
      //console.log(data);

      return { ...state, rowData: data };
    }
    case SEARCH_ITEM_CLICKED: {
      let { dishName } = action.payload;
      let [filteredDish] = state.data.filter((dish) => {
        let { name } = dish;
        return dishName.toLowerCase() === name.toLowerCase();
      });
      return { ...state, rowData: filteredDish };
    }
    default:
      return state;
  }
}

export default tableReducer;
