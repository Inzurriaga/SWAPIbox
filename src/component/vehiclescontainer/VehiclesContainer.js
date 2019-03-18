import React, { Component } from "react"
import VehicleCard from "../vehiclecard/Vehiclecard"
import Loading from "../loading/LoadingScreen"

export default class VehiclesContainer extends Component {
    constructor(){
        super();
        this.state = {
            vehicles: [],
            error: ""
        }
    }

    componentDidMount = async () => {
        if(this.props.vehicleinfo.length){
            console.log("vehicle")
        }else{
            const url = "https://swapi.co/api/vehicles/"
            try {
                const response = await fetch(url)
                const vehicle = await response.json()
                this.setState({
                    vehicles: vehicle.results})
            } catch(error) {
                this.setState({
                    error: error.message
                })
            }
        }
    }

    render(){
        const cards = this.state.vehicles.map((vehicle) => {
            return  <VehicleCard vehicle={vehicle}/>
         })
        return(
            <div className="vehicles-container">
                {
                    this.state.vehicles.length ?
                        cards:
                        <Loading /> 
                }
            </div>
        )
    }
}