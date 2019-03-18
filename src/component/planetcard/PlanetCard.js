import React, { Component } from "react";

export default class PlanetCard extends Component{
    render(){
        return(
            <div className="planet-card">
                <h3>{this.props.planet.name}</h3>
                <p>{this.props.planet.terrain}</p>
                <p>{this.props.planet.population}</p>
                <p>{this.props.planet.climate}</p>
                {
                    this.props.planet.residents.map((resident) => {
                        return (<p>{resident}</p>)
                    })
                }
            </div>
        )
    }
}