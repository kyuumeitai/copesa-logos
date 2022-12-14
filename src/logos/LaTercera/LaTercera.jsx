import React from 'react'
import { LaTerceraFull } from './LaTerceraFull'
import { LaTerceraIsotipo } from './LaTerceraIsotipo'

export const LaTercera = props => {
  const {
    red = '#91252f',
    white = 'white',
    black = 'black',
    schema = 'common',
    version = 'full',
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

  if (version === 'isotype') {
    return <LaTerceraIsotipo {...props} />
  }
  return <LaTerceraFull {...props} />
}
