import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions'
import TodoList from './TodoList'

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