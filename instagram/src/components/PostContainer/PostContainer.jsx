import React, { Component } from "react";
import './PostContainer.css';

class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  render() {
    return <div>Post Container Here</div>
  }
}

export default PostContainer;