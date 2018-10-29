import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import * as emailjs from 'emailjs-com';
import { Launch } from '@material-ui/icons';

const FieldGroup = ({ id, label, ...props }) => {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>

    );
};

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
        float: "right"
    },
    contactContainer: {
        marginTop: theme.spacing.unit
    }
});

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const serviceId = "bscaspar_gmail";
        const templateId = "template_G6LO5SQg";
        const userId = "user_ckhJga60nVGejK8C2ZFin";
        emailjs.send(
            serviceId,
            templateId,
            {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            },
            userId
        )
            .then(() => {
                this.setState({
                    name: '',
                    email: '',
                    message: ''
                })
            });
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.container} spacing={8}>
                <Grid item sm={12} md={6}>
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
                    <Button variant="contained" className={classes.button} color="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>
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
                                <Launch fontSize="inherit" />
                                </a>
                            </Typography>
                        </div>
                        <div className={classes.contactContainer}>
                            <Typography variant="h5" noWrap>Instagram</Typography>
                            <Typography variant="body1" noWrap={true}>
                                <a target="_blank" href="https://www.instagram.com/friendly_g/">
                                    https://www.instagram.com/friendly_g/
                                <Launch fontSize="inherit" />
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