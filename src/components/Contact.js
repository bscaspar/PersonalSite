import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import * as emailjs from 'emailjs-com';


const FieldGroup = ({ id, label, ...props }) => {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>

    );
};

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
        this.setState({ [e.target.name]: e.target.value });
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
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                            <FieldGroup
                                id="emailInput"
                                type="email"
                                label="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <FormGroup controlId="messageTextArea">
                                <ControlLabel>Message</ControlLabel>
                                <FormControl
                                    componentClass="textarea"
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <Button bsStyle="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;