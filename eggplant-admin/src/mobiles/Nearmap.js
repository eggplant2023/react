import React, { useState, useEffect } from 'react';
import PostingService from '../services/PostingService';
import { useLocation, useSearchParams } from "react-router-dom"
import boogie from '../img/boogie.png'
const { kakao } = window;

const NearMap = () => {

    var map

    const [positions, setPositions] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get('lat')
    const lon = searchParams.get('lon');
    const [level, setLevel] = useState(3);
    const [flag, setFlag] = useState(true);
    const [markers, setMarkers] = useState([]);
    const [overlays, setOverlays] = useState([]);


    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    const initLocations = () => {
        let temp = []
        let data = []
        PostingService.getNearLocation(lon, lat, level*5).then((res) => {
            data = res.data

            for (var i = 0; i < data.length; i++) {
                console.log(data[i])
                console.log("lat: "+lat+"   lon: "+lon)
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
            console.log(temp);
            setPositions(temp);

            createMaps(temp);


        })

    }

    const setLocations = () => {

        let temp = []
        let data = []
        PostingService.getNearLocation(lon, lat, level * 10).then((res) => {
            data = res.data

            for (var i = 0; i < data.length; i++) {
                console.log(data[i])
                console.log("lat: "+lat+"   lon: "+lon)
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
            console.log(temp);
            setPositions(temp);
            loadMarkers(temp);
        })

    }

    const sendMessage = (num) => {
        window.ReactNativeWebView.postMessage(num)
    }


    const loadMarkers = (it) => {
        console.log(it);
        markers.forEach(function(mark){
            mark.setMap(null);
        })
        it.forEach(function (pos) {


            if (pos.title == "내 위치") {
                var imageSrc = boogie,
                    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
                    imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

                // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: pos.latlng, // 마커를 표시할 위치
                    image: markerImage,
                });
            }

            else {
                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: pos.latlng, // 마커를 표시할 위치
                    title: pos.title
                });
            }
            
            setMarkers({...markers, marker})
            
            // content HTMLElement 생성
            if (pos.title != '내 위치') {
                var content = document.createElement('div');
                content.classList.add('ovcontent');

                var titlediv = document.createElement('div');
                var title = document.createElement('span');
                var closeBtn = document.createElement('button');
                closeBtn.appendChild(document.createTextNode('X'));
                title.appendChild(document.createTextNode(pos.title + "       "));
                titlediv.appendChild(title);
                titlediv.appendChild(closeBtn);
                content.appendChild(titlediv);
                titlediv.classList.add('ovtitle');

                var image = document.createElement('img');
                image.setAttribute("src", pos.img);
                image.setAttribute("width", "150px");
                image.setAttribute("height", "150px");
                content.appendChild(image);
                image.classList.add('ovimage');

                var controlldiv = document.createElement('div');



                // var goto = document.createElement('button');
                // goto.appendChild(document.createTextNode('이동'));

                // var buttondiv = document.createElement('div');
                // buttondiv.classList.add('ovbuttondiv');

                closeBtn.onclick = () => {
                    overlay.setMap(null);
                };


                image.onclick = () => {
                    sendMessage(pos.num);
                };

                // controlldiv.appendChild(buttondiv);
                // controlldiv.appendChild(goto);
                // controlldiv.classList.add('ovcontrol');


                // customoverlay 생성, 이때 map을 선언하지 않으면 지도위에 올라가지 않습니다.
                let overlay = new kakao.maps.CustomOverlay({
                    position: pos.latlng,
                    content: content
                });

                // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
                kakao.maps.event.addListener(marker, 'click', () => {
                    overlay.setMap(map);
                });
            }

        });
    }

    const createMaps = (temp) => {

        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(lat, lon),
            level: 3
        };


        map = new kakao.maps.Map(container, options);


        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


        kakao.maps.event.addListener(map, 'zoom_changed', function () {

            // 지도의 현재 레벨을 얻어옵니다
            console.log("now level is "+map.getLevel())
            setLevel(map.getLevel());
        });

        temp.forEach(function (pos) {


            if (pos.title == "내 위치") {
                var imageSrc = boogie,
                    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
                    imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

                // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: pos.latlng, // 마커를 표시할 위치
                    image: markerImage,
                });
            }

            else {
                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: pos.latlng, // 마커를 표시할 위치
                    title: pos.title
                });
            }
            
            setMarkers({...markers, marker})
            
            // content HTMLElement 생성
            if (pos.title != '내 위치') {
                var content = document.createElement('div');
                content.classList.add('ovcontent');

                var titlediv = document.createElement('div');
                var title = document.createElement('span');
                var closeBtn = document.createElement('button');
                closeBtn.appendChild(document.createTextNode('X'));
                title.appendChild(document.createTextNode(pos.title + "       "));
                titlediv.appendChild(title);
                titlediv.appendChild(closeBtn);
                content.appendChild(titlediv);
                titlediv.classList.add('ovtitle');

                var image = document.createElement('img');
                image.setAttribute("src", pos.img);
                image.setAttribute("width", "150px");
                image.setAttribute("height", "150px");
                content.appendChild(image);
                image.classList.add('ovimage');

                var controlldiv = document.createElement('div');



                // var goto = document.createElement('button');
                // goto.appendChild(document.createTextNode('이동'));

                // var buttondiv = document.createElement('div');
                // buttondiv.classList.add('ovbuttondiv');

                closeBtn.onclick = () => {
                    overlay.setMap(null);
                };


                image.onclick = () => {
                    sendMessage(pos.num);
                };

                // controlldiv.appendChild(buttondiv);
                // controlldiv.appendChild(goto);
                // controlldiv.classList.add('ovcontrol');


                // customoverlay 생성, 이때 map을 선언하지 않으면 지도위에 올라가지 않습니다.
                let overlay = new kakao.maps.CustomOverlay({
                    position: pos.latlng,
                    content: content
                });

                // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
                kakao.maps.event.addListener(marker, 'click', () => {
                    overlay.setMap(map);
                });
            }

        });
    }

    useEffect(() => {
        setScreenSize();
    }, []);


    useEffect(()=>{
        console.log(flag)
        if(flag){
            setFlag(false);
            initLocations();
        }
        else{
            setLocations();
        }

    }, [level]);

    return (
        <div className="mappage">

            <div id="map" style={{ width: "400px", height: "680px" }} />

        </div>

    );
}

export default NearMap;