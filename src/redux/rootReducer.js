import { combineReducers } from 'redux'
import { homeReducer } from './homeReducer'
/**
 * description | This function sets reducers with rootReducer
 */
export default combineReducers({
  home: homeReducer,
})
