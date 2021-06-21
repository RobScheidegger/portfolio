import React from "react";
import { Link } from "react-router-dom";

export default class NavigationComponent extends React.Component {
  render() { 
    const getSelectedClass = (target) => target === this.props.current ? "selected" : ""; 

    return <div className="navigation-header" style={{color: this.props.color}}>
            <Link to="/" className={getSelectedClass("home")}>Home</Link>
            <Link to="/projects" className={getSelectedClass("projects")}>Projects</Link>
        </div>;
  }
}

