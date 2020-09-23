import React from "react";

const Culto = props => {
  const {
    dark = "#000000",
    light = "#ffffff",
    cerulean = "#128AFD",
    schema = "common"
  } = props;

  const colorschema = {
    isotypebackground: cerulean,
    isotypeletter: light,
    letters: light
  };

  if (schema === "light") {
    colorschema.isotypebackground = light;
    colorschema.isotypeletter = cerulean;
    colorschema.letters = cerulean;
  }

  return (
    <svg x="0px" y="0px" viewBox="0 0 526.5 203.8">
      <rect
        x="0.9"
        y="43.3"
        fill={colorschema.isotypebackground}
        width="483.9"
        height="159"
      />
      <rect
        x="40.9"
        y="1.3"
        fill={colorschema.isotypebackground}
        width="483.9"
        height="159"
      />
      <polygon
        fill={colorschema.isotypeletter}
        points="74.2,161.7 71.9,159.4 69.2,162.2 73.7,162.2 "
      />
      <path
        fill={colorschema.isotypeletter}
        d="M39.7,0v41.6H0v162.2h486.8v-41.6h39.7V0H39.7z M3.2,44.8h23.6L3.2,68.4V44.8z M3.2,72.9l28.1-28.1h8.3v19
	L3.2,100.4V72.9z M3.2,104.9l36.4-36.4v27.4L3.2,132.3V104.9z M3.2,136.9l36.4-36.5v27.4L3.2,164.2V136.9z M3.2,168.8l36.4-36.5
	v27.4L3.2,196.2V168.8z M30.8,200.6H3.4l38.4-38.4h27.4L30.8,200.6z M62.8,200.6H35.4l38.4-38.4h27.4L62.8,200.6z M94.8,200.6H67.3
	l38.4-38.4h27.4L94.8,200.6z M126.8,200.6H99.3l38.4-38.4h27.4L126.8,200.6z M158.8,200.6h-27.4l38.4-38.4h27.4L158.8,200.6z
	 M190.7,200.6h-27.5l38.4-38.4h27.4L190.7,200.6z M222.7,200.6h-27.4l38.4-38.4H261L222.7,200.6z M254.6,200.6h-27.5l38.4-38.4h27.4
	L254.6,200.6z M286.6,200.6h-27.5l38.4-38.4h27.4L286.6,200.6z M318.6,200.6H291l38.4-38.4h27.4L318.6,200.6z M350.5,200.6h-27.6
	l38.4-38.4h27.4L350.5,200.6z M382.5,200.6h-27.6l38.4-38.4h27.4L382.5,200.6z M414.5,200.6h-27.4l38.4-38.4h27.4L414.5,200.6z
	 M483.8,200.6h-33l32.8-32.8L483.8,200.6z M483.8,163.2l-37.4,37.4h-27.6l38.4-38.4h26.4L483.8,163.2z M523.5,159H42.9V3.2h480.4
	L523.5,159z"
      />
      <path
        fill={colorschema.isotypeletter}
        d="M125.3,101c-8.7,0-14.9-7.3-14.9-18.3s6.2-18.2,14.9-18.2c4.2-0.1,8.3,1.6,11.1,4.7l7.7-11.7
	c0,0-5.9-7.7-19-7.7c-1.1,0-2.1,0.1-3.2,0.2c-2,0.2-3.9,0.6-5.8,1.2c-8.2,2.7-14.1,9-17.2,17.2c-0.8,2.1-1.4,4.2-1.8,6.3
	c-0.5,2.6-0.8,5.3-0.8,8c0,18.1,10.7,33,28.7,33c13.1,0,19-7.8,19-7.8l-7.7-11.7C133.6,99.5,129.5,101.2,125.3,101"
      />
      <path
        fill={colorschema.isotypeletter}
        d="M218.3,87.1c0,7.9-3.4,13.9-11.2,13.9c-7.5,0-11.2-6-11.2-13.9V51.3h-13.5v35.8c0,16.3,9.6,28.7,24.7,28.7
	c15.4,0,24.7-12.4,24.7-28.7V51.3h-13.4V87.1z"
      />
      <polygon
        fill={colorschema.isotypeletter}
        points="288.5,51.3 275,51.3 275,114.2 313.3,114.2 313.3,101.1 288.5,101.1 "
      />
      <polygon
        fill={colorschema.isotypeletter}
        points="341.4,64.4 357.1,64.4 357.1,114.3 370.6,114.3 370.6,64.4 386.2,64.4 386.2,51.3 341.4,51.3 "
      />
      <polygon
        fill={colorschema.isotypeletter}
        points="288.5,51.3 275,51.3 275,114.2 313.3,114.2 313.3,101.1 288.5,101.1 "
      />
      <path
        fill={colorschema.isotypeletter}
        d="M218.3,87.1c0,7.9-3.4,13.9-11.2,13.9c-7.5,0-11.2-6-11.2-13.9V51.3h-13.5v35.8c0,16.3,9.6,28.7,24.7,28.7
	c15.4,0,24.7-12.4,24.7-28.7V51.3h-13.4V87.1z"
      />
      <polygon
        fill={colorschema.isotypeletter}
        points="341.4,64.4 357.1,64.4 357.1,114.3 370.6,114.3 370.6,64.4 386.2,64.4 386.2,51.3 341.4,51.3 "
      />
      <path
        fill={colorschema.isotypeletter}
        d="M450,49.9c-16.8,0-28.5,14.8-28.5,32.9s11.7,33,28.5,33c17,0,28.7-14.9,28.7-33S466.9,49.9,450,49.9 M450,100.9
	c-8.1,0-14.6-7.2-14.6-18.2s6.5-18.2,14.6-18.2c8.2,0,14.7,7.2,14.7,18.2S458.2,100.9,450,100.9"
      />
    </svg>
  );
};

export default Culto;
