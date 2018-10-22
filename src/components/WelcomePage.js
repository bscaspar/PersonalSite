import React, { Component } from 'react';
import { PictureCarousel } from './PictureCarousel';

class WelcomePage extends Component {

    render() {
        return (
                <div className="container welcome">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="dummy"></div>
                            <div className="bs-square square-left">
                                <p>{this.props.message.welcome}</p>
                                <p>{this.props.message.name}</p>
                                <p>{this.props.message.site}</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4" >
                            <div className="dummy"></div>
                            <div className="bs-square welcome-center">
                                {this.props.message.description}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="dummy"></div>
                            <div className="bs-square welcome-right">
                                <PictureCarousel />
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default WelcomePage;