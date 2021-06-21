import React from "react";
import NavigationComponent from "../NavigationComponent";

export default class HomeComponent extends React.Component {

  render()
  { 
    return <div className="projects-div">
            <NavigationComponent current="home"/>
            Home
        </div>;
  }
}


