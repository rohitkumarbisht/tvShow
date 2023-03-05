import axios from 'axios'
import { API_URL } from './config'
import { SEARCH_DATA } from './Constants'

export const searchAction = async (query) => {
  try {
    return await axios
      .get(API_URL + '/search/shows?q=' + query, {})
      .then((response) => {
        setData(response)
        return response
      })
  } catch (error) {}
}

export const setData = (response) => {
  return {
    type: SEARCH_DATA,
    payload: response,
  }
}
