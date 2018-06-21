import React, { Component } from 'react';
import './App.css';
import speech from './speechBubble.png';
import axios from 'axios';
import hemingway from './Hemingway.jpg';
import fitzgerald from './Fitzgerald.jpg';
import faulkner from './Faulkner.jpg';
import defaultImage from './default-person.jpg'


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
    const name = evt.target.value
    const {data} = await axios.get(`/api/${name}`);
    if (name === 'Hemingway') this.setState({image: hemingway})
    if (name === 'Faulkner') this.setState({image: faulkner})
    if (name === 'Fitzgerald') this.setState({image: fitzgerald})

    this.setState({words: data})

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Talk Ernest To Me</h1>
          <button onClick={this.handleClick} value="Hemingway">Ernest</button>
          <button onClick={this.handleClick} value="Faulkner">William</button>
          <button onClick={this.handleClick} value="Fitzgerald">F. Scott</button>
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
