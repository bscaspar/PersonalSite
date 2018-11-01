import React from 'react';
import { Paper, withStyles, Grid, Tabs, Tab } from '@material-ui/core';

import AboutMe from './about_me';
import Contact from './contact';
import sendEmail from '../actions/send_email';

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
            tabValue: 0,
            name: '',
            email: '',
            message: '',
            errorMessage: '',
            emailSending: false,
            emailSuccess: ''
        }

        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTabChange(e, tabValue) {
        this.setState({ tabValue });
    }

    handleFieldChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            emailSending: true,
            emailSuccess: ''
        }, () => {
            this.handleEmailSend(this.state.name, this.state.email, this.state.message);
        })
    }

    handleEmailSend(name, email, message) {

        this.setState({emailSending: true},)

        sendEmail(name, email, message)
        .then(
            (response) => {
                this.setState({ 
                    name: '',
                    email: '',
                    message: '',
                    errorMessage: '',
                    emailSuccess: true,
                    emailSending: false });
                setTimeout (() => {
                    this.setState({
                        emailSuccess: ''
                    });
                    }, 3000);
            }, 
            (error) => {
                this.setState({ emailSuccess: false,
                                emailSending: false });
        });
    }

    render() {
        const { classes } = this.props;
        const { tabValue } = this.state;

        return (
            <Paper className={classes.root} square={true} elevation={1}>
                <Grid container className={classes.root.grid}>
                    <Grid item sm={1} lg={2} />
                    <Grid item xs={12} sm={10} lg={8}>
                        <Tabs
                            value={this.state.tabValue}
                            onChange={this.handleTabChange}
                            indicatorColor="primary"
                            classes={{indicator: classes.tabIndicator}}
                            centered
                        >
                            <Tab label="About Me" classes={{ root: classes.tabRoot, selected: classes.tabSelected}} style={{borderTopLeftRadius: "6px"}} />
                            <Tab label="Contact" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} style={{borderTopRightRadius: "6px"}}/>
                        </Tabs>
                        {tabValue === 0 && <AboutMe />}
                        {tabValue === 1 && 
                            <Contact 
                                name={this.state.name}
                                email={this.state.email}
                                message={this.state.message}
                                emailSending={this.state.emailSending}
                                emailSuccess={this.state.emailSuccess}
                                handleFieldChange={this.handleFieldChange} 
                                handleSubmit={this.handleSubmit} />}
                    </Grid>
                    <Grid item sm={1} lg={2} />
                </Grid>

            </Paper>
        )
    }
}

export default withStyles(styles)(BodyPaper);