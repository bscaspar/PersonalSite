import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const FieldGroup = ({ id, label, ...props }) => {
    return (
        <FormGroup controlId = {id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>

    );
};

class Contact extends Component {

    render() {
        return (
            <div className="container ">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-4">
                        <div className="dummy"></div>
                        <div className="bs-square square-left">
                            Get in touch
                            </div>
                    </div>
                    <div className="col-md-8 col-sm-8 col-xs-8" >
                        <form>
                            <FieldGroup
                                id="nameInput"
                                type="text"
                                label="Name"
                            />
                            <FieldGroup
                                id="emailInput"
                                type="email"
                                label="Email"
                            />
                            <FormGroup controlId="messageTextArea">
                                <ControlLabel>Message</ControlLabel>
                                <FormControl componentClass="textarea"/>
                            </FormGroup>
                            <Button bsStyle="primary" type="submit">Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;