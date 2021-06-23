import React from 'react'
import Card from '../Card';
import TechnologyBadge from './TechnologyBadge';

const projectImageStyle = {
    display: "inline-block",
    height: 100,
    width: 200
};

const containerStyle = {
    margin: 15
}

export default class ProjectCard extends React.Component{
    render(){
        const project = this.props.project;
        console.log(project.technologies)
        const technologies = project.technologies.map(tech => <TechnologyBadge name={tech} />)
        
        return <Card>
            <div style={{display: "flex"}}>
                <div style={projectImageStyle}>
                    
                </div>
                <div>
                    <div style={containerStyle}>
                        {project.name} - {project.term}
                    </div>
                    <div style={containerStyle}>
                        {project.for}
                    </div>
                    <div style={containerStyle}>
                        {project.term}
                    </div>
                    <div style={containerStyle}>
                        {project.description}
                    </div>
                    <div style={containerStyle}>
                        {technologies} 
                    </div>
                </div>
                
            </div>
        </Card>
    }
}