import React from 'react';

const TodoItem = React.createClass({
  getInitialState() {
    return { text: this.props.name, editing: false };
  },

  handleChange(se) {
    this.setState(Object.assign({}, this.state, {text: se.target.value}));
  },

  handleSubmit(se) {
    if(se.which === 13) {
      this.props.modifyTodo(this.props.id, se.target.value);
      this.setState(this.getInitialState());
    }
  },

  render() {
    const { id, name, completed, toggleTodo, completedClass } = this.props;
    if (this.state.editing === false) {
      return (
        <li
          onClick={() => toggleTodo(id)}
          onDoubleClick={() => this.setState({ editing: true })}
        >
          <input
            type="checkbox"
            checked={completed ? true : false}
            className={completed ? completedClass : ''}
          />
          <label>{name}</label>

        </li>
      );
    } else {
      return (
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
      );
    }

  }
});

TodoItem.propTypes = {
  completed: React.PropTypes.bool,
  name: React.PropTypes.string,
  completeTodo: React.PropTypes.func,
};

export default TodoItem;
