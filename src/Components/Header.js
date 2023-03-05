import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setData } from '../Actions'
import { API_URL } from '../config'

const Header = () => {
  const dispatch = useDispatch()
  const searchData = async (e, query) => {
    e.preventDefault()
    let data = await fetch(API_URL + '/search/shows?q=' + query)
    const jsonData = await data.json()
    console.log(jsonData)
    dispatch(setData(jsonData))
  }
  const [query, setQuery] = useState('')
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <Link to="/" className="navbar-brand">
          TV MAZE
        </Link>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          ></input>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={(e) => {
              searchData(e, query)
            }}
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  )
}

export default Header
