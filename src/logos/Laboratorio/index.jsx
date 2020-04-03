import React from "react";

import Circle from "./Circle";
import CircleSmall from "./CircleSmall";
import Full from "./Full";
import Small from "./Small";

const Laboratorio = ({ version = "full" }) => {
  console.log(">>>Version:", version, Circle);
  switch (version) {
    case "circle":
      console.log(">>>Inside Circle");
      return <Circle />;
    case "circle-small":
      return <CircleSmall />;
    case "small":
      return <Small />;
    default:
      return <Full />;
  }
};

export default Laboratorio;
