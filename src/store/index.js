// ------------------------------ import libraries
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// ------------------------------ Import and combine reducers
import { searchReducer } from '@reducers/searchReducer'

const rootReducer = combineReducers({
  searchReducer
})

// Get the enhancer to use redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// this function returns the store
export function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
