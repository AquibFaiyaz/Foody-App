import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import {
  CHANGE_INGREDIENTS,
  CLEAR_ALL_INGREDIENTS,
  DELETE_INGREDIENTS,
} from "../Redux/Actions";

const DishSuggestor = ({
  allIngredients,
  handleIngChange,
  handleClearIngredients,
  handleDeleteIng,
  selectIngredients,
  searchData,
}) => {
  //console.log(selectIngredients);

  let navigate = useNavigate();

  let refData = searchData.filter((item) => {
    let { ingredients } = item;
    let val = ingredients.every((element) => {
      return selectIngredients.includes(element.trim().toLowerCase());
    });

    return val;
  });

  allIngredients.sort((a, b) => a.localeCompare(b));

  //console.log(refData);
  return (
    <header className="dish-ing-suggest">
      <h1>Dish Suggest</h1>

      {/* JSX for select list of all ingredients */}
      <section className="form-ing">
        <form action="">
          <select
            name="dish-select"
            id=""
            onChange={(e) => {
              let data = e.target.value;

              handleIngChange(data);
            }}
          >
            <option disabled selected>
              Select Ingredients
            </option>
            {allIngredients.map((ingredient) => {
              return (
                <option key={uuidv4()} value={ingredient}>
                  {ingredient}
                </option>
              );
            })}
          </select>
        </form>

        {/* JSX for selected ingredients list */}
        <section className="select-ing-list">
          <ul>
            {selectIngredients.map((item) => {
              return (
                <li>
                  {item}{" "}
                  <MdOutlineCancel
                    onClick={() => {
                      handleDeleteIng(item);
                    }}
                    className="cancel-icon"
                  />
                </li>
              );
            })}
          </ul>
        </section>

        {/* JSX for suggested dishes */}
        <section className="suggest-dishes">
          {refData.map((dish) => {
            let { name } = dish;
            return <p key={uuidv4()}>{name}</p>;
          })}
        </section>
      </section>
      <div className="btns-wrap">
        <button
          onClick={() => {
            handleClearIngredients();
          }}
        >
          Clear All
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
      </div>
    </header>
  );
};

//Redux

const mapStateToProps = (state) => {
  const { allIngredients, selectIngredients } = state.dishSuggestReducer;
  const { searchData } = state.navbarReducer;
  return { allIngredients, selectIngredients, searchData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIngChange: (data) => {
      dispatch({ type: CHANGE_INGREDIENTS, payload: { data } });
    },
    handleClearIngredients: () => {
      dispatch({ type: CLEAR_ALL_INGREDIENTS });
    },
    handleDeleteIng: (data) => {
      dispatch({ type: DELETE_INGREDIENTS, payload: { data } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DishSuggestor);
