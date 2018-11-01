import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import bw_mountains_moon from '../../assets/bw_mountains_moon.jpg';
import methow_valley from '../../assets/methow_valley.jpg';
import cody from '../../assets/cody.jpg';

const AutoplaySwipeableViews = autoPlay(SwipeableViews);

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
    img: {
        maxWidth: '100%',
        maxHeight: '100%'
    }
}

class PictureCarousel extends Component {
    state = {
        activeStep: 0,
    }

    handleStepChange = (activeStep) => {
        this.setState({ activeStep })
    };

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <div> 
                <AutoplaySwipeableViews
                index={activeStep}
                onChangeIndex={this.handleStepChange}
                >
                    {IMAGES.map((step, index) => (
                        <div key={step.label}>
                            { Math.abs(activeStep - index) <=2 ? (
                                <img className = {classes.img} src={step.src} alt={step.label}/>
                            ) : null }
                        </div>
                    ))}
                </AutoplaySwipeableViews>
            </div>
         );
    }
    
}

export default withStyles(styles)(PictureCarousel);