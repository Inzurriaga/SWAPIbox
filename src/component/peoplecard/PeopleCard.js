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
               <h3>{this.props.people.name}</h3>
               <p>species: {this.props.people.speciesName}</p>
               <p>world: {this.props.people.worldName}</p>
               <p>population: {this.props.people.population}</p>
            </div>
        )
    }
}