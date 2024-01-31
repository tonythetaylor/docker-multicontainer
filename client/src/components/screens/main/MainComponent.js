import React from "react";
import { useCallback, useState, useEffect } from "react";
import axios from "axios";
import "./MainComponent.css";
import { NavLink, Link, useNavigate } from "react-router-dom";

const MainComponent = () => {
  const [values, setValues] = useState([]);
  const [value, setValue] = useState("");

  const getAllNumbers = useCallback(async () => {
    // we will use nginx to redirect it to the proper URL
    const data = await axios.get("/api/values/all");
    setValues(data.data.rows.map((row) => row.number));
  }, []);

  const saveNumber = useCallback(
    async (event) => {
      event.preventDefault();

      await axios.post("/api/values", {
        value,
      });

      setValue("");
      getAllNumbers();
    },
    [value, getAllNumbers]
  );

  // const getNumberById = useCallback(async (id) => {
  //   // we will use nginx to redirect it to the proper URL
  //   const data = await axios.get(`/api/values/${id}`);
  //   console.log(`DEBUG : ${data.data.rows.map((row) => row.number)}`);
  // }, []);

  useEffect(() => {
    getAllNumbers();
  }, [getAllNumbers]);

  return (
    <div className="main">
      <form className="form" onSubmit={saveNumber}>
        <div>
          <label>Enter your value: </label>
        </div>

        <input
          type="number"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button>Submit</button>
      </form>

      <div className="wrapper flex">
      <div className="content"> 
      {values.map((value, idx) => (
        
        <div className="box" key={idx}>
          <div>
            <button onClick={getAllNumbers}>Get all numbers</button>
            <br />
          </div>

          <span className="title">Values</span>
          <div className="values">
            {values.map((value, idx) => (
              <div className="value" key={idx}>
                <Link
                  to={{
                    pathname: `/details/${value}`,
                  }}
                  state={{ id: value }}
                >
                  {value}
                </Link>
              </div>
            ))}
          </div>
        </div>
        
      ))}
</div>
        {/* <div className="box">
          <div>
            <button onClick={getAllNumbers}>Get all numbers</button>
            <br />
          </div>

          <span className="title">Values</span>
          <div className="values">
            {values.map((value, idx) => (
              <div className="value" key={idx}>
                <Link
                  to={{
                    pathname: `/details/${value}`,
                  }}
                  state={{ id: value }}
                >
                  {value}
                </Link>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="box">
          <div>
            <button onClick={getAllNumbers}>Get all numbers</button>
            <br />
          </div>

          <span className="title">Values</span>
          <div className="values">
            {values.map((value, idx) => (
              <div className="value" key={idx}>
                <Link
                  to={{
                    pathname: `/details/${value}`,
                  }}
                  state={{ id: value }}
                >
                  {value}
                </Link>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainComponent;
