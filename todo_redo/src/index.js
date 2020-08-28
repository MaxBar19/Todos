import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import todos from './reducers'
import App from './containers/App'
import thunk from 'redux-thunk'

const store = createStore(todos, composeWithDevTools(applyMiddleware(thunk)))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)