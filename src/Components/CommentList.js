import React from "react";
import Comment from "./Comment";

const comments = [
  { username: "Miguel", text: "Good game!", timeAgo: "17h" },
  { username: "Alice", text: "Awesome gameplay!", timeAgo: "1h" },
];

const CommentList = () => {
  return (
    <div className="comment-container">
      {comments.map((c, index) => (
        <Comment key={index} username={c.username} text={c.text} timeAgo={c.timeAgo} />
      ))}
    </div>
  );
};

export default CommentList;
