import React from 'react'
import PropTypes from 'prop-types'
import Todo from './TodoItem'

const TodoList = ({todos, toggleTodo, deleteTodo }) => (
  <div>
    {todos.map((todo) => (
      <Todo
        key={todo.id}
        {...todo}
        onChange={() => toggleTodo(todo.id)}
        onClick={ () => deleteTodo(todo.id)}
      />
    ))}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList