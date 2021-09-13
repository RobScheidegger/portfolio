import React from "react";
import TechnologyBadge from "./TechnologyBadge";

const projectsList = [
    {
        name: "Dark Matter Imaging",
        description: "As the final project for Data Science (CSCI1951A) as well as an ongoing research endevour, our team decided to build a RNN classifier to determine whether they were examples of strong gravitational lensing or not. "
                + "We build this model based on a recent paper in the subject (Huang 20, Huang 21), and run using a combination of local data provided by the physics department and API cutouts from previous surveys. "
                + "The model was then trained and tested using the Oscar supercomputer.",
        technologies: ["Python", "Tensorflow", "MapReduce", "PySpark", "Bash"],
        github: "https://github.com/lzawbrito/red-galaxies"
    },
    {
        name: "Personal Web Site (This)",
        description: "A place for me to give a breif overview of who I am and what I have done and will do. "
            + "Published for free on Azure as a React static web app, using GitHub actions to automate deployment on commit.",
        github: "https://github.com/RobScheidegger/robscheidegger.github.io",
        technologies: ["React", "HTML", "CSS", "JavaScript"]
    },
    {
        name: "nxo",
        description: "Multiplayer real-time web game of multidimensional tic-tac-toe (also known as the nd-game). "
                + "Users can join friends in a lobby-based authentication scheme, and create games with various board-sizes and numbers of dimensions (4x4x4x4 is a personal favorite).",
        github: "https://github.com/RobScheidegger/nxo",
        technologies: ["Blazor", "C#", "Asp.Net Core", "WebSockets", "SignalR"]
    },
    {
        name: "pyret-blocks",
        description: "Web UI that allows users to write Pyret code by dragging and dropping blocks in a visual fashion. "
            + "Responsible for improving the UI with a CSS restyle as well as completing the parser module to properly build Pyret parse trees for additional language features. ",
        github: "https://github.com/bootstrapworld/pyret-blocks",
        technologies: ["React", "JavaScript", "TypeScript", "Mocha"],

    }
];

export default class ProjectsSection extends React.Component {
    render(){
        const projects = projectsList.map(p => {
            const github = p.github ? <a class="social-icon" href={p.github}><i class="fab fa-github"></i></a> : "";
            return <div class="col-lg-6">
                <div class="card shadow p-3 m-3">
                    <h3><span class="mr-2">{p.name}</span>{github}</h3>
                    <p>{p.description}</p>
                    <p class="technologies-list">
                        {p.technologies.map(t => <TechnologyBadge name={t}/>)}
                    </p>
                </div>
            </div>
        });
        return <section class="resume-section" id="projects">
            <div class="resume-section-content">
                <h2 class="mb-5">Projects</h2>
                <div class="row">
                    {projects}
                </div>
            </div>
        </section>;
    }
}