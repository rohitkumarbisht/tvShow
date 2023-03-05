import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchAction } from '../Actions'

const Header = () => {
  const dispatch = useDispatch()
  const calibration = useSelector((state) => state)
  console.log('cali', calibration)
  const searchData = async (e, query) => {
    e.preventDefault()
    const response = await searchAction(query, dispatch)
    console.log('Response', response)
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
