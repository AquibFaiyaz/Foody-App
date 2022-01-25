import React from "react";
import { connect } from "react-redux";
import { searchData } from "../data/searchCategories";
import { SEARCH_CATEGORY } from "../Redux/Actions";

const CategoryButtons = ({ handleSearchCategory }) => {
  return (
    <div>
      {searchData.map((data) => {
        let { id, type, title } = data;
        return (
          <button
            key={id}
            onClick={() => {
              handleSearchCategory(type);
            }}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
};

//Redux
const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchCategory: (value) => {
      dispatch({ type: SEARCH_CATEGORY, payload: { data: value } });
    },
  };
};

export default connect(null, mapDispatchToProps)(CategoryButtons);
