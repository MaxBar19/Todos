import React, { useState } from 'react'
import { addTodo } from '../actions'
import { connect } from 'react-redux'

const AddTodo = ({ dispatch }) => {

  const [count, setCount] = useState('banana');
  let input;

  return (
    <form 
      onSubmit ={e => {
        e.preventDefault();
        if (!input.value.trim()) {
            return
          }
        dispatch(addTodo(input.value))
        input.value = ''
      }} >
      <input placeholder="Add your todo..." type="text" ref = {node => (input = node)} style={{flex:'1', padding:'5px'}} />
      <button className="btn" type="submit">Add</button>
      <button onClick = {() => setCount(count + 1)}>test value: {count}</button>
    </form>
  )

}

export default connect()(AddTodo)