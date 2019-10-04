import React from "react";

export default class Players extends React.Component {
  render() {
    console.log(this.props.playersArray);
    return (
      <>
        <h1>Players</h1>
        <div>
          {this.props.playersArray.map(player => (
            // console.log(player)
            <div key={player.id}>
              <p>{player.name}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}
