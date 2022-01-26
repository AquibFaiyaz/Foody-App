import { data } from "../data/data";
import {
  CATEGORY_MODAL_OPEN,
  SEARCH_CATEGORY,
  SEARCH_INPUT_CHANGE,
} from "./Actions";

const initialStore = {
  searchData: data,
  isModalOpen: false,
  filterData: [],
  searchCategory: "name",
};

function navbarReducer(state = initialStore, action) {
  switch (action.type) {
    case SEARCH_INPUT_CHANGE: {
      let { change } = action.payload;

      switch (state.searchCategory) {
        case "ingredients": {
          let newData = state.searchData.filter((search) => {
            let { ingredients } = search;
            let result = ingredients.reduce((acc, curr) => {
              if (curr.toLowerCase().includes(change.trim().toLowerCase())) {
                acc++;
              }
              return acc;
            }, 0);
            return result >= 1;
          });
          return { ...state, filterData: newData };
        }
        case "diet": {
          let newData = state.searchData.filter((search) => {
            let { diet } = search;
            return diet.toLowerCase().startsWith(change.trim().toLowerCase());
          });
          return { ...state, filterData: newData };
        }
        case "prep_time": {
          let newData = state.searchData.filter((search) => {
            let { prep_time } = search;
            return prep_time
              .toString()
              .toLowerCase()
              .startsWith(change.trim().toLowerCase());
          });
          return { ...state, filterData: newData };
        }
        case "cook_time": {
          let newData = state.searchData.filter((search) => {
            let { cook_time } = search;
            return cook_time
              .toString()
              .toLowerCase()
              .startsWith(change.trim().toLowerCase());
          });
          return { ...state, filterData: newData };
        }
        case "flavor_profile": {
          let newData = state.searchData.filter((search) => {
            let { flavor_profile } = search;
            return flavor_profile
              .toString()
              .toLowerCase()
              .includes(change.trim().toLowerCase());
          });
          return { ...state, filterData: newData };
        }
        case "region": {
          let newData = state.searchData.filter((search) => {
            let { region } = search;
            return region
              .toString()
              .toLowerCase()
              .includes(change.trim().toLowerCase());
          });
          return { ...state, filterData: newData };
        }
        case "state": {
          let newData = state.searchData.filter((search) => {
            let { state: stateRegion } = search;
            return stateRegion
              .toString()
              .toLowerCase()
              .includes(change.trim().toLowerCase());
          });
          return { ...state, filterData: newData };
        }
        case "course": {
          let newData = state.searchData.filter((search) => {
            let { course } = search;
            return course
              .toString()
              .toLowerCase()
              .includes(change.trim().toLowerCase());
          });
          return { ...state, filterData: newData };
        }
        default:
          let newData = state.searchData.filter((search) => {
            let { name } = search;
            return name.toLowerCase().includes(change.trim().toLowerCase());
          });
          return { ...state, filterData: newData };
      }
    }
    case CATEGORY_MODAL_OPEN: {
      return { ...state, isModalOpen: !state.isModalOpen };
    }
    case SEARCH_CATEGORY: {
      let { data } = action.payload;
      return {
        ...state,
        searchCategory: data,
        isModalOpen: !state.isModalOpen,
      };
    }
    default:
      return state;
  }
}

export default navbarReducer;
