import React from "react";
import NavigationComponent from "../NavigationComponent";
import Container from "../Container";
import PageHeader from "../PageHeader";
import ProjectCard from "./ProjectCard";

const projectsList = [
  {
    name: "NXO",
    for: "",
    description: "",
    image: "",
    technologies: ["sql", "css", "html"]
  }
];

export default class ProjectsComponent extends React.Component {

  render()
  { 
    const projects = projectsList.map((project,i) => {
      console.log(project, i);
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

