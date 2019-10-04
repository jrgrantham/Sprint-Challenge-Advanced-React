import React from 'react';

export default class Players extends React.Component {

  render () {
    console.log(this.props.playersArray)
    return (
      <h1>Players</h1>
    )
  }
}