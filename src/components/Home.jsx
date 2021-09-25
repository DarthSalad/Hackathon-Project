import React, { useState, useEffect } from "react";
import Login from "./Login";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Post from "./post/Post";
import "./home.css";
import Upload from "./Upload/Upload";
import Map from "./Map";

export default function Home() {
  const [user] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  const [lat, setLat] = useState(51.507351);
  const [lon, setLon] = useState(-0.127758)

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    //   console.log(posts);
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
        {/* <div>HI</div> */}
        <Map lat={lat} lon={lon} />
        <Upload username={user.displayName} avatar={user.photoURL} />
        {posts.map(({ id, post }) => (
            <span>
                <Post
                // key={id}
                username={post.username}
                caption={post.caption}
                imageUrl={post.imageUrl}
                avatar={post.avatar}
                />
                <button classname="locate" onClick={() => {
                    setLat(25.594095)
                    setLon(85.137566)
                }} className="locate">Locate</button>
            </span>
        
        ))}
      </>
    );
  }

  return user ? home() : <Login />;
}
