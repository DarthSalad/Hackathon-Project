// eslint-disable-next-line
import React, {useRef, useEffect, useState} from 'react'
import { Loader } from "@googlemaps/js-api-loader"
import './map.css'

export default function Map(props) {
    // eslint-disable-next-line
    let map 
    const loader = new Loader({
        apiKey: "AIzaSyDBcbRmqerNyFYhL2zlOafIBD0drFsgyb8",
        version: "weekly"
      });
      
      loader.load().then(() => {
        map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: props.lat, lng: props.lon },
          zoom: 8,
        });
      });

    return (
        <div id="map">
            
        </div>
    )
}
