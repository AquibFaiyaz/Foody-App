import React from "react";
import { Route, Routes } from "react-router-dom";
import BasicTable from "./Components/BasicTable";
import DetailsPage from "./Components/DetailsPage";
import "./Styles/App.scss";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<BasicTable />} />
      <Route path="details" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;
