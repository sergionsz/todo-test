import { v4 } from 'node-uuid';
import * as actionTypes from '../constants/actionTypes';

function todos(state = [], action) {
  const findTodo = (id) => state.findIndex((item) => item.id === action.id);
  const replaceTodo = (index, todo) => (
    [].concat(
      state.slice(0,index),
      [todo],
      state.slice(index+1)
  ));
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const newTodo = {
        id: v4(),
        name: action.text,
        completed: false,
      };
      return [].concat(state, [newTodo]);
    case actionTypes.TOGGLE_TODO:
      const toggledIndex = findTodo(action.id);
      const toggledTodo = Object.assign(
        {}, state[toggledIndex],
        {completed: !state[toggledIndex].completed}
      );
      return replaceTodo(toggledIndex, toggledTodo);
    case actionTypes.EDIT_TODO:
      const editedIndex = findTodo(action.id);
      const editedTodo = Object.assign(
        {}, state[editedIndex],
        {name: action.text}
      );
      return replaceTodo(editedIndex, editedTodo);
    default:
      return state;
  }
}

export default todos;
