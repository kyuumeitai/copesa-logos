import React from "react";

const FactChecking = props => {
  const {
    dark = "#000000",
    light = "#ffffff",
    red = "#A01316",
    schema = "common"
  } = props;

  const colorschema = {
    isotypebackground: red,
    isotypeletter: light,
    letters: dark
  };

  if (schema === "light") {
    colorschema.isotypebackground = red;
    colorschema.isotypeletter = light;
    colorschema.letters = light;
  }

  return (
    <svg x="0px" y="0px" viewBox="0 0 538 72" {...props}>
      <g>
        <g>
          <rect
            fill={colorschema.isotypebackground}
            x="10.5"
            y="6.8"
            width="61.4"
            height="58.7"
          />
          <polygon
            fill={colorschema.isotypeletter}
            points="17.9,17.5 23.8,17.5 23.8,49.6 40.6,49.6 40.6,54.8 17.9,54.8 		"
          />
          <polygon
            fill={colorschema.isotypeletter}
            points="47.4,22.7 36.3,22.7 36.3,17.5 64.4,17.5 64.4,22.7 53.3,22.7 53.3,54.8 47.4,54.8 		"
          />
        </g>
        <g fill={colorschema.letters}>
          <polygon
            points="305,56.5 329.7,56.5 329.7,51.7 310.4,51.7 310.4,38.9 329,38.9 329,34 310.4,34 310.4,21.7 329.7,21.7
			329.7,16.9 305,16.9 		"
          />
          <path
            d="M246.2,24.4c1.4-2.2,3.6-3.3,6.5-3.3c1.1,0,2.1,0.2,2.9,0.5c0.8,0.3,1.5,0.7,2,1.3c0.6,0.5,1.1,1.2,1.5,1.9
			c0.4,0.7,0.8,1.5,1.1,2.4l0.1,0.4l4.7-2.2V25c-0.5-1-1.1-2.1-1.7-3.1s-1.5-2-2.4-2.8c-1-0.8-2.1-1.5-3.5-2
			c-1.3-0.5-2.9-0.7-4.7-0.7c-4.9,0-8.5,1.8-10.9,5.3c-2.3,3.5-3.5,8.6-3.5,15.1s1.2,11.6,3.5,15.1c2.4,3.5,6,5.3,10.9,5.3
			c1.8,0,3.4-0.3,4.7-0.7c1.3-0.5,2.5-1.2,3.5-2c0.9-0.8,1.8-1.8,2.4-2.8s1.2-2.1,1.7-3.2l0.2-0.3l-4.7-2.2l-0.1,0.4
			c-0.3,0.8-0.7,1.6-1.1,2.4c-0.4,0.7-0.9,1.4-1.5,1.9s-1.3,1-2,1.3c-0.8,0.3-1.8,0.5-2.9,0.5c-3,0-5.1-1.1-6.5-3.3
			c-1.5-2.3-2.2-5.3-2.2-9.1v-6.3C244,29.7,244.7,26.7,246.2,24.4z"
          />
          <polygon
            points="291.5,34 277.1,34 277.1,16.9 271.7,16.9 271.7,56.5 277.1,56.5 277.1,38.9 291.5,38.9 291.5,56.5 296.9,56.5
			296.9,16.9 291.5,16.9 		"
          />
          <path
            d="M344.6,24.4c1.4-2.2,3.6-3.3,6.5-3.3c1.1,0,2.1,0.2,2.9,0.5s1.5,0.7,2.1,1.3c0.6,0.5,1.1,1.2,1.5,1.9
			c0.4,0.7,0.8,1.5,1.1,2.4l0.1,0.4l4.7-2.2l-0.2-0.3c-0.5-1-1.1-2.1-1.7-3.1s-1.5-2-2.4-2.8c-1-0.8-2.1-1.5-3.5-2
			c-1.3-0.5-2.9-0.7-4.7-0.7c-4.9,0-8.5,1.8-10.9,5.3c-2.3,3.5-3.5,8.6-3.5,15.1s1.2,11.6,3.5,15.1c2.4,3.5,6,5.3,10.9,5.3
			c1.8,0,3.4-0.3,4.7-0.7c1.3-0.5,2.5-1.2,3.5-2c0.9-0.8,1.8-1.8,2.4-2.8s1.2-2.1,1.7-3.2l0.2-0.3l-4.7-2.2l-0.1,0.4
			c-0.3,0.8-0.7,1.6-1.1,2.4c-0.4,0.7-0.9,1.4-1.5,1.9s-1.3,1-2,1.3c-0.8,0.3-1.8,0.5-2.9,0.5c-3,0-5.1-1.1-6.5-3.3
			c-1.5-2.3-2.2-5.3-2.2-9.1v-6.3C342.4,29.7,343.1,26.7,344.6,24.4z"
          />
          <polygon
            points="403.1,21.4 412.7,21.4 412.7,52 403.1,52 403.1,56.5 427.8,56.5 427.8,52 418.1,52 418.1,21.4 427.8,21.4
			427.8,16.9 403.1,16.9 		"
          />
          <rect x="500.1" y="61.1" width="27.4" height="4.8" />
          <path
            d="M474.9,24.4c1.4-2.2,3.5-3.3,6.5-3.3c1.1,0,2.1,0.2,2.9,0.5s1.5,0.7,2.1,1.3c0.6,0.5,1.1,1.2,1.5,1.9
			c0.4,0.8,0.8,1.5,1.1,2.4l0.1,0.4l4.7-2.1l-0.1-0.3c-0.4-1.1-0.9-2.1-1.6-3.1c-0.6-1-1.5-2-2.4-2.8c-1-0.8-2.2-1.5-3.5-2
			c-1.4-0.5-3-0.7-4.9-0.7c-4.8,0-8.4,1.8-10.8,5.3c-2.3,3.5-3.5,8.7-3.5,15.4c0,6.4,1.1,11.4,3.1,14.9c2.1,3.5,5.4,5.3,9.7,5.3
			c1.4,0,2.6-0.2,3.6-0.5s1.9-0.8,2.6-1.4c0.7-0.6,1.3-1.2,1.8-2c0.3-0.4,0.5-0.9,0.8-1.3v4.5h5.1V36.5h-13.3V41h8.2v3.6
			c0,2.3-0.7,4.2-2,5.6c-1.3,1.4-3.2,2.2-5.6,2.2c-1.5,0-2.8-0.3-3.8-0.9c-1-0.6-1.9-1.5-2.5-2.6c-0.7-1.1-1.1-2.5-1.4-4.1
			s-0.4-3.4-0.4-5.3v-6C472.8,29.7,473.5,26.7,474.9,24.4z"
          />
          <polygon
            points="455.9,48.9 443,17.2 442.9,16.9 435.6,16.9 435.6,56.5 440.6,56.5 440.6,24.2 453.6,56.5 460.8,56.5 460.8,16.9
			455.9,16.9 		"
          />
          <polygon
            points="398.5,16.9 391.9,16.9 380.4,30.9 375.7,36.7 375.7,16.9 370.3,16.9 370.3,56.5 375.7,56.5 375.7,43.8
			380.9,37.7 392.3,56.3 392.4,56.5 398.8,56.5 384.6,33.7 		"
          />
          <rect x="219.2" y="61.1" width="27.4" height="4.8" />
          <polygon points="89.9,56.5 95.3,56.5 95.3,38.9 113.4,38.9 113.4,34.1 95.3,34.1 95.3,21.8 115.1,21.8 115.1,17 89.9,17 		" />
          <path d="M131.3,17l-12.1,39.5h5.6l3.3-11h13l3.3,11h5.7L138,17H131.3z M139.8,40.6h-10.4l5.2-17.8L139.8,40.6z" />
          <polygon points="184.5,21.8 197.4,21.8 197.4,56.5 202.8,56.5 202.8,21.8 215.8,21.8 215.8,17 184.5,17 		" />
          <path
            d="M162.1,24.5c1.4-2.2,3.6-3.3,6.5-3.3c1.1,0,2.1,0.2,2.9,0.5c0.8,0.3,1.5,0.7,2,1.3c0.6,0.5,1.1,1.2,1.5,1.9
			c0.4,0.7,0.8,1.5,1.1,2.4l0.1,0.4l4.7-2.2l-0.2-0.3c-0.5-1-1.1-2.1-1.7-3.1c-0.6-1-1.5-2-2.4-2.8c-1-0.8-2.1-1.5-3.4-2
			c-1.3-0.5-2.9-0.7-4.7-0.7c-4.8,0-8.5,1.8-10.9,5.3c-2.3,3.5-3.5,8.6-3.5,15.1s1.2,11.6,3.5,15.1c2.4,3.5,6,5.3,10.9,5.3
			c1.8,0,3.4-0.2,4.7-0.7s2.5-1.2,3.4-2s1.8-1.8,2.4-2.8c0.6-1,1.2-2.1,1.7-3.2l0.2-0.3l-4.7-2.2l-0.1,0.4c-0.3,0.8-0.7,1.6-1.1,2.4
			c-0.4,0.7-0.9,1.4-1.5,1.9s-1.3,1-2,1.3c-0.8,0.3-1.8,0.5-2.9,0.5c-3,0-5.1-1.1-6.5-3.3c-1.5-2.3-2.2-5.3-2.2-9.1V34
			C159.9,29.8,160.7,26.7,162.1,24.5z"
          />
        </g>
      </g>
    </svg>
  );
};

export default FactChecking;
