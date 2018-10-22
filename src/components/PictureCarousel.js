import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import bw_mountains_moon from '../../assets/bw_mountains_moon.jpg';

export const PictureCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img width={300} height={300} alt="300x300" src={bw_mountains_moon} />
                    <Carousel.Caption>
                        <h3>First slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}