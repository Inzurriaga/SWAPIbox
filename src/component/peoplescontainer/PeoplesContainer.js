import React, { Component } from "react"

export default class PeoplesContainer extends Component {
    constructor(){
        super();
        this.state = {
            test: true
        }
    }

    render(){
        return(
            <div>
                this is the people
            </div>
        )
    }
}