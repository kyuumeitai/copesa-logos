import React from "react";

const LaTerceraDomingo = props => {
  const {
    dark = "#000000",
    light = "#ffffff",
    red = "#A01316",
    schema = "common"
  } = props;

  const colorschema = {
    isotypebackground: red,
    isotypeletter: light,
    letters: red,
    altletters: dark
  };

  if (schema === "light") {
    colorschema.isotypebackground = red;
    colorschema.isotypeletter = light;
    colorschema.letters = light;
    colorschema.altletters = red;
  }

  return (
    <svg x="0px" y="0px" viewBox="0 0 2066.7 142.8" {...props}>
      <g>
        <g fill={colorschema.letters}>
          <polygon points="399,22.1 358.1,22.1 358.1,2.8 461.8,2.8 461.8,22.1 420.8,22.1 420.8,140.9 399,140.9 		" />
          <path
            d="M674.1,140.9h-25.8l-23.6-33.6c-3,0.5-6.5,0.6-9.9,0.6h-13.6v32.9h-21.7V2.8h35.3c38,0,58.9,20.9,58.9,52.8
			c0,21.3-9.5,37.8-27.6,46.1L674.1,140.9z M614,89.3c26.5,0,37.3-12.6,37.3-33.7c0-20.9-10.9-33.5-37.3-33.5h-12.9v67.2H614z"
          />
          <path
            d="M682.6,71.9c0-40.8,31.1-70.9,70.5-70.9c25.6,0,43.3,9.9,55.3,26.8l-16.7,11.8c-9.2-12.4-20.9-18.9-39.2-18.9
			c-27.4,0-47.3,21.9-47.3,51.2c0,29.9,20.4,51.2,48.1,51.2c17.9,0,31.1-6.7,41.5-20.1l16.9,11.6c-14.2,18.9-32.3,28.2-59.1,28.2
			C713,142.8,682.6,112.7,682.6,71.9"
          />
          <path
            d="M1021,140.9h-25.8l-23.6-33.6c-3,0.5-6.5,0.6-9.9,0.6h-13.5v32.9h-21.8V2.8h35.3c38,0,58.9,20.9,58.9,52.8
			c0,21.3-9.6,37.8-27.7,46.1L1021,140.9z M960.8,89.3c26.6,0,37.4-12.6,37.4-33.7c0-20.9-11-33.5-37.4-33.5h-12.7v67.2H960.8z"
          />
          <path
            d="M1047.3,140.9h-21.9L1085.9,0h1.2l60.7,140.9H1125l-7.9-19.3h-61.7L1047.3,140.9z M1086.4,47.7l-23,54.6h45.5
			L1086.4,47.7z"
          />
          <polygon
            points="913.3,121.7 845.1,121.7 845.1,98.3 903.7,98.3 903.7,79.4 845.1,79.4 845.1,22.1 913.3,22.1
			913.3,2.8 823.4,2.8 823.4,140.9 913.3,140.9 		"
          />
          <polygon
            points="497.2,98.3 555.9,98.3 555.9,79.4 497.2,79.4 497.2,22.1 566.1,22.1 566.1,2.8 475.5,2.8
			475.5,140.9 566.3,140.9 566.3,121.7 497.2,121.7 		"
          />
          <polygon points="167.9,2.9 189.6,2.9 189.6,121.7 252,121.7 252,141 167.9,141 		" />
          <path
            d="M258.4,141h-22L297,0.1h1.3l60.7,141H336l-7.9-19.3h-61.8L258.4,141z M297.4,47.8l-22.9,54.6h45.5L297.4,47.8
			z"
          />
        </g>
        <g fill={colorschema.altletters}>
          <path
            d="M1174,3.2h37.9c44.2,0,73.6,27.6,73.6,68.9c0,41.3-29.2,68.9-73.6,68.9H1174V3.2z M1210.5,122.2
			c35.9,0,52.7-20.7,52.7-50c0-29.4-16.8-50-52.7-50h-15v100.1H1210.5z"
          />
          <path
            d="M1295.6,72.1c0-41.1,31.6-70.7,71.1-70.7c39.3,0,70.9,29.6,70.9,70.7c0,41.1-31.6,70.7-70.9,70.7
			C1327.2,142.8,1295.6,113.2,1295.6,72.1z M1415.8,72.1c0-29.4-20.3-51.5-49-51.5c-28.8,0-49.2,22.1-49.2,51.5
			c0,29.4,20.5,51.5,49.2,51.5C1395.5,123.6,1415.8,101.5,1415.8,72.1z"
          />
          <path
            d="M1454.2,1.8h2.2l65.8,77l65.3-77h2.2V141h-20.5V69.5c0-7.7,0.8-19.9,0.8-19.9s-6.7,10.3-12.3,16.6l-34.7,41.7
			h-2.4L1486,66.2c-5.2-6.3-12.1-16.6-12.1-16.6s0.8,12.1,0.8,19.9V141h-20.5V1.8z"
          />
          <path d="M1613.5,3.2h21.3V141h-21.3V3.2z" />
          <path
            d="M1689.7,60.6c-5.5-5.9-13-15.4-13-15.4s1.4,11.3,1.4,19.9v76h-19.9V1.8h2.8l76,81.7
			c5.3,5.7,12.8,15.4,12.8,15.4s-1.4-12.1-1.4-19.9V3.2h19.9v139.2h-2.6L1689.7,60.6z"
          />
          <path
            d="M1784.9,72.1c0-41.1,29.8-70.5,70.7-70.5c21.1,0,37.7,5.9,48.8,18.4l-14.4,14.4c-7.9-8.3-18-13.6-34.4-13.6
			c-28.8,0-48.8,21.9-48.8,51.3c0,29.4,20.3,51.5,51.5,51.5c14.2,0,26.3-3.6,34-8.9V90.4h-37.1V71.5h56.7v53.7
			c-8.9,8.1-28,17.6-53.7,17.6C1815.3,142.8,1784.9,113.2,1784.9,72.1z"
          />
          <path
            d="M1924.7,72.1c0-41.1,31.6-70.7,71.1-70.7c39.3,0,70.9,29.6,70.9,70.7c0,41.1-31.6,70.7-70.9,70.7
			C1956.3,142.8,1924.7,113.2,1924.7,72.1z M2044.8,72.1c0-29.4-20.3-51.5-49-51.5c-28.8,0-49.2,22.1-49.2,51.5
			c0,29.4,20.5,51.5,49.2,51.5C2024.6,123.6,2044.8,101.5,2044.8,72.1z"
          />
        </g>
        <g>
          <rect
            fill={colorschema.isotypebackground}
            x="0"
            y="2.8"
            width="143.9"
            height="138.1"
          />
          <polygon
            fill={colorschema.isotypeletter}
            points="17.2,28.2 31.1,28.2 31.1,103.9 70.7,103.9 70.7,116.2 17.2,116.2 		"
          />
          <polygon
            fill={colorschema.isotypeletter}
            points="86.6,40.5 60.4,40.5 60.4,28.2 126.6,28.2 126.6,40.5 100.4,40.5 100.4,116.2 86.6,116.2 		"
          />
        </g>
      </g>
    </svg>
  );
};

export default LaTerceraDomingo;
