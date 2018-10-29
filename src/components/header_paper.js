import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const styles = (theme) => ({
    paper: {
        padding: theme.spacing.unit * 2,
    },
    title: {
        gutterBottom: true,
    },
    intro: {
        maxWidth: 600
    }
});

const WelcomePaper = (props) => {
    const { classes } = props;

    return (
        <Paper className={classes.paper} elevation={1} square={true} align='center'>
            <Typography className={classes.title} variant="h3" color="textPrimary" gutterBottom>
                Hi, I'm Brady
                <br />
                Welcome to my site!
            </Typography>
            <Typography className={classes.intro} variant="subtitle1" color="textSecondary" paragraph>
                I am a new web developer and use this site as a personal design project, a testing ground for new ideas and frameworks (if you find anything broken, email me!) and as a small showcase of the type of work I can do.
            </Typography>
        </Paper>
    )
}

export default withStyles(styles)(WelcomePaper);