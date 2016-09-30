import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = { text: '' };
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(se) {
    this.setState({ text: se.target.value });
  }

  handleSubmit() {
    this.props.onSubmit(this.state.text);
    this.setState(this.initialState);
  }

  render() {
    return (<div>
      <input
        type="text"
        name="addTodo"
        placeholder="Get the milk"
        onChange={this.handleChange}
      />
      <button type="button" onClick={this.handleSubmit}>Add Todo</button>
    </div>)
  }
}

export default TodoForm;
