import React, { Component } from "react";

export default class PlanetCard extends Component{
    render(){
        return(
            <div className="planet-card">
                <h3>{this.props.planet.name}</h3>
                <p>Terrain: {this.props.planet.terrain}</p>
                <p>Population: {this.props.planet.population}</p>
                <p>Climate: {this.props.planet.climate}</p>Residents: 
                {
                    this.props.planet.residents.map((resident) => {
                        return (<p>{resident}</p>)
                    })
                }
            </div>
        )
    }
}