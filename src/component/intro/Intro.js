import React, { Component } from "react"

export default class Intro extends Component{
    constructor(){
        super();
        this.State = {
            title: "",
            bodytext: ""
        }
    }

    componentDidMount = () => {
        const randomNum = Math.floor(Math.random() * 8)
        console.log(randomNum)
        const url = `https://swapi.co/api/films/${randomNum}`
        fetch(url).
            then(response => response.json()).
            then(films => this.setState({
                title: films.title,
                bodytext: films.opening_crawl
            }))
    }

    render = () => {
        return(
            <div>
                <h1>hello world</h1>
            </div>
        )
    }
}