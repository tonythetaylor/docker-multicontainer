import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import OtherPage from "./components/screens/other/OtherPage";
import MainComponent from "./components/screens/main/MainComponent";
import NavBar from "./components/navigation/NavBar";
import Details from "./components/screens/detail/Details";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/otherpage" element={<OtherPage />} />
        <Route path="/details/:id" element={<Details />} />

      </Routes>
    </>
  );
}

export default App;
