import React from "react";
import NavigationComponent from "../NavigationComponent";

export default class ProjectsComponent extends React.Component {

  render()
  { 
    const projects = projectsList.map(project => {

    });

    
    return <div className="projects-div">
            <NavigationComponent current="projects">
              This is projects
            </NavigationComponent>
            
        </div>;
  }
}


var projectsList = [
  {
    name: "NXO",
    through: "",
    description: "",
    image: "",
    technologies: ["sql", "css", "html"]
  }
];