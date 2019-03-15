import React, { Component } from "react"
import VehicleCard from "../vehiclecard/Vehiclecard"

export default class VehiclesContainer extends Component {
    constructor(){
        super();
        this.state = {
            vehicles: []
        }
    }

    componentDidMount = () => {
        if(this.props.vehicleinfo.length){
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
                {
                    this.state.vehicles.map((vehicle) => {
                       return  <VehicleCard vehicle={vehicle}/>
                    })
                }
            </div>
        )
    }
}