import React from 'react';
import { Paper, withStyles, Grid, Tabs, Tab } from '@material-ui/core';

import AboutMe from './about_me';
import Contact from './contact';

const styles = (theme) => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        flexGrow: 1
    },
    tabSelected: {
        backgroundColor: theme.palette.grey[100]
    }
});

class BodyPaper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, value) {
        this.setState({ value });
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <Paper className={classes.root} square={true} elevation={1}>
                <Grid container className={classes.root.grid}>
                    <Grid item sm={1} md={1} lg={2} />
                    <Grid item sm={10} md={10} lg={8}>
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="About Me" classes={{ selected: classes.tabSelected }} />
                            <Tab label="Contact" classes={{ selected: classes.tabSelected }} />
                        </Tabs>
                        {value === 0 && <AboutMe />}
                        {value === 1 && <Contact />}
                    </Grid>
                    <Grid item sm={1} md={1} lg={2} />
                </Grid>

            </Paper>
        )
    }
}

export default withStyles(styles)(BodyPaper);