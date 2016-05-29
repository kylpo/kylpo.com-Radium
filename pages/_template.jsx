import React from 'react'
import Radium, { StyleRoot } from 'Radium';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },

  render () {
    return (
      <StyleRoot>
        {this.props.children}
      </StyleRoot>
    )
  },
})
