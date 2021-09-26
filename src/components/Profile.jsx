import React, { useState, useEffect } from "react";
import Login from "./Login";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Post from "./post/Post";
import "./home.css";
import Upload from "./Upload/Upload";
import Map from "./Map";
import { Link } from "react-router-dom";
import MyModal from "./post/MyModal";

export default function Home() {
  const [user] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  const [lat, setLat] = useState(51.507351);
  const [lon, setLon] = useState(-0.127758)

  let locations = []


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

  const logout = () => {
    auth.signOut();
  }

  // function mapcluster() {
  //   posts.map(({ id, post }) => (
  //     user.displayName === post.username &&
  //     locations.push({lat: post.latitude,lon: post.longitude})
  //   ))
  //    return locations
  // }
  

  return (
    <>
      <div className="appHeader">
        <img
          className="appHeaderImage"
          src="https://media4.giphy.com/media/QtvEouZBOE8nPn7yFx/giphy.gif?cid=ecf05e4780dmov4oik0gjw83y12aujieratts3hmsgrlj6ik&rid=giphy.gif&ct=s"
          alt="instagram"
        />
        <Link to=""><button>Home</button></Link>
        <button onClick={logout}>logout</button>
      </div>
      {/* <div>HI</div> */}
      {/* {console.log(mapcluster())} */}
      <Map lat={lat} lon={lon} />
      <Upload username={user.displayName} avatar={user.photoURL} />

      {posts.map(({ id, post }) => (
          user.displayName === post.username &&
          <span>
              <Post
              // key={id}
              username={post.username}
              caption={post.caption}
              imageUrl={post.imageUrl}
              avatar={post.avatar}
              latitude={post.latitude}
              longitude={post.longitude}
              />
              <button style={{width:"100px", height: "50px" }} classname="locate" onClick={() => {
                  setLat(post.latitude)
                  setLon(post.longitude)
                  {console.log(post)}
                  window.scrollTo(0, 0)
              }} className="locate">Locate</button>
          </span>
          
      ))}
      
    </>
  );
}
