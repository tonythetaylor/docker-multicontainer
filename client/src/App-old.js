import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import OtherPage from "./components/screens/other/OtherPage";
import MainComponent from "./components/screens/main/MainComponent";
import NavBar from "./components/navigation/NavBar";
import Details from "./components/screens/detail/Details";
import Login from "./components/screens/auth/login/Login";
import Signup from "./components/screens/auth/signup/Signup";
import axios from "axios";

function App() {
  const [user, setUser] = useState(true);
  // const user = false;
  //  useEffect(()=>{
  //   const getUser = async () => {
  //     await axios.get("/api/login/success")
  //      .then((response) => {
  //       if (response.status === 200) return response.json();
  //       throw new Error("authentication failed!", response.message);
  //      })
  //      .then((resObject) => {
  //       setUser(resObject.user);
  //     })
  //      .catch((err) => {
  //       console.log(err);
  //     });
  //   };
  //   getUser();
  // },[user]);
  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route
          path="/"
          element={user ? <MainComponent /> : <Login />}
          // element={<MainComponent />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otherpage" element={<OtherPage />} />
        {/* <Route path="/details/:id" element={<Details />} /> */}
        <Route
          path="/details/:id"
          element={user ? <Details /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
