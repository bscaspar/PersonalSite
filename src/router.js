import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import AboutMe from './components/AboutMe';

const Routes = () => {
    return(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/AboutMe" component={AboutMe} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Routes;