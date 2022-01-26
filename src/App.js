import React from "react";
import { Route, Routes } from "react-router-dom";
import BasicTable from "./Components/BasicTable";
import DetailsPage from "./Components/DetailsPage";
import DishSuggestor from "./Components/DishSuggestor";
import Navbar from "./Components/Navbar";
import "./Styles/App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BasicTable />} />
        <Route path="details" element={<DetailsPage />} />
        <Route path="suggestdish" element={<DishSuggestor />} />
      </Routes>
    </>
  );
}

export default App;
