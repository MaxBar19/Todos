const initialState = [
  {
    id: 0,
    title: "Test Initial State",
    completed: false
  }
]

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    case 'DELETE_TODO':
      return state.filter(todo => action.id !== todo.id);
    default:
      return state
  }
}

export default todos
