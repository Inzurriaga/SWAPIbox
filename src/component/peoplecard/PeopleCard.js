import React, { Component } from "react"

export default class PeopleCard extends Component{
    constructor(){
        super();
        this.state = {
            test: true
        } 
    }

    render(){
        return(
            <div>
               {this.props.people.name}
            </div>
        )
    }
}