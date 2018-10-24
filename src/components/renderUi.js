import React, { Component } from 'react';

class RenderUi extends Component {

    render () {
        return (
            <div className="container ">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="dummy"></div>
                            <div className="bs-square square-left">
                                {this.props.content.leftPanel}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4" >
                            <div className="dummy"></div>
                            <div className="bs-square">
                                {this.props.content.centerPanel}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="dummy"></div>
                            <div className="bs-square">
                                {this.props.content.rightPanel}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default RenderUi;