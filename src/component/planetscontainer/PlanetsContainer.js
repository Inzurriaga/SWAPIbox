import React, { Component } from "react"
import PlanetCard from "../planetcard/PlanetCard"

export default class PlanetsContainer extends Component {
    constructor(){
        super();
        this.state = {
            planets: []
        }
    }

    componentDidMount = () => {
        if(this.props.planetsinfo.length){
            console.log("planet")
        }else{
            const url = "https://swapi.co/api/planets/"
            fetch(url)
                .then(response => response.json())
                .then(planet => 
                    this.setState({
                    planets: planet.results}))
        }
    }

    render(){
        return(
            <div>
                {
                    this.state.planets.map((planet) => {
                        return <PlanetCard planet={planet}/>
                    })
                }
            </div>
        )
    }
}