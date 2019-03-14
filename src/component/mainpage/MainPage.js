import React, { Component } from "react"

export default class Intro extends Component{
    constructor(){
        super();
        this.setState = {
            title: "",
            bodytext: ""
        }
    }

    componentDidMount = () => {
         console.log("im working")
    }

    render = () => {
        return(
            <div>
                <h1>im the main page</h1>
            </div>
        )
    }
}