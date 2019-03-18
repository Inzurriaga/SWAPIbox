import React, { Component } from "react"
import PeopleCard from "../peoplecard/PeopleCard"
import Loading from "../loading/LoadingScreen"

export default class PeoplesContainer extends Component {
    constructor(){
        super();
        this.state = {
            peoples: [],
            error: ''
        }
    }

    componentDidMount = async () => {
        if(this.props.peoplesinfo.length){
            console.log("people")
        }else{
            try {
                const url = "https://swapi.co/api/people/"
                const response = await fetch(url)
                const unresolvedHomeworld = await response.json()
                const unresolvedspecies = await this.fetchHomeWorldInfo(unresolvedHomeworld.results)
                const resolvedPeople = await this.fetchSpeciesInfo(unresolvedspecies)
                this.setState({
                    peoples: resolvedPeople
                })
            } catch(error){
                this.setState({
                    error: error.message
                })
            }
        }
    }

    fetchHomeWorldInfo = (peoples) => {
        const homewordUpdate = peoples.map( async (people) => {
            const response = await fetch(people.homeworld)
            const worldinfo = await  response.json()
            return {...people, worldName: worldinfo.name, population: worldinfo.population}
        })
        return Promise.all(homewordUpdate)
    }

    fetchSpeciesInfo = (peoples) => {
        const speciesUpdate = peoples.map( async (people) => {
            const response = await fetch(people.species[0])
            const speciesinfo = await  response.json()
            return {...people, speciesName: speciesinfo.name}
        })
        return Promise.all(speciesUpdate)
    }


    render(){
        const cards =  this.state.peoples.map((people) => {
            return <PeopleCard key={people.name} people={people}/>
        })
        return(
            <div className="peoples-container">
                {
                    this.state.peoples.length ?
                        cards:
                        <Loading /> 
                }
            </div>
        )
    }
}