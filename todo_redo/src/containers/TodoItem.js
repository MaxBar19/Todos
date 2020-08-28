import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onChange, completed, title, onClick }) => (
  <p style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}>
    <input type="checkbox" onChange={onChange}
    />
    {title}
    <input className="removeBtn" type="button" value="x" onClick={onClick}/>
  </p>
)

Todo.propTypes = {
  onChange: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Todo