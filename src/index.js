import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Latercera from './logos/Latercera'

export default class LTLogo extends Component {
  static propTypes = {
    icon: PropTypes.string,
    size: PropTypes.number,
    className: PropTypes.string
  }

  render() {
    const {
      icon,
      className,
      size = 40
    } = this.props

    return <Latercera />
  }
}
