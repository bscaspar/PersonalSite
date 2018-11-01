import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Button, CircularProgress } from '@material-ui/core';

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
        float: 'right',
        border: theme.palette.primary.main,
        border: '1px solid'
    },
    contactContainer: {
        marginTop: theme.spacing.unit
    },
    note: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit
    },
    emailFail: {
        color: '#F44336',
        width: '60%',
        float: 'right',
        transition: 'all 250ms linear',
        padding: theme.spacing.unit,
    },
    emailSuccess: {
        color: '#4CAF50',
        float: 'right',
        transition: 'all 250ms linear',
        margin: '14px',
    },
    progress: {
        margin: theme.spacing.unit,
        float: 'right'
    }
});

const Contact = (props) => {

    const { classes } = props;

    return (
        <Grid container className={classes.container} spacing={8}>
            <Grid item xs={12} md={6}>
                <form onSubmit={props.handleSubmit}>
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        required
                        className={classes.textField}
                        value={props.name}
                        onChange={props.handleFieldChange}
                        disabled={props.emailSending}
                    />
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        required
                        className={classes.textField}
                        value={props.email}
                        onChange={props.handleFieldChange}
                        disabled={props.emailSending}
                    />
                    <TextField
                        id="message"
                        label="Message"
                        multiline
                        rows={2}
                        variant="outlined"
                        required
                        className={classes.textField}
                        value={props.message}
                        onChange={props.handleFieldChange}
                        disabled={props.emailSending}
                    />
                    <Typography className={classes.note} variant="caption">(You can also just email me, bradyscaspar@outlook.com, the form does literally the same thing and is here for practice) </Typography>
                    <Button variant="outlined" className={classes.button} color="primary" type="submit" disabled={props.emailSending}>
                        Submit
                    </Button>
                    {props.emailSending && <CircularProgress className={classes.progress} size={34}/>}
                    {props.emailSuccess === true && <Typography className={classes.emailSuccess} variant="body2">Success!</Typography>}
                    {props.emailSuccess === false && <Typography className={classes.emailFail} variant="body2">The email didn't work :( try again or use the email listed above</Typography>}
                </form>
            </Grid>
            <Grid item xs={12} md={6}>
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
                        <Typography variant="caption" noWrap={false}>The code for this site is hosted on my public GH account in the PersonalSite repository, feel free to take a look!</Typography>
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

export default withStyles(styles)(Contact);