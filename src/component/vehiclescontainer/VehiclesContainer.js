import React, { Component } from "react"

export default class VehiclesContainer extends Component {
    constructor(){
        super();
        this.state = {
            test: true
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