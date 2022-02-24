import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

/** Reducers */
import products from './NavBar'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  products
})

/** Applying middleware */
const middleware = [thunk]
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
