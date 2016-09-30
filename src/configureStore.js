import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import reducer from './reducers';

const tempState = {
  todos: [
    {
      id: 2,
      name: 'Do something',
      completed: false,
    },
    {
      id: 5,
      name: 'Do something else',
      completed: true,
    },
  ],
};

function configureStore() {
  const store = createStore(
    reducer,
    tempState,
    applyMiddleware(createLogger())
  );

  return store;
}

export default configureStore;
