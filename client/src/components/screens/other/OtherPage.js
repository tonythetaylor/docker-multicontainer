import React from 'react'
import { Link } from "react-router-dom";

const OtherPage = () => {
  return (
    <div  style={{padding: 20}}>
      I'm another page!
      <br />
      <br />
      <Link to="/">Go back to home screen</Link>
    </div>
  );
};

export default OtherPage;
