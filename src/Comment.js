import React, { Component } from "react";
import "./Comment.css";

class Comment extends Component {
  handleDelete = evt => {
    
  };
  render() {
    const { text, onDelete } = this.props;
    return (
      <article>
        <p>{text}</p>
        <span
          className="delete"
          role="img"
          aria-label="Delete"
          onClick={() => onDelete(this.props.id)}
        >
          ❌
        </span>
      </article>
    );
  }
}

export default Comment;
