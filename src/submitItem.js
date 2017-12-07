import React, { Component } from 'react'
class TextBox extends Component {
  render () {
    return (
      <div className="submit-item">
        <input type="text"/>
        <button>
          <i className="fa fa-plus">+</i>
        </button>
      </div>
    );
  }
};

export default TextBox
