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
            <div className="people-card">
               <p>{this.props.people.name}</p>
               <p>{this.props.people.worldName}</p>
               <p>{this.props.people.speciesName}</p>
               <p>{this.props.people.population}</p>
            </div>
        )
    }
}