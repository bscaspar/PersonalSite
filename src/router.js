import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

const Routes = () => {
    return(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/AboutMe" component={AboutMe} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Routes;