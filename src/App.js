import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import './index.css'

const App = () => {
  return (
    <div className="app">
      <Router>
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} exact />
            </Routes>
          </Container>
        </main>
      </Router>
    </div>
  )
}

export default App
