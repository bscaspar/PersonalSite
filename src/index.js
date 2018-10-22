import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.css';

import Routes from './router';


const App = () => {
    return(
        <Routes />
    )
}

ReactDOM.render(
    <App />, 
    document.querySelector('.app'));
