import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ key, username, caption, imageUrl, avatar,latitude,longitude }) {
  return (
    <div className="post">
      <div className="postHeader">
        <Avatar className="postAvatar" alt="saswat" src={avatar} />
        <h3>{username}</h3>
      </div>
      {/* header */}
      <img className="postImage" src={imageUrl} alt="image1" />
      {/* image */}
      <h4 className="postText">
        <strong>{username}: </strong> {caption}
      </h4>
      {/* username+caption */}
    </div>
  );
}

export default Post;
