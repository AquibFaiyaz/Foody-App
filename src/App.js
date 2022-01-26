import React from "react";
import { Route, Routes } from "react-router-dom";
import Table from "./pages/Home/Table";
import DetailsPage from "./pages/Details Page/DetailsPage";
import DishSuggestor from "./pages/Dish Suggest Page/DishSuggestor";
import Navbar from "./Components/Navbar";
import "./Styles/App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Table />} />
        <Route path="details" element={<DetailsPage />} />
        <Route path="suggestdish" element={<DishSuggestor />} />
      </Routes>
    </>
  );
}

export default App;
