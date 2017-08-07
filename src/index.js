import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import RootReducer from './reducers'
import App from './components/App'

let store = applyMiddleware()(createStore);

render (
  <Provider store={ store(RootReducer) }>
    <App />
  </Provider>,
  document.getElementById('app')
)