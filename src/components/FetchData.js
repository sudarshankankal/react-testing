import React, { Component } from 'react'

export default class FetchData extends Component {
    constructor(props){
        super(props);

        this.state = {
            name:'alpha'
        }
    }

    handleInputChange = (e) => {
        this.setState({name:e.target.value});
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name}/>
            </div>
        )
    }
}
