import React, { Component } from "react"
import PeopleCard from "../peoplecard/PeopleCard"

export default class PeoplesContainer extends Component {
    constructor(){
        super();
        this.state = {
            peoples: []
        }
    }

    componentDidMount = async () => {
        if(this.props.peoplesinfo.length){
            console.log("people")
        }else{
            const url = "https://swapi.co/api/people/"
            const response = await fetch(url)
            const unresolvedHomeworld = await response.json()
            const unresolvedspecies = await this.fetchHomeWorldInfo(unresolvedHomeworld.results)
            const resolvedPeople = await this.fetchSpeciesInfo(unresolvedspecies)
            this.setState({
                    peoples: resolvedPeople
                })
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
        return(
            <div className="peoples-container">
                {
                   this.state.peoples.map((people) => {
                       return <PeopleCard key={people.name} people={people}/>
                   })
                }
            </div>
        )
    }
}