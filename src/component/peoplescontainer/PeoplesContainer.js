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
        if(this.props.peoplesinfo){
            console.log("people")
        }else{
            const url = "https://swapi.co/api/people/"
            fetch(url)
                .then(response => response.json())
                .then(people => 
                    this.setState({
                    peoples: people.results}))
        }
    }

    render(){
        return(
            <div>
                {
                   this.state.peoples.map((people) => {
                       return <PeopleCard people={people}/>
                   })
                }
            </div>
        )
    }
}