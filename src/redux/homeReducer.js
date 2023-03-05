import { SEARCH_DATA } from '../Constants'

const initialState = {
  search_data: '',
}
const initialAction = {
  type: '',
  payload: {},
}
/**
 * Description | This function maps data from Dashboard actions with the reducers and set to store
 */
export const homeReducer = (state = initialState, action = initialAction) => {
  switch (action.type) {
    case SEARCH_DATA:
      return {
        ...state,
        search_data: action.payload,
      }
    default:
      return state
  }
}
