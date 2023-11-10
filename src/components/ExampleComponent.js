import React, { Component } from 'react';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Halo dari Komponen Kelas!',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
      </div>
    );
  }
}

export default ExampleComponent;