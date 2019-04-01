import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class Buttons extends Component{
    switchContainer = (container) => {
        this.props.switchContainer(container)
    }

    render(){
        return(
            <nav>
                <div>
                    <NavLink to="/peoples" data-text="People" >Peoples</NavLink>
                </div>
                <div>
                    <NavLink to="/planets" data-text="Planets" >Planets</NavLink>
                </div>
                <div>
                    <NavLink to="vehicles" data-text="Vehicles" >Vehicles</NavLink>
                </div>
            </nav>
        )
    }
}