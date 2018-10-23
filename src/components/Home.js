import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import WelcomePage from './welcome_page';

export const PAGE_NAMES = {
    home: "home",
    contact: "contact",
    aboutMe: "aboutMe"
}

const Home = () => {
    
    const welcomeMessage = { 
        welcome: "Hi",
        name: "I'm Brady",
        site: "Welcome to my site!",
        description: (<div>I am a new web developer and will be using this site as a personal design project, a testing ground for new ideas and frameworks (if you find anything broken, email me!) and a showcase of what I can do. For more info about me,&nbsp;
                <Link to="/aboutme">
                    click here
                </Link>
                .
            </div>)
    }

    return (
        <div>
            <WelcomePage message = {welcomeMessage} />    
        </div>
    );
};

export default Home;