import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/home';
import AboutMe from './components/about_me';
import Contact from './components/contact';

const Routes = () => {
    return(
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/AboutMe" component={AboutMe} />
                <Route path="/Contact" component={Contact} />
            </div>
        </Router>
    );
};

export default Routes;