import React from "react";
// import styled from "styled-components";
import useDarkMode from './useDarkMode';

// const StyledPlayers = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const StyledPlayer = styled.div`
//   // display: flex;
//   margin: 10px;
//   border: 1px solid lightgray;
//   width: 700px;
// `;

export default function Players(props) {
    const [darkMode, setDarkMode] = useDarkMode(true);
    const { playersArray } = props;
    console.log({props});
    return (
      <>
        <h2
          onClick={setDarkMode}
        >Players</h2>
        <div className="allPlayers">
          {playersArray.map(player => (
            // console.log(player)
            <div key={player.id} className="player">
              <h4>{player.name}</h4>
              <p>{player.country}</p>
              <p>{player.searches}</p>
            </div>
          ))}
        </div>
      </>
    );
}
