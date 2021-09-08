import React from "react";

export default class PersonalSection extends React.Component {
    render(){
        return <section class="resume-section" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        Robert F. 
                        <span class="text-primary"> Scheidegger</span>
                    </h1>
                    <div class="subheading mb-5">
                        22 Maid Marion Way, Queensbury NY 12804 · (518) 796-2728 · 
                        <a href="mailto:robert_scheidegger@brown.edu"> robert_scheidegger@brown.edu</a> ·  
                        <a href="mailto:bobby_fritz@brown.edu"> bobby_fritz@brown.edu</a>
                    </div>
                    <p class="lead">
                        <div class="font-weight-bold">Who am I?</div> 
                        My name is Robert Fritz Scheidegger, and I am currently a Sophomore at Brown University. I grew up in the town of Queensbury in Upstate New York (not Queens, as is often mistaken), although now I spend much of my time in Providence, Rhode Island (at Brown). 
                    </p>
                    <p class="lead">
                        <div class="font-weight-bold">What are my interests?</div> 
                        I have a wide range of interests both academically and professionally, although I am most interested in algorithms, computer systems, and software engineering.
                        As of September 2021, I am looking for employment opportunities for Summer 2022.
                    </p>
                    <p class="lead">
                        <div class="font-weight-bold">
                            What am I doing now?
                        </div>
                        I am currently starting my fall semester at Brown, while working on a variety of miscellaneous projects on the side to keep up my chops. 
                        Check out <a href="#courses">courses</a> to see the classes I am current taking, and <a href="#projects">projects</a> to see what else is keeping me busy.
                    </p>
                    <div class="social-icons mb-5">
                        <a class="social-icon" href="https://www.linkedin.com/in/robert-scheidegger-79a9941aa"><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-icon" href="https://github.com/RobScheidegger"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </section>;
    }
}