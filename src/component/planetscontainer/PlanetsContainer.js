import React, { Component } from "react"
import PlanetCard from "../planetcard/PlanetCard"

export default class PlanetsContainer extends Component {
    constructor(){
        super();
        this.state = {
            planets: []
        }
    }

    componentDidMount = async () => {
        if(this.props.planetsinfo.length){
            console.log("planet")
        }else{
            const url = "https://swapi.co/api/planets/"
            const response = await fetch(url)
            const unresolvedResident = await response.json()
            const planets = await  this.fetchResidentInfo(unresolvedResident.results) 
           this.setState({ planets })
        }
    }

    fetchResidentInfo = (unresolvedResident) => {
        const residentUpdate = unresolvedResident.map( async (planet) => {
           let name = await this.fetchResidentName(planet)
           return {...planet, residents: name}
        })
        return Promise.all(residentUpdate)
    }

    fetchResidentName = (planet) => {
        const residentNameUpdate = planet.residents.map( async (resident) => {
            const response = await fetch(resident)
            const residentinfo = await response.json()
            return residentinfo.name
        })
       return Promise.all(residentNameUpdate)
    }

    render(){
        return(
            <div className="planets-container">
                {
                    this.state.planets.map((planet) => {
                        return <PlanetCard key={planet.name} planet={planet}/>
                    })
                }
            </div>
        )
    }
}