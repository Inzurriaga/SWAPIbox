import React, { Component } from 'react';
import Intro from "../intro/Intro"
import MainPage from "../mainpage/MainPage"


class App extends Component {
  constructor(){
    super();
    this.state = {
      intro: true
    }
  }

  exitIntro = () => {
    this.setState({
      intro: false
    })
  }
  render() {
    const { intro } = this.state
    return (
      <div className="App">
       {
         intro ? 
          <Intro exitIntro={this.exitIntro}/>:
          <MainPage />
       }
      </div>
    );
  }
}

export default App;
