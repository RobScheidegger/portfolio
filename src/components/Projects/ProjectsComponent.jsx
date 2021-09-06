import React from "react";
import NavigationComponent from "../NavigationComponent";
import Container from "../Container";
import PageHeader from "../PageHeader";
import ProjectCard from "./ProjectCard";

const projectsList = [
  {
    name: "NXO",
    for: "Personal",
    description: "Multiplayer game for multidimensional tic-tac-toe (also known as the 'nd'-game) using ",
    image: "",
    technologies: ["C#","ASP.Net Core","Blazor Webassembly","CSS", "HTML", "Azure App Service", "Websockets", "SignalR"],
    term: ""
  },
  {
    name: "Dark Matter Imaging",
    for: "CSCI1951A Final Project/Research",
    description: "",
    image: "",
    technologies: [],
    term: ""
  }
];

export default class ProjectsComponent extends React.Component {

  render()
  { 
    const projects = projectsList.map((project,i) => {
      return <ProjectCard project={project} key={i}/>
    });
    console.log(projectsList)
    console.log(projects)
    
    return <div className="projects-div">
            <NavigationComponent current="projects">
              <Container>
                <PageHeader title="Projects">

                </PageHeader> 
                <div className="slideInFromBottom">
                  {projects}
                </div>
              </Container>
            </NavigationComponent>
        </div>;
  }
}

