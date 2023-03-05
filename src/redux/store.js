/**
 * setting up store to change their state only once promises gets resolved
 */
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

// const { createLogger } = require(`redux-logger`)
// const logger = createLogger({
//   collapsed: true,
// })
// middleware.push(logger)
// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(applyMiddleware(...middleware))
// )

const middleware = applyMiddleware(thunk, createLogger())
export default createStore(rootReducer, middleware)
