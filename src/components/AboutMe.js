import React from 'react';

const AboutMe = () => {
    return(
        <div className="container ">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="dummy"></div>
                            <div className="bs-square square-left">
                                About me
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4" >
                            <div className="dummy"></div>
                            <div className="bs-square">
                            I recently left my job as a program manager on the Microsoft Azure team. I loved my team and the company, but something was missing - I just wasn’t sure what. After taking time off and traveling around the Pacific North West, climbing and exploring with my girlfriend and new puppy, I settled on a career as a web developer. The future will be an exciting challenge as I explore the latest web technologies and languages. I'm looking forward to learning on a daily basis, to engaging in the design process, and to having the autonomy that lets me live the lifestyle I love.
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="dummy"></div>
                            <div className="bs-square">
                                <h3>LinkedIn</h3>
                                <a  href="https://www.linkedin.com/in/bradyscaspar">https://www.linkedin.com/in/bradyscaspar</a>
                                <h3>GitHub</h3>
                                <a  href="https://github.com/bscaspar">https://github.com/bscaspar</a>
                                <h3>Instagram</h3>
                                <a  href="https://www.instagram.com/friendly_g/">https://www.instagram.com/friendly_g/</a>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default AboutMe;