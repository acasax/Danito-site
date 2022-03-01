import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

/** Reducers */
import products from './SiteNavigation'
import webSiteData from './SiteData'

const reducer = combineReducers({
  products,
  webSiteData
})

/** Applying middleware */
const middleware = [thunk]
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
