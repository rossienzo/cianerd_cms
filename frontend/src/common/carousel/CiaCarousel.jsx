import "./CiaCarousel.css";

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CiaCarousel = (props) =>
{
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => { setIndex(selectedIndex); };
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {props.dataCarousel.map(item => (
                <Carousel.Item key={item.id}>
                    <img
                        className="d-block w-100"
                        src={process.env.REACT_APP_URL_LOCAL + item.attributes.image.data[0].attributes.url}
                        alt={item.attributes.alt}
                    />
                    <Carousel.Caption>
                        <h3>{item.attributes.title}</h3>
                        <p>{item.attributes.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
            

            {/*  
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            */}
        </Carousel>
    );
};

export default CiaCarousel;