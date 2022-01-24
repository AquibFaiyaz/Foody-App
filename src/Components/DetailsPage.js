import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const DetailsPage = ({ rowData }) => {
  let navigate = useNavigate();
  console.log(rowData);

  const { name, diet, flavor_profile, region, state } = rowData;
  return (
    <div>
      <h1>{name}</h1>
      <h1>{diet}</h1>
      <h1>{flavor_profile}</h1>
      <h1>{region}</h1>
      <h1>{state === -1 ? "NA" : state}</h1>
      <button
        onClick={() => {
          navigate("/", { replace: true });
        }}
      >
        Back
      </button>
    </div>
  );
};

//Redux

const mapStateToProps = (state) => {
  let { rowData } = state.tableReducer;
  return { rowData };
};

export default connect(mapStateToProps)(DetailsPage);
