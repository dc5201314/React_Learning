import React from "react";

import { useLocation } from "react-router-dom";
const About = () => {
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const name = param.get("name");
  const age = param.get("age");

  return (
    <div>
      <h1>About</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default About;
