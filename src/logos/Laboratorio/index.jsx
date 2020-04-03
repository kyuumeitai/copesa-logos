import React from "react";

import Circle from "./Circle";
import CircleSmall from "./CircleSmall";
import Full from "./Full";
import Small from "./Small";

const Laboratorio = ({ version = "full", ...rest }) => {
  switch (version) {
    case "circle":
      return <Circle {...rest} />;
    case "circle-small":
      return <CircleSmall {...rest} />;
    case "small":
      return <Small {...rest} />;
    default:
      return <Full {...rest} />;
  }
};

export default Laboratorio;
