import React from 'react'

export const Coronavirus = props => {
  const {
    red = '#91252f',
    dark = '#000000',
    light = '#ffffff',
    schema = 'common',
  } = props

  const colorschema = {
    isotypebox: red,
    isotypeletter: light,
    letters: dark,
  }

  if (schema === 'light') {
    colorschema.isotypebox = red
    colorschema.isotypeletter = light
    colorschema.letters = light
  }

  return (
    <svg x="0px" y="0px" viewBox="0 0 530.4 120.5" {...props}>
      <path
        fill={colorschema.isotypebox}
        d="M523.8,53.7c-3,0-5.5,2-6.3,4.7h-9.7c-0.4-9-4-17.2-9.8-23.5l6.8-6.8c1,0.5,2,0.8,3.1,0.8
	c1.8,0,3.4-0.7,4.7-1.9c1.2-1.2,1.9-2.9,1.9-4.7c0-1.8-0.7-3.4-1.9-4.7c-2.5-2.5-6.8-2.5-9.3,0c-1.2,1.2-1.9,2.9-1.9,4.7
	c0,1.1,0.3,2.2,0.8,3.1l-6.8,6.8c-6.3-5.7-14.5-9.3-23.5-9.8v-9.7c2.7-0.8,4.7-3.3,4.7-6.3c0-3.6-3-6.6-6.6-6.6
	c-3.6,0-6.6,3-6.6,6.6c0,3,2,5.5,4.7,6.3v9.7c-9,0.4-17.2,4-23.5,9.8l-6.8-6.8c0.5-1,0.8-2,0.8-3.1c0-1.8-0.7-3.4-1.9-4.7
	c-2.5-2.5-6.8-2.5-9.3,0c-1.2,1.2-1.9,2.9-1.9,4.7c0,1.8,0.7,3.4,1.9,4.7c1.2,1.2,2.9,1.9,4.7,1.9c1.1,0,2.2-0.3,3.1-0.8l6.8,6.8
	c-5.7,6.3-9.3,14.5-9.7,23.5h-9.7c-0.8-2.7-3.3-4.7-6.3-4.7c-3.6,0-6.6,3-6.6,6.6c0,3.6,3,6.6,6.6,6.6c3,0,5.5-2,6.3-4.7h9.7
	c0.4,9,4,17.2,9.7,23.5l-6.9,6.9c-2.5-1.3-5.8-1-7.8,1.1c-1.2,1.2-1.9,2.9-1.9,4.7c0,1.8,0.7,3.4,1.9,4.7c1.2,1.2,2.9,1.9,4.7,1.9
	c1.8,0,3.4-0.7,4.7-1.9c1.2-1.2,1.9-2.9,1.9-4.7c0-1.1-0.3-2.2-0.8-3.1l6.8-6.8c6.3,5.7,14.5,9.3,23.5,9.8v9.7
	c-2.7,0.8-4.7,3.3-4.7,6.3c0,3.6,3,6.6,6.6,6.6c3.6,0,6.6-3,6.6-6.6c0-3-2-5.5-4.7-6.3V98c9-0.4,17.2-4,23.5-9.8l6.8,6.8
	c-1.4,2.5-1,5.7,1.1,7.8c1.2,1.2,2.9,1.9,4.7,1.9c1.8,0,3.4-0.7,4.7-1.9c1.2-1.2,1.9-2.9,1.9-4.7c0-1.8-0.7-3.4-1.9-4.7
	c-2-2-5.3-2.4-7.8-1.1l-6.9-6.9c5.7-6.3,9.3-14.5,9.8-23.5h9.7c0.8,2.7,3.3,4.7,6.3,4.7c3.6,0,6.6-3,6.6-6.6
	C530.4,56.6,527.4,53.7,523.8,53.7 M416.4,63.2c-1.6,0-2.9-1.3-2.9-2.9c0-1.6,1.3-2.9,2.9-2.9s2.9,1.3,2.9,2.9
	C419.3,61.9,418,63.2,416.4,63.2 M506,20.3c0.5-0.5,1.3-0.8,2-0.8c0.8,0,1.5,0.3,2,0.8c0.5,0.5,0.8,1.3,0.8,2c0,0.8-0.3,1.5-0.8,2
	c-1.1,1.1-3,1.1-4.1,0c-0.5-0.5-0.8-1.3-0.8-2C505.2,21.5,505.5,20.8,506,20.3 M467.2,6.6c0-1.6,1.3-2.9,2.9-2.9
	c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9C468.5,9.5,467.2,8.2,467.2,6.6 M430.1,24.4c-0.5-0.5-0.8-1.3-0.8-2
	c0-0.8,0.3-1.5,0.8-2c0.5-0.5,1.3-0.8,2-0.8c0.8,0,1.5,0.3,2,0.8c0.5,0.5,0.8,1.3,0.8,2c0,0.8-0.3,1.5-0.8,2
	C433.1,25.4,431.2,25.4,430.1,24.4 M434.2,100.3c-1.1,1.1-3,1.1-4.1,0c-0.5-0.5-0.8-1.3-0.8-2c0-0.8,0.3-1.5,0.8-2
	c0.5-0.5,1.3-0.8,2-0.8c0.8,0,1.5,0.3,2,0.8c0.5,0.5,0.8,1.3,0.8,2C435,99,434.7,99.7,434.2,100.3 M473,113.9c0,1.6-1.3,2.9-2.9,2.9
	c-1.6,0-2.9-1.3-2.9-2.9c0-1.6,1.3-2.9,2.9-2.9C471.7,111,473,112.3,473,113.9 M510.1,96.2c0.5,0.5,0.8,1.3,0.8,2
	c0,0.8-0.3,1.5-0.8,2c-1.1,1.1-3,1.1-4.1,0c-1.1-1.1-1.1-3,0-4.1c0.5-0.5,1.3-0.8,2-0.8C508.8,95.3,509.6,95.6,510.1,96.2
	 M470.1,94.4c-18.8,0-34.1-15.3-34.1-34.1c0-18.8,15.3-34.1,34.1-34.1c18.8,0,34.1,15.3,34.1,34.1C504.2,79.1,488.9,94.4,470.1,94.4
	 M523.8,63.2c-1.6,0-2.9-1.3-2.9-2.9c0-1.6,1.3-2.9,2.9-2.9c1.6,0,2.9,1.3,2.9,2.9C526.7,61.9,525.4,63.2,523.8,63.2"
      />
      <path
        fill={colorschema.isotypebox}
        d="M452.1,65.5c-1.2,1.2-1.9,2.9-1.9,4.7c0,1.8,0.7,3.4,1.9,4.7s2.9,1.9,4.7,1.9c1.8,0,3.4-0.7,4.7-1.9
	s1.9-2.9,1.9-4.7c0-1.8-0.7-3.4-1.9-4.7C458.9,63,454.6,63,452.1,65.5 M458.8,72.2c-1.1,1.1-3,1.1-4.1,0c-0.5-0.5-0.8-1.3-0.8-2
	c0-0.8,0.3-1.5,0.8-2c0.5-0.5,1.3-0.8,2-0.8c0.8,0,1.5,0.3,2,0.8c0.5,0.5,0.8,1.3,0.8,2C459.6,70.9,459.3,71.7,458.8,72.2"
      />
      <path
        fill={colorschema.isotypebox}
        d="M478.8,65.5c-1.2,1.2-1.9,2.9-1.9,4.7c0,1.8,0.7,3.4,1.9,4.7s2.9,1.9,4.7,1.9c1.8,0,3.4-0.7,4.7-1.9
	c1.2-1.2,1.9-2.9,1.9-4.7c0-1.8-0.7-3.4-1.9-4.7C485.6,63,481.3,63,478.8,65.5 M485.5,72.2c-1.1,1.1-3,1.1-4.1,0
	c-0.5-0.5-0.8-1.3-0.8-2c0-0.8,0.3-1.5,0.8-2c0.5-0.5,1.3-0.8,2-0.8c0.8,0,1.5,0.3,2,0.8c0.5,0.5,0.8,1.3,0.8,2
	C486.4,70.9,486.1,71.7,485.5,72.2"
      />
      <path
        fill={colorschema.isotypebox}
        d="M465.4,41.2c-1.2,1.2-1.9,2.9-1.9,4.7c0,1.8,0.7,3.4,1.9,4.7c1.2,1.2,2.9,1.9,4.7,1.9s3.4-0.7,4.7-1.9
	c1.2-1.2,1.9-2.9,1.9-4.7c0-1.8-0.7-3.4-1.9-4.7C472.3,38.7,467.9,38.7,465.4,41.2 M472.1,47.9c-1.1,1.1-3,1.1-4.1,0
	c-0.5-0.5-0.8-1.3-0.8-2c0-0.8,0.3-1.5,0.8-2c0.5-0.5,1.3-0.8,2-0.8c0.8,0,1.5,0.3,2,0.8c0.5,0.5,0.8,1.3,0.8,2
	C473,46.7,472.7,47.4,472.1,47.9"
      />
      <g fill={colorschema.letters}>
        <path
          d="M83.9,42.2c4.4,0,8.2,1,12.3,3l-1.9,7.8c-3.3-1.5-6.6-2.3-9.3-2.3c-5.2,0-8.1,3.2-8.1,9.7c0,6.5,2.8,9.7,8.1,9.7
	c2.6,0,6-0.8,9.3-2.3l1.9,7.7c-4.1,2-7.9,3-12.3,3c-12.6,0-17.2-8-17.2-18.1C66.7,50.2,71.3,42.2,83.9,42.2"
        />
        <path
          d="M95.8,60.3c0-10.1,5-18.1,16.7-18.1c11.7,0,16.7,8,16.7,18.1c0,10.1-5,18.1-16.7,18.1C100.8,78.4,95.8,70.4,95.8,60.3
	 M118.9,60.3c0-6.5-2.1-9.7-6.4-9.7c-4.3,0-6.4,3.2-6.4,9.7c0,6.4,2.1,9.7,6.4,9.7C116.8,69.9,118.9,66.7,118.9,60.3"
        />
        <path
          d="M145,66.5h-3.2v11.4h-10.3V42.7h15.8c7.9,0,13.2,4.4,13.2,11.9c0,4.8-2.2,8.3-5.7,10.2l7,13.1h-11.6L145,66.5z M141.8,58
	h4.4c2.1,0,4-0.8,4-3.5c0-2.6-1.9-3.5-4-3.5h-4.4V58z"
        />
        <path
          d="M161.5,60.3c0-10.1,5-18.1,16.7-18.1c11.7,0,16.7,8,16.7,18.1c0,10.1-5,18.1-16.7,18.1C166.5,78.4,161.5,70.4,161.5,60.3
	 M184.6,60.3c0-6.5-2.1-9.7-6.4-9.7c-4.3,0-6.4,3.2-6.4,9.7c0,6.4,2.1,9.7,6.4,9.7C182.5,69.9,184.6,66.7,184.6,60.3"
        />
        <polygon
          points="197.3,77.9 197.3,42.7 206.6,42.7 218.8,61.1 218.9,61.1 218.7,52.6 218.7,42.7 228.1,42.7 228.1,77.9 218.1,77.9
	206.5,60.4 206.4,60.4 206.6,67.9 206.6,77.9 "
        />
        <path
          d="M250.4,70.7h-9.2l-1.9,7.1h-10.1l10.6-35.4h12.4L263,77.9h-10.5L250.4,70.7z M245.7,53.2l-1.4,5.5l-1.4,4.5h5.8l-1.4-4.5
	l-1.4-5.5H245.7z"
        />
        <polygon
          points="273.9,61.8 275.3,67.3 275.5,67.3 276.9,61.8 281.9,42.7 291.9,42.7 281.3,78.1 268.9,78.1 258.3,42.7 268.8,42.7
	"
        />
        <rect x="292.6" y="42.7" width="10.3" height="35.2" />
        <path
          d="M319.7,66.5h-3.2v11.4h-10.3V42.7h15.8c7.9,0,13.2,4.4,13.2,11.9c0,4.8-2.2,8.3-5.7,10.2l7,13.1H325L319.7,66.5z M316.6,58
	h4.4c2.1,0,4-0.8,4-3.5c0-2.6-1.9-3.5-4-3.5h-4.4V58z"
        />
        <path
          d="M357.1,65V42.7h10.3V65c0,9.3-6.4,13.4-15.2,13.4c-8.8,0-15.2-4.1-15.2-13.4V42.7h10.3V65c0,2.7,1.1,5,4.9,5
	C356.1,69.9,357.1,67.7,357.1,65"
        />
        <path
          d="M369.2,76.6l1.4-8.2c5.2,1.3,9.7,1.8,12.3,1.8c2.2,0,4.3-0.7,4.3-2.4c0-4.4-17.5-2.1-17.5-15.2c0-7.5,6.3-10.4,13.7-10.4
	c4.2,0,7.9,0.5,13.2,2l-2.1,8c-4.4-1.3-8.2-1.8-10.9-1.8c-2.2,0-3.6,0.6-3.6,2.2c0,4.3,17.5,1.7,17.5,14.4c0,8-6.3,11.4-14.2,11.4
	C379.2,78.4,374.7,78.1,369.2,76.6"
        />
      </g>
      <rect y="38.5" fill={colorschema.isotypebox} width="45.3" height="43.5" />
      <polygon
        fill={colorschema.isotypeletter}
        points="5.4,46.5 9.8,46.5 9.8,70.4 22.3,70.4 22.3,74.2 5.4,74.2 "
      />
      <polygon
        fill={colorschema.isotypeletter}
        points="27.3,50.4 19,50.4 19,46.5 39.9,46.5 39.9,50.4 31.6,50.4 31.6,74.2 27.3,74.2 "
      />
    </svg>
  )
}
