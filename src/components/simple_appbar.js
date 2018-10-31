import React from 'react';
import { AppBar, Toolbar, withStyles } from '@material-ui/core';

const styles = {
    root: {
        flexGrow: 1
    }
};

const SimpleAppBar = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(SimpleAppBar);