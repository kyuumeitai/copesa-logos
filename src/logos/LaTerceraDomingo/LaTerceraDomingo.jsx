import React from 'react'
import Small from './Small'
import Large from './Large'

export const LaTerceraDomingo = ({ version = 'large', ...rest }) => {
  console.log('version', version)
  switch (version) {
    case 'small':
      return <Small {...rest} />
    default:
      return <Large {...rest} />
  }
}
