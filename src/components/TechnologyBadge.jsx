import React from 'react'

const technologyColors = {
    "sql": "orange",
    "html": "#de8004",
    "css": "orange",
    "blazor": "#58289c",
    "c#": "#4a5a8a",
    "asp.net core": "#a2c977",
    "azure": "#0078d4",
    "ci/cd": "purple",
    "react": "#61dafb",
    "javascript": "black",
    "typescript": "#3178c6",
    "jquery": "#b24926",
    "mysql": "#f29221",
    "mocha": "brown",
    "azure devops": "purple"
};

const style = {
    border: "1px solid black",
    borderRadius: 5,
    padding: 5,
    margin: 5
};

export default class TechnologyBadge extends React.Component{
    render(){
        const color = technologyColors[this.props.name.toLowerCase()]
        let customStyle = {...style, color: color}
        return <span style={customStyle} class="shadow font-weight-bold display-inline-block technology-badge"> 
            {this.props.name}
        </span>
    }
}