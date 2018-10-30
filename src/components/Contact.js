import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import * as emailjs from 'emailjs-com';

const styles = (theme) => ({
    container: {
        flexGrow: 1,
        padding: theme.spacing.unit * 2
    },
    item: {
        margin: theme.spacing.unit
    },
    textField: {
        margin: theme.spacing.unit,
        width: '95%'
    },
    button: {
        margin: theme.spacing.unit,
        float: 'right'
    },
    contactContainer: {
        marginTop: theme.spacing.unit
    },
    note: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit
    },
    error: {
        color: '#F44336'
    }
});

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            errorMessage: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.sendEmail(this.state.name, this.state.email, this.state.message);
        this.setState({
            name: '',
            email: '',
            message: '',
            errorMessage: ''
        })
    }
    sendEmail(name, email, message) {

        const SERVICE_ID = "bscaspar_gmail";
        const TEMPLATE_ID = "template_G6LO5SQg";
        const USER_ID = "user_ckhJga60nVGejK8C2ZFin";
        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                name: name,
                email: email,
                message: message
            },
            USER_ID
        )
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.container} spacing={8}>
                <Grid item sm={12} md={6}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            id="name"
                            label="Name"
                            variant="outlined"
                            required
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            required
                            className={classes.textField}
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <TextField
                            id="message"
                            label="Message"
                            multiline
                            rows={2}
                            variant="outlined"
                            required
                            className={classes.textField}
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                        <Typography className={classes.note} variant="caption">(You can also just email me, bradyscaspar@outlook.com, the form does literally the same thing and is here for practice) </Typography>
                        <Button variant="contained" className={classes.button} color="primary" type="submit">
                            Submit
                    </Button>
                    </form>
                </Grid>
                <Grid item sm={12} md={6}>
                    <div className={classes.item}>
                        <div className={classes.contactContainer}>
                            <Typography variant="h5">
                                LinkedIn
                                </Typography>
                            <Typography variant="body1" noWrap={true}>
                                <a target="_blank" href="https://www.linkedin.com/in/bradyscaspar">
                                    https://www.linkedin.com/in/bradyscaspar
                                    </a>
                            </Typography>
                        </div>
                        <div className={classes.contactContainer}>
                            <Typography variant="h5" noWrap>GitHub</Typography>
                            <Typography variant="body1" noWrap={true}>
                                <a target="_blank" href="https://github.com/bscaspar">
                                    https://github.com/bscaspar
                                    </a>
                            </Typography>
                        </div>
                        <div className={classes.contactContainer}>
                            <Typography variant="h5" noWrap>Instagram</Typography>
                            <Typography variant="body1" noWrap={true}>
                                <a target="_blank" href="https://instagram.com/friendly_g">
                                    https://instagram.com/friendly_g
                                </a>
                            </Typography>
                        </div>

                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Contact);