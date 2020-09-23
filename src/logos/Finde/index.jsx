import React from "react";

const Finde = props => {
  const {
    dark = "#000000",
    light = "#ffffff",
    cerulean = "#128AFD",
    schema = "common"
  } = props;

  const colorschema = {
    isotypebackground: dark,
    isotypeletter: dark,
    letters: dark
  };

  if (schema === "light") {
    colorschema.isotypebackground = light;
    colorschema.isotypeletter = light;
    colorschema.letters = light;
  }

  return (
    <svg x="0px" y="0px" viewBox="0 0 340 127.1" {...props}>
      <g fill={colorschema.letters}>
        <path
          d="M12,70.9H0V52h12V27.9C12,9.4,20.7,0,38.4,0c10.1,0,16.8,3,22.1,9.1L48.2,24.3c-1.7-2-3.7-3.9-7.2-3.9c-3.7,0-6.2,2-6.2,7.2
	V52h19.4v18.8H34.8v52.9H12V70.9z"
        />
        <path
          d="M56.3,25.8c0-7.8,6.4-14.2,14.2-14.2c0.1,0,0.2,0,0.2,0c7.9-0.2,14.4,6,14.6,13.8c0.2,7.9-6,14.4-13.8,14.6
	c-0.3,0-0.5,0-0.8,0c-7.9,0.1-14.3-6.1-14.5-14C56.3,26,56.3,25.9,56.3,25.8z M59.3,52H82v71.7H59.3V52z"
        />
        <path
          d="M86.4,52h22.7l-0.5,11.8c4.4-8.6,12.8-13.3,22.8-13.3c15.7,0,26.9,11.4,26.9,31.8v41.4h-22.7V83.9c0-8.1-3.9-12.6-12-12.6
	c-9.1,0-14.5,5-14.5,14.1v38.4H86.3V52H86.4z"
        />
        <path
          d="M160.1,89.5c0-22.1,14.8-37.2,32.2-37.2c11.5,0,17.9,4.5,22.4,11.6V4h22.7v121.5h-22.7l0.5-10.4c-4,7.6-11.6,12-22.6,12
	C175.1,127.1,160.1,111.6,160.1,89.5z M215.4,89.5c0-10.6-6.4-17.2-16.2-17.2c-9.6,0-15.6,6.6-15.6,17.2c0,11.3,6.1,17.7,15.6,17.7
	C209,107.2,215.4,100.8,215.4,89.5z"
        />
        <path
          d="M279.8,108c6.5,0,12.8-2.1,18-5.8l13,13.9c-6.9,6.1-15.6,10.7-30.6,10.8c-25.6,0.2-42.2-15.2-42.3-37.3
	c-0.1-21.7,17.1-37.3,39.3-37.5c25.8-0.2,39.8,18.9,38.3,44l-54.4,0.4C263.4,103.9,269.5,108.1,279.8,108z M292.6,83.2
	c-1.1-7.9-6.1-12.6-15.1-12.5s-15,4.1-16.8,12.7L292.6,83.2z"
        />
        <path
          d="M311.6,110.4c0-7.9,6.5-14.2,14.3-14.1s14.2,6.5,14.1,14.3c0,7.8-6.4,14.1-14.1,14.1c-7.7,0.2-14.1-6-14.3-13.7
	C311.5,110.8,311.5,110.6,311.6,110.4z"
        />
      </g>
    </svg>
  );
};

export default Finde;
