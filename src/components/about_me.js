import React from 'react';

import RenderUi from './renderUi';

const AboutMe = () => {
    
    const content = {
        leftPanel: "About me",
        centerPanel: "I recently left my job as a program manager on the Microsoft Azure team. I loved my team and the company, but something was missing - I just wasn’t sure what. After taking time off and traveling around the Pacific North West, climbing and exploring with my girlfriend and new puppy, I settled on a career as a web developer. The future will be an exciting challenge as I explore the latest web technologies and languages. I'm looking forward to learning on a daily basis, to engaging in the design process, and to having the autonomy that lets me live the lifestyle I love.",
        rightPanel: (
            <div>
                <h3>LinkedIn</h3>
                <a target="_blank" href="https://www.linkedin.com/in/bradyscaspar">https://www.linkedin.com/in/bradyscaspar<div className="glyphicon glyphicon-new-window"/></a>
                <h3>GitHub</h3>
                <a  href="https://github.com/bscaspar">https://github.com/bscaspar<div className="glyphicon glyphicon-new-window"/></a>
                <h3>Instagram</h3>
                <a  href="https://www.instagram.com/friendly_g/">https://www.instagram.com/friendly_g/<div className="glyphicon glyphicon-new-window"/></a>  
            </div>
        )
    }
    
    return(
        <RenderUi content={content} />
    )
}

export default AboutMe;