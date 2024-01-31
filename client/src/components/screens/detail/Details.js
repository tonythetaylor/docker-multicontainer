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
    // console.log(`DEBUG line: 13 : ${data.data.map((row) => row.number)}`);
    setData(dataByIdResponse.data.map((row) => row.number));
  }, []);

  useEffect(() => {
    getNumberById(state.id);
  }, [getNumberById]);

  return (
    <>
      <div className="header-title">
        <h1>
          Details: <span>{data}</span>
        </h1>
        <div>Other details</div>
      </div>
    </>
  );
};

export default Details;
