import React from 'react';
import WelcomePage from './WelcomePage';

const Home = () => {
    const welcomeMessage = { 
        welcome: "Hi",
        name: "I'm Brady",
        site: "This is my new site",
        description: "I am a new web developer and will be using this site as a personal design project, a testing ground for new ideas and frameworks (if you find anything broken, email me!) and a showcase of what I can do. For more info about me, click here."
    }

    return (
        <div>
            <WelcomePage message={welcomeMessage} />
        </div>
    );
};

export default Home;