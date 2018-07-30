import React, { Component } from 'react';
import './App.css';
import paper from './old_paper.png';
import pen from './old-pen.png'
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      words: '',
      started: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.begin = this.begin.bind(this)
  }

  async begin(){
    this.setState({words: 'Your journey shall soon begin'})
    await axios.get(`/api/begin`)
    this.setState({started: true})
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
          {!this.state.started && (<h1 className="App-title">Talk <button onClick={this.begin}>Ernest</button> To Me</h1>)}
          {this.state.started && (<div className="buttons"><button onClick={this.handleClick} value="Hemingway">Ernest</button>
          <button onClick={this.handleClick} value="HemingwayFaulkner">Faulkingway</button>
          <button onClick={this.handleClick} value="HemingwayShakespeare">HemingSpeare</button>
          <button onClick={this.handleClick} value="Austeningway">Austeningway</button></div>)}
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
