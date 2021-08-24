import React from 'react'
import Small from './Small'
import Large from './Large'

const LaTerceraSabado = ({ version = 'large', ...rest }) => {
  console.log('version', version)
  switch (version) {
    case 'small':
      return <Small {...rest} />
    default:
      return <Large {...rest} />
  }
}

export default LaTerceraSabado
