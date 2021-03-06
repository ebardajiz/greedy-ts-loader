import { createStore } from 'redux'

import rootReducer from './rootReducer'

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
  )

  return store
}

export default configureStore
