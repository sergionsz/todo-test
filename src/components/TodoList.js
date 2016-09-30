import React from 'react';
import TodoItem from './TodoItem';
import { todoCompleted } from '../constants/css';

const TodoList = ({ todosData, toggleTodo, modifyTodo }) => {
  const buildTodo = (data) => (
    <TodoItem
      key={data.id}
      id={data.id}
      name={data.name}
      completed={data.completed}
      toggleTodo={toggleTodo}
      modifyTodo={modifyTodo}
      completedClass={todoCompleted} />
  );

  return (
    <ul>
      {todosData.map(todo => buildTodo(todo))}
    </ul>
  );
};
TodoList.propTypes = {
  todosData: React.PropTypes.array,
};

export default TodoList;
