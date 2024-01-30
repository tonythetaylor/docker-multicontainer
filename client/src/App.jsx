import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import OtherPage from "./OtherPage";
import MainComponent from "./MainComponent";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <div className="main"> */}
        <Route path="/" element={<MainComponent />} />
        <Route path="/otherpage" element={<OtherPage />} />
        {/* </div> */}
      </Routes>
    </>
  );
}

export default App;
