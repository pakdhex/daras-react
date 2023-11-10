import React, { Component } from 'react';

class FormHandlingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted value:', this.state.inputValue);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Input:
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormHandlingClass;
