import React from 'react'

const LaTercera = props => {
  const { red = '#91252f', white = 'white', schema = 'common' } = props

  const colorschema = {
    isotypebox: red,
    isotypeletter: white,
    letters: red,
  }

  if (schema === 'light') {
    colorschema.isotypebox = red
    colorschema.isotypeletter = white
    colorschema.letters = white
  }

  if (schema === 'white') {
    colorschema.isotypebox = white
    colorschema.isotypeletter = 'rgba(255, 255, 255, 0)'
    colorschema.letters = white
  }

  return (
    <svg viewBox="0 0 856.46 110.24" width="856.46" height="110.24" {...props}>
      <g data-name="Layer 2">
        <g data-name="Capa 1">
          <path fill={colorschema.isotypebox} d="M0 0h115.24v110.24H0z" />
          <path
            fill={colorschema.isotypeletter}
            d="M14.05 20.04h11.04v60.37h31.59v9.8H14.05V20.04M69.31 29.85H48.46v-9.81h52.73v9.81H80.35v60.36H69.31V29.85"
          />
          <path
            fill={colorschema.letters}
            d="M313.04 19.36H283.3V5.37h75.3v13.99h-29.79v86.23h-15.77V19.36M512.62 105.6h-18.73l-17.1-24.35a50.28 50.28 0 0 1-7.21.46h-9.9v23.89h-15.75V5.37h25.65c27.55 0 42.74 15.17 42.74 38.32 0 15.49-6.92 27.42-20.06 33.49l20.36 28.42M469 68.15c19.27 0 27.07-9.13 27.07-24.47 0-15.16-7.94-24.32-27.07-24.32h-9.35v48.79zM518.79 55.48c0-29.62 22.56-51.43 51.14-51.43 18.59 0 31.4 7.21 40.11 19.44L598 32c-6.67-9-15.19-13.73-28.44-13.73-19.91 0-34.36 15.93-34.36 37.17 0 21.69 14.78 37.16 34.93 37.16 13 0 22.56-4.9 30.08-14.63l12.24 8.43c-10.32 13.71-23.44 20.48-42.89 20.48-28.61 0-50.72-21.83-50.72-51.44M764.36 105.6h-18.74L728.5 81.25a50.22 50.22 0 0 1-7.19.46h-9.83v23.89h-15.81V5.37h25.65c27.55 0 42.75 15.17 42.75 38.32 0 15.49-6.93 27.42-20.07 33.49l20.36 28.42M720.7 68.15c19.33 0 27.13-9.13 27.13-24.47 0-15.16-8-24.32-27.13-24.32h-9.21v48.79zM783.48 105.61h-15.92L811.49 3.32h.89l44.08 102.29h-16.65l-5.76-14h-44.8l-5.77 14m28.33-67.67l-16.68 39.65h33zM686.22 91.6h-49.5V74.63h42.56V60.92h-42.56V19.36h49.5V5.37h-65.28v100.22h65.28V91.6M384.24 74.64h42.6V60.92h-42.6V19.36h50.04V5.37H368.5v100.22h65.88V91.6h-50.14V74.64M145.31 5.43h15.75v86.19h45.26v14.02h-61.01V5.43"
          />
          <path
            d="M211 105.64h-16L239 3.35h.94l44 102.28h-16.69l-5.72-14h-44.84l-5.73 14M239.26 38l-16.64 39.62h33z"
            fill={colorschema.letters}
          />
        </g>
      </g>
    </svg>
  )
}

export default LaTercera
