import React, {useState} from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import MyModal from "./MyModal";
import {Button} from "react-bootstrap";

function Post({ key, username, caption, imageUrl, avatar,latitude,longitude }) {
  const [modalShow, setModalShow] = useState(false)

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
      <Button id="locate" variant="primary" onClick={() => setModalShow(true)}>
        Locate
      </Button>
      <MyModal
        show={modalShow}
        lat={latitude}
        lon={longitude}
        onHide={() => setModalShow(false)}
      />
      {/* username+caption */}
    </div>
  );
}

export default Post;
