import React from 'react'

const technologyColors = {
    sql: "yellow",
    css: "orange"
};

export default class TechnologyBadge extends React.Component{
    render(){
        const color = technologyColors[this.props.name.toLowerCase()]
        return <span style={{color: color}}>
            {this.props.name}
        </span>
    }
}