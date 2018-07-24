import React, { Component } from 'react';
import './App.css';
import paper from './old_paper.png';
import pen from './old-pen.png'
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      words: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick(evt){
    this.setState({words: "Let me think..."})
    const name = evt.target.value
    const {data} = await axios.get(`/api/${name}`);
    this.setState({words: data})
  }

  render() {
    return (
      <div className="App">
          <h1 className="App-title">Talk Ernest To Me</h1>
          <button onClick={this.handleClick} value="Hemingway">Ernest</button>
          <button onClick={this.handleClick} value="HemingwayFaulkner">Faulkingway</button>
          <button onClick={this.handleClick} value="HemingwayShakespeare">HemingSpeare</button>
          <button onClick={this.handleClick} value="Austeningway">Austeningway</button>
        <div className="App-intro">
          <img src={paper} alt={paper} className="paper" />
          <p className="words">{this.state.words}</p>
          <img src={pen} alt={pen} className="pen" />
        </div>
      </div>
    );
  }
}

export default App;
