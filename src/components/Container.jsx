import React from 'react'

const containerStyle = {
    margin: 5
};

export default class Container extends React.Component{
    render(){
        return <div style={containerStyle}>
            {this.props.children}
        </div>
    }
}