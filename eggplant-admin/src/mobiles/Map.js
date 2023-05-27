import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import { useLocation, useSearchParams } from "react-router-dom"
import boogie from '../img/boogie.png'

const { kakao } = window;

const Map = () => {

    const [position, setPosition] = useState()
    const [searchParams, setSearchParams] = useSearchParams();
    const [lon, setlon] = useState();
    const [lat, setlat] = useState();
    const post = searchParams.get('num'); // postnum 값 변수에 저장

    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    const setLocations = () => {
        PostingService.getSellerLocation(post).then((res) => {
            console.log(res.data)
            setlon(res.data.longitude)
            setlat(res.data.latitude)
            setPosition(
                {
                    title: '판매자',
                    latlng: new kakao.maps.LatLng(res.data.latitude, res.data.longitude)
                }
            )
        }
        )
    }

    const createMaps = () => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(lat, lon),
            level: 3
        };


        var map = new kakao.maps.Map(container, options);

        var imageSrc = boogie,
            imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
            imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: position.latlng, // 마커를 표시할 위치
            image: markerImage,
        });

        marker.setDraggable(true);

    }

    useEffect(() => {
        setScreenSize();
        setLocations();
    }, []);

    useEffect(() => {
        createMaps();
    });

    return (
        <div className="mappage">

            <div id="map" style={{ width: "400px", height: "680px" }} />

        </div>

    );
}

export default Map;