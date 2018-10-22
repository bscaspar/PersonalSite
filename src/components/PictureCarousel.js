import React from 'react';
import { Carousel } from 'react-bootstrap';
import bw_mountains_moon from '../../assets/bw_mountains_moon.jpg';
import methow_valley from '../../assets/methow_valley.jpg';

export const PictureCarousel = () => {
    return (
        <div>
            <Carousel indicators={false} controls={false}>
                <Carousel.Item>
                    <img src={bw_mountains_moon} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={methow_valley} />
                </Carousel.Item>
            </Carousel>

        </div>
    )
}