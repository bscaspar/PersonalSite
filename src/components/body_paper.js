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
    tabRoot: {
        backgroundColor: theme.palette.grey[100],
    },
    tabSelected: {
        border: '1px solid',
        borderColor: theme.palette.primary.main
    },
});

class BodyPaper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, value) {
        this.setState({ value });
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <Paper className={classes.root} square={true} elevation={1}>
                <Grid container className={classes.root.grid}>
                    <Grid item xs={1} lg={2} />
                    <Grid item xs={10} lg={8}>
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            classes={{indicator: classes.tabIndicator}}
                            centered
                        >
                            <Tab label="About Me" classes={{ root: classes.tabRoot, selected: classes.tabSelected}} style={{borderTopLeftRadius: "6px"}} />
                            <Tab label="Contact" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} style={{borderTopRightRadius: "6px"}}/>
                        </Tabs>
                        {value === 0 && <AboutMe />}
                        {value === 1 && <Contact />}
                    </Grid>
                    <Grid item xs={1} lg={2} />
                </Grid>

            </Paper>
        )
    }
}

export default withStyles(styles)(BodyPaper);