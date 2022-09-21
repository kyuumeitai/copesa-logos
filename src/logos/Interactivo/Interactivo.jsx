import React from 'react'

export const Interactivo = props => {
  const {
    dark = '#000000',
    light = '#ffffff',
    red = '#A01316',
    schema = 'common',
  } = props

  const colorschema = {
    altletters: red,
    letters: dark,
  }

  if (schema === 'light') {
    colorschema.altletters = red
    colorschema.letters = light
  }

  return (
    <svg x="0px" y="0px" viewBox="0 0 328 53" {...props}>
      <g>
        <path fill={colorschema.altletters} d="M0,2.9v11.6h12.1V2.9H0z" />
        <rect
          y="17.3"
          fill={colorschema.altletters}
          width="12.1"
          height="34.8"
        />
      </g>
      <g fill={colorschema.letters}>
        <path
          d="M17.5,17.2h10.3V22H28c0.4-0.7,0.9-1.4,1.4-2c0.7-0.7,1.4-1.3,2.2-1.8c0.9-0.5,1.9-1,2.9-1.3c1.2-0.3,2.4-0.5,3.6-0.5
	c2.3-0.1,4.5,0.3,6.6,1.3c1.6,0.8,3,2,3.9,3.5c1,1.6,1.6,3.4,1.9,5.2c0.4,2.2,0.5,4.3,0.5,6.5v19.2H40.3V35c0-1,0-2-0.1-3.1
	c-0.1-1-0.3-2-0.7-3c-0.7-2-2.7-3.3-4.8-3.1c-1.2,0-2.3,0.2-3.4,0.8c-0.8,0.5-1.5,1.2-2,2c-0.5,0.9-0.8,1.8-0.9,2.8
	c-0.1,1.1-0.2,2.2-0.2,3.3v17.4H17.5V17.2z"
        />
        <path
          d="M79.6,25.9h-9.5v11.6c0,0.9,0,1.8,0.2,2.6c0.1,0.7,0.3,1.4,0.6,2c0.4,0.6,0.9,1.1,1.6,1.3c0.9,0.3,1.8,0.5,2.8,0.5
	c0.8,0,1.5-0.1,2.3-0.2c0.8-0.1,1.5-0.3,2.1-0.8v9c-1.2,0.4-2.5,0.7-3.7,0.9C74.6,52.9,73.3,53,72,53c-1.7,0-3.4-0.2-5-0.6
	c-1.4-0.3-2.8-1-4-1.8c-1.2-0.9-2.1-2-2.7-3.3c-0.7-1.5-1-3.2-1-4.9V25.9h-6.9v-8.6h6.9V6.9h10.8v10.3h9.5V25.9z"
        />
        <path
          d="M115.2,46.1c-1.7,2.2-4,4-6.5,5.1c-2.6,1.2-5.4,1.8-8.2,1.8c-2.6,0-5.1-0.4-7.6-1.3c-2.3-0.8-4.4-2.1-6.2-3.7
	c-1.8-1.6-3.2-3.6-4.1-5.8c-1-2.4-1.5-4.9-1.5-7.5c0-2.6,0.5-5.2,1.5-7.5c1-2.2,2.4-4.2,4.1-5.8c1.8-1.6,3.9-2.9,6.2-3.7
	c2.4-0.9,5-1.3,7.6-1.3c2.3,0,4.6,0.4,6.8,1.3c2,0.8,3.7,2.1,5.2,3.7c1.5,1.7,2.6,3.7,3.3,5.8c0.8,2.4,1.2,5,1.2,7.5V38h-25
	c0.3,1.9,1.3,3.7,2.8,5c1.5,1.2,3.4,1.9,5.3,1.8c1.6,0.1,3.1-0.4,4.5-1.2c1.2-0.8,2.3-1.9,3.2-3.1L115.2,46.1z M106.1,30.7
	c0.1-1.7-0.6-3.4-1.8-4.7c-1.3-1.3-3-2-4.8-1.9c-2,0-4,0.7-5.5,2.1c-0.6,0.6-1.1,1.3-1.5,2.1c-0.4,0.8-0.6,1.6-0.6,2.5H106.1z"
        />
        <path
          d="M119.5,17.2h10.8v5.6h0.1c1-1.9,2.4-3.6,4.1-4.9c1.8-1.1,3.9-1.7,6-1.6c0.6,0,1.3,0,1.9,0.1c0.6,0,1.2,0.1,1.7,0.3v9.8
	c-0.7-0.2-1.5-0.4-2.3-0.5c-0.8-0.1-1.5-0.2-2.3-0.2c-1.7-0.1-3.3,0.2-4.9,0.9c-1.1,0.5-2.1,1.3-2.8,2.4c-0.7,1.1-1.1,2.4-1.3,3.7
	c-0.2,1.6-0.3,3.2-0.3,4.7v14.6h-10.8V17.2z"
        />
        <path
          d="M166.8,47.7h-0.1c-1.1,1.8-2.8,3.2-4.8,4c-2,0.8-4.1,1.3-6.3,1.3c-1.6,0-3.2-0.2-4.7-0.7c-1.4-0.4-2.8-1.1-4-2
	c-1.1-0.9-2.1-2.1-2.7-3.4c-0.7-1.5-1-3-1-4.7c-0.1-1.8,0.3-3.5,1.1-5.1c0.7-1.4,1.7-2.5,3-3.5c1.3-0.9,2.8-1.7,4.4-2.1
	c1.7-0.5,3.3-0.9,5.1-1.1c1.7-0.3,3.5-0.4,5.3-0.5c1.8,0,3.4-0.1,4.9-0.1c0.1-1.8-0.7-3.4-2.1-4.6c-1.4-1.1-3.1-1.7-4.8-1.7
	c-1.7,0-3.4,0.4-4.9,1.1c-1.5,0.8-2.8,1.8-3.9,3l-5.7-5.9c2-1.9,4.4-3.3,7-4.2c2.7-0.9,5.5-1.4,8.3-1.4c2.6-0.1,5.3,0.3,7.8,1.2
	c1.9,0.7,3.6,1.9,4.9,3.4c1.3,1.7,2.1,3.6,2.6,5.6c0.5,2.5,0.7,5.1,0.7,7.7v17.8h-9.9L166.8,47.7z M164.1,36.8c-0.8,0-1.8,0-3.1,0.1
	c-1.2,0.1-2.4,0.3-3.5,0.6c-1.1,0.3-2,0.8-2.9,1.5c-0.8,0.7-1.2,1.7-1.2,2.8c-0.1,1.2,0.6,2.3,1.7,2.9c1,0.6,2.2,0.9,3.4,0.9
	c1,0,2.1-0.1,3.1-0.4c0.9-0.3,1.8-0.7,2.6-1.2c1.6-1.1,2.6-2.9,2.5-4.9v-2.3L164.1,36.8z"
        />
        <path
          d="M203.1,28.5c-0.6-0.8-1.3-1.5-2.2-1.9c-0.9-0.5-2-0.8-3.1-0.8c-2.4-0.1-4.7,0.7-6.4,2.4c-1.6,1.8-2.4,4-2.3,6.4
	c-0.1,2.3,0.7,4.6,2.3,6.4c1.7,1.7,4,2.6,6.4,2.4c1.1,0,2.1-0.2,3.1-0.8c0.8-0.5,1.6-1.1,2.2-1.9l7.1,7.5c-1.6,1.7-3.7,2.9-5.9,3.6
	c-4.6,1.5-9.5,1.4-14.1-0.3c-2.3-0.8-4.4-2.1-6.2-3.7c-1.7-1.6-3.1-3.6-4.1-5.8c-1-2.4-1.5-4.9-1.5-7.5c0-2.6,0.5-5.2,1.5-7.5
	c1-2.2,2.4-4.2,4.1-5.8c1.8-1.6,3.9-2.9,6.2-3.7c2.4-0.9,5-1.3,7.6-1.3c2.2,0,4.4,0.3,6.5,1c2.2,0.7,4.3,1.9,5.9,3.6L203.1,28.5z"
        />
        <path
          d="M236.5,25.9h-9.5v11.6c0,0.9,0,1.8,0.1,2.6c0.1,0.7,0.3,1.4,0.6,2c0.4,0.6,0.9,1.1,1.5,1.3c0.9,0.3,1.8,0.5,2.8,0.5
	c0.8,0,1.5-0.1,2.3-0.2c0.8-0.1,1.5-0.3,2.1-0.8v9c-1.2,0.4-2.5,0.7-3.7,0.9c-1.3,0.2-2.5,0.2-3.8,0.3c-1.7,0-3.4-0.2-5-0.6
	c-1.4-0.3-2.8-1-4-1.8c-1.2-0.8-2.1-2-2.7-3.3c-0.7-1.5-1-3.2-1-4.9V25.9h-6.9v-8.6h6.9V6.9h10.8v10.3h9.5L236.5,25.9z"
        />
        <path d="M239.3,17.2H250v34.9h-10.7V17.2z" />
        <path d="M251.3,17.2h11.6l8.8,23.7h0.1l8.1-23.7h10.8l-13.7,34.9h-11.4L251.3,17.2z" />
        <path
          d="M289.2,34.7c0-2.6,0.5-5.2,1.5-7.5c1-2.2,2.4-4.2,4.1-5.8c1.8-1.6,3.9-2.9,6.2-3.7c4.9-1.7,10.2-1.7,15.1,0
	c2.3,0.8,4.4,2.1,6.2,3.7c1.8,1.6,3.2,3.6,4.1,5.8c1,2.4,1.5,4.9,1.5,7.5c0,2.6-0.5,5.2-1.5,7.5c-1,2.2-2.4,4.2-4.1,5.8
	c-1.8,1.6-3.9,2.9-6.2,3.7c-4.9,1.7-10.2,1.7-15.1,0c-2.3-0.8-4.4-2.1-6.2-3.7c-1.8-1.6-3.2-3.6-4.1-5.8
	C289.7,39.8,289.2,37.3,289.2,34.7z M300,34.7c-0.1,2.3,0.7,4.6,2.3,6.4c3.6,3.3,9.1,3.3,12.7,0c1.6-1.8,2.4-4,2.3-6.4
	c0.1-2.3-0.7-4.6-2.2-6.4c-3.6-3.3-9.1-3.3-12.7,0C300.7,30,299.9,32.3,300,34.7z"
        />
      </g>
      <path
        fill={colorschema.altletters}
        d="M244.4,9c0-1.7-5.4-2.9-4.1-4.2c2.4-2.4,6.4-2.4,8.8,0c0,0,0,0,0,0c1.2,1.2,1.9,2.8,1.8,4.4
	c0,1.7-0.6,3.3-1.8,4.4c-2.4,2.4-6.4,2.4-8.8,0c0,0,0,0,0,0C239,12.4,244.4,10.7,244.4,9z"
      />
    </svg>
  )
}