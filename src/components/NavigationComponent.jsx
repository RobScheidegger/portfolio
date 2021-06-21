import React from "react";
import { Link } from "react-router-dom";
import { navbarStyle, navlinkContainerStyle, navlinkStyleBuilder, sidebarStyle, cornerButtonStyle } from "./NavigationStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default class NavigationComponent extends React.Component {
  render() { 
    const isSelected = (target) => target === this.props.current;
    const styleBuilder = (target) => navlinkStyleBuilder(isSelected(target)); 
    const links = pages.map((page, i) => 
      <span style={navlinkContainerStyle} key={i}>
        <Link to={page.path} style={styleBuilder(page.name)}>
          {page.display}
        </Link>
    </span>);

    return <>
        <div style={navbarStyle}>
            <span style={cornerButtonStyle}>
              <FontAwesomeIcon icon={faCode} size="3x" style={{margin: "auto", verticalAlign: "center"}}/>
            </span>
            {links}
        </div>
        <div style={{display: "flex"}}>
          <div style={sidebarStyle}></div>
          <div style={{flex: 1}}>
            {this.props.children}
          </div>
        </div>
        
      </>
  }
}

export const pages = [
  {
    display: "Home",
    name: "home",
    path: "/"
  },
  {
    display: "Education",
    name: "education",
    path: "/education"
  },
  {
    display: "Projects",
    name: "projects",
    path: "/projects"
  }
]