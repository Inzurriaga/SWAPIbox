import React, { Component } from "react";

export default class PlanetCard extends Component{
    render(){
        return(
            <div>
                {this.props.planet.name}
            </div>
        )
    }
}