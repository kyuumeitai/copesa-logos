import React from 'react'

export const LaTerceraIsotipo = props => {
  const {
    red = '#91252f',
    white = 'white',
    black = 'black',
    schema = 'common',
  } = props

  const colorschema = {
    isotypebox: red,
    isotypeletter: white,
    letters: red,
    mode: 'normal',
  }

  if (schema === 'light') {
    colorschema.isotypebox = red
    colorschema.isotypeletter = white
    colorschema.letters = white
  }

  if (schema === 'white') {
    colorschema.isotypebox = white
    colorschema.isotypeletter = black
    colorschema.letters = white
    colorschema.mode = 'isocut'
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      width="60"
      height="60"
      {...props}>
      <path fill={colorschema.isotypebox} d="M0 0h60v60H0z" />
      <g fill={colorschema.isotypeletter}>
        <path d="M7.57 11.93h5.69V43h16.25v5H7.57z" />
        <path d="M36 17H25.28v-5.07h27.15V17H41.7v31.07H36z" />
      </g>
    </svg>
  )
}
