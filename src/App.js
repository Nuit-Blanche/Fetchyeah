import React, { Component } from 'react';
import './App.css';
import simpsons from "./simpsons.png";
import Donut from "./Donut.PNG";
import Generate from './Generate';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson : {
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
        character: "Nelson Muntz",
        quote: "Shoplifting is a victimless crime, like punching someone in the dark."

        
      },
    }

  }

  getSimpson() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(response => response.json())
    .then(data => {
      this.setState({
        simpson: data[0],
      });
    });
  }


  render() {
    console.log(this.state)
    return (
      <div className="back">
      <div className="App">

      <header className="App-header">
      <img src={simpsons} className="App-simpsons" alt="simpsons" />
        <img src={Donut} className="App-Donut" alt="Donut" />
        <h1 className="App-title">¡Ay, caramba!</h1>
      </header>

      <Generate SelectSimpson={()=> this.getSimpson()}/>
       
      <Display simpson={this.state.simpson}/>


       
      </div>
      </div>
    );
  }
}

export default App;
;
