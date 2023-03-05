import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Header from './Header'
import MovieCard from './MovieCard'

const Home = () => {
  const calibration = useSelector((state) => state.movieData.data)
  console.log(calibration)
  return (
    <>
      <Header />

      <Row>
        {calibration?.map((product) => (
          <Col key={product.show.id} sm={12} md={6} lg={4}>
            <MovieCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home
