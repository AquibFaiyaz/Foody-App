import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SEARCH_INPUT_CHANGE, SEARCH_ITEM_CLICKED } from "../Redux/Actions";

const DishSearch = ({
  filterData = [],
  handleSearchItemClick,
  handleSearchChange,
}) => {
  //Extracting dish names from searchData
  let namesArray = filterData.map((data) => {
    let { name } = data;
    return name;
  });

  //states
  const [isActive, setIsActive] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  //useNavigate hook
  let navigate = useNavigate();

  //console.log(namesArray);
  return (
    <>
      <form className="dish-search-form">
        <div className="search-user">
          <div className="wrapper">
            <div className="search-input">
              <input
                type="text"
                value={searchVal}
                placeholder="Search..."
                onChange={(e) => {
                  let change = e.target.value;
                  handleSearchChange(change);
                  setIsActive(true);
                  setSearchVal(change);
                  if (change.length === 0) {
                    setIsActive(false);
                  }
                }}
              />
              <div
                className={
                  isActive === true ? "autocom-box active" : "autocom-box"
                }
              >
                {namesArray.map((name) => {
                  return (
                    <li
                      onClick={() => {
                        handleSearchItemClick(name);
                        navigate("/details");
                        setIsActive(false);
                        setSearchVal("");
                      }}
                    >
                      {name}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

//Redux

const mapStateToProps = (state) => {
  let { searchData, filterData } = state.navbarReducer;
  return { searchData, filterData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchItemClick: (name) => {
      dispatch({ type: SEARCH_ITEM_CLICKED, payload: { dishName: name } });
    },
    handleSearchChange: (change) => {
      dispatch({ type: SEARCH_INPUT_CHANGE, payload: { change } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DishSearch);
