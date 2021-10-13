import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const Bodys = () => {
    return (
        <div className = "bodymargin">
            <Container>
  <Row>
    <Col><img src = "https://media.istockphoto.com/photos/head-is-swimming-on-dance-floor-picture-id486420378?k=20&m=486420378&s=612x612&w=0&h=9ke1NBm7rpVXIzIe3G3QaknTvPu5vHMItxyzNTZH150="></img></Col>
    <Col>
    <p className = "margin">
        Feel the Rhythm! <span role="img" aria-label="music">🎵</span>
    </p>
    <p className = "margin">
        Feel the Music! <span role="img" aria-label="music">🎵🎵</span>
    </p>
    <p className = "margin">
        Feel the Vibes! <span role="img" aria-label="music">🎵🎵🎵</span>
    </p>
    </Col>
  </Row>
</Container>
        </div>
    )
}

export default Bodys
