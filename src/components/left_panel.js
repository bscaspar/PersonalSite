import React from 'react';
import NAV_NAMES from './Home/NAV_NAMES';

const content = {
    home: (
        <div>
            <p>Hi</p>
            <p>I'm Brady</p>
            <p>Welcome to my site</p>
        </div>
    ),
    contact: (
        <div>
            Get in touch
        </div>
    ),
    aboutMe: (
        <div>
            About me
        </div>
    )
}

const LeftPanel = (props) => {
    return (
        <div>{props.message}</div>
    )
}

export default LeftPanel;