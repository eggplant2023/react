import React, { useState, useEffect } from 'react';
import location from '../services/PostingService';
import PostingService from '../services/PostingService';
import { useLocation, useSearchParams } from "react-router-dom"


const { kakao } = window;

const Map = () => {

    const [lat,setLat] = useState(37.582286794056294)
    const [lon,setLon] = useState(127.00981565163072)
    const [positions,setPositions] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const post = searchParams.get('post'); // postnum 값 변수에 저장

    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    const setLocations = () => {
        PostingService.getSellerLocation(post).then((res) => {
            console.log(res.data)
            setPositions([
                {
                    title: '내 위치', 
                    latlng: new kakao.maps.LatLng(lat, lon)
                },{
                    title: '내 위치', 
                    latlng: new kakao.maps.LatLng(res.data.latitude, res.data.longitude)
                }
            ])
        }
        )
    }

    const createMaps = () => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(lat,lon),
            level: 3
        };

        var positions = []
        console.log()


        var map = new kakao.maps.Map(container, options);

        for (var i = 0; i < positions.length; i ++) {
    
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
            });
        }

        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
           
      });
        marker.setMap(map);
    }

    useEffect(() => {
        setScreenSize();
        setLocations();
        createMaps();
    });

    return (
        <div className="mappage">

            <div id="map" style={{ width: "500px", height: "1000px" }}/>

        </div>

    );
}

export default Map;