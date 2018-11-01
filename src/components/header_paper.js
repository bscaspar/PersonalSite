import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

import { HEADER_SUBTEXT } from '../../assets/text_content';

const styles = (theme) => ({
    paper: {
        padding: theme.spacing.unit * 2,
    },
    title: {
        gutterBottom: true,
    },
    intro: {
        maxWidth: 600
    },
    listContainer: {
        textAlign: 'center',
        width: '100%',
        display: 'inline',
        backgroundColor: theme.palette.background.paper
    },
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
                {HEADER_SUBTEXT}
            </Typography>
            <Typography className={classes.listContainer}>
                <a target="_blank" href="https://www.material-ui.com/">
                    Material UI
                </a>
                ,&nbsp;
                <a target="_blank" href="https://www.reactjs.org">
                    React
                </a>
                ,&nbsp;
                <a target="_blank" href="https://www.redux.js.org">
                    Redux
                </a>
                ,&nbsp;
                <a target="_blank" href="https://www.webpack.js.org">
                    Webpack
                </a>
                ,&nbsp;
                <a target="_blank" href="https://www.nodejs.org">
                    Node.js
                </a>
            </Typography>
        </Paper>
    )
}

export default withStyles(styles)(WelcomePaper);