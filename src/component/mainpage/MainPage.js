import React, { Component } from "react";
import Buttons from "../buttons/Buttons";
import { ReactComponent as Star } from "../../image/star.svg"
import { ReactComponent as Wars } from "../../image/wars.svg"
import PeoplesContainer from "../peoplescontainer/PeoplesContainer"
import PlanetsContainer from "../planetscontainer/PlanetsContainer"
import VehicleContainer from "../vehiclescontainer/VehiclesContainer"

export default class Intro extends Component{
    constructor(){
        super();
        this.state = {
            containerDisplay: "",
            peoplesinfo: [],
            planetsinfo: [],
            vehicleinfo: []
        }
    }

    componentDidMount = () => {
         console.log("im working")
    }

    switchContainer = (container) => {
        this.setState({
            containerDisplay: container
        })
    }

    saveContainerInfo = (containerName, containerInfo) => {
        this.setState({
            [containerName]: containerInfo
        })
    }

    render = () => {
        const {containerDisplay, peoplesinfo, planetsinfo, vehicleinfo } = this.state
        const componentContainer = {
            peopleContainer: (<PeoplesContainer saveContainerInfo={this.saveContainerInfo} 
                                                peoplesinfo={peoplesinfo}/>),
            planetsContainer: (<PlanetsContainer saveContainerInfo={this.saveContainerInfo} 
                                                planetsinfo={planetsinfo}/>),
            vehiclesContainer: (<VehicleContainer saveContainerInfo={this.saveContainerInfo} 
                                                vehicleinfo={vehicleinfo}/>)
        }
        return(
            <div>
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
                {componentContainer[containerDisplay]}
            </div>
        )
    }
}