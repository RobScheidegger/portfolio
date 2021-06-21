import React from 'react'
import Card from '../Card';
import TechnologyBadge from './TechnologyBadge';

export default class ProjectCard extends React.Component{
    render(){
        const project = this.props.project;
        console.log(project.technologies)
        const technologies = project.technologies.map(tech => <TechnologyBadge name={tech} />)
        
        return <Card>
            {project.name}
            {technologies}
        </Card>
    }
}