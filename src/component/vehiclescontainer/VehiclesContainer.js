import React, { Component } from "react"

export default class VehiclesContainer extends Component {
    constructor(){
        super();
        this.state = {
            test: true
        }
    }

    componentDidMount = () => {
        if(this.props.vehicleinfo){
            console.log("vehicle")
        }else{
            const url = "https://swapi.co/api/vehicles/"
            fetch(url)
                .then(response => response.json())
                .then(vehicle => 
                    this.setState({
                    vehicles: vehicle.results}))
        }
    }

    render(){
        return(
            <div>
                this is the vehicles
            </div>
        )
    }
}