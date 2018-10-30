import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import customTheme from './theme/theme';
import '../styles/style.css';

import Home from './components/home'; 

const App = () => {
    return(
        <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={customTheme}>
            <Home />
        </MuiThemeProvider>
        </React.Fragment>
    )
}

ReactDOM.render(
    <App />, 
    document.querySelector('.app'));
