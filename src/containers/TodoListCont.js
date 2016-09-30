import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo, editTodo } from '../actions';

function filterTodos(todos, filter) {
  switch (filter) {
    case 'all':
      return todos;
    case 'pending':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
}

const mapStateToProps = (state, ownProps) => ({
  todosData: filterTodos(state.todos, ownProps.filter)
})

const mapDispatchToProps = (dispatch) => ({
  toggleTodo(id) {
    dispatch(toggleTodo(id));
  },
  modifyTodo(id, text) {
    dispatch(editTodo(id, text));
  }
})

const TodoListCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListCont;
