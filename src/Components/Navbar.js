import React from "react";
import CategoryButtons from "./CategoryButtons";
import DishSearch from "./DishSearch";

const Navbar = () => {
  return (
    <header className="nav-wrap">
      <nav>
        <div className="heading">
          <h1>Cuisine App</h1>
        </div>
        <DishSearch />
      </nav>
      <CategoryButtons />
    </header>
  );
};

export default Navbar;
