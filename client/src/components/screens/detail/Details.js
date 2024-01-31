import React from "react";
import { useCallback, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import "./Details.css";
const Details = () => {
  const { state } = useLocation();
  const [data, setData] = useState([]);

  const getNumberById = useCallback(async (id) => {
    // we will use nginx to redirect it to the proper URL
    const dataByIdResponse = await axios.get(`/api/values/${id}`);
    setData(dataByIdResponse.data.map((row) => row));
      // console.log(`\x1b[33m DEBUG : ---> ${data.map((value) => value.username)} \x1b[0m`)
  }, []);

  useEffect(() => {
    getNumberById(state.id);
  }, [getNumberById]);

  return (
    <>
      {data && data.map((value, idx) => (
        <div className="header-title" key={idx}>
          <h1>
            Details: <span>{value.username}</span>
          </h1>
          <div>Other details</div>
          {value.number}
        </div>
      ))}
    </>
  );
};

export default Details;
