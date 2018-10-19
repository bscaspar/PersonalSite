import React, { Component } from 'react';

class WelcomePage extends Component {

    render() {
        return (
            <div className="body">
                <div className="container welcome">
                    <div className="row">
                        <div className="col-md-1" />
                        <div className="col-md-5 welcome-left welcome-left-text">
                            <p>{this.props.message.welcome}</p>
                            <p>{this.props.message.name}</p>
                            <p>{this.props.message.site}</p>
                        </div>
                        <div className="col-md-5 welcome-right">
                            {this.props.message.description}
                        </div>
                        <div className="col-md-1" />
                    </div>
                </div>
            </div>
        )
    }
}
export default WelcomePage;