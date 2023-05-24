import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import { useLocation, useSearchParams } from "react-router-dom"


const { kakao } = window;

const NearMap = () => {

    const [lat, setLat] = useState(37.582286794056294)
    const [lon, setLon] = useState(127.00981565163072)
    const [positions, setPositions] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const post = searchParams.get('post'); // postnum 값 변수에 저장

    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    const setLocations = () => {

        setPositions([
            {
                title: '내 위치',
                latlng: new kakao.maps.LatLng(lat, lon)
            }])

        PostingService.getNearLocation(lon, lat, 10).then((res) => {
            
            for(var i = 0; i < res.data.length; i++ ){
                console.log(res.data[i])
                setPositions([...positions, {
                    title: res.data[i].post_title,
                    img: res.data[i].pictureURL,
                    price: res.data[i].price,
                    model: res.data[i].model_name,
                    latlng: new kakao.maps.LatLng(res.data[i].location.latitude, res.data[i].location.langitude)
                }])
            }
        })
    }

    const sendMessage = (num) => {
        window.ReactNativeWebView.postMessage(num)
    }

    const createMaps = () => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(lat, lon),
            level: 3
        };


        var map = new kakao.maps.Map(container, options);


        positions.forEach(function (pos) {
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: pos.latlng, // 마커를 표시할 위치
                title: pos.title
            });
        
            // content HTMLElement 생성
            var content = document.createElement('div');
            content.classList.add('test');
            var info = document.createElement('span');
            info.appendChild(document.createTextNode(pos.title));
            content.appendChild(info);
        
            var closeBtn = document.createElement('button');
            closeBtn.appendChild(document.createTextNode('닫기'));

            var goto = document.createElement('button');
            goto.appendChild(document.createTextNode('이동'));

            // 닫기 이벤트 추가

            closeBtn.onclick = () => {
                overlay.setMap(null);
            };
            

            goto.onclick = () => {
                sendMessage(117);
            };
            content.appendChild(closeBtn);
            content.appendChild(goto);
        
            // customoverlay 생성, 이때 map을 선언하지 않으면 지도위에 올라가지 않습니다.
            var overlay = new kakao.maps.CustomOverlay({
                position: pos.latlng,
                content: content
            });
        
            // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
            kakao.maps.event.addListener(marker, 'click', () => {
                overlay.setMap(map);
            });
        });
    }

    useEffect(() => {
        setScreenSize();
        setLocations();
    },[]);

    useEffect(()=>{
        createMaps();
    })
    return (
        <div className="mappage">

            <div id="map" style={{ width: "500px", height: "500px" }} />

        </div>

    );
}

export default NearMap;