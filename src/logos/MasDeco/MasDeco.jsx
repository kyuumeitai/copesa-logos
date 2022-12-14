import React from 'react'

export const MasDeco = props => {
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
    <svg x="0px" y="0px" viewBox="0 0 616.3 124" {...props}>
      <g fill={colorschema.letters}>
        <polygon
          points="46.5,8.3 0,8.3 0,122.3 33.5,122.3 33.5,80.4 32.7,61.1 33,61.1 48.5,105.5 73.7,105.5 89.3,61.1 89.6,61.1
	88.8,80.4 88.8,122.3 125.6,122.3 125.6,8.3 78.2,8.3 69.9,35.2 63.7,58 63.3,58 56.1,35.2 46.5,8.3 "
        />
        <path
          d="M573.6,60.3c7,0,7.5,7.9,7.5,20.2s-0.5,20.1-7.5,20.1s-7.5-7.9-7.5-20.1S566.5,60.3,573.6,60.3z M573.6,124
	c31,0,42.7-20,42.7-43.5s-11.7-43.6-42.7-43.6c-31.2,0-42.8,20-42.7,43.6S542.5,124,573.6,124z"
        />
        <polygon points="193.6,18.4 183.6,0 155.1,18.4 163.5,31.9 193.6,18.4 " />
        <path
          d="M162.8,59.5c5.5,0,8.9,2.8,8.9,7v3c-26,1.7-45.2,12.5-45.2,32.7c0,13.4,8.8,21.8,22.6,21.8c7.7,0,16.3-2.5,22.3-10h0.4
	l3.4,8.4h30.1v-57c0-17.6-14.6-28.4-36.9-28.4c-11,0-20.6,1-37.6,6.7l6.7,22.6C146,62,156.1,59.5,162.8,59.5L162.8,59.5z
	 M171.7,97.1c-1.5,1.1-3.4,1.7-5.3,1.6c-1.8,0-5.6-0.8-5.5-5c0-4.4,4.2-7.6,10.9-8.4V97.1L171.7,97.1z"
        />
        <path
          d="M279.7,94.6c0-26.4-35.2-26-35.2-32.7c0-2.1,2.4-2.5,3.7-2.5c7.2,0,18.9,3.5,24.8,5.8l4.5-24.1c-10.8-2.9-21.9-4.4-33-4.3
	C221.9,36.9,206,46,206,65c0,28.6,34.4,26.8,34.3,33.6c0,2.2-2.5,2.7-5,2.7c-6.8,0-15-2.6-25.8-6l-5.2,24.4c9.4,2.6,23.4,4.2,36,4.2
	C263.9,123.9,279.7,114.2,279.7,94.6L279.7,94.6z"
        />
        <path
          d="M322.9,122.3c38.5,0,55.2-24.1,55.2-57S361.4,8.4,322.9,8.4h-45.3v114L322.9,122.3L322.9,122.3z M312.9,92.2V38.5h10.1
	c11.7,0,18.4,6.7,18.4,26.8s-6.7,26.8-18.4,26.8H312.9z"
        />
        <path
          d="M461.9,87.1c1-5.2,1.6-10.6,1.7-15.9c0-21-14.8-34.3-39.4-34.3c-28.5,0-46.1,18.3-46.1,43.5s15.1,43.5,48.6,43.5
	c5.9,0,19.3-0.8,31.8-5.8l-3.4-23.7c-6.9,2.8-14.3,4.3-21.8,4.3c-14.2,0-18.9-5.8-20.1-11.7L461.9,87.1z M423.3,58.6
	c6.3,0,8.4,3.6,8.4,7.6c0,1.1-0.2,2.3-0.5,3.3h-17.9C413.3,63.7,417,58.6,423.3,58.6L423.3,58.6z"
        />
        <path
          d="M461.9,80.4c0,26.7,16.7,43.5,45.2,43.5c9.2-0.1,18.3-1.6,27.1-4.4l-4.5-24.1c-8.4,2.5-12.6,3.3-18.4,3.3
	c-9.2,0-14.3-6.6-14.3-18.3S502.1,62,511.3,62c5.8,0,10,0.9,18.4,3.4l4.5-24.1c-8.8-2.8-17.9-4.3-27.1-4.3
	C478.7,36.9,461.9,53.6,461.9,80.4L461.9,80.4z"
        />
      </g>
    </svg>
  )
}
