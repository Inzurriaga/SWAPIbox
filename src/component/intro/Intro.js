import React, { Component } from "react"

export default class Intro extends Component{
    constructor(){
        super();
        this.state = {
            title: "",
            bodytext: ""
        }
    }

    componentDidMount = () => {
        const randomNum = Math.ceil(Math.random() * 7)
        const url = `https://swapi.co/api/films/${randomNum}`
        fetch(url)
            .then(response => response.json())
            .then(films => this.setState({
                title: films.title,
                bodytext: films.opening_crawl
            }))
        setTimeout(this.props.exitIntro, 60000)
    }

    render = () => {
        const { title, bodytext } = this.state
        return(
            <section className="intro-section">
                <button onClick={this.props.exitIntro}>x</button>
                <div className="fade"></div>
                <div className="crawl-text">
                    <div className="crawl">
                        <h1>{title}</h1>
                        <p>{bodytext}</p>
                    </div>
                </div>
            </section>
        )
    }
}