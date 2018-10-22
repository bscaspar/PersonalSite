import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';
import { PictureCarousel } from './PictureCarousel';

class WelcomePage extends Component {

    render() {
        return (
                <div className="container welcome">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="dummy"></div>
                            <div className="welcome-left welcome-left-text">
                                <p>{this.props.message.welcome}</p>
                                <p>{this.props.message.name}</p>
                                <p>{this.props.message.site}</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6" >
                            <div className="dummy"></div>
                            <div className="welcome-center">
                                {this.props.message.description}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="dummy"></div>
                            <div className="welcome-right">
                                <PictureCarousel />
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default WelcomePage;