import React from 'react';
import TodoForm from '../containers/TodoFormCont';
import TodoList from '../containers/TodoListCont';
import Footer from './Footer';
import '../css/App.css';

const App = ({ params }) => (
  <div>
    <TodoForm />
    <TodoList filter={params.filter || 'all'}/>
    <Footer />
  </div>
);

export default App;
