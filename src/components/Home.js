import React from 'react';
import WelcomePage from './WelcomePage';

const Home = () => {
    const message = "Hello World!";
    return(
        <div>
            <WelcomePage message={message} />
        </div>
    );
};

export default Home;