import React from 'react'
import {Carousel} from 'react-bootstrap'

const Slider = () => (
    <Carousel>
        <Carousel.Item>
            <img src="/slide1.png" alt="" className="foto-slide"/>
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="/slide2.jpeg.png" alt="" className="foto-slide"/>
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="/LOGO.jpg" alt="" className="foto-slide"/>
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);

export default Slider