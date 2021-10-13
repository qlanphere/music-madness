import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import {Card, Body} from 'react-bootstrap'
import Img from './Img'
import Bodys from './Bodys'

const About = () => {
    return (
        <div>
            <h2>What is Cheese? </h2>
            <Card>
                <Card.Body>Cheese is the home of guilty pleasures from the world of POP. Reminisce with the best songs from your favourite boy bands, girl bands, one hit wonders, 70s, 80s, 90s and the naughties. If its fun, it will find itself at home here, including you!</Card.Body>
            </Card>
            <p></p>
            <div className="imgsmargin">
                <Img src="https://e.snmc.io/i/150/w/934a79d484092a8d51cbd6231b62f66a/2824624" />
                <Img src="https://e.snmc.io/i/150/w/1321470f0e757d918daa9391ea6c83d1/2207143" />
                <Img src="https://e.snmc.io/i/150/w/880f84c547793b2d367c661a68d779a3/5707964" />
                <Img src="https://e.snmc.io/i/150/w/8ea55957cada6698bcb756728c8b44c3/1303991" />
                <Img src="https://e.snmc.io/i/150/w/a1d04a2e7277de5c23f59b346ff0c5b6/1555190" />
                <Img src="https://e.snmc.io/i/150/w/64ca611589c23ebf04c2c007b93b93ed/4622060" />
                <Img src="https://e.snmc.io/i/150/w/24938e5ddf3357ebce0a6612a1657a98/1473168" />
                <Img src="https://e.snmc.io/i/150/w/f649211adf5a01c0b93a82db0e23a7a2/1446293" />
                <Img src="https://e.snmc.io/i/150/w/1be6a47dc474f00f885071fcd01d0a83/2196314" />
                <Img src="https://e.snmc.io/i/150/w/391569496c7f959ee527b43d3e060770/1830138" />
            </div>
        </div>
    )
}

export default About
