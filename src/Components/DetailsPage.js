import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import DishDetailsCard from "./DishDetailsCard";

const DetailsPage = ({ rowData }) => {
  let navigate = useNavigate();
  console.log(rowData);

  return (
    <section className="dish-details-wrapper">
      <header className="dish-heading">
        <h1>Dish Details</h1>
      </header>
      <DishDetailsCard rowData={rowData} />
      <div className="btn-wrap">
        <button
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          Back
        </button>
      </div>
    </section>
  );
};

//Redux

const mapStateToProps = (state) => {
  let { rowData } = state.tableReducer;
  return { rowData };
};

export default connect(mapStateToProps)(DetailsPage);
