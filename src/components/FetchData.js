import React, { Component } from 'react'
import axios from 'axios';
export default class FetchData extends Component {
    constructor(props){
        super(props);

        this.state = {
            name:'alpha',
            error:null,
            age:'',
            list:[]
        }
    }

    componentDidMount(){
        this.loadData();
    }

    loadData = async () => {
        let url = 'https://jsonplaceholder.typicode.com/posts'
        let options = {
            method:'GET',
            url:url
        }

        try{
            const response = await axios(options);
            this.setState({age:response.data.personAge});
        }catch(e){
            throw new Error(e.message)
        }
    }


    render() {
        return (
            <div>
                <input type="text" value={this.state.name}/>
            </div>
        )
    }
}
