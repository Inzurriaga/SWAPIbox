import React, { Component } from "react";
import Buttons from "../buttons/Buttons";
import { ReactComponent as Star } from "../../image/star.svg"
import { ReactComponent as Wars } from "../../image/wars.svg"
import ContainerDecoration from "../../image/containerdec.png"
import PeoplesContainer from "../peoplescontainer/PeoplesContainer"
import PlanetsContainer from "../planetscontainer/PlanetsContainer"
import VehicleContainer from "../vehiclescontainer/VehiclesContainer"
import { Route } from "react-router-dom"

export default class MainPage extends Component{
    render = () => {
        return(
            <section className="main-section">
                <header>
                    <Star className="star-title"/>
                    <h2>
                        <span>S</span>
                        <span>w</span>
                        <span>a</span>
                        <span>p</span>
                        <span>i</span>
                        <span>-</span>
                        <span>B</span>
                        <span>o</span>
                        <span>x</span>
                    </h2>
                    <Wars className="wars-title"/>
                </header>
                <Buttons switchContainer={this.switchContainer}/>
                <img className="top-container-dec" src={ContainerDecoration} alt="top-container"/>
                <Route path="/peoples" component={ PeoplesContainer } />
                <Route path="/planets" component={ PlanetsContainer } />
                <Route path="/vehicles" component={ VehicleContainer } />
                <img className="bottom-container-dec"src={ContainerDecoration} alt="bottom-container"/>
            </section>
        )
    }
}