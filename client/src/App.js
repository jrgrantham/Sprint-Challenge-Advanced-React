import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import Players from './components/Players';

const sprintApi = "http://localhost:5000/api/players";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersArray: []
    };
  }

  componentDidMount() {
    axios.get(sprintApi).then(response => {
      this.setState({ playersArray: response.data });
    });
  }

  render() {
    return (
      <>
        <h1>Womens World Cup</h1>
        <Players playersArray={this.state.playersArray}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </>
    );
  }
}
