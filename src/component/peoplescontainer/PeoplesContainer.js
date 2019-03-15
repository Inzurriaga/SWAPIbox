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
                .then(peoples => this.fetchHomeWorldInfo(peoples.results))
                .then(completePeople => { 
                    console.log(completePeople) 
                    this.setState({
                    peoples: completePeople
                })})
        }
    }

    fetchHomeWorldInfo = (peoples) => {
        const homewordUpdate = peoples.map((people) => {
            return fetch(people.homeworld)
                .then(response => response.json())
                .then(worldinfo => ({... worldinfo, peopleName: people.name}))
        })
        return Promise.all(homewordUpdate)
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