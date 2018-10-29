import React from 'react';
import flowRight from 'lodash/flowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { virtualize } from 'react-swipeable-views-utils';
import bw_mountains_moon from '../../assets/bw_mountains_moon.jpg';
import methow_valley from '../../assets/methow_valley.jpg';
import cody from '../../assets/cody.jpg';

const EnhancedSwipeableViews = flowRight(
    autoPlay,
    virtualize
)(SwipeableViews);

const IMAGES = [
    {
        label: 'bw_mountains_moon',
        src: bw_mountains_moon
    },
    {
        label: 'methow',
        src: methow_valley
    },
    {
        label: 'cody',
        src: cody
    }
]

const styles = {
    maxWidth: '100%',
    maxHeight: '100%'
}

const slideRenderer = () => {
    return (
        IMAGES.map((step) => (
            <div key={step.label}>
                <img style={styles} src={step.src} />
            </div>
        ))
    );
}

const PictureCarousel = () => (
    <EnhancedSwipeableViews slideRenderer={slideRenderer} />
)

export default PictureCarousel;