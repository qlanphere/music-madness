import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import BackButton from './Backbutton'

const Header = () => {
  return (
    <div>
      <Navbar bg="info" variant="light">
        <Container>
          <Navbar.Brand href="#home">🧀  Cheese</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/music">Music</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <BackButton/>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
