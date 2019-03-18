import React, { Component } from "react"

export default class Buttons extends Component{
    switchContainer = (container) => {
        this.props.switchContainer(container)
    }

    render(){
        return(
            <nav>
                <div>
                    <button data-text="People" onClick={() => {this.switchContainer("peopleContainer")}}>Peoples</button>
                </div>
                <div>
                    <button data-text="Planets" onClick={() => {this.switchContainer("planetsContainer")}}>Planets</button>
                </div>
                <div>
                    <button data-text="Vehicles" 
                onClick={() => {this.switchContainer("vehiclesContainer")}}>Vehicles</button>
                </div>
            </nav>
        )
    }
}