import uuid from 'uuid';

export const addTodo = title => ({
  type: 'ADD_TODO',
  id: uuid.v4(),
  title
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})