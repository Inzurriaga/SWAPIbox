import React, { Component } from "react"
import Outer from  "../../image/outer.png"
import Inner from  "../../image/inner.png"
import Middle from  "../../image/middle.png"

export default class LoadingScreen extends Component{
    constructor(){
        super();
        this.state = {
            test: true
        }
    }

    render(){
        return(
            <div className="loading-section">
                <div className="loading">
                    <img src={Outer} className="outer-circle" alt="outer-circle"/>
                    <img src={Inner} className="inner-circle" alt="inner-circle"/>
                    <img src={Middle} className="middle-circle" alt="middle-circle"/>
                </div>
            </div>
        )
    }
}