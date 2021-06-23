import React from 'react'

const technologyColors = {
    sql: "yellow",
    css: "orange",
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
        return <span style={customStyle}>
            {this.props.name}
        </span>
    }
}