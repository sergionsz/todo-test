import * as actionTypes from '../constants/actionTypes';

export const addTodo = (text) => ({ type: actionTypes.ADD_TODO, text });
export const toggleTodo = (id) => ({ type: actionTypes.TOGGLE_TODO, id})
export const editTodo = (id, text) => ({ type: actionTypes.EDIT_TODO, id, text})
