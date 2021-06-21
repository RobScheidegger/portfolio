import React from "react";
import { Link } from "react-router-dom";

export default class NavigationComponent extends React.Component {
  render() { 

    return <div className="navigation-header" style={{color: this.props.color}}>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
        </div>;
  }
}

