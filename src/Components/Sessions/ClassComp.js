import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor() {
        super();
        console.log("Constructor")
        this.state = {
            counter: 0
        }
    }
    componentDidUpdate(){
        console.log("didUpdate")
    }
    shouldComponentUpdate(){
        console.log("shouldUpdate")
        return true
    }
    render() {
        console.log("render")
        return (
            <div>
                <h1>Counter:{this.state.counter}</h1>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Add</button>
                <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>minus</button>
            </div>
        )
    }
    componentDidMount() {
        console.log("didMount")
    }

}
