import React from 'react'
import AddTodo from './TodoAdd'
import ShowTodos from './ShowTodos'
import Header from 'D:/projects_staging/react_projects/todo_new/src/components/header'
import '../App.scss'

const App = () => (
  <div>
    <Header />
    <AddTodo />
    <ShowTodos />
  </div>
)

export default App