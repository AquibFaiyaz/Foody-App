import React from "react";
import { Route, Routes } from "react-router-dom";
import BasicTable from "./Components/BasicTable";
import DetailsPage from "./Components/DetailsPage";
import Navbar from "./Components/Navbar";
import "./Styles/App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BasicTable />} />
        <Route path="details" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
