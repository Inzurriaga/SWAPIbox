import React, { Component } from "react"

export default class VehicleCard extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="vehicle-card">
                <h3>Name: {this.props.vehicle.name}</h3>
                <p>Model: {this.props.vehicle.model}</p>
                <p>Class: {this.props.vehicle.vehicle_class}</p>
                <p>Passengers: {this.props.vehicle.passengers}</p>
            </div>
        )
    }
}