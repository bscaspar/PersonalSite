import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import PictureCarousel from './picture_carousel';

const styles = theme => ({
    container: {
        flexGrow: 1,
        padding: theme.spacing.unit * 2
    }
});

const AboutMe = (props) => {

    const { classes } = props;

    return (
        <Grid className={classes.container} spacing={8} container>
            <Grid item xs={8}>
                <Typography variant="body1">
                    I recently left my job as a program manager on the Microsoft Azure team. I loved my team and the company, but something was missing - I just wasn’t sure what. After taking time off and traveling around the Pacific North West, climbing and exploring with my girlfriend and new puppy, I settled on a career as a web developer. The future will be an exciting challenge as I explore the latest web technologies and languages. I'm looking forward to learning on a daily basis, to engaging in the design process, and to having the autonomy that lets me live the lifestyle I love.
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <PictureCarousel />
            </Grid>

        </Grid>
    )
}

export default withStyles(styles)(AboutMe);