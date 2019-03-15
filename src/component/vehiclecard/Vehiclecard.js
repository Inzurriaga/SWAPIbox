import React, { Component } from "react"

export default class VehicleCard extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                {this.props.vehicle.name}
            </div>
        )
    }
}