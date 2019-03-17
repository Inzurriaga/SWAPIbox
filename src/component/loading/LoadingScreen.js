import React, { Component } from "react"

export default class LoadingScreen extends Component{
    constructor(){
        super();
        this.state = {
            test: true
        }
    }

    render(){
        return(
            <div>
                <h1>loading screen</h1>
            </div>
        )
    }
}