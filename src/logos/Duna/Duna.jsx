import React from 'react'

export const Duna = props => {
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
    <svg x="0px" y="0px" viewBox="0 0 531.4 114.3" {...props}>
      <g fill={colorschema.letters}>
        <path
          d="M48.9,0c27.2,0,42.4,2.6,54.2,9.8c14.9,9.2,23.4,25.3,23.4,44.3c0,23.3-12.8,42.3-34.3,51.2c-10.4,4.1-26.3,6.7-43.3,6.7H0
	V0H48.9z M18.9,101.4h30.9c16.4,0,30.1-3.1,38.7-9c11.4-8.1,17.6-21.1,17.6-37.7c0-18.1-7.6-31.9-21.2-38.7
	c-8.5-4.4-15.3-5.3-35.1-5.3H18.9V101.4z"
        />
        <path
          d="M150.3,0v66.8c0,10.4,0.3,12.3,1.1,16.3c3.9,13.2,18.4,20.6,40.3,20.6c16.7,0,30.8-5.3,36.7-13.5c2.6-3.7,4.2-9.2,4.5-15.1
	V0h18.7v66.4c0,10.6-0.1,14.3-1.6,19.1c-5.5,18.8-25.7,28.8-58.4,28.8c-26.9,0-46.3-7.2-54.8-20c-3.1-4.7-5-11.6-5-18.4
	c-0.3-3.2-0.4-6.3-0.3-9.5V0H150.3z"
        />
        <path d="M391,112.1h-18.2l-91.6-91.1v91.1h-18.3V0h18.3l91.6,91.1V0H391V112.1z" />
        <path d="M531.4,112.1h-20.2l-19.6-36.3h-63.7l-18.7,36.3h-20.2L451.3,0h17.5L531.4,112.1z M459.4,16.5L434,64.9h51.6L459.4,16.5z" />
        <path d="M497.9,23h-2V0.8h10.7v2.6h-8.7v6.9h7.7v2.6h-7.7L497.9,23z" />
        <path
          d="M524.9,23V4.4l0,0L520.7,23h-2.3l-4.2-18.6h-0.1c0,2.1,0.1,4.9,0.1,5.5V23h-2V0.8h3l4.4,18.7h0.2l4.4-18.7h2.8V23L524.9,23z
	"
        />
      </g>
    </svg>
  )
}
