import React from 'react';
import { Link } from 'react-router-dom';

import RenderUi from './renderUi';
import { PictureCarousel} from './picture_carousel';


const Home = () => {

    const content = {
        leftPanel: (
            <div>
                <p>Hi</p>
                <p>I'm Brady</p>
                <p>Welcome to my site!</p>
            </div>
        ),
        centerPanel: (
            <div>
                I am a new web developer and will be using this site as a personal design project, a testing ground for new ideas and frameworks (if you find anything broken, email me!) and a showcase of what I can do. For more info about me,&nbsp;
                <Link to="/aboutme">
                    click here
                </Link>
                .
            </div>
        ),
        rightPanel: (
            <div>
                <PictureCarousel />
            </div>
        )

    }

    return (
        <div>
            <RenderUi content = {content} />
        </div>
    );
};

export default Home;