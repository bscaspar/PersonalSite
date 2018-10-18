import React, { Component } from 'react';

class WelcomePage extends Component {
    render(){
        return (
        <div>
            {this.props.message}
        </div>
        )
    }
}
export default WelcomePage;