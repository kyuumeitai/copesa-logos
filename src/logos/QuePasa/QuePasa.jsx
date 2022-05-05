import React from 'react'

const QuePasa = props => {
  const {
    dark = '#000000',
    light = '#ffffff',
    cerulean = '#128AFD',
    schema = 'common',
  } = props

  const colorschema = {
    isotypebackground: dark,
    isotypeletter: dark,
    letters: dark,
  }

  if (schema === 'light') {
    colorschema.isotypebackground = light
    colorschema.isotypeletter = light
    colorschema.letters = light
  }

  return (
    <svg x="0px" y="0px" viewBox="0 0 545.9 341.5" {...props}>
      <g fill={colorschema.letters}>
        <path
          d="M362.1,212.1c2.2-2.5,3.6-9.7,3.6-16.6c0-15.8,0.4-60.5,0-75.6c0-5.8-1.4-10.8-5.8-12.2c-3.4-1.3-6.9-2.2-10.4-2.9
	c-4.7-1.1-6.5-2.9-6.5-5s3.6-2.5,6.5-2.5c6.8,0,41.4-2.5,43.2-2.5s2.9,3.6,2.9,11.5c0,15.5-1.1,35.3-1.1,99.4
	c0,16.9,1.4,20.5,7.2,20.5c5-0.4,17.3-2.9,19.1-2.9c1.4,0.1,2.4,1.2,2.5,2.5c0,1.4-1.1,6.5-3.2,6.8c-12.6,1.8-34.2,7.2-42.1,9.4
	c-2.8,1-5.7,1.6-8.6,1.8c-1.4,0-3.2-3.2-3.2-6.5c0-6.5,0.4-15.1,0.7-19.1c0-0.7-1.4-0.7-1.8-0.4c-3.2,2.5-16.6,14-26.7,19.1
	c-7.3,3.8-15.5,5.6-23.8,5.4c-11.9,0-22.3-4.3-29.2-11.9c-5.8-6.1-9.4-16.2-9.4-28.8c0-29.5,0.7-68.8-0.4-81
	c-0.7-9.4-0.4-11.5-11.5-15.5c-2.9-1.1-6.8-2.9-6.8-5s2.9-2.9,7.9-2.9c19.5,0,31.7-2.2,40-2.2c0.7,0,2.2,2.2,1.8,5
	c-0.7,23-1.8,64.1-1.8,87.9c0,16.2,2.9,24.9,10.1,29.5c5.4,4,13.3,5.8,21.6,5.4C352,223,357.4,217.2,362.1,212.1"
        />
        <path
          d="M274.3,262.9c2.9,0,23.5-0.5,29.2-0.5c10.2,0,15.3-0.4,21.4,2.6c5.9,2.9,8.8,7.7,8.8,11.6c0,9.1-5.4,14-10.4,16.8
	c-9.9,5.5-17.5,5.9-19.2,5.8s-2.8-0.2-3-1.3c0-0.8,0.5-1.5,1.2-1.7c7.8-3.3,17-6.6,17-18.1c0-10-8-11.9-17.6-11.9
	c-1.5,0-3,0.4-4.4,1c-0.6,0.5-1,1.3-1,2.2c-0.2,11.7-0.2,49.1,0.3,53.6c0.7,9.4,0.8,10.9,8.7,12.9c2.3,0.5,3.2,1,3.2,2
	c0,1.2-1.8,1.7-3.7,1.7c-4.5,0-26.8-0.2-30.2-0.2c-2,0-3.7-0.7-3.7-1.5s1-1.7,3.4-2.2c6.2-1.3,7.5-3.4,7.9-10.2
	c0.2-5.7,0.5-11.9,0.5-28.2c0-13.4-0.5-19.6-0.7-23.3s-0.8-6-7.7-7.4c-2.7-0.7-3.5-1.5-3.5-2.2C270.9,263.9,271.5,262.9,274.3,262.9
	"
        />
        <path
          d="M364.9,269.4c0.5-1.1,0.8-2.2,0.8-3.4v-1.5c0.2-0.8,0.8-1.5,1.5-2c1-0.2,6.5-0.3,7.5,0c0.5,0,1.3,1,1.3,1.5
	c0.3,1.9,1,3.4,2.3,7c2.7,7.4,17.3,45.3,20.6,52.5c3.7,8,4.5,10,11.5,12.8c2.2,0.9,3.1,1.3,3.1,2.2s-1.8,0.8-3.7,0.8h-29.3
	c-2.9,0-3.7-0.8-3.7-1.8s1.5-1.7,3.7-2.2c3.7-1.2,5-2.2,5-4.9c0-1.7-3.5-10.2-5.9-16.9c-0.4-1.3-1.5-2.3-2.8-2.5
	c-3.7-0.3-18.8-0.2-20.6,0c-1.2,0-2.2,1.3-2.5,2c-1.3,3.4-4.9,14.1-4.9,16.3c0,3,1.7,4.5,8,6.2c2,0.7,3,1.5,3,2.2
	c0,1.2-1.8,1.7-3.5,1.7h-23.6c-2.7,0-4.5-0.5-4.5-1.5c0-1.2,1-2,3.7-2.5c5.9-1.5,7.7-3,12.6-13.4
	C348.7,313.3,362.6,275.9,364.9,269.4 M367.5,278.1c-0.3-0.3-1-0.2-1.3,0.5c-2.2,5.7-7.5,20.6-8.7,24.1c-0.2,0.7,0.2,1.8,0.7,1.8
	c2,0.2,14.4,0.2,17.8-0.2c0.3,0,1-0.5,0.7-1.5C374.2,296.5,370.5,285.6,367.5,278.1"
        />
        <path
          d="M452.1,261.4c2.5,0.5,5.1,0.8,7.7,1c1.2,0.2,1.8,1.8,2,3.7c0,2.7,0.7,9.2,0.7,11.6c0.1,1.4-0.5,2.7-1.7,3.5
	c-1.2,0-1.5-1-2.3-3.4c-1-3.8-3.1-7.2-6.2-9.7c-2.9-2.4-6.5-3.8-10.2-3.9c-7.9,0-13.2,5.5-13.2,13.1c0,6.2,3.5,9.7,8.5,12.6
	c5.2,3.2,9.4,5.4,14.2,8.4c7.2,4.4,13.6,11.2,13.6,20c0,8.9-5.5,15.2-10.2,18.3c-4.5,2.9-12.1,5-19.4,5c-3.1,0-6.2-0.3-9.2-0.9
	c-6-1.2-10.8-5.6-12.6-11.5c-0.7-2.6-1.1-5.3-1.4-7.9c0-1.5,0.2-3.9,1.5-3.9c1.7,0,4,5.5,4.9,7.2c3.8,7.5,9.7,13.1,18.4,13.1
	c8.5,0,14.2-7,14.2-13.1c0-5.5-3.2-9.7-9.6-13.8c-4-2.7-7-4.4-10.4-6.4c-7.9-4.5-15.4-12.2-15.4-22c0-11.6,10.1-22,26.8-22
	C445.9,260.5,449,260.8,452.1,261.4"
        />
        <path
          d="M497.1,269.4c0.5-1.1,0.8-2.2,0.8-3.4v-1.5c0.2-0.8,0.8-1.5,1.5-2c1-0.2,6.5-0.3,7.5,0c0.5,0,1.3,1,1.3,1.5
	c0.3,1.9,1,3.4,2.3,7c2.7,7.4,17.3,45.3,20.6,52.5c3.7,8,3.7,9.4,11.6,11.9c2.2,0.8,3,1.2,3,2c0,1.2-1.8,1.8-3.7,1.8h-29.3
	c-2.8,0-3.7-0.8-3.7-1.8s1.5-1.7,3.7-2.2c3.7-1.2,5-2.2,5-4.9c0-1.7-3.5-10.2-5.9-16.9c-0.4-1.3-1.5-2.3-2.8-2.5
	c-3.7-0.3-18.8-0.2-20.6,0c-1.2,0-2.2,1.3-2.5,2c-1.3,3.4-4.9,14.1-4.9,16.3c0,3,1.7,4.5,8,6.2c2,0.7,3,1.5,3,2.2
	c0,1.2-1.8,1.7-3.5,1.7h-23.5c-2.7,0-4.6-0.5-4.5-1.5c0.1-0.7,1.4-0.6,4.1-1.6c6-2.2,7.3-4,12.1-14.4
	C480.9,313.3,494.8,275.9,497.1,269.4 M499.6,278.1c-0.3-0.3-1-0.2-1.3,0.5c-2.2,5.7-7.5,20.6-8.7,24.1c-0.2,0.7,0.2,1.8,0.7,1.8
	c2,0.2,14.4,0.2,17.8-0.2c0.3,0,1-0.5,0.7-1.5C506.3,296.6,502.7,285.7,499.6,278.1"
        />
        <path
          d="M538.6,135c0,4-5,6.8-10.1,6.5c-23-1.1-61.2-1.1-73.8,0c-1.8,0.4-3.6,2.5-4.3,4.3c-0.7,2.5-0.7,8.6-0.7,14.4
	c0,28.8,23,60.1,53.7,60.1c19.8,0,27.7-7.6,35.3-17.6c2.2-2.9,5-2.9,5,1.8c0,3.2-3.2,7.6-5,9.7c-12.6,16.6-32.8,28.5-53.3,28.5
	c-39.6,0-62.3-33.9-62.3-71.7c0-25.2,10.1-54.4,38.9-70.6c7.6-4.7,18-7.9,31.3-7.9C519.5,92.6,538.6,110.2,538.6,135 M452.6,131.4
	c0,0.7,0.7,2.9,1.8,2.9c14.4,0,35.3-0.7,43.9-0.7c9-1.1,13.3-2.9,13.3-11.9c-0.4-13-14-22.7-22.3-22.7
	C474.2,99,458.3,112,452.6,131.4 M476.8,75.8c0.3,2.4,3.4,4.1,5.8,3.8l43-44.7c3.4-3.4,5.5-7.2,5.5-9.3c0-2.8-2.4-6.2-5.8-9
	c-4.1-3.4-8.3-5.2-10.7-5.2c-3.4,0-6.2,4.5-8.2,8.3L476.8,75.8z"
        />
        <path
          d="M132.9,234.4c-69.5-2.4-95.1-78.3-96.5-117.8C33.9,43.6,72.5,9.7,111.3,9.7c64.7,0,97.6,62.4,97.6,121
	C208.9,212.4,160.3,235.4,132.9,234.4 M274.6,303.1c-5,2.1-16.7,3.2-20.3,3.2c-11.2,0.1-22.3-1.6-33-5
	c-28.4-9.2-62.8-38.2-66.7-58.6c-0.5-3,2.2-3.6,4.1-4.3c50.2-16.6,87.6-60,87.8-116.7C246.7,59.3,197.6,0,123.4,0
	C57.5,0-1.5,48.7,0,122.1c1,48.3,27.4,90.7,75.5,111.5c10,4.3,20.5,7.4,31.2,9.2c9.9,1.8,7.1,3.5,17.7,14.1
	c13.1,12.8,29.6,34.7,58.7,48.2c20.9,9.6,33.9,12.6,50.2,12.6c12.4,0,31.1-4.8,42.7-10.7C278.3,305.8,276.9,302.1,274.6,303.1"
        />
      </g>
    </svg>
  )
}

export { QuePasa }
