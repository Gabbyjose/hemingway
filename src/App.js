import React, { Component } from 'react';
import './App.css';
import speech from './speechBubble.png';
import axios from 'axios';
import hemingway from './Hemingway.jpg';
// import fitzgerald from './Fitzgerald.jpg';
// import faulkner from './Faulkner.jpg';
import defaultImage from './default-person.jpg';
import HemingwayFaulkner from './HemingwayFaulkner.jpeg'


class App extends Component {
  constructor(){
    super()
    this.state = {
      words: '',
      image: defaultImage
    }
    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick(evt){
    this.setState({words: "Let me think..."})
    const name = evt.target.value
    const {data} = await axios.get(`/api/${name}`);
    if (name === 'Hemingway') this.setState({image: hemingway})
    if (name === 'HemingwayFaulkner') this.setState({image: HemingwayFaulkner})

    this.setState({words: data})

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Talk Ernest To Me</h1>
          <button onClick={this.handleClick} value="Hemingway">Ernest</button>
          {//<button onClick={this.handleClick} value="Faulkner">William</button><button onClick={this.handleClick} value="Fitzgerald">F. Scott</button>
          }
          <button onClick={this.handleClick} value="HemingwayFaulkner">Faulkingway</button>
          <button onClick={this.handleClick} value="HemingwayShakespeare">HemingSpeare</button>
          <button onClick={this.handleClick} value="Austeningway">Austeningway</button>
        </header>
        <div className="App-intro">
          <img src={speech} alt={speech} className="bubble" />
          <p className="speech">{this.state.words}</p>
          <img src={this.state.image} className="ernest" alt="war-time-ernest" />
        </div>
      </div>
    );
  }
}

export default App;
