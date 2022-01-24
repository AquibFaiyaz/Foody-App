import { data } from "../data/data";
import { ROW_CLICKED } from "./Actions";

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
    default:
      return state;
  }
}

export default tableReducer;
