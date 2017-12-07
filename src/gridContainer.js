import React, { Component } from 'react'
import TodoItem from './todoList.js'


class GridContainer extends Component {
  render () {
    return (
      <div className="grid-container">
        <TodoItem />
      </div>
    );
  }
}
export default GridContainer
