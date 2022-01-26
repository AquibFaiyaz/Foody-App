import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CATEGORY_MODAL_OPEN } from "../Redux/Actions";
import CategoryButtons from "./CategoryButtons";
import DishSearch from "./DishSearch";

const Navbar = ({ handleModalOpen }) => {
  let navigate = useNavigate();
  return (
    <header className="nav-wrap">
      <nav>
        <div className="heading">
          <h1>Cuisine App</h1>
        </div>
        <DishSearch />
        <div className="nav-btn">
          <button onClick={handleModalOpen}>Search Categories</button>
          <button
            onClick={() => {
              navigate("/suggestdish");
            }}
          >
            Dish Suggest Page
          </button>
        </div>
      </nav>
      <CategoryButtons />
    </header>
  );
};

//Redux

const mapDispatchToProps = (dispatch) => {
  return {
    handleModalOpen: () => {
      dispatch({ type: CATEGORY_MODAL_OPEN });
    },
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
