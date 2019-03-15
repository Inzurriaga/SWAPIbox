import React, { Component } from "react"

export default class Buttons extends Component{
    constructor(){
        super();
        this.state = {
            test: true
        }
    }

    switchContainer = (container) => {
        this.props.switchContainer(container)
    }

    render(){
        return(
            <div>
                <button onClick={() => {this.switchContainer("peopleContainer")}}>peoples</button>
                <button onClick={() => {this.switchContainer("planetsContainer")}}>planets</button>
                <button onClick={() => {this.switchContainer("vehiclesContainer")}}>vehicles</button>
            </div>
        )
    }
}