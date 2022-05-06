import React from 'react'

import Full from './LaCuartaFull'
import FullClaim from './LaCuartaClaim'
import FullClaimVert from './LaCuartaClaimVert'
import Comerciante from './LaCuartaComerciante'
import Constructor from './LaCuartaConstructor'
import FullVertical from './LaCuartaVert'
import ComercianteVertical from './LaCuartaComercianteVert'
import ConstructorVertical from './LaCuartaVertConstructor'
import Icon from './LaCuartaIcon'
import Sello from './LaCuartaSello'

export const LaCuarta = rest => {
  const {
    dark = '#000000',
    light = '#ffffff',
    red = '#E32417',
    schema = 'common',
    version = 'full',
    orientation = 'vertical',
  } = rest

  const colorschema = {
    letters: red,
  }

  if (schema === 'light') {
    colorschema.letters = light
  }

  if (version === 'icon') {
    return <Icon {...rest} colorschema={colorschema} />
  }
  if (version === 'sello') {
    return <Sello {...rest} colorschema={colorschema} />
  }

  if (orientation === 'horizontal') {
    switch (version) {
      case 'full':
        return <Full {...rest} colorschema={colorschema} />
      case 'claim':
        return <FullClaim {...rest} colorschema={colorschema} />
      case 'comerciante':
        return <Comerciante {...rest} colorschema={colorschema} />
      case 'constructor':
        return <Constructor {...rest} colorschema={colorschema} />
      default:
        return <Full {...rest} colorschema={colorschema} />
    }
  }

  if (orientation === 'vertical') {
    switch (version) {
      case 'full':
        return <FullVertical {...rest} colorschema={colorschema} />
      case 'claim':
        return <FullClaimVert {...rest} colorschema={colorschema} />
      case 'comerciante':
        return <ComercianteVertical {...rest} colorschema={colorschema} />
      case 'constructor':
        return <ConstructorVertical {...rest} colorschema={colorschema} />
      default:
        return <Full {...rest} colorschema={colorschema} />
    }
  }
}
