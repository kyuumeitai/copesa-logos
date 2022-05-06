import React from 'react'

export const PaulaCocina = props => {
  const { dark = '#1D1D1B', light = '#ffffff', schema = 'common' } = props

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
    <svg x="0px" y="0px" viewBox="0 0 362.9 57.4" {...props}>
      <g fill={colorschema.letters}>
        <g>
          <path
            d="M14,18.2c2-2.8,4.8-4.6,8.5-4.6c7.8,0,12.4,6.8,12.4,16.1c0,9.9-7,16.1-14.9,16.1
			c-1.7,0-4-0.4-5.9-1.5v9.6c0,1.8,0.4,2,3.6,2.3v1.3H0v-1.3c3.3-0.3,3.6-0.6,3.6-2.3v-34c0-2.3-0.4-2.5-3.6-2.8v-1.3l13.1-2.1H14
			l-0.3,4.6H14z M14,19.6v16.6c0,6.6,2.9,7.5,4.6,7.5c4,0,5.4-5.3,5.4-13.6c0-8.5-2.8-12-6.3-12C16.4,18.2,15.1,18.7,14,19.6z"
          />
          <path
            d="M64.4,40.3c0,0.8,0.5,1.4,1.4,1.4c0.7,0,1.6-0.4,2.4-0.9l0.2,1.3c-2.5,2-5.7,3.6-9.2,3.6
			c-3.5,0-5.1-1.9-5.1-4.2v-0.7H54c-2.1,3.1-5.2,4.9-8.9,4.9c-4.7,0-7.4-3.2-7.4-7.3c0-3.8,3-9,16.4-9.8v-5.9c0-3.3-1.6-6.3-5.6-6.3
			c-2.5,0-4.6,1.6-4.6,3.6c0,2.1,2.6,2.6,2.6,4.4c0,1.4-1.6,2.6-3.9,2.6c-2,0-4-0.9-4-3.2c0-3.5,4.9-10.1,14-10.1
			c7.6,0,11.9,4.2,11.8,9.5V40.3z M54.1,30.3c-3.7,0.5-5.9,2.2-5.9,5.8c0,2.7,1.2,4,3,4c1.2,0,2-0.5,2.9-1.1V30.3z"
          />
          <path
            d="M92.8,19.8c0-2.3-0.4-2.5-4.9-2.8v-1.3l14.1-2.1h1.1v26.5c0,2.3,0.4,2.5,3.6,2.8v1.3
			l-12.5,1.5h-0.9l-0.2-6.5h-0.3c-2.8,3.7-6.5,6.5-11.1,6.5c-4.6,0-8.5-2.5-8.5-9.3V19.8c0-2.3-0.4-2.5-3.6-2.8v-1.3l12.8-2.1h1.1
			v22.6c0,2.5,1.1,4,3.3,4c2.8,0,4.6-1.5,5.9-2.5V19.8z"
          />
          <path
            d="M122.3,41.4c0,1.8,0.4,2,3.6,2.3v1.3h-17.6v-1.3c3.3-0.3,3.6-0.6,3.6-2.3V5.6
			c0-2.3-0.4-2.5-3.6-2.8V1.5L121.4,0h0.9V41.4z"
          />
          <path
            d="M154.7,40.3c0,0.8,0.5,1.4,1.4,1.4c0.7,0,1.6-0.4,2.4-0.9l0.2,1.3c-2.5,2-5.7,3.6-9.2,3.6
			c-3.5,0-5.1-1.9-5.1-4.2v-0.7h-0.1c-2.1,3.1-5.2,4.9-8.9,4.9c-4.7,0-7.4-3.2-7.4-7.3c0-3.8,3-9,16.4-9.8v-5.9
			c0-3.3-1.6-6.3-5.6-6.3c-2.5,0-4.6,1.6-4.6,3.6c0,2.1,2.6,2.6,2.6,4.4c0,1.4-1.6,2.6-3.9,2.6c-2,0-4-0.9-4-3.2
			c0-3.5,4.9-10.1,14-10.1c7.6,0,11.9,4.2,11.8,9.5V40.3z M144.3,30.3c-3.7,0.5-5.9,2.2-5.9,5.8c0,2.7,1.2,4,3,4
			c1.2,0,2-0.5,2.9-1.1V30.3z"
          />
          <path
            d="M167.3,36.1c2.5,0,4.6,2.1,4.6,4.7c0,2.5-2.1,4.6-4.6,4.6s-4.6-2.1-4.6-4.6
			C162.6,38.2,164.7,36.1,167.3,36.1z"
          />
        </g>
        <g>
          <path
            d="M188.8,28.9c0,9.1,4.9,12,9.8,12c3.2,0,5.9-1.4,7.4-2.4l0.7,1.5c-1,1.1-4.7,5.7-12.7,5.7
			c-10.4,0-15.7-7.4-15.7-15.8c0-10.5,8.6-16.4,16.6-16.4c7.7,0,11.4,4.7,11.4,8.2c0,2.2-1.2,4.3-4.7,4.3c-2.4,0-3.6-1.2-3.6-2.5
			c0-2.2,2-2.6,2-4.6c0-1.9-1.4-3.3-4.1-3.3C191.2,15.6,188.8,21.2,188.8,28.9z"
          />
          <path
            d="M208.8,29.6c0-9,6.3-16.1,15.9-16.1c9.6,0,15.9,7.1,15.9,16.1s-6.3,16.1-15.9,16.1
			C215.1,45.7,208.8,38.6,208.8,29.6z M219.7,29.6c0,10.3,1.8,14.1,5.1,14.1c3.3,0,5.1-3.9,5.1-14.1s-1.8-14.1-5.1-14.1
			C221.5,15.6,219.7,19.4,219.7,29.6z"
          />
          <path
            d="M253.9,28.9c0,9.1,4.9,12,9.8,12c3.2,0,5.9-1.4,7.4-2.4l0.7,1.5c-1,1.1-4.7,5.7-12.7,5.7
			c-10.4,0-15.7-7.4-15.7-15.8c0-10.5,8.6-16.4,16.6-16.4c7.7,0,11.4,4.7,11.4,8.2c0,2.2-1.2,4.3-4.7,4.3c-2.4,0-3.6-1.2-3.6-2.5
			c0-2.2,2-2.6,2-4.6c0-1.9-1.4-3.3-4.1-3.3C256.3,15.6,253.9,21.2,253.9,28.9z"
          />
          <path
            d="M287.8,41.4c0,1.8,0.4,2,3.6,2.3v1.3h-17.6v-1.3c3.3-0.3,3.6-0.6,3.6-2.3V19.8
			c0-2.3-0.4-2.5-3.6-2.8v-1.3l13.1-2.1h0.9V41.4z M282.3,1.2c3.3,0,5.9,1.7,5.9,5.1c0,3.3-2.6,4.9-5.9,4.9c-3.3,0-5.9-1.7-5.9-4.9
			C276.4,3,279.1,1.2,282.3,1.2z"
          />
          <path
            d="M293,43.8c3.3-0.3,3.6-0.6,3.6-2.3V19.8c0-2.3-0.4-2.5-3.6-2.8v-1.3l13.1-2.1h0.9l-0.3,6.5
			h0.3c2.8-3.7,6.5-6.5,11.1-6.5c4.6,0,8.5,2.5,8.5,9.3v18.6c0,1.8,0.4,2,3.6,2.3v1.3h-16.9v-1.3c2.5-0.3,2.9-0.6,2.9-2.3V23.2
			c0-2.7-1.1-4.2-3.6-4.2c-2.5,0-4.3,1.5-5.6,2.7v19.8c0,1.8,0.4,2,3.6,2.3v1.3H293V43.8z"
          />
          <path
            d="M358.9,40.3c0,0.8,0.5,1.4,1.4,1.4c0.7,0,1.6-0.4,2.4-0.9l0.2,1.3c-2.5,2-5.7,3.6-9.2,3.6
			c-3.5,0-5.1-1.9-5.1-4.2v-0.7h-0.1c-2.1,3.1-5.2,4.9-8.9,4.9c-4.7,0-7.4-3.2-7.4-7.3c0-3.8,3-9,16.4-9.8v-5.9
			c0-3.3-1.6-6.3-5.6-6.3c-2.5,0-4.6,1.6-4.6,3.6c0,2.1,2.6,2.6,2.6,4.4c0,1.4-1.6,2.6-3.9,2.6c-2,0-4-0.9-4-3.2
			c0-3.5,4.9-10.1,14-10.1c7.6,0,11.9,4.2,11.8,9.5V40.3z M348.6,30.3c-3.7,0.5-5.9,2.2-5.9,5.8c0,2.7,1.2,4,3,4
			c1.2,0,2-0.5,2.9-1.1V30.3z"
          />
        </g>
      </g>
    </svg>
  )
}
