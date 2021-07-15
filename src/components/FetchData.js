import React, { Component } from "react";
import axios from "axios";
export default class FetchData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "alpha",
      error: null,
      userId: "",
      list: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    let url = "https://jsonplaceholder.typicode.com/posts/1";
    let options = {
      method: "GET",
      url: url,
    };

    try {
      const response = await axios(options);
      // console.log("Response",response);
      await this.setState({ userId: response.data.userId });
    } catch (e) {}
  };

  detectUser = () => {
      return true;
  };

  render() {
    return <div>{/* <input type="text" value={this.state.name}/> */}</div>;
  }
}
