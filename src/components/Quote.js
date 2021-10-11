import React from 'react'
import Card from 'react-bootstrap/Card'

const Quote = () => {
    return (
        <div>
            <Card>
  <Card.Header className = "bg-info">Quote</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        There are two kinds of people in the world. Those who love cheese and those who are too ashamed to admit it.{' '}
      </p>
      <footer className="blockquote-footer">
        Sam Cockroft
      </footer>
    </blockquote>
  </Card.Body>
</Card>
        </div>
    )
}

export default Quote
