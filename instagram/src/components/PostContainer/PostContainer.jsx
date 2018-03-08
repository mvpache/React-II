import React, { Component } from "react";
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  render() {
    return <div className="PostContainer">
    Post Container Here
    <CommentSection />
    </div>
  }
}

export default PostContainer;