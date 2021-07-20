import React, { Component } from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
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
    let url = "https://jsonplaceholder.typicode.com/posts";
    let options = {
      method: "GET",
      url: url,
    };

    try {
      const response = await axios(options);
      // console.log("Response",response);
      await this.setState({ list: response.data,userId:2 });
    } catch (e) {}
  };

  detectUser = () => {
      return true;
  };

  render() {
    const {list} = this.state;
    return (
      <ListGroup>
        {
          list.length ? (
            list.map(post => <ListGroup.Item action  key={post.id}>{post.title}</ListGroup.Item>)
          ):<div>Data Not Found</div>
        }
      </ListGroup>
    )
     
  }
}
