import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Details.css";
const Details = () => {
  const { state } = useLocation();
  const [data, setData] = useState([]);

  // const getNumberById = useCallback(async (id) => {
  //   // we will use nginx to redirect it to the proper URL
  //   const dataByIdResponse = await axios.get(`/api/values/${id}`);
  //   setData(dataByIdResponse.data.map((row) => row));
  //     // console.log(`\x1b[33m DEBUG : ---> ${data.map((value) => value.username)} \x1b[0m`)
  // }, []);

  useEffect(() => {
    // getNumberById(state.id);
    const fetcData = async () => {
      const data = await axios.get(`/api/values/${state.id}`);
    setData(data.data.map((row) => row));
  };
  fetcData();
  }, [state.id]);

  return (
    <>
      {data && data.map((value, idx) => (
        <div className="header-title" key={idx}>
          <h3>
            Hello, <span>{value.username}</span>
          </h3>
          <div>Other details</div>
          {value.number}
        </div>
      ))}
    </>
  );
};

export default Details;
