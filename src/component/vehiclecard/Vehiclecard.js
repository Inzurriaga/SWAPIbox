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
                <p>{this.props.vehicle.name}</p>
                <p>{this.props.vehicle.model}</p>
                <p>{this.props.vehicle.vehicle_class}</p>
                <p>{this.props.vehicle.passengers}</p>
            </div>
        )
    }
}