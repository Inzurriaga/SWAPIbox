import React, { Component } from "react";
import Buttons from "../buttons/Buttons";
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
                <h1>im the main page</h1>
                <Buttons switchContainer={this.switchContainer}/>
                {componentContainer[containerDisplay]}
            </div>
        )
    }
}