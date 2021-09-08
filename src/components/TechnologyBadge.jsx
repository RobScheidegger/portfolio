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
    "azure devops": "purple",
    "handlebars": "green",
    "unit testing": "red",
    "moq": "orange",
    "mssql": "#b82111",
    "it": "#ad33b8",
    "hardware": "black",
    "python": "lightgreen",
    "tensorflow": "#ffb114",
    "mapreduce": "darkred",
    "pyspark": "darkorange",
    "bash": "darkgray",
    "websockets": "darkblue",
    "signalr": "red",
    "physics": "green",
    "problem solving": "red",
    "analysis": "orange",
    "pyret": "cyan",
    "algorithms": "darkblue",
    "c++": "lightblue",
    "combinatorics": "brown",
    "solidity": "green",
    "systems": "black",
    "golang": "blue",
    "c": "purple",
    "assembly": "red",
    "ai": "lightblue",
    "machine learning": "lightgreen",
    "distributed systems/consensus": "darkgray",
    "statistics": "darkorange",
    "algebra": "darkblue",
    "linear algebra": "darkgreen"
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