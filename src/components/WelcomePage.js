import React, { Component } from 'react';

class WelcomePage extends Component {

    render() {
        return (
            <div className="body">
                <div className="container">
                    <div className="row welcome">
                        <div className="col-md-6 welcome-left">
                            <div className="welcome-left-text one">
                                <p>{this.props.message.welcome}</p>
                                <p>{this.props.message.name}</p>
                                <p>{this.props.message.site}</p>
                            </div>
                        </div>
                        <div className="col-md-6 welcome-right">
                            {this.props.message.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default WelcomePage;