import React from "react";
import { v4 as uuidv4 } from "uuid";

const DishDetailsCard = ({ rowData }) => {
  const {
    name,
    diet,
    flavor_profile,
    region,
    state,
    cook_time,
    prep_time,
    ingredients = [],
    course,
  } = rowData;
  return (
    <div className="dish-details-card">
      <div className="info-control">
        <h3>Name</h3>
        <p>{name}</p>
      </div>

      <div className="info-control">
        <h3>Diet Type</h3>
        <p>{diet}</p>
      </div>
      <div className="info-control">
        <h3>Preparation Time</h3>
        <p>{prep_time === -1 ? "Not Available" : prep_time} minutes</p>
      </div>
      <div className="info-control">
        <h3>Cooking Time</h3>
        <p>{cook_time === -1 ? "Not Available" : cook_time} minutes</p>
      </div>
      <div className="info-control">
        <h3>Flavor</h3>
        <p>{flavor_profile === -1 ? "Not Available" : flavor_profile}</p>
      </div>
      <div className="info-control">
        <h3>Course</h3>
        <p>{course}</p>
      </div>
      <div className="info-control">
        <h3>State</h3>
        <p>{state === -1 ? "Not Available" : state}</p>
      </div>
      <div className="info-control">
        <h3>Region</h3>
        <p>{region === -1 ? "Not Available" : region}</p>
      </div>
      <div className="info-control">
        <h3>Ingredients</h3>
        <ul>
          {" "}
          {ingredients.map((ingredient) => (
            <li key={uuidv4()}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DishDetailsCard;
