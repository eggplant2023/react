import React, { useState, useEffect } from 'react';
import axios from 'axios';

const { kakao } = window;

const Map = () => {

    const [lat,setLat] = useState(37.582286794056294)
    const [lon,setLon] = useState(127.00981565163072)

    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    useEffect(() => {
        setScreenSize();
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(lat,lon),
            level: 3
        };
        var map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(lat,lon); 
        var marker = new kakao.maps.Marker({
          position: markerPosition
      });
      marker.setMap(map);
    });

    return (
        <div className="mappage">

            <div id="map" style={{ width: "500px", height: "400px" }}/>

        </div>

    );
}

export default Map