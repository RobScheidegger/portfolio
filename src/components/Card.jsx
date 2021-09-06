import React from 'react'
// import { themeLightColor, themeLightText } from '../globalStyles'

const cardStyle = {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 7,
    padding: 20
};


export default class Card extends React.Component{
    render(){
        return <div style={cardStyle}>
            {this.props.children}
        </div>
    }
}