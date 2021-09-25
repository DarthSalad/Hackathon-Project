import React, { useState, useEffect } from "react";
import Login from "./Login";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Post from "./post/Post";
import "./home.css";
import Upload from "./Upload/Upload";

export default function Home() {
  const [user] = useAuthState(auth);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  function home() {
    const logout = () => {
      auth.signOut();
    };
    return (
      <>
        <div className="appHeader">
          <img
            className="appHeaderImage"
            src="https://media4.giphy.com/media/QtvEouZBOE8nPn7yFx/giphy.gif?cid=ecf05e4780dmov4oik0gjw83y12aujieratts3hmsgrlj6ik&rid=giphy.gif&ct=s"
            alt="instagram"
          />
          <button onClick={logout}>logout</button>
        </div>
        {posts.map(({ id, post }) => (
          <Post
            key={id}
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
            avatar={post.avatar}
          />
        ))}
        <Upload username={user.displayName} avatar={user.photoURL} />
      </>
    );
  }

  return user ? home() : <Login />;
}
