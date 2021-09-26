// eslint-disable-next-line
import React, {useRef, useEffect, useState} from 'react'
import { Loader } from "@googlemaps/js-api-loader"
import dotenv from 'dotenv'

export default function Map(props) {
    // eslint-disable-next-line
    let map
    dotenv.config()
    const loader = new Loader({
        apiKey: process.env.MAPS_API_KEY,
        version: "weekly"
      });
      
      loader.load().then(() => {
        map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: props.lat, lng: props.lon },
          zoom: 8,
        });
        map = new window.google.maps.Marker({
          position: { lat: props.lat, lng: props.lon },
          map: map,
        });
      });

    return (
        <div id="map">
            
        </div>
    )
}
