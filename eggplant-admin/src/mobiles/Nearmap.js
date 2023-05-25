import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import { useLocation, useSearchParams } from "react-router-dom"


const { kakao } = window;

const NearMap = () => {

    var map

    const [lat, setLat] = useState(37.582286794056294)
    const [lon, setLon] = useState(127.00981565163072)
    const [positions, setPositions] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const post = searchParams.get('post'); // postnum 값 변수에 저장
    const [level, setLevel] = useState(1);
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    const setLocations = () => {
        let temp = []
        let data = []
        PostingService.getNearLocation(lon, lat, level*10).then((res) => {
            data = res.data

            for (var i = 0; i < data.length; i++) {
                console.log(data[i])
                temp[i] = {
                    num: data[i].post_num,
                    title: data[i].post_title,
                    img: data[i].pictureURL,
                    price: data[i].price,
                    model: data[i].model_name,
                    latlng: new kakao.maps.LatLng(data[i].location.latitude.toFixed(6), data[i].location.longitude.toFixed(6))
                }
            }

            temp[temp.length] = {
                num: "",
                title: '내 위치',
                latlng: new kakao.maps.LatLng(lat, lon),
                img: "",
                price: "",
                model: "",
            }
            createMaps(temp);
        })

    }

    const sendMessage = (num) => {
        window.ReactNativeWebView.postMessage(num)
    }


    const createMaps = (temp) => {

        console.log(positions)
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(lat, lon),
            level: 3
        };


        map = new kakao.maps.Map(container, options);


        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


        kakao.maps.event.addListener(map, 'zoom_changed', function() {        

            // 지도의 현재 레벨을 얻어옵니다
            setLevel(map.getLevel());
        });

        temp.forEach(function (pos) {
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: pos.latlng, // 마커를 표시할 위치
                title: pos.title
            });

            // content HTMLElement 생성
            var content = document.createElement('div');
            content.classList.add('test');

            var titlediv = document.createElement('div');
            var title = document.createElement('span');
            title.appendChild(document.createTextNode(pos.title));
            titlediv.appendChild(title);
            content.appendChild(titlediv);

            var image = document.createElement('img');
            image.setAttribute("src",pos.img);
            image.setAttribute("width","50px");
            image.setAttribute("height","50px");
            content.appendChild(image);

            var infodiv = document.createElement('div');
            infodiv.appendChild(document.createTextNode("모델명: "+pos.model))
            infodiv.appendChild(document.createTextNode("가격: "+pos.price));
            content.appendChild(infodiv)


            var controlldiv = document.createElement('div');

            var closeBtn = document.createElement('button');
            closeBtn.appendChild(document.createTextNode('닫기'));

            var goto = document.createElement('button');
            goto.appendChild(document.createTextNode('이동'));

            closeBtn.onclick = () => {
                overlay.setMap(null);
            };


            goto.onclick = () => {
                sendMessage(pos.num);
            };
            controlldiv.appendChild(closeBtn);
            controlldiv.appendChild(goto);
            content.appendChild(controlldiv);

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
    }, []);

    return (
        <div className="mappage">

            <div id="map" style={{ width: "500px", height: "500px" }} />
            <div style={{ width: "500px", height: "100px" }}>

            </div>
        </div>

    );
}

export default NearMap;