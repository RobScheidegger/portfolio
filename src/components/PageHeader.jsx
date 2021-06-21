import React from 'react'
import Card from './Card'

const headerStyle = {
    fontSize: 30
};

export default class PageHeader extends React.Component {
    render(){
        return <div className="slideInFromRight">
            <Card>
                <div style={headerStyle}>{this.props.title}</div>
            </Card>
        </div>
    }
}