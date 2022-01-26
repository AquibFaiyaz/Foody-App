import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { searchData } from "../data/searchCategories";
import { SEARCH_CATEGORY } from "../Redux/Actions";

const customStyles = {
  content: {
    width: "400px",
    height: "280px",
    boxShadow: "0px 10px 5px rgba(0,0,0,0.25)",
    top: "40%",
    left: "70%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
};

const CategoryButtons = ({ handleSearchCategory, isModalOpen }) => {
  return (
    <Modal style={customStyles} isOpen={isModalOpen}>
      <div className="search-cat-btns">
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
    </Modal>
  );
};

//Redux
const mapStateToProps = (state) => {
  let { isModalOpen } = state.navbarReducer;
  return { isModalOpen };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchCategory: (value) => {
      dispatch({ type: SEARCH_CATEGORY, payload: { data: value } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryButtons);
