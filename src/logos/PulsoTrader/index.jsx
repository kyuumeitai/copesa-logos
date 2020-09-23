import React from "react";

const PulsoTrader = props => {
  const { dark = "#000000", light = "#ffffff", schema = "common" } = props;

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
    <svg x="0px" y="0px" viewBox="0 0 784 158.5" {...props}>
      <g fill={colorschema.letters}>
        <path d="M394.7,1.2v4.6h27.9v152h6.4V5.9h28.1V0.2h-62.4V1.2z" />
        <path
          d="M513.4,103.7c-1.3-2.8-3.1-5.2-5.4-7.2c2.9-1.4,5.2-3.7,6.8-6.4c3-5,4-10.8,4.8-16.4c0.8-8,0.8-16,0.8-24.1V40
	c0-7.8,0-15.8-2.2-23.7c-1.4-5-3.8-8.8-7-11.2c-3.8-3-9-4.6-15.6-4.6h-23.3v157.6h6.4V98.7h21.5c3.8,0.2,6.2,4.2,7.6,7.2
	c2.4,5.8,3.4,12.2,4.2,19.3l4.2,32.7h6.4l-4.2-33.1C517.4,117.8,516.4,110.3,513.4,103.7z M478.5,5.9h16.7c4.6,0,8.4,1,11,3
	c2.6,2,4.5,4.8,5.4,8c1.4,5,2.2,10.1,2.2,15.2c0.2,5,0.2,10.2,0.2,15.2v8.2c0,7.6-0.2,15.7-1.6,23.3c-0.8,3.8-2,8.2-4.8,11.2
	c-2.1,2-4.9,3.1-7.8,3h-21V5.9H478.5z"
        />
        <path
          d="M571.4,1V0.2h-12L559.2,1c-7.6,51.9-15.3,103.7-22.9,155.6l-0.2,1.2h6.6l5.4-38.1h34.5l5.4,38.1h6.6l-0.2-1.2
	C586.6,104.9,578.9,53.1,571.4,1z M566,5.9l15.5,108.5h-32.5c4.2-29.9,8.6-59.8,12.8-89.7l2.6-18.8L566,5.9z"
        />
        <path
          d="M658.8,45.8c0-7.6,0-15.4-1.2-23.1c-1.4-8-3.8-13.4-7.8-17.2c-5-4.4-11.6-5.2-16.4-5.2h-23.9v157.6h25.3
	c7.2,0,13.4-2.8,17-7.4c5-6.6,6.2-15,6.8-22.7c0.4-7.2,0.4-14.4,0.4-21.5C658.8,103.5,658.8,47.6,658.8,45.8z M652.4,65.6v55.1
	c0.1,5.9-0.3,11.8-1.4,17.6c-1.2,4.8-3,8.4-5.8,10.4c-2.6,2.2-6.4,3.2-11,3.2h-18.3V5.5h18.5c4.6,0,8.6,1.4,11.2,4
	c2.8,2.6,4.6,6.6,5.6,12.4s1,12,1,17.8L652.4,65.6z"
        />
        <path d="M677.7,157.9h41.1v-5.6h-34.7V81.9h32.5v-5.6h-32.5V5.9h34.7V0.2h-41.1V157.9z" />
        <path
          d="M780,124.4c-0.5-5.3-1.5-10.5-3-15.6c-1.2-3.8-3.2-8.8-7.4-12.2c2-1,3.7-2.3,5.2-4c3.6-4.4,5-10.2,5.8-15.4
	c1.2-8.8,1.2-17.6,1.2-26.5V40.3c0-6.8,0-14-1.4-21.1c-1.4-6.4-3.6-11-7.2-14c-3.8-3.2-9-5-15.6-5h-23.9v157.6h6.4V98.5h20.7
	c1.7,0,3.3,0.5,4.6,1.6c2,2,3.5,4.4,4.4,7c2,5.4,2.8,11.4,3.6,17l4.2,33.7h6.4L780,124.4z M775.5,53.2c0,8.2,0,16.8-1.4,25.3
	c-1,4.6-2.2,9.2-5.6,12c-2,1.6-4.8,2.4-8.4,2.4h-19.7v-87h17.7c3,0,8.4,0.8,11.8,4.6s4.6,9.2,5.2,13.4c0.7,6.3,0.9,12.6,0.8,18.8V48
	C775.6,49.7,775.5,51.4,775.5,53.2L775.5,53.2z"
        />
        <polygon points="167.5,1.8 167.5,157 227.4,157 227.4,135.7 226.2,135.7 193.3,135.7 193.3,1.8 " />
        <path
          d="M70.7,45.8c0,16.5,2,32.7-6.9,42.2c-7.5,8-15.2,11.2-38.4,10v59H0V1.8h36.6c13.6,0,25.6,4.3,31,16.1
	C70.8,25,70.6,35.7,70.7,45.8 M45.2,45.5c0-6.6,0.3-12-0.3-15.2c-1.3-6.3-5.5-6.5-11.5-6.5h-8v52.5h10.4c3.9,0,8.3-1,9-5.2
	C45.5,66.7,45.2,59.5,45.2,45.5"
        />
        <path
          d="M151.8,2h-25.4l0.3,126.5c0,0,0.1,7.2-10.5,7.5c-10.9,0.4-10-10.1-10-8.8V2H80.4l0.4,124.5c0,0-2.2,31.3,34,32.1
	c5.9,0,35,0.1,37.1-28.6C152.3,120.7,151.8,2,151.8,2"
        />
        <path
          d="M385.5,125.5c0,9.2-2.1,17.4-9.1,23.7s-16.9,8.6-26.5,8.6c-10.5,0-18.8-2.1-25.8-7.9s-10-14.1-10-23.9l-0.1-94.3
	c0-9.1,3.2-18.1,10.3-24.1c6.9-5.6,16-7.7,26.2-7.7c9.4,0,18.5,2.6,25.6,8.7s9.2,14.8,9.2,22.2L385.5,125.5z M359.9,125.2V32
	c0-2.2-0.4-9.6-10.1-9.6c-9.2,0-10.2,6.2-10.2,9.6v93.3c0,3.2,0.3,10.3,10.2,10.2S359.9,128.7,359.9,125.2"
        />
        <path
          d="M303.1,119.2c0,15.4-1.4,21.3-7.2,28.3c-5.2,6.3-15.5,10.4-27.8,10.4c-9.6,0-19.1-1.7-26-7.5c-7.7-6-10.3-14.5-10.3-24
	v-25.2h25v17.2c0.1,5.8-0.7,10.1,1.3,13s4.6,4.4,9.9,4.1c4.6-0.2,7.9-2.1,9.2-4.7c1.2-2.5,0.5-5.6,0.5-10.9c0-8.6,0.4-15.8-11-24.1
	s-18.7-13-26.1-22.3c-10.5-13.2-8.2-31.2-8.3-35c-0.5-14.4,0.4-20.3,5.9-27.1c6.1-7.9,17.1-11.3,29.5-11.3c11,0,20.3,3,26.8,9.8
	c5.9,6.2,7.8,14.3,7.8,23.7v22.6h-24.7c0.3-1.8,0-9.7-0.1-15.3s0.5-9.8-0.5-12.4c-1.8-4.1-4.6-6-10.1-5.8c-2.5-0.1-4.9,0.7-6.9,2.2
	c-2.6,2.1-2.8,5.9-2.4,14.4c0.2,3.7-0.3,7.4,0.4,10.7c0.9,4.6,3.4,8.7,8.8,13.1c8.4,6.9,18.8,12.9,25.9,21.5
	C302.6,96.5,303.1,106.1,303.1,119.2"
        />
      </g>
    </svg>
  );
};

export default PulsoTrader;
