import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions'
import Todo from './TodoItem'


const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
  <div>
    {todos.map((todo) => (
      <Todo
        key={todo.id}
        {...todo}
        onChange={() => dispatch(toggleTodo(todo.id))}
        onClick={ () => dispatch(deleteTodo(todo.id))}
      />
    ))}
  </div>
  )

}

export default TodoList;

/*
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

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList) 
*/