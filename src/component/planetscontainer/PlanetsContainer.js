import React, { Component } from "react"

export default class PlanetsContainer extends Component {
    constructor(){
        super();
        this.state = {
            test: true
        }
    }

    componentDidMount = () => {
        if(this.props.planetsinfo){
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
                this is the planet
            </div>
        )
    }
}