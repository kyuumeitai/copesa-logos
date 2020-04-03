import React from "react";

import Circle from "./Circle";
import CircleSmall from "./CircleSmall";
import Full from "./Full";
import Small from "./Small";

const Laboratorio = ({ version = "full" }) => {
  console.log(">>>Version:", version);
  switch (version) {
    case "circle":
      console.log(">>>Inside Circle");
      return Circle;
      break;
    case "circle-small":
      return CircleSmall;
      break;
    case "small":
      return Small;
      break;

    default:
      return Full;
      break;
  }
};

export default Laboratorio;
