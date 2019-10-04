import React from "react";

export default class Players extends React.Component {
  render() {
    console.log(this.props.playersArray);
    return (
      <>
        <h1>Players</h1>
        <div className='allPlayers'>
          {this.props.playersArray.map(player => (
            // console.log(player)
            <div key={player.id} className='player'>
              <p>{player.name}</p>
              <p>{player.country}</p>
              <p>{player.searches}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}
