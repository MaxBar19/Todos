import React, { useState } from 'react'
import { addTodo } from '../actions'
import { useDispatch } from 'react-redux'

const AddTodo = () => {

  const [count, setCount] = useState('banana');
  let input;

  const dispatch = useDispatch();

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

export default AddTodo;