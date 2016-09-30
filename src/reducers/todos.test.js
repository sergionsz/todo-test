import todos from './todos';
import * as actions from '../actions';

jest.mock('node-uuid', () => {
  let counter = 0;
  return {
    v4() {
      return counter++;
    },
  };
});

describe('todos reducer', () => {
  it('Adds a todo', () => {
    const stateBefore = [];
    const stateAfterOne = [{
      id: 0,
      name: 'Get the milk',
      completed: false,
    }];
    const stateAfterTwo = [{
        id: 0,
        name: 'Get the milk',
        completed: false,
      },
      {
        id: 1,
        name: 'Get a cat',
        completed: false,
    }];

    expect(
      todos(stateBefore, actions.addTodo('Get the milk'))
    ).toEqual(stateAfterOne);

    expect(
      todos(stateAfterOne, actions.addTodo('Get a cat'))
    ).toEqual(stateAfterTwo);
  });

  it('Marks a todo as completed', () => {
    const state = [{
        id: 0,
        name: 'Get the milk',
        completed: false,
      },
      {
        id: 1,
        name: 'Get a cat',
        completed: false,
    }];
    const stateAfter = [{
        id: 0,
        name: 'Get the milk',
        completed: false,
      },
      {
        id: 1,
        name: 'Get a cat',
        completed: true,
    }];
    expect(todos(state, actions.toggleTodo(1))).toEqual(stateAfter);
  });

  it('Marks a todo as pending', () => {
    const stateBefore = [{
        id: 0,
        name: 'Get the milk',
        completed: true,
      },
      {
        id: 1,
        name: 'Get a cat',
        completed: true,
    }];
    const stateAfter = [{
        id: 0,
        name: 'Get the milk',
        completed: true,
      },
      {
        id: 1,
        name: 'Get a cat',
        completed: false,
    }];
    expect(todos(stateBefore, actions.toggleTodo(1))).toEqual(stateAfter);
  });

  it('Edits a todo', () => {
    const stateBefore = [{
        id: 0,
        name: 'Get the milk',
        completed: true,
      },
      {
        id: 1,
        name: 'Get a cat',
        completed: true,
    }];
    const stateAfter = [{
        id: 0,
        name: 'Get the milk',
        completed: true,
      },
      {
        id: 1,
        name: 'Get a dog instead',
        completed: true,
    }];
    expect(todos(stateBefore, actions.editTodo(1, 'Get a dog instead')))
    .toEqual(stateAfter);
  });
});
