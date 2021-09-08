import React from 'react'

const technologyColors = {
    "sql": "orange",
    "css": "orange",
    "blazor webassembly": "blue",
    "c#": "blue",
    "asp.net core": "yellow",
    "azure": "#0078d4",
    "ci/cd": "purple",
    "react": "#61dafb",
    "javascript": "black",
    "typescript": "#3178c6"
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