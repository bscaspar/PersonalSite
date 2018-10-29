import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import '../styles/style.css';

import Home from './components/home';

import Album from './components/album';

const App = () => {
    return(
        <React.Fragment>
            <CssBaseline />
            <Home />
        
            {/*<Album />*/}
            
        </React.Fragment>
    )
}

ReactDOM.render(
    <App />, 
    document.querySelector('.app'));
