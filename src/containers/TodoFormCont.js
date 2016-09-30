import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { addTodo } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  onSubmit(text) {
    dispatch(addTodo(text));
  }
});

const TodoFormCont = connect(undefined, mapDispatchToProps)(TodoForm);

export default TodoFormCont;
