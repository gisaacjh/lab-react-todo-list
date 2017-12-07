import React, { Component} from 'react'
import RemoveElement from './xright.js'


class TodoItem extends Component {
  render () {
    return (
<div className="grid-container todo-item">
  <div className="input-&-span">
    <div className="element-bar">
      <label className="radiocheck-group">
        <input value="on" type="checkbox"/>
        <span>steal puppies</span>
      </label>
    </div>
  </div>
    <RemoveElement />
  </div>

);
  }
}

export default TodoItem
