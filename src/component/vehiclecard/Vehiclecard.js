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
                <h3>{this.props.vehicle.name}</h3>
                <p>{this.props.vehicle.model}</p>
                <p>{this.props.vehicle.vehicle_class}</p>
                <p>{this.props.vehicle.passengers}</p>
            </div>
        )
    }
}