import React, { Component } from 'react';
import './App.css';
import GridContainer from './gridContainer.js'
import TextBox from './submitItem.js'

class App extends Component {
  render() {
    return (
        <div className="main-container">
          <div className="second-container">
            <div className="panel">
              <header>
                <h2>Todo List</h2>
              </header>
              <div className="body">
                <TextBox />
                <hr/>
                <GridContainer />
                <GridContainer />

              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default App;
