import React, { Component } from "react"
import PeopleCard from "../peoplecard/PeopleCard"

export default class PeoplesContainer extends Component {
    constructor(){
        super();
        this.state = {
            peoples: []
        }
    }

    componentDidMount = () => {
        if(this.props.peoplesinfo.length){
            console.log("people")
        }else{
            const url = "https://swapi.co/api/people/"
            fetch(url)
                .then(response => response.json())
                .then(unresolvedHomeworld => this.fetchHomeWorldInfo(unresolvedHomeworld.results))
                .then(unresolvedspecies => this.fetchSpeciesInfo(unresolvedspecies))
                .then(resolvedPeople => this.setState({
                    peoples: resolvedPeople
                }))
        }
    }

    fetchHomeWorldInfo = (peoples) => {
        const homewordUpdate = peoples.map((people) => {
            return fetch(people.homeworld)
                .then(response => response.json())
                .then(worldinfo => ({...people, worldName: worldinfo.name, population: worldinfo.population}))
        })
        return Promise.all(homewordUpdate)
    }

    fetchSpeciesInfo = (peoples) => {
        console.log(peoples)
        const speciesUpdate = peoples.map((people) => {
            return fetch(people.species[0])
                .then(response => response.json())
                .then(speciesinfo => ({...people, speciesName: speciesinfo.name}))
        })
        return Promise.all(speciesUpdate)
    }


    render(){
        return(
            <div className="peoples-container">
                {
                   this.state.peoples.map((people) => {
                       return <PeopleCard people={people}/>
                   })
                }
            </div>
        )
    }
}