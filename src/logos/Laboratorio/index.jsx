import React from "react";

import Circle from "./circle";
import Full from "./full";

const Laboratorio = ({ version = "full" }) => {
  if (version === "circle") {
    return Circle;
  } else {
    return Full;
  }
};

export default Laboratorio;
