import React, { Component } from 'react';

class EventHandlingClass extends Component {
  handleClick = () => {
    console.log('Button clicked!');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default EventHandlingClass;
