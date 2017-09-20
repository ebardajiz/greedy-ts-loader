import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from 'Redux/configureStore'

const store = configureStore()

const rootEl = document.getElementById('root')
const rootApp = <Provider store={store}>
  <App />
</Provider>

ReactDom.render(
  rootApp,
  rootEl,
)
