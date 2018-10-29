import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import SimpleAppBar from './simple_appbar';
import HeaderPaper from './header_paper';
import BodyPaper from './body_paper';


const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


const HomeGrid = (props) => {

    const { classes } = props;

    return (
        <React.Fragment>
            <SimpleAppBar />
            <main>
                <Grid container className={classes.root}>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <HeaderPaper />
                        <BodyPaper />
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </main>    
            
        </React.Fragment>
    );
};

export default withStyles(styles)(HomeGrid);