import React from "react";
import "./Comment.css"; 

const Comment = ({ username, text, timeAgo }) => {
  return (
    <div className="comment">
      <div className="comment-header">
        <strong>{username}</strong> <span className="time">{timeAgo} ago</span>
      </div>
      <p className="comment-text">{text}</p>
      <div className="comment-actions">
        <button className="action-btn">💬 Reply</button>
        <button className="action-btn">👍 Like</button>
        <button className="action-btn">👎 Dislike</button>
      </div>
    </div>
  );
};

export default Comment;
